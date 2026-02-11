const FormData = require('form-data');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { audio_base64, patient_id, patient_name } = req.body;

    // ═══════════════════════════════════════════
    // STEP 1: SAARIKA v2.5 — Auto-detect language
    // ═══════════════════════════════════════════

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
    const doctorText = sttData.transcript;
    const detectedLang = sttData.language_code;

    if (!doctorText || doctorText.trim() === '') {
      return res.status(400).json({ error: 'Could not hear clearly.' });
    }

    // ═══════════════════════════════════════════
    // STEP 2: SARVAM-M — Structure medical notes
    // ═══════════════════════════════════════════

    const systemPrompt = `You are Meddo, an AI medical scribe for Indian doctors.

A doctor just dictated notes about a patient visit. Extract and structure the medical information.

RULES:
1. Extract ALL medical information from the dictation.
2. Structure into clear categories.
3. If information for a field is not mentioned, set it to null.
4. Keep medical terms in English even if dictated in another language.
5. Translate the summary to English for records, but keep original transcript.
6. Detect urgency level: routine, follow-up, urgent.
7. Be precise with dosages, frequencies, durations.

RESPONSE FORMAT — valid JSON only:
{
  "structured_notes": {
    "symptoms": ["symptom 1", "symptom 2"],
    "duration": "how long symptoms present",
    "examination": ["finding 1", "finding 2"],
    "vitals": {
      "bp": "if mentioned",
      "temperature": "if mentioned",
      "pulse": "if mentioned",
      "spo2": "if mentioned"
    },
    "diagnosis": "primary diagnosis",
    "differential": ["other possible diagnoses"],
    "prescription": [
      {
        "medicine": "name",
        "dosage": "amount",
        "frequency": "how often",
        "duration": "how long"
      }
    ],
    "tests_ordered": ["test 1", "test 2"],
    "tests_results": ["result 1"],
    "follow_up": "when to come back",
    "notes": "any additional observations",
    "urgency": "routine/follow-up/urgent"
  },
  "summary_en": "Brief English summary of the visit in 2-3 sentences",
  "summary_local": "Brief summary in the doctor's language for confirmation"
}`;

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Doctor's dictation [Language: ${detectedLang}]:\n\n${doctorText}` }
    ];

    const llmResponse = await fetch('https://api.sarvam.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SARVAM_API_KEY}`
      },
      body: JSON.stringify({
        model: 'sarvam-m',
        messages,
        temperature: 0.2,
        max_tokens: 1000
      })
    });

    const llmData = await llmResponse.json();
    const assistantMessage = llmData.choices[0].message.content;

    let structuredNotes;
    try {
      const cleaned = assistantMessage.replace(/```json|```/g, '').trim();
      structuredNotes = JSON.parse(cleaned);
    } catch (e) {
      structuredNotes = { raw: assistantMessage, parse_error: true };
    }

    // ═══════════════════════════════════════════
    // STEP 3: BULBUL V3 — Confirm back to doctor
    // ═══════════════════════════════════════════

    const confirmText = structuredNotes.summary_local || structuredNotes.summary_en || 'Notes recorded.';
    const ttsLang = detectedLang || 'hi-IN';

    const ttsResponse = await fetch('https://api.sarvam.ai/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-subscription-key': process.env.SARVAM_API_KEY
      },
      body: JSON.stringify({
        inputs: [confirmText],
        model: 'bulbul:v3',
        language_code: ttsLang,
        pace: 0.9
      })
    });

    const ttsData = await ttsResponse.json();
    const confirmationAudio = (ttsData.audios && ttsData.audios[0]) || ttsData.audio;

    // ═══════════════════════════════════════════
    // RETURN
    // ═══════════════════════════════════════════

    return res.status(200).json({
      transcript: doctorText,
      detected_language: detectedLang,
      structured_notes: structuredNotes.structured_notes || structuredNotes,
      summary_en: structuredNotes.summary_en,
      summary_local: structuredNotes.summary_local,
      confirmation_audio: confirmationAudio,
      patient_id: patient_id,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Dictation error:', error);
    return res.status(500).json({ error: 'Error processing dictation.' });
  }
};
