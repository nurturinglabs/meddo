// dictate.js — Live demo dictation widget (click to start/stop)

let mediaRecorder;
let audioChunks = [];
let isRecording = false;
let activeBtn = null;

const micBtn = document.getElementById('dictate-btn');
const transcript = document.getElementById('dictation-transcript');
const structuredOutput = document.getElementById('structured-output');
const langBadge = document.getElementById('detected-lang');
const recordingIndicator = document.getElementById('recording-indicator');

// Also bind hero widget mic
const heroMicBtn = document.getElementById('hero-dictate-btn');

// CLICK TO TOGGLE — Demo section
if (micBtn) {
  micBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleRecording(micBtn);
  });
}

// Hero mic — also works
if (heroMicBtn) {
  heroMicBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleRecording(heroMicBtn);
  });
}

function toggleRecording(btn) {
  if (isRecording) {
    finishRecording(btn);
  } else {
    startRecording(btn);
  }
}

async function startRecording(btn) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];
    mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
    mediaRecorder.start();

    isRecording = true;
    activeBtn = btn;
    btn.classList.add('recording');
    const label = btn.querySelector('.mic-label');
    if (label) label.textContent = 'Click to stop';
    if (recordingIndicator) recordingIndicator.classList.add('visible');
  } catch (err) {
    console.error('Mic error:', err);
    alert('Microphone access is required. Please allow microphone permission.');
  }
}

async function finishRecording(btn) {
  if (!mediaRecorder || mediaRecorder.state !== 'recording') return;

  isRecording = false;
  activeBtn = null;

  const audioBase64 = await new Promise((resolve) => {
    mediaRecorder.onstop = async () => {
      const blob = new Blob(audioChunks, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(blob);
    };
    mediaRecorder.stop();
    mediaRecorder.stream.getTracks().forEach(t => t.stop());
  });

  btn.classList.remove('recording');
  const label = btn.querySelector('.mic-label');
  if (label) label.textContent = 'Processing...';
  btn.disabled = true;
  if (recordingIndicator) recordingIndicator.classList.remove('visible');

  try {
    const response = await fetch('/api/dictate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        audio_base64: audioBase64,
        patient_id: 'demo-patient',
        patient_name: 'Demo Patient'
      })
    });

    const data = await response.json();

    if (data.error) {
      if (transcript) transcript.textContent = data.error || 'Could not process. Please try again.';
      resetMic(btn);
      return;
    }

    // Show detected language
    const langNames = {
      'hi-IN': 'Hindi', 'kn-IN': 'Kannada', 'ta-IN': 'Tamil',
      'te-IN': 'Telugu', 'ml-IN': 'Malayalam', 'bn-IN': 'Bengali',
      'mr-IN': 'Marathi', 'gu-IN': 'Gujarati', 'od-IN': 'Odia', 'pa-IN': 'Punjabi',
      'en-IN': 'English'
    };

    if (langBadge) {
      langBadge.textContent = `\u25CF ${langNames[data.detected_language] || data.detected_language} detected`;
    }

    // Show transcript
    if (transcript) {
      transcript.textContent = data.transcript;
    }

    // Also update hero widget if active
    const heroTranscript = document.getElementById('hero-transcript');
    if (heroTranscript && btn === heroMicBtn) {
      heroTranscript.textContent = data.transcript;
    }

    // Animate structured notes appearing
    renderStructuredNotes(data.structured_notes, btn === heroMicBtn);

    // Play confirmation audio
    if (data.confirmation_audio) {
      const audio = new Audio('data:audio/wav;base64,' + data.confirmation_audio);
      audio.play().catch(() => {});
    }

    // Save to localStorage for patient timeline
    saveVisitRecord(data);

    resetMic(btn);

  } catch (err) {
    console.error('Error:', err);
    if (transcript) transcript.textContent = 'Connection error. Make sure the server is running.';
    resetMic(btn);
  }
}

function renderStructuredNotes(notes, isHero) {
  if (!notes) return;

  const targetEl = isHero ? document.getElementById('hero-structured') : structuredOutput;
  if (!targetEl) return;

  const fields = [
    { label: 'Symptoms', value: Array.isArray(notes.symptoms) ? notes.symptoms.join(', ') : notes.symptoms },
    { label: 'Duration', value: notes.duration },
    { label: 'Examination', value: Array.isArray(notes.examination) ? notes.examination.join(', ') : notes.examination },
    { label: 'Diagnosis', value: notes.diagnosis },
    { label: 'Prescription', value: notes.prescription ? notes.prescription.map(p => `${p.medicine} ${p.dosage} ${p.frequency}`).join('; ') : null },
    { label: 'Tests', value: notes.tests_ordered ? notes.tests_ordered.join(', ') : null },
    { label: 'Test Results', value: notes.tests_results ? notes.tests_results.join(', ') : null },
    { label: 'Follow-up', value: notes.follow_up },
    { label: 'Urgency', value: notes.urgency }
  ];

  targetEl.innerHTML = '';

  fields.forEach((field, index) => {
    if (!field.value) return;

    setTimeout(() => {
      const row = document.createElement('div');
      row.className = 'note-row';
      row.innerHTML = `
        <span class="note-label">${field.label}</span>
        <span class="note-value">${field.value}</span>
      `;
      targetEl.appendChild(row);
    }, index * 200);
  });
}

function saveVisitRecord(data) {
  const records = JSON.parse(localStorage.getItem('meddo_records') || '[]');
  records.push({
    patient_id: data.patient_id,
    timestamp: data.timestamp,
    language: data.detected_language,
    transcript: data.transcript,
    notes: data.structured_notes,
    summary_en: data.summary_en
  });
  localStorage.setItem('meddo_records', JSON.stringify(records));
}

function resetMic(btn) {
  btn.disabled = false;
  const label = btn.querySelector('.mic-label');
  if (label) label.textContent = 'Click to dictate';
  btn.classList.remove('recording');
}
