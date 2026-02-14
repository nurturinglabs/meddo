const FormData = require('form-data');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { audio_base64, conversation_history, detected_language } = req.body;

    // ═══════════════════════════════════════════
    // STEP 1: SAARIKA v2.5 — Transcribe patient audio
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
    const transcript = sttData.transcript;
    const detectedLang = sttData.language_code || detected_language || 'hi-IN';

    if (!transcript || transcript.trim() === '') {
      return res.status(400).json({ error: 'Could not hear clearly. Please try again.' });
    }

    // ═══════════════════════════════════════════
    // STEP 2: SARVAM-M — Conversational booking agent
    // ═══════════════════════════════════════════

    const todayStr = new Date().toISOString().split('T')[0];
    const todayDisplay = new Date().toLocaleDateString('en-IN', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });

    const systemPrompt = `You are a friendly, warm receptionist at Dr. Suresh's clinic (General Physician).
Your job is to help patients book appointments through natural conversation.

CLINIC DETAILS:
- Doctor: Dr. Suresh, General Physician
- Available: All days, Morning OPD 9 AM to 2 PM, Evening OPD 6 PM to 9 PM (closed 2 PM to 6 PM)
- Slot duration: 30 minutes
- Location: Bangalore
- Today's date: ${todayStr} (${todayDisplay})

INFORMATION TO COLLECT (one at a time):
1. Patient name
2. Reason for visit / symptoms
3. Preferred date
4. Preferred time slot (Morning: 9 AM - 2 PM, Evening: 6 PM - 9 PM)

RULES:
- Respond in the SAME language the patient is speaking (detected: ${detectedLang})
- Be warm, professional, and concise (1-2 sentences per response)
- Ask only ONE question at a time — do not overwhelm the patient
- If a detail is missing, ask for it naturally
- When ALL 4 details are collected, summarize and confirm the booking
- Convert relative dates: "tomorrow" = day after ${todayStr}, "next Monday" = calculate actual date
- If the patient says something unrelated, gently redirect to booking

RESPONSE FORMAT — valid JSON only:
{
  "agent_response": "Your response in the patient's language",
  "appointment_details": {
    "patient_name": "extracted name or null",
    "reason": "extracted reason or null",
    "preferred_date": "human readable date or null",
    "date": "YYYY-MM-DD format or null",
    "preferred_time": "human readable time or null",
    "time": "HH:MM format or null"
  },
  "conversation_state": "collecting or confirming or booked",
  "missing_fields": ["list of still-missing fields"]
}`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...(conversation_history || []),
      { role: 'user', content: transcript }
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
        temperature: 0.4,
        max_tokens: 600
      })
    });

    const llmData = await llmResponse.json();
    const content = llmData.choices[0].message.content;

    let result;
    try {
      const cleaned = content.replace(/```json|```/g, '').trim();
      result = JSON.parse(cleaned);
    } catch (e) {
      result = {
        agent_response: content,
        appointment_details: {},
        conversation_state: 'collecting'
      };
    }

    // ═══════════════════════════════════════════
    // STEP 3: BULBUL V3 — Speak agent response
    // ═══════════════════════════════════════════

    const ttsResponse = await fetch('https://api.sarvam.ai/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-subscription-key': process.env.SARVAM_API_KEY
      },
      body: JSON.stringify({
        inputs: [result.agent_response],
        model: 'bulbul:v3',
        language_code: detectedLang,
        pace: 0.9
      })
    });

    const ttsData = await ttsResponse.json();
    const audio = (ttsData.audios && ttsData.audios[0]) || ttsData.audio;

    // ═══════════════════════════════════════════
    // RETURN
    // ═══════════════════════════════════════════

    return res.status(200).json({
      transcript,
      detected_language: detectedLang,
      agent_response: result.agent_response,
      audio,
      appointment_details: result.appointment_details,
      conversation_state: result.conversation_state,
      missing_fields: result.missing_fields
    });

  } catch (error) {
    console.error('Appointment agent error:', error);
    return res.status(500).json({ error: 'Error processing request.' });
  }
};
