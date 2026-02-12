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
  },
  // ═══════════════════════════════════════════
  // NEW PATIENT — No visit history (first visit today)
  // ═══════════════════════════════════════════
  {
    id: 'P006',
    name: 'Kavitha N.',
    age: 35,
    gender: 'Female',
    blood_group: 'A-',
    phone: '+91 99887 65432',
    language: 'ta-IN',
    language_name: 'Tamil',
    conditions: ['Migraine'],
    last_visit: 'New Patient',
    status: 'stable',
    visits: [],
    ai_insights: []
  },
  {
    id: 'P007',
    name: 'Arjun D.',
    age: 42,
    gender: 'Male',
    blood_group: 'B+',
    phone: '+91 98123 45678',
    language: 'hi-IN',
    language_name: 'Hindi',
    conditions: ['Chronic Gastritis', 'Acid Reflux'],
    last_visit: '20 Jan 2025',
    status: 'monitoring',
    visits: [
      {
        visit_number: 1,
        date: '2024-11-05',
        date_display: '05 Nov 2024',
        tag: 'Epigastric pain',
        tag_type: 'urgent',
        details: {
          symptoms: ['Burning pain in upper abdomen', 'Nausea after meals', 'Bloating'],
          vitals: { bp: '122/78', pulse: '76 bpm', weight: '78 kg' },
          diagnosis: 'Acute gastritis — likely H. pylori',
          prescription: [{ medicine: 'Pantoprazole', dosage: '40mg', frequency: 'OD before breakfast' }, { medicine: 'Domperidone', dosage: '10mg', frequency: 'TDS' }],
          tests_ordered: ['H. pylori stool antigen', 'Upper GI endoscopy'],
          follow_up: '2 weeks',
          notes: 'Avoid spicy food, alcohol. Endoscopy scheduled. H. pylori test pending.'
        },
        doctor: 'Dr. Suresh'
      },
      {
        visit_number: 2,
        date: '2025-01-20',
        date_display: '20 Jan 2025',
        tag: 'Endoscopy results',
        tag_type: 'followup',
        details: {
          symptoms: ['Pain reduced', 'Occasional acidity', 'Appetite improved'],
          vitals: { bp: '120/76', pulse: '74 bpm', weight: '77 kg' },
          diagnosis: 'Chronic gastritis — H. pylori positive',
          prescription: [{ medicine: 'Pantoprazole', dosage: '40mg', frequency: 'BD' }, { medicine: 'Amoxicillin', dosage: '1g', frequency: 'BD x 14 days' }, { medicine: 'Clarithromycin', dosage: '500mg', frequency: 'BD x 14 days' }],
          tests_ordered: ['H. pylori retest after 4 weeks'],
          follow_up: '1 month',
          notes: 'H. pylori positive. Triple therapy started. Endoscopy shows mild gastritis, no ulcer.'
        },
        doctor: 'Dr. Suresh'
      }
    ],
    ai_insights: [
      {
        type: 'pattern',
        title: 'H. pylori Treatment',
        detail: 'Triple therapy started Jan 2025. Retest due in Feb 2025.',
        recommendation: 'Ensure completion of 14-day antibiotic course. Retest for eradication.'
      }
    ]
  },
  // ═══════════════════════════════════════════
  // NEW PATIENT — No visit history
  // ═══════════════════════════════════════════
  {
    id: 'P008',
    name: 'Meena B.',
    age: 55,
    gender: 'Female',
    blood_group: 'O+',
    phone: '+91 97654 33210',
    language: 'kn-IN',
    language_name: 'Kannada',
    conditions: ['Joint Pain'],
    last_visit: 'New Patient',
    status: 'stable',
    visits: [],
    ai_insights: []
  },
  {
    id: 'P009',
    name: 'Ravi T.',
    age: 48,
    gender: 'Male',
    blood_group: 'AB-',
    phone: '+91 99001 22334',
    language: 'te-IN',
    language_name: 'Telugu',
    conditions: ['Cardiac Arrhythmia', 'Palpitations'],
    last_visit: '28 Jan 2025',
    status: 'critical',
    visits: [
      {
        visit_number: 1,
        date: '2025-01-28',
        date_display: '28 Jan 2025',
        tag: 'Palpitations — urgent',
        tag_type: 'urgent',
        details: {
          symptoms: ['Irregular heartbeat', 'Palpitations at rest', 'Mild dizziness', 'Fatigue'],
          vitals: { bp: '138/88', pulse: '110 bpm (irregular)', weight: '82 kg' },
          diagnosis: 'Atrial fibrillation — new onset',
          prescription: [{ medicine: 'Metoprolol', dosage: '25mg', frequency: 'BD' }, { medicine: 'Apixaban', dosage: '5mg', frequency: 'BD' }],
          tests_ordered: ['ECG', '2D Echo', 'Thyroid profile', 'Holter monitor 24hr'],
          follow_up: '2 weeks',
          notes: 'ECG shows AF with rapid ventricular response. Rate control started. Anticoagulation started. Cardiology referral made.'
        },
        doctor: 'Dr. Suresh'
      }
    ],
    ai_insights: [
      {
        type: 'alert',
        title: 'New-onset Atrial Fibrillation',
        detail: 'Irregular pulse 110 bpm. On anticoagulation.',
        recommendation: 'Cardiology follow-up critical. Monitor for stroke risk (CHA2DS2-VASc).'
      }
    ]
  },
  {
    id: 'P010',
    name: 'Sunita G.',
    age: 32,
    gender: 'Female',
    blood_group: 'A+',
    phone: '+91 98456 77890',
    language: 'mr-IN',
    language_name: 'Marathi',
    conditions: ['PCOS', 'Anxiety'],
    last_visit: '15 Jan 2025',
    status: 'monitoring',
    visits: [
      {
        visit_number: 1,
        date: '2024-10-20',
        date_display: '20 Oct 2024',
        tag: 'Irregular periods',
        tag_type: 'routine',
        details: {
          symptoms: ['Irregular periods', 'Weight gain', 'Acne', 'Mood swings'],
          vitals: { bp: '118/74', pulse: '78 bpm', weight: '72 kg' },
          diagnosis: 'Polycystic Ovary Syndrome (PCOS)',
          prescription: [{ medicine: 'Metformin', dosage: '500mg', frequency: 'BD' }, { medicine: 'Oral contraceptive pill', dosage: 'Low dose', frequency: 'Cyclical' }],
          tests_ordered: ['Hormonal panel (FSH, LH, Testosterone)', 'Pelvic ultrasound', 'Fasting insulin'],
          follow_up: '2 months',
          notes: 'USG confirms bilateral polycystic ovaries. LH:FSH ratio 2.5:1. Insulin resistance present. Lifestyle modification advised.'
        },
        doctor: 'Dr. Kavitha'
      },
      {
        visit_number: 2,
        date: '2025-01-15',
        date_display: '15 Jan 2025',
        tag: 'Follow-up + anxiety',
        tag_type: 'followup',
        details: {
          symptoms: ['Periods more regular', 'Persistent anxiety', 'Sleep disturbance', 'Acne improved'],
          vitals: { bp: '116/72', pulse: '82 bpm', weight: '70 kg' },
          diagnosis: 'PCOS — improving; Generalized anxiety disorder',
          prescription: [{ medicine: 'Metformin', dosage: '500mg', frequency: 'BD' }, { medicine: 'Escitalopram', dosage: '5mg', frequency: 'OD' }],
          tests_ordered: ['Hormonal panel repeat'],
          follow_up: '6 weeks',
          notes: 'PCOS improving with treatment. Weight loss 2 kg. New complaint of anxiety — started low-dose SSRI. Counseling referral made.'
        },
        doctor: 'Dr. Kavitha'
      }
    ],
    ai_insights: [
      {
        type: 'positive',
        title: 'PCOS Responding to Treatment',
        detail: 'Weight loss 2 kg. Periods regularizing.',
        recommendation: 'Continue Metformin. Monitor hormonal panel.'
      },
      {
        type: 'pattern',
        title: 'New Anxiety Symptoms',
        detail: 'Anxiety and sleep disturbance reported in last visit',
        recommendation: 'Monitor SSRI response. Follow up in 6 weeks.'
      }
    ]
  },
  // ═══════════════════════════════════════════
  // PATIENTS P011–P020
  // ═══════════════════════════════════════════
  {
    id: 'P011',
    name: 'Deepak S.',
    age: 58,
    gender: 'Male',
    blood_group: 'A+',
    phone: '+91 99112 33445',
    language: 'hi-IN',
    language_name: 'Hindi',
    conditions: ['Chronic Kidney Disease', 'Hypertension'],
    last_visit: '02 Feb 2025',
    status: 'critical',
    visits: [
      {
        visit_number: 1,
        date: '2024-11-10',
        date_display: '10 Nov 2024',
        tag: 'Elevated creatinine',
        tag_type: 'urgent',
        details: {
          symptoms: ['Fatigue', 'Swelling in legs', 'Reduced urine output', 'Loss of appetite'],
          vitals: { bp: '158/98', pulse: '82 bpm', weight: '80 kg' },
          diagnosis: 'Chronic Kidney Disease Stage 3 — newly diagnosed',
          prescription: [{ medicine: 'Telmisartan', dosage: '40mg', frequency: 'OD' }, { medicine: 'Furosemide', dosage: '40mg', frequency: 'OD' }],
          tests_ordered: ['Serum creatinine', 'BUN', 'eGFR', 'Urine albumin', 'Renal ultrasound'],
          follow_up: '1 month',
          notes: 'Creatinine: 2.8 mg/dL. eGFR: 38. Strict BP control. Low protein diet. Nephrology referral.'
        },
        doctor: 'Dr. Suresh'
      },
      {
        visit_number: 2,
        date: '2025-02-02',
        date_display: '02 Feb 2025',
        tag: 'CKD monitoring',
        tag_type: 'followup',
        details: {
          symptoms: ['Swelling reduced', 'Still fatigued', 'Nocturia'],
          vitals: { bp: '148/92', pulse: '78 bpm', weight: '78 kg' },
          diagnosis: 'CKD Stage 3 — partial response to treatment',
          prescription: [{ medicine: 'Telmisartan', dosage: '80mg', frequency: 'OD' }, { medicine: 'Furosemide', dosage: '40mg', frequency: 'OD' }, { medicine: 'Sodium bicarbonate', dosage: '500mg', frequency: 'TDS' }],
          tests_ordered: ['Serum creatinine', 'Electrolytes', 'Urine protein'],
          follow_up: '3 weeks',
          notes: 'Creatinine: 2.5 (slight improvement). BP still high — dose increased. Weight down 2 kg. Nephro appointment pending.'
        },
        doctor: 'Dr. Suresh'
      }
    ],
    ai_insights: [
      {
        type: 'alert',
        title: 'CKD Stage 3 — Close Monitoring',
        detail: 'Creatinine 2.8 → 2.5. eGFR borderline.',
        recommendation: 'Ensure nephrology follow-up. Monitor potassium and bicarbonate levels.'
      },
      {
        type: 'pattern',
        title: 'Persistent Hypertension',
        detail: 'BP 158/98 → 148/92 despite treatment escalation',
        recommendation: 'Consider adding calcium channel blocker if BP not controlled at next visit.'
      }
    ]
  },
  {
    id: 'P012',
    name: 'Anjali K.',
    age: 29,
    gender: 'Female',
    blood_group: 'B-',
    phone: '+91 98334 55667',
    language: 'kn-IN',
    language_name: 'Kannada',
    conditions: ['Iron Deficiency Anemia'],
    last_visit: '25 Jan 2025',
    status: 'stable',
    visits: [
      {
        visit_number: 1,
        date: '2024-10-15',
        date_display: '15 Oct 2024',
        tag: 'Fatigue workup',
        tag_type: 'routine',
        details: {
          symptoms: ['Extreme fatigue', 'Pale skin', 'Brittle nails', 'Hair fall'],
          vitals: { bp: '100/65', pulse: '92 bpm', weight: '52 kg' },
          diagnosis: 'Iron deficiency anemia — Hb 8.2 g/dL',
          prescription: [{ medicine: 'Ferrous sulfate', dosage: '200mg', frequency: 'BD with Vitamin C' }],
          tests_ordered: ['CBC', 'Serum iron', 'Ferritin', 'TIBC', 'Peripheral smear'],
          follow_up: '6 weeks',
          notes: 'Hb: 8.2. Ferritin: 5 (very low). Microcytic hypochromic anemia. Iron supplementation started. Dietary counseling given.'
        },
        doctor: 'Dr. Kavitha'
      },
      {
        visit_number: 2,
        date: '2025-01-25',
        date_display: '25 Jan 2025',
        tag: 'Anemia improving',
        tag_type: 'routine',
        details: {
          symptoms: ['Less fatigue', 'Nails stronger', 'Better appetite'],
          vitals: { bp: '108/70', pulse: '80 bpm', weight: '54 kg' },
          diagnosis: 'Iron deficiency anemia — improving',
          prescription: [{ medicine: 'Ferrous sulfate', dosage: '200mg', frequency: 'OD with Vitamin C' }],
          tests_ordered: ['CBC', 'Ferritin'],
          follow_up: '3 months',
          notes: 'Hb: 10.8 (up from 8.2). Ferritin: 18. Good improvement. Continue supplements for 3 more months. Weight gain 2 kg.'
        },
        doctor: 'Dr. Kavitha'
      }
    ],
    ai_insights: [
      {
        type: 'positive',
        title: 'Anemia Responding Well',
        detail: 'Hb: 8.2 → 10.8 g/dL in 3 months',
        recommendation: 'Continue iron supplements. Target Hb > 12 and Ferritin > 50.'
      }
    ]
  },
  {
    id: 'P013',
    name: 'Mohammed R.',
    age: 65,
    gender: 'Male',
    blood_group: 'O+',
    phone: '+91 99556 77889',
    language: 'te-IN',
    language_name: 'Telugu',
    conditions: ['COPD', 'Ex-smoker'],
    last_visit: '30 Jan 2025',
    status: 'critical',
    visits: [
      {
        visit_number: 1,
        date: '2024-06-20',
        date_display: '20 Jun 2024',
        tag: 'Chronic cough workup',
        tag_type: 'routine',
        details: {
          symptoms: ['Chronic productive cough', 'Breathlessness on exertion', 'Wheezing'],
          vitals: { bp: '134/86', pulse: '88 bpm', spo2: '92%', weight: '70 kg' },
          diagnosis: 'COPD — moderate (GOLD Stage 2)',
          prescription: [{ medicine: 'Tiotropium inhaler', dosage: '18mcg', frequency: 'OD' }, { medicine: 'Salbutamol inhaler', dosage: '100mcg', frequency: 'SOS' }],
          tests_ordered: ['Spirometry', 'Chest X-ray', 'ABG'],
          follow_up: '2 months',
          notes: 'FEV1: 58% predicted. 30 pack-year smoking history, quit 2 years ago. Smoking cessation reinforced. Pulmonary rehab advised.'
        },
        doctor: 'Dr. Rajesh'
      },
      {
        visit_number: 2,
        date: '2024-09-15',
        date_display: '15 Sep 2024',
        tag: 'Exacerbation',
        tag_type: 'urgent',
        details: {
          symptoms: ['Worsening breathlessness', 'Yellow sputum', 'Fever 100.4°F', 'Chest tightness'],
          vitals: { bp: '140/88', pulse: '96 bpm', spo2: '88%', weight: '69 kg' },
          diagnosis: 'Acute exacerbation of COPD — infective',
          prescription: [{ medicine: 'Amoxicillin-Clavulanate', dosage: '625mg', frequency: 'TDS x 7 days' }, { medicine: 'Prednisolone', dosage: '40mg', frequency: 'OD x 5 days' }, { medicine: 'Nebulization', dosage: 'Salbutamol + Ipratropium', frequency: 'QID' }],
          tests_ordered: ['Sputum culture', 'CBC', 'CRP'],
          follow_up: '1 week',
          notes: 'SpO2 dropped to 88%. Oral steroids + antibiotics started. Home oxygen discussed. Avoid cold air exposure.'
        },
        doctor: 'Dr. Rajesh'
      },
      {
        visit_number: 3,
        date: '2025-01-30',
        date_display: '30 Jan 2025',
        tag: 'Stable post-exacerbation',
        tag_type: 'followup',
        details: {
          symptoms: ['Mild breathlessness on stairs', 'Occasional cough', 'No fever'],
          vitals: { bp: '132/84', pulse: '82 bpm', spo2: '93%', weight: '68 kg' },
          diagnosis: 'COPD — stable post-exacerbation',
          prescription: [{ medicine: 'Tiotropium inhaler', dosage: '18mcg', frequency: 'OD' }, { medicine: 'Formoterol + Budesonide inhaler', dosage: '200/6mcg', frequency: 'BD' }],
          tests_ordered: ['Spirometry — follow-up', 'Chest X-ray'],
          follow_up: '2 months',
          notes: 'SpO2 improved to 93%. Added ICS/LABA combination. Flu and pneumococcal vaccines given. Pulmonary rehab ongoing.'
        },
        doctor: 'Dr. Rajesh'
      }
    ],
    ai_insights: [
      {
        type: 'alert',
        title: 'COPD — Exacerbation Risk',
        detail: '1 severe exacerbation in past 6 months. SpO2 fluctuating 88-93%.',
        recommendation: 'Consider home oxygen assessment. Ensure annual flu and pneumococcal vaccination.'
      },
      {
        type: 'pattern',
        title: 'Declining Lung Function',
        detail: 'FEV1 58% at baseline. Post-exacerbation recovery slow.',
        recommendation: 'Follow-up spirometry to assess trend. Pulmonary rehab compliance important.'
      }
    ]
  },
  {
    id: 'P014',
    name: 'Divya P.',
    age: 40,
    gender: 'Female',
    blood_group: 'AB+',
    phone: '+91 97788 11223',
    language: 'ta-IN',
    language_name: 'Tamil',
    conditions: ['Rheumatoid Arthritis'],
    last_visit: '05 Feb 2025',
    status: 'monitoring',
    visits: [
      {
        visit_number: 1,
        date: '2024-09-10',
        date_display: '10 Sep 2024',
        tag: 'Joint pain — bilateral',
        tag_type: 'routine',
        details: {
          symptoms: ['Morning stiffness > 1 hour', 'Swollen finger joints', 'Fatigue', 'Symmetric joint pain'],
          vitals: { bp: '118/76', pulse: '78 bpm', weight: '62 kg' },
          diagnosis: 'Rheumatoid Arthritis — new diagnosis',
          prescription: [{ medicine: 'Methotrexate', dosage: '10mg', frequency: 'Weekly' }, { medicine: 'Folic acid', dosage: '5mg', frequency: '6 days/week' }, { medicine: 'Hydroxychloroquine', dosage: '200mg', frequency: 'BD' }],
          tests_ordered: ['RF factor', 'Anti-CCP', 'ESR', 'CRP', 'Hand X-ray bilateral'],
          follow_up: '6 weeks',
          notes: 'RF positive. Anti-CCP positive. ESR: 48. DMARDs started. Rheumatology referral for biologic assessment.'
        },
        doctor: 'Dr. Kavitha'
      },
      {
        visit_number: 2,
        date: '2025-02-05',
        date_display: '05 Feb 2025',
        tag: 'RA — partial response',
        tag_type: 'followup',
        details: {
          symptoms: ['Stiffness reduced to 30 min', 'Swelling improved', 'Still has pain in wrists'],
          vitals: { bp: '116/74', pulse: '76 bpm', weight: '61 kg' },
          diagnosis: 'RA — partial response to DMARDs',
          prescription: [{ medicine: 'Methotrexate', dosage: '15mg', frequency: 'Weekly' }, { medicine: 'Folic acid', dosage: '5mg', frequency: '6 days/week' }, { medicine: 'Hydroxychloroquine', dosage: '200mg', frequency: 'BD' }],
          tests_ordered: ['ESR', 'CRP', 'LFT', 'CBC'],
          follow_up: '2 months',
          notes: 'ESR: 28 (improved from 48). MTX dose increased. LFT normal — safe to continue. Rheumatology follow-up for biologic consideration.'
        },
        doctor: 'Dr. Kavitha'
      }
    ],
    ai_insights: [
      {
        type: 'pattern',
        title: 'RA Partially Responding',
        detail: 'ESR: 48 → 28. Morning stiffness reduced but wrist pain persists.',
        recommendation: 'If inadequate response at 3 months, consider biologic DMARD.'
      }
    ]
  },
  {
    id: 'P015',
    name: 'Suresh V.',
    age: 50,
    gender: 'Male',
    blood_group: 'B+',
    phone: '+91 98223 44556',
    language: 'mr-IN',
    language_name: 'Marathi',
    conditions: ['Fatty Liver', 'Dyslipidemia'],
    last_visit: '12 Jan 2025',
    status: 'monitoring',
    visits: [
      {
        visit_number: 1,
        date: '2025-01-12',
        date_display: '12 Jan 2025',
        tag: 'Abnormal LFT',
        tag_type: 'followup',
        details: {
          symptoms: ['No symptoms', 'Incidental finding on health check', 'Sedentary lifestyle'],
          vitals: { bp: '130/86', pulse: '76 bpm', weight: '92 kg' },
          diagnosis: 'Non-alcoholic fatty liver disease (NAFLD) Grade 2 + Dyslipidemia',
          prescription: [{ medicine: 'Atorvastatin', dosage: '20mg', frequency: 'OD at night' }, { medicine: 'Ursodeoxycholic acid', dosage: '300mg', frequency: 'BD' }],
          tests_ordered: ['LFT', 'Lipid profile', 'Fasting glucose', 'HbA1c', 'Liver ultrasound'],
          follow_up: '2 months',
          notes: 'USG: Grade 2 fatty liver. LDL: 168. Triglycerides: 220. ALT: 62. BMI: 31.2. Strict diet and exercise plan. Target weight loss 5 kg in 3 months.'
        },
        doctor: 'Dr. Suresh'
      }
    ],
    ai_insights: [
      {
        type: 'alert',
        title: 'NAFLD + Metabolic Risk',
        detail: 'BMI 31.2, high LDL and triglycerides, elevated ALT.',
        recommendation: 'Lifestyle modification critical. Monitor for insulin resistance. Recheck LFT in 2 months.'
      }
    ]
  },
  // ═══════════════════════════════════════════
  // NEW PATIENT — No visit history
  // ═══════════════════════════════════════════
  {
    id: 'P016',
    name: 'Padma L.',
    age: 62,
    gender: 'Female',
    blood_group: 'O-',
    phone: '+91 99667 88990',
    language: 'kn-IN',
    language_name: 'Kannada',
    conditions: ['Osteoporosis'],
    last_visit: 'New Patient',
    status: 'stable',
    visits: [],
    ai_insights: []
  },
  {
    id: 'P017',
    name: 'Rajesh M.',
    age: 45,
    gender: 'Male',
    blood_group: 'A+',
    phone: '+91 98001 22334',
    language: 'hi-IN',
    language_name: 'Hindi',
    conditions: ['Peptic Ulcer', 'GERD'],
    last_visit: '18 Jan 2025',
    status: 'stable',
    visits: [
      {
        visit_number: 1,
        date: '2024-08-20',
        date_display: '20 Aug 2024',
        tag: 'Epigastric pain — severe',
        tag_type: 'urgent',
        details: {
          symptoms: ['Severe burning pain after meals', 'Nausea', 'Vomiting blood (small amount)', 'Heartburn'],
          vitals: { bp: '126/82', pulse: '88 bpm', weight: '74 kg' },
          diagnosis: 'Peptic ulcer — confirmed on endoscopy',
          prescription: [{ medicine: 'Esomeprazole', dosage: '40mg', frequency: 'BD' }, { medicine: 'Sucralfate', dosage: '1g', frequency: 'QID before meals' }],
          tests_ordered: ['Upper GI endoscopy', 'H. pylori CLO test', 'CBC', 'Stool occult blood'],
          follow_up: '4 weeks',
          notes: 'Endoscopy: 1.5 cm duodenal ulcer. H. pylori negative. No malignancy. PPI started. Avoid NSAIDs, spicy food, alcohol.'
        },
        doctor: 'Dr. Suresh'
      },
      {
        visit_number: 2,
        date: '2025-01-18',
        date_display: '18 Jan 2025',
        tag: 'Ulcer healed',
        tag_type: 'routine',
        details: {
          symptoms: ['No pain', 'Appetite normal', 'No heartburn'],
          vitals: { bp: '122/78', pulse: '74 bpm', weight: '75 kg' },
          diagnosis: 'Peptic ulcer — healed; GERD — controlled',
          prescription: [{ medicine: 'Esomeprazole', dosage: '20mg', frequency: 'OD' }],
          tests_ordered: ['Follow-up endoscopy if symptoms recur'],
          follow_up: '6 months',
          notes: 'Repeat endoscopy shows healed ulcer. Step down to maintenance PPI. Lifestyle modifications continued.'
        },
        doctor: 'Dr. Suresh'
      }
    ],
    ai_insights: [
      {
        type: 'positive',
        title: 'Ulcer Healed',
        detail: 'Duodenal ulcer healed on follow-up endoscopy.',
        recommendation: 'Maintenance PPI. Avoid NSAIDs. Follow up if symptoms recur.'
      }
    ]
  },
  {
    id: 'P018',
    name: 'Fatima B.',
    age: 33,
    gender: 'Female',
    blood_group: 'B+',
    phone: '+91 98445 66778',
    language: 'ta-IN',
    language_name: 'Tamil',
    conditions: ['Hyperthyroidism', 'Weight Loss'],
    last_visit: '08 Feb 2025',
    status: 'monitoring',
    visits: [
      {
        visit_number: 1,
        date: '2025-02-08',
        date_display: '08 Feb 2025',
        tag: 'Thyroid — overactive',
        tag_type: 'urgent',
        details: {
          symptoms: ['Unexplained weight loss (5 kg in 2 months)', 'Tremors', 'Palpitations', 'Heat intolerance', 'Anxiety'],
          vitals: { bp: '136/78', pulse: '108 bpm', weight: '48 kg' },
          diagnosis: 'Graves disease — hyperthyroidism',
          prescription: [{ medicine: 'Carbimazole', dosage: '15mg', frequency: 'TDS' }, { medicine: 'Propranolol', dosage: '20mg', frequency: 'TDS' }],
          tests_ordered: ['TSH', 'Free T3', 'Free T4', 'TSH receptor antibodies', 'Thyroid ultrasound'],
          follow_up: '3 weeks',
          notes: 'TSH: 0.01 (suppressed). Free T4: 4.8 (high). TRAb positive. Graves disease confirmed. Anti-thyroid medication started. Beta-blocker for symptom control.'
        },
        doctor: 'Dr. Kavitha'
      }
    ],
    ai_insights: [
      {
        type: 'alert',
        title: 'Graves Disease — New Diagnosis',
        detail: 'TSH suppressed, high Free T4. TRAb positive. Pulse 108 bpm.',
        recommendation: 'Close monitoring of thyroid function in 3 weeks. Watch for agranulocytosis with carbimazole.'
      }
    ]
  },
  {
    id: 'P019',
    name: 'Ganesh N.',
    age: 55,
    gender: 'Male',
    blood_group: 'A-',
    phone: '+91 99334 55667',
    language: 'te-IN',
    language_name: 'Telugu',
    conditions: ['Diabetic Retinopathy', 'Type 2 Diabetes'],
    last_visit: '01 Feb 2025',
    status: 'critical',
    visits: [
      {
        visit_number: 1,
        date: '2024-07-15',
        date_display: '15 Jul 2024',
        tag: 'Diabetes + vision complaints',
        tag_type: 'followup',
        details: {
          symptoms: ['Blurred vision', 'Floaters', 'Known diabetic (10 years)', 'Tingling in feet'],
          vitals: { bp: '142/88', pulse: '80 bpm', weight: '82 kg' },
          diagnosis: 'Moderate non-proliferative diabetic retinopathy + Uncontrolled T2DM',
          prescription: [{ medicine: 'Insulin Glargine', dosage: '20 units', frequency: 'OD at bedtime' }, { medicine: 'Metformin', dosage: '1000mg', frequency: 'BD' }],
          tests_ordered: ['HbA1c', 'Fundoscopy', 'OCT macula', 'Renal function test'],
          follow_up: '2 months',
          notes: 'HbA1c: 9.4%. Fundoscopy: moderate NPDR with macular edema. Started insulin. Ophthalmology referral for anti-VEGF consideration.'
        },
        doctor: 'Dr. Suresh'
      },
      {
        visit_number: 2,
        date: '2025-02-01',
        date_display: '01 Feb 2025',
        tag: 'Retinopathy — worsening',
        tag_type: 'urgent',
        details: {
          symptoms: ['Vision deteriorated', 'Dark spots in vision', 'Numbness spreading to calves'],
          vitals: { bp: '148/92', pulse: '84 bpm', weight: '80 kg' },
          diagnosis: 'Severe NPDR approaching proliferative stage + Diabetic neuropathy',
          prescription: [{ medicine: 'Insulin Glargine', dosage: '26 units', frequency: 'OD at bedtime' }, { medicine: 'Metformin', dosage: '1000mg', frequency: 'BD' }, { medicine: 'Pregabalin', dosage: '75mg', frequency: 'BD' }],
          tests_ordered: ['HbA1c', 'Fundus fluorescein angiography', 'Nerve conduction study'],
          follow_up: '1 month',
          notes: 'HbA1c: 8.6% (improved but not at target). Retinopathy progressing — urgent ophthalmology. Anti-VEGF injection scheduled. Neuropathy now Grade 2.'
        },
        doctor: 'Dr. Suresh'
      }
    ],
    ai_insights: [
      {
        type: 'alert',
        title: 'Diabetic Retinopathy Progressing',
        detail: 'NPDR moderate → severe in 6 months despite glycemic improvement.',
        recommendation: 'Urgent ophthalmology follow-up for anti-VEGF. Strict HbA1c target < 7%.'
      },
      {
        type: 'pattern',
        title: 'Multi-organ Diabetic Complications',
        detail: 'Retinopathy, neuropathy, and borderline nephropathy all present.',
        recommendation: 'Comprehensive diabetic complication screening every 6 months.'
      }
    ]
  },
  // ═══════════════════════════════════════════
  // NEW PATIENT — No visit history
  // ═══════════════════════════════════════════
  {
    id: 'P020',
    name: 'Asha D.',
    age: 27,
    gender: 'Female',
    blood_group: 'O+',
    phone: '+91 98776 54321',
    language: 'mr-IN',
    language_name: 'Marathi',
    conditions: ['Depression', 'Insomnia'],
    last_visit: 'New Patient',
    status: 'monitoring',
    visits: [],
    ai_insights: []
  }
];

// ═══════════════════════════════════════════
// APPOINTMENT SCHEDULE (next few weeks)
// ═══════════════════════════════════════════

function generateAppointments() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const appointments = [
    // ── Today (always has the most) ──────────
    { patient_id: 'P001', time: '09:00', reason: 'BP follow-up — 2 week check', type: 'followup', status: 'scheduled' },
    { patient_id: 'P006', time: '09:30', reason: 'New patient — migraine evaluation', type: 'routine', status: 'scheduled' },
    { patient_id: 'P005', time: '10:30', reason: 'Asthma review — PFT results', type: 'routine', status: 'scheduled' },
    { patient_id: 'P009', time: '11:00', reason: 'AF follow-up — Holter results', type: 'urgent', status: 'scheduled' },
    { patient_id: 'P019', time: '11:30', reason: 'Retinopathy — anti-VEGF follow-up', type: 'urgent', status: 'scheduled' },
    { patient_id: 'P002', time: '14:00', reason: 'Diabetes check — HbA1c review', type: 'followup', status: 'scheduled' },
    { patient_id: 'P018', time: '15:00', reason: 'Thyroid — 3 week recheck', type: 'followup', status: 'scheduled' },

    // ── Tomorrow ─────────────────────────────
    { patient_id: 'P004', time: '09:30', reason: 'Knee pain — HA injection right knee', type: 'followup', daysFromToday: 1, status: 'scheduled' },
    { patient_id: 'P007', time: '10:00', reason: 'H. pylori retest results', type: 'followup', daysFromToday: 1, status: 'scheduled' },
    { patient_id: 'P011', time: '10:30', reason: 'CKD — electrolyte review', type: 'urgent', daysFromToday: 1, status: 'scheduled' },
    { patient_id: 'P003', time: '11:00', reason: 'Back pain — 3 month review', type: 'routine', daysFromToday: 1, status: 'scheduled' },
    { patient_id: 'P010', time: '14:30', reason: 'PCOS follow-up — hormonal panel', type: 'followup', daysFromToday: 1, status: 'scheduled' },
    { patient_id: 'P015', time: '15:00', reason: 'Fatty liver — lifestyle review', type: 'followup', daysFromToday: 1, status: 'scheduled' },

    // ── Day +2 ───────────────────────────────
    { patient_id: 'P001', time: '10:00', reason: 'Renal function test results', type: 'urgent', daysFromToday: 2, status: 'scheduled' },
    { patient_id: 'P008', time: '11:00', reason: 'New patient — joint pain evaluation', type: 'routine', daysFromToday: 2, status: 'scheduled' },
    { patient_id: 'P014', time: '12:00', reason: 'RA — LFT check for methotrexate', type: 'followup', daysFromToday: 2, status: 'scheduled' },
    { patient_id: 'P010', time: '14:00', reason: 'Anxiety — SSRI response check', type: 'followup', daysFromToday: 2, status: 'scheduled' },
    { patient_id: 'P012', time: '15:00', reason: 'Anemia — ferritin recheck', type: 'routine', daysFromToday: 2, status: 'scheduled' },

    // ── Day +3 ───────────────────────────────
    { patient_id: 'P006', time: '09:00', reason: 'Migraine — MRI results review', type: 'followup', daysFromToday: 3, status: 'scheduled' },
    { patient_id: 'P017', time: '09:30', reason: 'Peptic ulcer — maintenance review', type: 'routine', daysFromToday: 3, status: 'scheduled' },
    { patient_id: 'P009', time: '10:30', reason: 'ECG + Echo report review', type: 'urgent', daysFromToday: 3, status: 'scheduled' },
    { patient_id: 'P007', time: '11:30', reason: 'Gastritis — symptom review', type: 'routine', daysFromToday: 3, status: 'scheduled' },
    { patient_id: 'P020', time: '14:30', reason: 'New patient — depression screening', type: 'routine', daysFromToday: 3, status: 'scheduled' },

    // ── Day +4 ───────────────────────────────
    { patient_id: 'P002', time: '09:00', reason: 'Nerve conduction study review', type: 'followup', daysFromToday: 4, status: 'scheduled' },
    { patient_id: 'P005', time: '11:00', reason: 'Flu vaccine administration', type: 'routine', daysFromToday: 4, status: 'scheduled' },
    { patient_id: 'P004', time: '14:00', reason: 'Knee X-ray results', type: 'followup', daysFromToday: 4, status: 'scheduled' },

    // ── Day +5 ───────────────────────────────
    { patient_id: 'P008', time: '09:30', reason: 'Joint pain — lab results review', type: 'followup', daysFromToday: 5, status: 'scheduled' },
    { patient_id: 'P003', time: '10:30', reason: 'Physiotherapy progress check', type: 'routine', daysFromToday: 5, status: 'scheduled' },
    { patient_id: 'P013', time: '14:00', reason: 'COPD — spirometry follow-up', type: 'followup', daysFromToday: 5, status: 'scheduled' },

    // ── Next week ────────────────────────────
    { patient_id: 'P004', time: '10:00', reason: 'Knee injection follow-up', type: 'followup', daysFromToday: 7, status: 'scheduled' },
    { patient_id: 'P001', time: '14:30', reason: '24hr BP monitoring review', type: 'urgent', daysFromToday: 7, status: 'scheduled' },
    { patient_id: 'P011', time: '09:00', reason: 'CKD — creatinine recheck', type: 'urgent', daysFromToday: 7, status: 'scheduled' },
    { patient_id: 'P016', time: '11:00', reason: 'New patient — osteoporosis evaluation', type: 'routine', daysFromToday: 7, status: 'scheduled' },
    { patient_id: 'P009', time: '09:00', reason: 'Cardiology referral follow-up', type: 'urgent', daysFromToday: 8, status: 'scheduled' },
    { patient_id: 'P018', time: '10:30', reason: 'Thyroid — carbimazole response', type: 'followup', daysFromToday: 8, status: 'scheduled' },
    { patient_id: 'P020', time: '14:00', reason: 'New patient — depression + insomnia', type: 'routine', daysFromToday: 8, status: 'scheduled' },
    { patient_id: 'P006', time: '11:00', reason: 'Migraine — preventive therapy check', type: 'followup', daysFromToday: 9, status: 'scheduled' },
    { patient_id: 'P014', time: '09:30', reason: 'RA — methotrexate response', type: 'followup', daysFromToday: 9, status: 'scheduled' },
    { patient_id: 'P019', time: '14:30', reason: 'Diabetic retinopathy — post anti-VEGF', type: 'urgent', daysFromToday: 9, status: 'scheduled' },
    { patient_id: 'P002', time: '10:00', reason: 'Diabetes — medication review', type: 'followup', daysFromToday: 10, status: 'scheduled' },
    { patient_id: 'P015', time: '11:30', reason: 'Fatty liver — LFT recheck', type: 'followup', daysFromToday: 10, status: 'scheduled' },
    { patient_id: 'P012', time: '09:00', reason: 'Anemia — CBC follow-up', type: 'routine', daysFromToday: 11, status: 'scheduled' },
    { patient_id: 'P017', time: '10:30', reason: 'Ulcer — maintenance check', type: 'routine', daysFromToday: 11, status: 'scheduled' },
    { patient_id: 'P004', time: '15:00', reason: 'TSH recheck + ortho referral', type: 'followup', daysFromToday: 14, status: 'scheduled' },
    { patient_id: 'P011', time: '09:30', reason: 'Nephrology referral follow-up', type: 'urgent', daysFromToday: 14, status: 'scheduled' },
    { patient_id: 'P013', time: '11:00', reason: 'COPD — chest X-ray review', type: 'followup', daysFromToday: 14, status: 'scheduled' },
  ];

  return appointments.map((apt, idx) => {
    const date = new Date(today);
    date.setDate(date.getDate() + (apt.daysFromToday || 0));
    const patient = getPatientById(apt.patient_id);
    return {
      id: `APT${String(idx + 1).padStart(3, '0')}`,
      patient_id: apt.patient_id,
      patient_name: patient ? patient.name : 'Unknown',
      patient_age: patient ? patient.age : null,
      patient_gender: patient ? patient.gender : null,
      patient_language: patient ? patient.language_name : null,
      patient_conditions: patient ? patient.conditions : [],
      patient_status: patient ? patient.status : 'stable',
      date: date.toISOString().split('T')[0],
      date_display: date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }),
      time: apt.time,
      reason: apt.reason,
      type: apt.type,
      status: apt.status
    };
  });
}

const APPOINTMENTS = generateAppointments();

function getAppointmentsByDate(dateStr) {
  return APPOINTMENTS.filter(a => a.date === dateStr);
}

function getAppointmentById(id) {
  return APPOINTMENTS.find(a => a.id === id);
}

function getUpcomingDates() {
  const dates = [...new Set(APPOINTMENTS.map(a => a.date))];
  dates.sort();
  return dates;
}

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
