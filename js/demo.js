// demo.js — Pre-recorded demo playback + mode tabs

// Demo sample data (simulates API response for pre-recorded samples)
const demoSamples = {
  dictation_kn: {
    patient_id: 'P001',
    patient_name: 'Ramesh K.',
    transcript: "\u0C88 \u0CB0\u0CCB\u0C97\u0CBF\u0C97\u0CC6 \u0C8E\u0CB0\u0CA1\u0CC1 \u0CB5\u0CBE\u0CB0\u0CA6\u0CBF\u0C82\u0CA6 \u0C8E\u0CA1 \u0CAE\u0CCA\u0CA3\u0C95\u0CBE\u0CB2\u0CC1 \u0CA8\u0CCB\u0CB5\u0CC1 \u0C87\u0CA6\u0CC6. X-ray \u0CA4\u0CC6\u0C97\u0CC6\u0CB8\u0CBF\u0CA6\u0CCD\u0CA6\u0CC7\u0CA8\u0CC6, \u0CA8\u0CBE\u0CB0\u0CCD\u0CAE\u0CB2\u0CCD \u0C87\u0CA6\u0CC6. Ibuprofen 400mg \u0CA6\u0CBF\u0CA8\u0C95\u0CCD\u0C95\u0CC6 \u0C8E\u0CB0\u0CA1\u0CC1 \u0CB8\u0CB2 \u0C95\u0CCA\u0C9F\u0CCD\u0C9F\u0CBF\u0CA6\u0CCD\u0CA6\u0CC7\u0CA8\u0CC6, \u0CB9\u0CA6\u0CBF\u0CA8\u0CBE\u0CB2\u0CCD\u0C95\u0CC1 \u0CA6\u0CBF\u0CA8. \u0C8E\u0CB0\u0CA1\u0CC1 \u0CB5\u0CBE\u0CB0\u0CA6 \u0CA8\u0C82\u0CA4\u0CB0 follow-up \u0C95\u0CCA\u0C9F\u0CCD\u0C9F\u0CBF\u0CA6\u0CCD\u0CA6\u0CC7\u0CA8\u0CC6.",
    detected_language: 'kn-IN',
    structured_notes: {
      symptoms: ['Left knee pain'],
      duration: '2 weeks',
      examination: ['X-ray taken'],
      vitals: {},
      diagnosis: 'Suspected mild arthritis',
      prescription: [{ medicine: 'Ibuprofen', dosage: '400mg', frequency: 'BD', duration: '14 days' }],
      tests_ordered: [],
      tests_results: ['X-ray: Normal'],
      follow_up: '2 weeks',
      urgency: 'routine'
    }
  },
  dictation_hi: {
    patient_id: 'P003',
    patient_name: 'Anand M.',
    transcript: "\u092E\u0930\u0940\u091C\u093C \u0915\u093E sugar level fasting \u092E\u0947\u0902 180 \u0906\u092F\u093E \u0939\u0948, post-prandial 260. \u092A\u093F\u091B\u0932\u0940 \u092C\u093E\u0930 Metformin 500 \u0926\u0940 \u0925\u0940, \u0905\u092C \u092C\u0922\u093C\u093E\u0915\u0930 Metformin 1000mg OD \u0915\u0930 \u0930\u0939\u093E \u0939\u0942\u0901. Glimepiride 1mg \u092D\u0940 add \u0915\u0930 \u0930\u0939\u093E \u0939\u0942\u0901. HbA1c test \u0932\u093F\u0916\u093E \u0939\u0948. \u0924\u0940\u0928 \u092E\u0939\u0940\u0928\u0947 \u092C\u093E\u0926 follow-up.",
    detected_language: 'hi-IN',
    structured_notes: {
      symptoms: ['Elevated blood sugar'],
      duration: 'Ongoing — diabetes management',
      examination: [],
      vitals: {},
      diagnosis: 'Type 2 Diabetes Mellitus — poorly controlled',
      prescription: [
        { medicine: 'Metformin', dosage: '1000mg', frequency: 'OD', duration: 'Ongoing' },
        { medicine: 'Glimepiride', dosage: '1mg', frequency: 'OD', duration: 'Ongoing' }
      ],
      tests_ordered: ['HbA1c'],
      tests_results: ['Fasting sugar: 180 mg/dL', 'Post-prandial: 260 mg/dL'],
      follow_up: '3 months',
      urgency: 'follow-up'
    }
  },
  dictation_ta: {
    patient_id: 'P002',
    patient_name: 'Priya S.',
    transcript: "\u0B95\u0BC1\u0BB4\u0BA8\u0BCD\u0BA4\u0BC8\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC2\u0BA9\u0BCD\u0BB1\u0BC1 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBE\u0B95 \u0B95\u0BBE\u0BAF\u0BCD\u0B9A\u0BCD\u0B9A\u0BB2\u0BCD \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BA4\u0BC1. Temperature 101. \u0BA4\u0BCA\u0BA3\u0BCD\u0B9F\u0BC8 \u0B9A\u0BBF\u0BB5\u0BAA\u0BCD\u0BAA\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BA4\u0BC1. Paracetamol syrup 5ml \u0B86\u0BB1\u0BC1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0B92\u0BB0\u0BC1 \u0BAE\u0BC1\u0BB1\u0BC8 \u0B95\u0BCA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD. CBP test \u0B8E\u0BB4\u0BC1\u0BA4\u0BBF\u0BAF\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD. \u0B87\u0BB0\u0BA3\u0BCD\u0B9F\u0BC1 \u0BA8\u0BBE\u0BB3\u0BCD \u0B95\u0BB4\u0BBF\u0BA4\u0BCD\u0BA4\u0BC1 \u0BB5\u0BB0 \u0B9A\u0BCA\u0BB2\u0BCD\u0BB2\u0BBF\u0BAF\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD.",
    detected_language: 'ta-IN',
    structured_notes: {
      symptoms: ['Fever for 3 days', 'Red throat'],
      duration: '3 days',
      examination: ['Throat: Red/inflamed'],
      vitals: { temperature: '101\u00B0F' },
      diagnosis: 'Upper respiratory infection / Pharyngitis',
      prescription: [{ medicine: 'Paracetamol syrup', dosage: '5ml', frequency: 'Q6H', duration: 'As needed' }],
      tests_ordered: ['CBP (Complete Blood Picture)'],
      tests_results: [],
      follow_up: '2 days',
      urgency: 'routine'
    }
  }
};

// Track running demo to cancel if another sample is clicked
let demoTimeouts = [];

function clearDemoTimeouts() {
  demoTimeouts.forEach(t => clearTimeout(t));
  demoTimeouts = [];
}

// Sample button handlers
document.querySelectorAll('.sample-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const demoId = btn.getAttribute('data-demo');
    const sample = demoSamples[demoId];
    if (!sample) return;

    // Cancel any running demo
    clearDemoTimeouts();

    const transcript = document.getElementById('dictation-transcript');
    const langBadge = document.getElementById('detected-lang');
    const structuredOutput = document.getElementById('structured-output');
    const micBtn = document.getElementById('dictate-btn');

    const langNames = {
      'hi-IN': 'Hindi', 'kn-IN': 'Kannada', 'ta-IN': 'Tamil',
      'te-IN': 'Telugu', 'ml-IN': 'Malayalam', 'bn-IN': 'Bengali',
      'mr-IN': 'Marathi', 'gu-IN': 'Gujarati', 'od-IN': 'Odia', 'pa-IN': 'Punjabi',
      'en-IN': 'English'
    };

    // Disable sample buttons during playback
    document.querySelectorAll('.sample-btn').forEach(b => b.disabled = true);

    // Step 1: Show "listening" state on BOTH panels
    if (transcript) transcript.textContent = 'Listening...';
    if (langBadge) langBadge.textContent = '';
    if (micBtn) micBtn.classList.add('recording');

    // Show listening animation in structured output panel
    if (structuredOutput) {
      structuredOutput.innerHTML = `
        <div class="demo-state-indicator listening-state">
          <div class="sound-wave">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <p>Listening to doctor...</p>
        </div>
      `;
    }

    // Step 2: After 1.5s — show transcript word by word
    const words = sample.transcript.split(' ');
    const wordDelay = 80;
    const transcriptDuration = words.length * wordDelay;
    const transcriptStart = 1500;

    demoTimeouts.push(setTimeout(() => {
      if (transcript) transcript.textContent = '';
      words.forEach((word, i) => {
        demoTimeouts.push(setTimeout(() => {
          transcript.textContent += (i === 0 ? '' : ' ') + word;
        }, i * wordDelay));
      });
    }, transcriptStart));

    // Step 3: ONLY after the LAST word appears — stop recording, show language, switch to "processing"
    // Listening animation stays the entire time until here
    const transcriptEnd = transcriptStart + transcriptDuration + 500;
    demoTimeouts.push(setTimeout(() => {
      if (micBtn) micBtn.classList.remove('recording');
      if (langBadge) langBadge.textContent = `● ${langNames[sample.detected_language] || sample.detected_language} detected`;

      // NOW switch to processing state
      if (structuredOutput) {
        structuredOutput.innerHTML = `
          <div class="demo-state-indicator processing-state">
            <div class="processing-spinner"></div>
            <p>Processing with Sarvam AI...</p>
            <span class="processing-sub">Extracting structured medical notes</span>
          </div>
        `;
      }
    }, transcriptEnd));

    // Step 4: After processing pause — show structured output
    const structuredStart = transcriptEnd + 2000;
    if (structuredOutput) {
      const notes = sample.structured_notes;
      const fields = [
        { label: 'Symptoms', value: Array.isArray(notes.symptoms) ? notes.symptoms.join(', ') : notes.symptoms },
        { label: 'Duration', value: notes.duration },
        { label: 'Examination', value: Array.isArray(notes.examination) ? notes.examination.join(', ') : notes.examination },
        { label: 'Diagnosis', value: notes.diagnosis },
        { label: 'Prescription', value: notes.prescription ? notes.prescription.map(p => `${p.medicine} ${p.dosage} ${p.frequency}`).join('; ') : null },
        { label: 'Tests Ordered', value: notes.tests_ordered && notes.tests_ordered.length ? notes.tests_ordered.join(', ') : null },
        { label: 'Test Results', value: notes.tests_results && notes.tests_results.length ? notes.tests_results.join(', ') : null },
        { label: 'Follow-up', value: notes.follow_up },
        { label: 'Urgency', value: notes.urgency }
      ];

      // Clear processing state and start showing fields
      demoTimeouts.push(setTimeout(() => {
        structuredOutput.innerHTML = '';
      }, structuredStart));

      let fieldIndex = 0;
      fields.forEach((field) => {
        if (!field.value) return;
        demoTimeouts.push(setTimeout(() => {
          const row = document.createElement('div');
          row.className = 'note-row';
          row.innerHTML = `
            <span class="note-label">${field.label}</span>
            <span class="note-value">${field.value}</span>
          `;
          structuredOutput.appendChild(row);
        }, structuredStart + 100 + fieldIndex * 250));
        fieldIndex++;
      });

      // Step 5: Show "Record saved" with link to patient page
      const savedStart = structuredStart + 100 + fieldIndex * 250 + 400;
      demoTimeouts.push(setTimeout(() => {
        const savedBanner = document.createElement('div');
        savedBanner.className = 'demo-saved-banner';
        savedBanner.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>Record added to ${sample.patient_name}'s history</span>
          <a href="patient.html?id=${sample.patient_id}" class="demo-saved-link">View ${sample.patient_name}</a>
        `;
        structuredOutput.appendChild(savedBanner);
      }, savedStart));

      // Re-enable buttons after everything
      const totalDuration = savedStart + 300;
      demoTimeouts.push(setTimeout(() => {
        document.querySelectorAll('.sample-btn').forEach(b => b.disabled = false);
      }, totalDuration));
    }

    // Try to play pre-generated audio
    const audio = new Audio(`audio/${demoId}.wav`);
    audio.play().catch(() => {});

    // Scroll to demo area
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Mode tabs (How it Works section)
document.querySelectorAll('.mode-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Deactivate all tabs
    document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.mode-content').forEach(c => c.classList.remove('active'));

    // Activate clicked tab
    tab.classList.add('active');
    const mode = tab.getAttribute('data-mode');
    const content = document.getElementById(`mode-${mode}`);
    if (content) content.classList.add('active');
  });
});

// Sample prompt language switcher
const samplePrompts = {
  en: '"P001 Ramesh K. came in today with severe headache and dizziness for the past 3 days. BP is 150 over 95, pulse 82. Diagnosis is hypertensive episode. Prescribing Amlodipine 5mg once daily and Paracetamol 500mg as needed. Order blood test CBC and lipid profile. Follow up in 2 weeks."',
  hi: '"P001 Ramesh K. आज आए हैं, पिछले 3 दिनों से तेज सिरदर्द और चक्कर आ रहे हैं। BP 150/95 है, pulse 82। Diagnosis — hypertensive episode। Amlodipine 5mg दिन में एक बार और Paracetamol 500mg ज़रूरत पड़ने पर लिख रहा हूँ। CBC और lipid profile का blood test करवाइए। 2 हफ्ते बाद follow-up।"',
  kn: '"P001 Ramesh K. ಇವತ್ತು ಬಂದಿದ್ದಾರೆ, ಕಳೆದ 3 ದಿನಗಳಿಂದ ತೀವ್ರ ತಲೆನೋವು ಮತ್ತು ತಲೆ ತಿರುಗುವಿಕೆ ಇದೆ. BP 150/95, pulse 82. Diagnosis — hypertensive episode. Amlodipine 5mg ದಿನಕ್ಕೆ ಒಂದು ಸಲ ಮತ್ತು Paracetamol 500mg ಅಗತ್ಯವಿದ್ದಾಗ ಕೊಟ್ಟಿದ್ದೇನೆ. CBC ಮತ್ತು lipid profile blood test ಮಾಡಿಸಿ. 2 ವಾರದ ನಂತರ follow-up."',
  ta: '"P001 Ramesh K. இன்று வந்திருக்கிறார், கடந்த 3 நாட்களாக கடுமையான தலைவலி மற்றும் தலைசுற்றல் இருக்கிறது. BP 150/95, pulse 82. Diagnosis — hypertensive episode. Amlodipine 5mg தினமும் ஒரு முறை, Paracetamol 500mg தேவைப்படும்போது எழுதியிருக்கிறேன். CBC மற்றும் lipid profile blood test எடுக்கவும். 2 வாரம் கழித்து follow-up."',
  te: '"P001 Ramesh K. ఈరోజు వచ్చారు, గత 3 రోజులుగా తీవ్రమైన తలనొప్పి మరియు తలతిరగడం ఉంది. BP 150/95, pulse 82. Diagnosis — hypertensive episode. Amlodipine 5mg రోజుకు ఒకసారి, Paracetamol 500mg అవసరమైనప్పుడు రాశాను. CBC మరియు lipid profile blood test చేయించండి. 2 వారాల తర్వాత follow-up."',
  ml: '"P001 Ramesh K. ഇന്ന് വന്നിട്ടുണ്ട്, കഴിഞ്ഞ 3 ദിവസമായി കടുത്ത തലവേദനയും തലകറക്കവും ഉണ്ട്. BP 150/95, pulse 82. Diagnosis — hypertensive episode. Amlodipine 5mg ദിവസം ഒരു തവണ, Paracetamol 500mg ആവശ്യമുള്ളപ്പോൾ എഴുതിയിട്ടുണ്ട്. CBC, lipid profile blood test എടുക്കുക. 2 ആഴ്ച കഴിഞ്ഞ് follow-up."',
  bn: '"P001 Ramesh K. আজ এসেছেন, গত 3 দিন ধরে প্রচণ্ড মাথাব্যথা আর মাথা ঘোরা হচ্ছে। BP 150/95, pulse 82। Diagnosis — hypertensive episode। Amlodipine 5mg দিনে একবার আর Paracetamol 500mg দরকার হলে লিখে দিচ্ছি। CBC আর lipid profile blood test করান। 2 সপ্তাহ পর follow-up।"',
  mr: '"P001 Ramesh K. आज आले आहेत, गेल्या 3 दिवसांपासून तीव्र डोकेदुखी आणि चक्कर येत आहे. BP 150/95, pulse 82. Diagnosis — hypertensive episode. Amlodipine 5mg दिवसातून एकदा आणि Paracetamol 500mg गरज पडल्यास लिहून दिले आहे. CBC आणि lipid profile blood test करा. 2 आठवड्यांनी follow-up."',
  gu: '"P001 Ramesh K. આજે આવ્યા છે, છેલ્લા 3 દિવસથી ભારે માથાનો દુખાવો અને ચક્કર આવે છે. BP 150/95, pulse 82. Diagnosis — hypertensive episode. Amlodipine 5mg દિવસમાં એક વાર અને Paracetamol 500mg જરૂર પડે ત્યારે લખ્યું છે. CBC અને lipid profile blood test કરાવો. 2 અઠવાડિયા પછી follow-up."'
};

const sampleLangSelect = document.getElementById('sample-lang-select');
const samplePromptText = document.getElementById('sample-prompt-text');

if (sampleLangSelect && samplePromptText) {
  sampleLangSelect.addEventListener('change', () => {
    const lang = sampleLangSelect.value;
    samplePromptText.textContent = samplePrompts[lang] || samplePrompts.en;
  });
}
