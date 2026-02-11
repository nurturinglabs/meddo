// data.js — Shared patient data for Meddo demo

const PATIENTS = [
  {
    id: 'P001',
    name: 'Ramesh K.',
    age: 52,
    gender: 'Male',
    blood_group: 'B+',
    phone: '+91 98765 43210',
    language: 'kn-IN',
    language_name: 'Kannada',
    conditions: ['Hypertension', 'Tension Headache'],
    last_visit: '10 Feb 2025',
    status: 'critical',
    visits: [
      {
        visit_number: 1,
        date: '2024-12-15',
        date_display: '15 Dec 2024',
        tag: 'Routine checkup',
        tag_type: 'routine',
        details: {
          symptoms: ['Mild headache'],
          vitals: { bp: '130/85', pulse: '78 bpm', weight: '76 kg' },
          diagnosis: 'Mild tension headache',
          prescription: [{ medicine: 'Paracetamol', dosage: '500mg', frequency: 'As needed' }],
          tests_ordered: [],
          follow_up: 'As needed',
          notes: 'Rest advised. Lifestyle changes suggested.'
        },
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
          vitals: { bp: '140/90', pulse: '82 bpm', weight: '76 kg' },
          diagnosis: 'Early hypertension',
          prescription: [{ medicine: 'Amlodipine', dosage: '5mg', frequency: 'OD' }],
          tests_ordered: ['Blood panel', 'ECG'],
          follow_up: '1 month',
          notes: 'Started antihypertensive. Diet and exercise advised.'
        },
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
          vitals: { bp: '145/95', pulse: '85 bpm', weight: '77 kg' },
          diagnosis: 'Uncontrolled hypertension',
          prescription: [{ medicine: 'Amlodipine', dosage: '10mg', frequency: 'OD' }],
          tests_ordered: ['Renal function test', '24hr BP monitoring'],
          follow_up: '2 weeks',
          notes: 'Dose increased. Close monitoring required. Consider specialist referral.'
        },
        doctor: 'Dr. Suresh'
      }
    ],
    ai_insights: [
      {
        type: 'alert',
        title: 'BP Rising Trend',
        detail: '130/85 → 140/90 → 145/95 over 3 visits',
        recommendation: 'Consider specialist referral for hypertension evaluation'
      },
      {
        type: 'pattern',
        title: 'Recurring Headache',
        detail: 'Headache reported in 3 consecutive visits',
        recommendation: 'May indicate secondary hypertension — investigate renal causes'
      }
    ]
  },
  {
    id: 'P002',
    name: 'Priya S.',
    age: 45,
    gender: 'Female',
    blood_group: 'O+',
    phone: '+91 98765 12345',
    language: 'ta-IN',
    language_name: 'Tamil',
    conditions: ['Type 2 Diabetes', 'Obesity'],
    last_visit: '05 Feb 2025',
    status: 'monitoring',
    visits: [
      {
        visit_number: 1,
        date: '2024-09-20',
        date_display: '20 Sep 2024',
        tag: 'Diabetes screening',
        tag_type: 'routine',
        details: {
          symptoms: ['Fatigue', 'Frequent urination', 'Increased thirst'],
          vitals: { bp: '125/80', pulse: '74 bpm', weight: '82 kg' },
          diagnosis: 'Type 2 Diabetes Mellitus — newly diagnosed',
          prescription: [{ medicine: 'Metformin', dosage: '500mg', frequency: 'BD' }],
          tests_ordered: ['HbA1c', 'Fasting glucose', 'Lipid profile'],
          follow_up: '3 months',
          notes: 'HbA1c: 7.8%. Diet control and walking 30 min/day advised.'
        },
        doctor: 'Dr. Meena'
      },
      {
        visit_number: 2,
        date: '2024-12-22',
        date_display: '22 Dec 2024',
        tag: 'Follow-up',
        tag_type: 'followup',
        details: {
          symptoms: ['Less fatigue', 'Occasional numbness in feet'],
          vitals: { bp: '122/78', pulse: '72 bpm', weight: '80 kg' },
          diagnosis: 'Diabetes — partial response to treatment',
          prescription: [{ medicine: 'Metformin', dosage: '1000mg', frequency: 'BD' }],
          tests_ordered: ['HbA1c', 'Fasting glucose', 'Nerve conduction study'],
          follow_up: '2 months',
          notes: 'HbA1c improved to 7.2%. Dose increased. Weight loss of 2 kg noted.'
        },
        doctor: 'Dr. Meena'
      },
      {
        visit_number: 3,
        date: '2025-02-05',
        date_display: '05 Feb 2025',
        tag: 'Good progress',
        tag_type: 'routine',
        details: {
          symptoms: ['Feeling better', 'Mild numbness persists'],
          vitals: { bp: '120/76', pulse: '70 bpm', weight: '78 kg' },
          diagnosis: 'Diabetes — improving with treatment',
          prescription: [{ medicine: 'Metformin', dosage: '1000mg', frequency: 'BD' }, { medicine: 'Methylcobalamin', dosage: '1500mcg', frequency: 'OD' }],
          tests_ordered: ['HbA1c'],
          follow_up: '3 months',
          notes: 'HbA1c: 6.8% — good control. Weight loss of 4 kg total. Continue current plan.'
        },
        doctor: 'Dr. Meena'
      }
    ],
    ai_insights: [
      {
        type: 'positive',
        title: 'Improving HbA1c Trend',
        detail: '7.8% → 7.2% → 6.8% over 5 months',
        recommendation: 'Good response to treatment. Continue current regimen.'
      },
      {
        type: 'pattern',
        title: 'Peripheral Neuropathy',
        detail: 'Numbness in feet reported in last 2 visits',
        recommendation: 'Monitor nerve conduction. B12 supplementation started.'
      }
    ]
  },
  {
    id: 'P003',
    name: 'Anand M.',
    age: 38,
    gender: 'Male',
    blood_group: 'A+',
    phone: '+91 98765 67890',
    language: 'hi-IN',
    language_name: 'Hindi',
    conditions: ['Lumbar Spondylosis', 'Chronic Back Pain'],
    last_visit: '01 Feb 2025',
    status: 'stable',
    visits: [
      {
        visit_number: 1,
        date: '2024-10-05',
        date_display: '05 Oct 2024',
        tag: 'Back pain — acute',
        tag_type: 'urgent',
        details: {
          symptoms: ['Severe lower back pain', 'Radiating to left leg', 'Difficulty sitting'],
          vitals: { bp: '128/82', pulse: '80 bpm', weight: '85 kg' },
          diagnosis: 'Acute lumbar strain with possible disc involvement',
          prescription: [{ medicine: 'Diclofenac', dosage: '50mg', frequency: 'BD' }, { medicine: 'Thiocolchicoside', dosage: '4mg', frequency: 'BD' }],
          tests_ordered: ['Lumbar spine X-ray', 'MRI lumbar spine'],
          follow_up: '1 week',
          notes: 'Bed rest 3 days. Hot fomentation. Avoid lifting heavy weights.'
        },
        doctor: 'Dr. Rajesh'
      },
      {
        visit_number: 2,
        date: '2024-10-14',
        date_display: '14 Oct 2024',
        tag: 'MRI review',
        tag_type: 'followup',
        details: {
          symptoms: ['Pain reduced 50%', 'Stiffness in morning'],
          vitals: { bp: '126/80', pulse: '76 bpm', weight: '85 kg' },
          diagnosis: 'L4-L5 disc bulge, mild spondylosis',
          prescription: [{ medicine: 'Pregabalin', dosage: '75mg', frequency: 'OD at night' }],
          tests_ordered: [],
          follow_up: '1 month',
          notes: 'MRI confirms disc bulge. Physiotherapy started. Core strengthening exercises prescribed.'
        },
        doctor: 'Dr. Rajesh'
      },
      {
        visit_number: 3,
        date: '2025-02-01',
        date_display: '01 Feb 2025',
        tag: 'Recovery check',
        tag_type: 'routine',
        details: {
          symptoms: ['Occasional stiffness', 'No radiating pain'],
          vitals: { bp: '124/78', pulse: '74 bpm', weight: '83 kg' },
          diagnosis: 'Lumbar spondylosis — stable',
          prescription: [{ medicine: 'Pregabalin', dosage: '75mg', frequency: 'As needed' }],
          tests_ordered: [],
          follow_up: '3 months',
          notes: 'Good recovery. Physio exercises to continue. Weight loss of 2 kg. Keep active.'
        },
        doctor: 'Dr. Rajesh'
      }
    ],
    ai_insights: [
      {
        type: 'positive',
        title: 'Good Recovery',
        detail: 'Pain reduced from severe to occasional over 4 months',
        recommendation: 'Continue physiotherapy and core exercises'
      }
    ]
  },
  {
    id: 'P004',
    name: 'Lakshmi R.',
    age: 60,
    gender: 'Female',
    blood_group: 'AB+',
    phone: '+91 98765 11223',
    language: 'te-IN',
    language_name: 'Telugu',
    conditions: ['Hypothyroidism', 'Osteoarthritis'],
    last_visit: '08 Feb 2025',
    status: 'monitoring',
    visits: [
      {
        visit_number: 1,
        date: '2024-08-12',
        date_display: '12 Aug 2024',
        tag: 'Thyroid check',
        tag_type: 'routine',
        details: {
          symptoms: ['Weight gain', 'Fatigue', 'Hair fall', 'Joint pain'],
          vitals: { bp: '132/84', pulse: '62 bpm', weight: '74 kg' },
          diagnosis: 'Hypothyroidism, bilateral knee osteoarthritis',
          prescription: [{ medicine: 'Levothyroxine', dosage: '50mcg', frequency: 'OD before breakfast' }, { medicine: 'Glucosamine', dosage: '1500mg', frequency: 'OD' }],
          tests_ordered: ['TSH', 'Free T4', 'Knee X-ray bilateral'],
          follow_up: '6 weeks',
          notes: 'TSH: 12.5 (high). Started thyroid replacement. Knee X-ray shows Grade 2 OA.'
        },
        doctor: 'Dr. Kavitha'
      },
      {
        visit_number: 2,
        date: '2024-10-01',
        date_display: '01 Oct 2024',
        tag: 'Dose adjustment',
        tag_type: 'followup',
        details: {
          symptoms: ['Less fatigue', 'Joint pain persists', 'Hair fall reduced'],
          vitals: { bp: '128/82', pulse: '68 bpm', weight: '73 kg' },
          diagnosis: 'Hypothyroidism — partial response; OA — stable',
          prescription: [{ medicine: 'Levothyroxine', dosage: '75mcg', frequency: 'OD before breakfast' }, { medicine: 'Glucosamine', dosage: '1500mg', frequency: 'OD' }],
          tests_ordered: ['TSH', 'Free T4'],
          follow_up: '2 months',
          notes: 'TSH: 8.2 — improving but not at target. Dose increased. Weight down 1 kg.'
        },
        doctor: 'Dr. Kavitha'
      },
      {
        visit_number: 3,
        date: '2024-12-10',
        date_display: '10 Dec 2024',
        tag: 'Review',
        tag_type: 'routine',
        details: {
          symptoms: ['Energy improved', 'Knee pain on stairs', 'No hair fall'],
          vitals: { bp: '126/80', pulse: '70 bpm', weight: '72 kg' },
          diagnosis: 'Hypothyroidism — well controlled; OA — Grade 2',
          prescription: [{ medicine: 'Levothyroxine', dosage: '75mcg', frequency: 'OD before breakfast' }, { medicine: 'Glucosamine', dosage: '1500mg', frequency: 'OD' }],
          tests_ordered: ['TSH'],
          follow_up: '2 months',
          notes: 'TSH: 4.5 — within normal. Continue same dose. Knee exercises advised.'
        },
        doctor: 'Dr. Kavitha'
      },
      {
        visit_number: 4,
        date: '2025-02-08',
        date_display: '08 Feb 2025',
        tag: 'Knee worsening',
        tag_type: 'followup',
        details: {
          symptoms: ['Increased knee pain', 'Difficulty walking', 'Swelling both knees'],
          vitals: { bp: '130/84', pulse: '72 bpm', weight: '72 kg' },
          diagnosis: 'OA bilateral knees — progressing; Hypothyroidism — controlled',
          prescription: [{ medicine: 'Levothyroxine', dosage: '75mcg', frequency: 'OD before breakfast' }, { medicine: 'Etoricoxib', dosage: '60mg', frequency: 'OD' }, { medicine: 'Intra-articular injection', dosage: 'Hyaluronic acid', frequency: 'Left knee' }],
          tests_ordered: ['Knee X-ray bilateral', 'Uric acid', 'CRP'],
          follow_up: '1 month',
          notes: 'OA progressing. HA injection given in left knee. Right knee next visit. Ortho referral if no improvement.'
        },
        doctor: 'Dr. Kavitha'
      }
    ],
    ai_insights: [
      {
        type: 'positive',
        title: 'Thyroid Well Controlled',
        detail: 'TSH: 12.5 → 8.2 → 4.5 (now normal)',
        recommendation: 'Maintain current Levothyroxine dose'
      },
      {
        type: 'alert',
        title: 'OA Progression',
        detail: 'Knee symptoms worsening over 4 visits despite treatment',
        recommendation: 'Consider orthopedic referral if no improvement after HA injections'
      }
    ]
  },
  {
    id: 'P005',
    name: 'Vikram P.',
    age: 28,
    gender: 'Male',
    blood_group: 'O-',
    phone: '+91 98765 99887',
    language: 'hi-IN',
    language_name: 'Hindi',
    conditions: ['Bronchial Asthma'],
    last_visit: '03 Feb 2025',
    status: 'stable',
    visits: [
      {
        visit_number: 1,
        date: '2024-11-15',
        date_display: '15 Nov 2024',
        tag: 'Acute episode',
        tag_type: 'urgent',
        details: {
          symptoms: ['Severe breathlessness', 'Wheezing', 'Chest tightness', 'Night cough'],
          vitals: { bp: '118/76', pulse: '96 bpm', spo2: '94%', weight: '68 kg' },
          diagnosis: 'Acute exacerbation of bronchial asthma',
          prescription: [{ medicine: 'Salbutamol nebulization', dosage: '2.5mg', frequency: 'Stat + 6 hourly' }, { medicine: 'Budesonide inhaler', dosage: '200mcg', frequency: 'BD' }, { medicine: 'Montelukast', dosage: '10mg', frequency: 'OD at night' }],
          tests_ordered: ['Chest X-ray', 'PFT', 'CBC'],
          follow_up: '1 week',
          notes: 'Triggered by dust exposure. SpO2: 94%. Nebulization given. Inhaler technique taught.'
        },
        doctor: 'Dr. Suresh'
      },
      {
        visit_number: 2,
        date: '2024-11-22',
        date_display: '22 Nov 2024',
        tag: 'Post-episode review',
        tag_type: 'followup',
        details: {
          symptoms: ['Occasional wheeze', 'No night cough', 'Better breathing'],
          vitals: { bp: '116/74', pulse: '80 bpm', spo2: '98%', weight: '68 kg' },
          diagnosis: 'Asthma — improving post-exacerbation',
          prescription: [{ medicine: 'Budesonide inhaler', dosage: '200mcg', frequency: 'BD' }, { medicine: 'Montelukast', dosage: '10mg', frequency: 'OD at night' }],
          tests_ordered: [],
          follow_up: '1 month',
          notes: 'PFT shows mild obstruction. SpO2 back to 98%. Continue controller therapy. Avoid triggers.'
        },
        doctor: 'Dr. Suresh'
      },
      {
        visit_number: 3,
        date: '2025-02-03',
        date_display: '03 Feb 2025',
        tag: 'Stable',
        tag_type: 'routine',
        details: {
          symptoms: ['No breathlessness', 'No night symptoms', 'Active and exercising'],
          vitals: { bp: '118/74', pulse: '72 bpm', spo2: '99%', weight: '69 kg' },
          diagnosis: 'Bronchial asthma — well controlled',
          prescription: [{ medicine: 'Budesonide inhaler', dosage: '100mcg', frequency: 'BD' }, { medicine: 'Montelukast', dosage: '10mg', frequency: 'OD at night' }],
          tests_ordered: ['PFT — follow-up'],
          follow_up: '3 months',
          notes: 'Well controlled. Stepped down inhaler dose. Can exercise normally. Flu vaccine advised.'
        },
        doctor: 'Dr. Suresh'
      }
    ],
    ai_insights: [
      {
        type: 'positive',
        title: 'Asthma Well Controlled',
        detail: 'SpO2: 94% → 98% → 99%. No night symptoms.',
        recommendation: 'Step-down therapy successful. Continue monitoring.'
      }
    ]
  }
];

// Helper functions
function getPatientById(id) {
  return PATIENTS.find(p => p.id === id);
}

function getStatusColor(status) {
  const colors = {
    critical: '#ef4444',
    monitoring: '#FFB800',
    stable: '#22c55e'
  };
  return colors[status] || '#7a95ab';
}

function getStatusLabel(status) {
  const labels = {
    critical: 'Needs Attention',
    monitoring: 'Monitoring',
    stable: 'Stable'
  };
  return labels[status] || status;
}

function getTagClass(tag_type) {
  const classes = {
    routine: 'tag-routine',
    followup: 'tag-followup',
    urgent: 'tag-urgent'
  };
  return classes[tag_type] || 'tag-routine';
}

function getInsightIcon(type) {
  const icons = {
    alert: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    pattern: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFB800" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
    positive: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  };
  return icons[type] || icons.pattern;
}
