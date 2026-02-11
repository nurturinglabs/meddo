const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { patient_history, doctor_language } = req.body;

    // STEP 1: SARVAM-M — Summarize history + detect patterns
    const systemPrompt = `You are Meddo, an AI medical assistant.

A doctor is about to see a patient. Summarize the patient's history concisely so the doctor is prepared.

RULES:
1. Summarize all past visits in chronological order.
2. Highlight key findings, ongoing medications, and pending follow-ups.
3. FLAG any concerning patterns:
   - Recurring symptoms
   - Worsening vitals (e.g., rising BP)
   - Missed follow-ups
   - Long-term medication without review
   - Symptoms that could indicate serious conditions
4. Keep the summary concise — doctor has 30 seconds to read/listen.
5. Respond in the requested language.

RESPONSE FORMAT — valid JSON:
{
  "summary_text": "Concise summary in requested language, 3-5 sentences",
  "summary_en": "English version for records",
  "alerts": [
    {
      "type": "pattern/urgent/missed-followup",
      "message": "Description of the concern",
      "severity": "low/medium/high"
    }
  ],
  "key_facts": {
    "total_visits": 3,
    "last_visit": "10 Jan 2025",
    "ongoing_medications": ["Amlodipine 5mg"],
    "active_conditions": ["Hypertension"]
  }
}`;

    const messages = [
      { role: 'system', content: systemPrompt },
      {
        role: 'user',
        content: `Patient history:\n${JSON.stringify(patient_history, null, 2)}\n\nSummarize in language: ${doctor_language}`
      }
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
        max_tokens: 800
      })
    });

    const llmData = await llmResponse.json();
    const content = llmData.choices[0].message.content;

    let result;
    try {
      const cleaned = content.replace(/```json|```/g, '').trim();
      result = JSON.parse(cleaned);
    } catch (e) {
      result = { summary_text: content, alerts: [] };
    }

    // STEP 2: BULBUL V3 — Speak the summary
    const ttsResponse = await fetch('https://api.sarvam.ai/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-subscription-key': process.env.SARVAM_API_KEY
      },
      body: JSON.stringify({
        inputs: [result.summary_text],
        model: 'bulbul:v3',
        language_code: doctor_language || 'hi-IN',
        pace: 0.85
      })
    });

    const ttsData = await ttsResponse.json();
    const summaryAudio = (ttsData.audios && ttsData.audios[0]) || ttsData.audio;

    return res.status(200).json({
      ...result,
      audio: summaryAudio
    });

  } catch (error) {
    console.error('Summary error:', error);
    return res.status(500).json({ error: 'Error generating summary.' });
  }
};
