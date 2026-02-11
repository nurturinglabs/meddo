// patient.js — Patient timeline + summary playback

// Pre-seeded demo patient history
const demoPatientHistory = [
  {
    visit_number: 1,
    date: '2024-12-15',
    date_display: '15 Dec 2024',
    tag: 'Routine checkup',
    tag_type: 'routine',
    details: {
      symptoms: ['Mild headache'],
      vitals: { bp: '130/85' },
      diagnosis: 'Mild tension headache',
      prescription: [{ medicine: 'Paracetamol', dosage: '500mg', frequency: 'As needed' }],
      follow_up: 'As needed',
      notes: 'Rest advised'
    },
    language: 'kn-IN',
    doctor: 'Dr. Suresh'
  },
  {
    visit_number: 2,
    date: '2025-01-10',
    date_display: '10 Jan 2025',
    tag: 'Headache persistent',
    tag_type: 'followup',
    details: {
      symptoms: ['Headache persistent', 'Dizziness'],
      vitals: { bp: '140/90' },
      diagnosis: 'Early hypertension',
      prescription: [{ medicine: 'Amlodipine', dosage: '5mg', frequency: 'OD' }],
      follow_up: '1 month',
      notes: 'Started antihypertensive'
    },
    language: 'kn-IN',
    doctor: 'Dr. Suresh'
  },
  {
    visit_number: 3,
    date: '2025-02-10',
    date_display: '10 Feb 2025',
    tag: 'BP still elevated',
    tag_type: 'urgent',
    details: {
      symptoms: ['Headache continues', 'Occasional chest tightness'],
      vitals: { bp: '145/95' },
      diagnosis: 'Uncontrolled hypertension',
      prescription: [{ medicine: 'Amlodipine', dosage: '10mg', frequency: 'OD' }],
      follow_up: '2 weeks',
      notes: 'Dose increased. Monitoring required.'
    },
    language: 'kn-IN',
    doctor: 'Dr. Suresh'
  }
];

// "Hear Summary" button — calls /api/summarize or plays pre-generated audio
const hearSummaryBtn = document.getElementById('hear-summary-btn');

if (hearSummaryBtn) {
  hearSummaryBtn.addEventListener('click', async () => {
    hearSummaryBtn.disabled = true;
    hearSummaryBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      </svg>
      Loading summary...
    `;

    try {
      // Try API call first
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patient_history: demoPatientHistory,
          doctor_language: 'kn-IN'
        })
      });

      const data = await response.json();

      if (data.audio) {
        const audio = new Audio('data:audio/wav;base64,' + data.audio);
        hearSummaryBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
          Playing...
        `;
        audio.play().catch(() => {});
        audio.onended = () => resetSummaryBtn();
      } else {
        // Fallback: try pre-generated audio
        playPreGeneratedSummary();
      }
    } catch (err) {
      console.error('Summary API error:', err);
      // Fallback: try pre-generated audio
      playPreGeneratedSummary();
    }
  });
}

function playPreGeneratedSummary() {
  const audio = new Audio('audio/summary_kn.wav');
  audio.onerror = () => {
    alert('Summary audio not available. Run generate_demos.py to create demo audio, or deploy to Vercel with the API key.');
    resetSummaryBtn();
  };
  audio.oncanplaythrough = () => {
    hearSummaryBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      </svg>
      Playing...
    `;
    audio.play().catch(() => {});
  };
  audio.onended = () => resetSummaryBtn();
  audio.load();
}

function resetSummaryBtn() {
  if (!hearSummaryBtn) return;
  hearSummaryBtn.disabled = false;
  hearSummaryBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
    Hear Summary
  `;
}
