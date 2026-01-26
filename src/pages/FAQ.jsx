import CTASection from '../components/sections/CTASection';

const FAQ = () => {
    const faqs = [
        { q: "Do we need a dedicated room?", a: "Not properly. A small meeting room, office, or even a quiet corner with a screen works. We just need about 8x10ft of space." },
        { q: "Is it disruptive?", a: "Not at all. We use quiet music and the massage itself is quiet. We can set up away from phones and active work areas." },
        { q: "Are employees clothed?", a: "Yes. For chair massage, employees remain fully clothed. No oils are used, so they can go right back to work." },
        { q: "Who pays for it?", a: "It's up to you. Some companies pay 100%, some split the cost, and others have employees pay directly. All models work." },
        { q: "Can employees use their insurance?", a: "Yes, if they have coverage for Massage Therapy. Since we provide RMT services, we issue official receipts." },
        { q: "How do we handle hygiene?", a: "We follow strict protocols including sanitizing the chair between every client and practitioner masking if requested/required." }
    ];

    return (
        <div className="faq-page">
            <div className="container section" style={{ maxWidth: '800px', paddingBottom: '0' }}>
                <h1 className="text-center mb-3">Frequently Asked Questions</h1>
                <div className="faq-list">
                    {faqs.map((item, idx) => (
                        <div key={idx} style={{ marginBottom: '2rem' }}>
                            <h3 className="mb-1">{item.q}</h3>
                            <p className="text-muted">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>

            <CTASection
                title="Ready to Bring Wellness to Your Workplace?"
                description="Get in touch to discuss a custom plan for your office."
                buttonText="Request a Quote"
                buttonLink="/contact"
                customMarginBottom="-9rem"
            />
        </div>
    );
};

export default FAQ;
