# Meddo - AI Superpower for Doctors

An AI-powered medical scribe that lets Indian doctors dictate clinical notes in any Indian language and instantly get structured medical records, voice confirmations, and AI-flagged patient insights.

Built for the **Sarvam Bulbul Challenge**.

## What It Does

1. **Dictate in Any Language** - Doctor speaks in Hindi, Kannada, Tamil, Telugu, Malayalam, Bengali, Marathi, Gujarati, or English
2. **Auto-Detect Language** - Sarvam Saarika v2.5 identifies the language automatically
3. **Structured Notes** - Sarvam-M LLM extracts symptoms, diagnosis, prescription, tests, and follow-up into structured JSON
4. **Voice Confirmation** - Bulbul V3 TTS reads back a summary in the doctor's language
5. **Patient Dashboard** - View patient histories, AI-generated insights, and flagged patterns across visits

## Sarvam AI APIs Used

| API | Model | Purpose |
|-----|-------|---------|
| Speech-to-Text | Saarika v2.5 | Transcribe doctor dictation with auto language detection |
| Chat Completions | Sarvam-M | Extract structured medical notes from transcripts |
| Text-to-Speech | Bulbul V3 | Voice confirmation back to the doctor |

## Tech Stack

- **Frontend**: HTML, CSS, vanilla JavaScript (no framework)
- **Backend**: Vercel Serverless Functions (Node.js)
- **APIs**: Sarvam AI (STT, LLM, TTS)
- **Deployment**: Vercel

## Project Structure

```
meddo/
├── index.html          # Landing page with live demo
├── admin.html          # Doctor dashboard - patient list
├── patient.html        # Individual patient history & AI insights
├── css/
│   ├── style.css       # Main styles
│   └── dashboard.css   # Dashboard & patient page styles
├── js/
│   ├── data.js         # Sample patient data & helper functions
│   ├── dictate.js      # Live dictation (mic record → API → display)
│   ├── demo.js         # Pre-recorded demo playback & language switcher
│   ├── patient.js      # Patient detail page logic & AI summary
│   └── animations.js   # Scroll animations
├── audio/              # Pre-recorded demo audio files (kn, hi, ta)
├── api/
│   ├── dictate.js      # Serverless: STT → LLM → TTS pipeline
│   └── summarize.js    # Serverless: Patient history summarization
├── server.js           # Local dev server
├── vercel.json         # Vercel deployment config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- A Sarvam AI API key ([sarvam.ai](https://www.sarvam.ai))

### Local Development

```bash
# Install dependencies
npm install

# Create .env file
echo "SARVAM_API_KEY=your_api_key_here" > .env

# Start dev server
node server.js
```

Open [http://localhost:3000](http://localhost:3000)

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable
vercel env add SARVAM_API_KEY
```

## Features

### Live Demo
- Click-to-dictate mic button records audio and sends to the Sarvam AI pipeline
- Pre-recorded samples in Kannada, Hindi, and Tamil for instant demo
- Sample dictation text available in 9 Indian languages

### Patient Dashboard
- Search patients by name, condition, or language
- Filter by status: Needs Attention, Monitoring, Stable
- AI-flagged alerts for concerning patterns (rising BP, missed follow-ups)

### Patient History
- Full visit timeline with structured notes per visit
- AI-generated summary with voice playback
- Pattern detection across multiple visits

## API Endpoints

### POST /api/dictate
Processes a doctor's audio dictation through the full pipeline.

**Request:**
```json
{
  "audio_base64": "<base64 encoded audio>",
  "patient_id": "P001",
  "patient_name": "Ramesh K."
}
```

**Response:**
```json
{
  "transcript": "...",
  "detected_language": "kn-IN",
  "structured_notes": {
    "symptoms": ["..."],
    "diagnosis": "...",
    "prescription": [{ "medicine": "...", "dosage": "...", "frequency": "..." }],
    "follow_up": "..."
  },
  "summary_en": "...",
  "confirmation_audio": "<base64 audio>"
}
```

### POST /api/summarize
Generates an AI summary of a patient's visit history.

**Request:**
```json
{
  "patient_history": { ... },
  "doctor_language": "kn-IN"
}
```

**Response:**
```json
{
  "summary_text": "...",
  "summary_en": "...",
  "alerts": [{ "type": "pattern", "message": "...", "severity": "high" }],
  "audio": "<base64 audio>"
}
```

## Supported Languages

Kannada, Hindi, Tamil, Telugu, Malayalam, Bengali, Marathi, Gujarati, English

## License

ISC
