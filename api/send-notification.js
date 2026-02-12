const FormData = require('form-data');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { patient_id, message, audio_base64, language } = req.body;

    // ═══════════════════════════════════════════
    // If audio provided without message, transcribe only (for dictation)
    // ═══════════════════════════════════════════

    if (audio_base64 && !message) {
      const audioBuffer = Buffer.from(audio_base64, 'base64');
      const formData = new FormData();
      formData.append('file', audioBuffer, {
        filename: 'recording.webm',
        contentType: 'audio/webm'
      });
      formData.append('language_code', 'unknown');
      formData.append('model', 'saarika:v2.5');

      const sttResponse = await fetch('https://api.sarvam.ai/speech-to-text', {
        method: 'POST',
        headers: {
          'api-subscription-key': process.env.SARVAM_API_KEY,
          ...formData.getHeaders()
        },
        body: formData
      });

      const sttData = await sttResponse.json();
      return res.status(200).json({ transcript: sttData.transcript || null });
    }

    // ═══════════════════════════════════════════
    // STEP 1: SARVAM-M — Translate message to patient's language
    // ═══════════════════════════════════════════

    const langNames = {
      'hi-IN': 'Hindi', 'kn-IN': 'Kannada', 'ta-IN': 'Tamil',
      'te-IN': 'Telugu', 'ml-IN': 'Malayalam', 'bn-IN': 'Bengali',
      'mr-IN': 'Marathi', 'gu-IN': 'Gujarati', 'en-IN': 'English'
    };
    const targetLang = langNames[language] || 'Hindi';

    const systemPrompt = `You are Meddo, translating a doctor's follow-up message for a patient.

RULES:
1. Translate the message to ${targetLang}.
2. Keep it warm, professional, and concise.
3. If the message is already in ${targetLang}, just clean it up.
4. Preserve any medical terms, medication names, or test names in English.

Return valid JSON only:
{"translated_message": "the translated message"}`;

    const llmResponse = await fetch('https://api.sarvam.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SARVAM_API_KEY}`
      },
      body: JSON.stringify({
        model: 'sarvam-m',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.3,
        max_tokens: 300
      })
    });

    const llmData = await llmResponse.json();
    const content = llmData.choices[0].message.content;

    let translatedMessage = message;
    try {
      const cleaned = content.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      translatedMessage = parsed.translated_message || message;
    } catch (e) {
      translatedMessage = content;
    }

    // ═══════════════════════════════════════════
    // STEP 2: BULBUL V3 — Generate voice message
    // ═══════════════════════════════════════════

    const ttsResponse = await fetch('https://api.sarvam.ai/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-subscription-key': process.env.SARVAM_API_KEY
      },
      body: JSON.stringify({
        inputs: [translatedMessage],
        model: 'bulbul:v3',
        language_code: language || 'hi-IN',
        pace: 0.9
      })
    });

    const ttsData = await ttsResponse.json();
    const audio = (ttsData.audios && ttsData.audios[0]) || ttsData.audio;

    // ═══════════════════════════════════════════
    // RETURN
    // ═══════════════════════════════════════════

    return res.status(200).json({
      translated_message: translatedMessage,
      audio,
      patient_id,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Notification error:', error);
    return res.status(500).json({ error: 'Error sending notification.' });
  }
};
