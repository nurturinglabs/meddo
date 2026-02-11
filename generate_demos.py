import requests, base64, os, json

SARVAM_API_KEY = os.environ.get('SARVAM_API_KEY')

if not SARVAM_API_KEY:
    print("ERROR: Set SARVAM_API_KEY environment variable first.")
    print("  export SARVAM_API_KEY=your_key_here")
    exit(1)

demos = [
    {
        "id": "dictation_kn",
        "title": "Kannada - Knee pain consultation",
        "text": "\u0CA1\u0CBE\u0C95\u0CCD\u0C9F\u0CB0\u0CCD, \u0C88 \u0CB0\u0CCB\u0C97\u0CBF\u0C97\u0CC6 \u0C8E\u0CB0\u0CA1\u0CC1 \u0CB5\u0CBE\u0CB0\u0CA6\u0CBF\u0C82\u0CA6 \u0C8E\u0CA1 \u0CAE\u0CCA\u0CA3\u0C95\u0CBE\u0CB2\u0CC1 \u0CA8\u0CCB\u0CB5\u0CC1 \u0C87\u0CA6\u0CC6. X-ray \u0CA4\u0CC6\u0C97\u0CC6\u0CB8\u0CBF\u0CA6\u0CCD\u0CA6\u0CC7\u0CA8\u0CC6, \u0CA8\u0CBE\u0CB0\u0CCD\u0CAE\u0CB2\u0CCD \u0C87\u0CA6\u0CC6. Ibuprofen 400mg \u0CA6\u0CBF\u0CA8\u0C95\u0CCD\u0C95\u0CC6 \u0C8E\u0CB0\u0CA1\u0CC1 \u0CB8\u0CB2 \u0C95\u0CCA\u0C9F\u0CCD\u0C9F\u0CBF\u0CA6\u0CCD\u0CA6\u0CC7\u0CA8\u0CC6, \u0CB9\u0CA6\u0CBF\u0CA8\u0CBE\u0CB2\u0CCD\u0C95\u0CC1 \u0CA6\u0CBF\u0CA8. \u0C8E\u0CB0\u0CA1\u0CC1 \u0CB5\u0CBE\u0CB0\u0CA6 \u0CA8\u0C82\u0CA4\u0CB0 follow-up \u0C95\u0CCA\u0C9F\u0CCD\u0C9F\u0CBF\u0CA6\u0CCD\u0CA6\u0CC7\u0CA8\u0CC6.",
        "lang": "kn-IN"
    },
    {
        "id": "dictation_hi",
        "title": "Hindi - Diabetes follow-up",
        "text": "\u092E\u0930\u0940\u091C\u093C \u0915\u093E sugar level fasting \u092E\u0947\u0902 180 \u0906\u092F\u093E \u0939\u0948, post-prandial 260. \u092A\u093F\u091B\u0932\u0940 \u092C\u093E\u0930 Metformin 500 \u0926\u0940 \u0925\u0940, \u0905\u092C \u092C\u0922\u093C\u093E\u0915\u0930 Metformin 1000mg OD \u0915\u0930 \u0930\u0939\u093E \u0939\u0942\u0901. Glimepiride 1mg \u092D\u0940 add \u0915\u0930 \u0930\u0939\u093E \u0939\u0942\u0901. HbA1c test \u0932\u093F\u0916\u093E \u0939\u0948. \u0924\u0940\u0928 \u092E\u0939\u0940\u0928\u0947 \u092C\u093E\u0926 follow-up.",
        "lang": "hi-IN"
    },
    {
        "id": "dictation_ta",
        "title": "Tamil - Child fever",
        "text": "\u0B95\u0BC1\u0BB4\u0BA8\u0BCD\u0BA4\u0BC8\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC2\u0BA9\u0BCD\u0BB1\u0BC1 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBE\u0B95 \u0B95\u0BBE\u0BAF\u0BCD\u0B9A\u0BCD\u0B9A\u0BB2\u0BCD \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BA4\u0BC1. Temperature 101. \u0BA4\u0BCA\u0BA3\u0BCD\u0B9F\u0BC8 \u0B9A\u0BBF\u0BB5\u0BAA\u0BCD\u0BAA\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BA4\u0BC1. Paracetamol syrup 5ml \u0B86\u0BB1\u0BC1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0B92\u0BB0\u0BC1 \u0BAE\u0BC1\u0BB1\u0BC8 \u0B95\u0BCA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD. CBP test \u0B8E\u0BB4\u0BC1\u0BA4\u0BBF\u0BAF\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD. \u0B87\u0BB0\u0BA3\u0BCD\u0B9F\u0BC1 \u0BA8\u0BBE\u0BB3\u0BCD \u0B95\u0BB4\u0BBF\u0BA4\u0BCD\u0BA4\u0BC1 \u0BB5\u0BB0 \u0B9A\u0BCA\u0BB2\u0BCD\u0BB2\u0BBF\u0BAF\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD.",
        "lang": "ta-IN"
    },
    {
        "id": "summary_kn",
        "title": "Kannada - Patient history summary",
        "text": "\u0CA1\u0CBE\u0C95\u0CCD\u0C9F\u0CB0\u0CCD, \u0C88 \u0CB0\u0CCB\u0C97\u0CBF \u0CB0\u0CAE\u0CC7\u0CB6\u0CCD \u0C95\u0CC1\u0CAE\u0CBE\u0CB0\u0CCD. \u0C95\u0CB3\u0CC6\u0CA6 \u0CAE\u0CC2\u0CB0\u0CC1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF \u0CAE\u0CC2\u0CB0\u0CC1 \u0CAC\u0CBE\u0CB0\u0CBF \u0CAC\u0C82\u0CA6\u0CBF\u0CA6\u0CCD\u0CA6\u0CBE\u0CB0\u0CC6. \u0CAE\u0CCA\u0CA6\u0CB2 \u0CAC\u0CBE\u0CB0\u0CBF BP 130/85, \u0CA4\u0CB2\u0CC6\u0CA8\u0CCB\u0CB5\u0CC1. \u0C8E\u0CB0\u0CA1\u0CA8\u0CC7 \u0CAC\u0CBE\u0CB0\u0CBF BP 140/90, Amlodipine 5mg \u0CB6\u0CC1\u0CB0\u0CC1 \u0CAE\u0CBE\u0CA1\u0CBF\u0CA6\u0CCD\u0CB0\u0CBF. \u0C88 \u0CAC\u0CBE\u0CB0\u0CBF BP 145/95 \u0C87\u0CA8\u0CCD\u0CA8\u0CC2 \u0CB9\u0CC6\u0C9A\u0CCD\u0C9A\u0CBF\u0CA6\u0CC6. \u0C97\u0CAE\u0CA8\u0CBF\u0CB8\u0CBF: BP \u0C8F\u0CB0\u0CC1\u0CA4\u0CCD\u0CA4\u0CBF\u0CA6\u0CC6, specialist referral \u0CAF\u0CCB\u0C9A\u0CBF\u0CB8\u0CBF.",
        "lang": "kn-IN"
    }
]

os.makedirs('audio', exist_ok=True)

for demo in demos:
    print(f"Generating: {demo['id']} — {demo['title']}")
    try:
        response = requests.post(
            'https://api.sarvam.ai/text-to-speech',
            headers={
                'Content-Type': 'application/json',
                'api-subscription-key': SARVAM_API_KEY
            },
            json={
                'inputs': [demo['text']],
                'model': 'bulbul:v3',
                'language_code': demo['lang'],
                'pace': 0.9
            }
        )
        data = response.json()
        if 'audios' not in data and 'audio' not in data:
            print(f"  ERROR: No audio in response — {data}")
            continue
        audio_b64 = data.get('audios', [None])[0] or data.get('audio')
        audio_bytes = base64.b64decode(audio_b64)
        with open(f"audio/{demo['id']}.wav", 'wb') as f:
            f.write(audio_bytes)
        print(f"  Done: audio/{demo['id']}.wav ({len(audio_bytes)} bytes)")
    except Exception as e:
        print(f"  ERROR: {e}")

print("\nAll demo audio generated!")
