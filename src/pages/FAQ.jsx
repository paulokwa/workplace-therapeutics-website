import React, { useState } from 'react';
import CTASection from '../components/sections/CTASection';
import { ChevronDown, ChevronUp } from 'lucide-react';

import useScrollReveal from '../hooks/useScrollReveal';

const FAQ = () => {
    useScrollReveal();

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "Why should my company invest in workplace well-being?", a: "Employee well-being is directly linked to productivity, engagement, and job satisfaction. By investing in wellness programs, companies can reduce absenteeism, decrease health-related costs, and improve overall workplace morale. In fact, Canadian employers lose approximately $20 billion annually due to untreated mental health and stress-related issues. A proactive approach can help mitigate these losses. Best of all, introducing workplace massage can cost your business zero dollars—simply providing a quiet space or office corner is often all that is required, as employees can pay directly or utilize their health insurance benefits." },
        { q: "Who pays for it?", a: "It's up to you. Some companies pay 100%, some split the cost, and others have employees pay directly. All models work." },
        { q: "How do I know if chair massage is right for me?", a: "Chair massage is ideal for relieving stress and tension in the shoulders, neck, hands, and arms. If you spend long hours at a desk or working on a computer, a chair massage can help reduce muscle strain and improve your focus." },
        { q: "How much space is needed for a massage session?", a: "Chair massage is adaptable to many settings, from small meeting rooms to open offices. We simply need enough room for the chair and a comfortable environment for you to relax." },
        { q: "Is it disruptive?", a: "Not at all. We use quiet music and the massage itself is quiet. We can set up away from phones and active work areas." },
        { q: "Are employees clothed?", a: "Yes. For chair massage, employees remain fully clothed. No oils are used, so they can go right back to work." },
        { q: "Can employees use their insurance?", a: "Yes, if they have coverage for Massage Therapy. Since we provide RMT services, we issue official receipts." },
        { q: "How do we handle hygiene?", a: "We follow strict protocols including sanitizing the chair between every client and practitioner masking if requested/required." }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <div className="container section" style={{ maxWidth: '800px', paddingBottom: '300px' }}>
                <h1 className="text-center mb-5 mobile-header-spacing slide-up">Frequently Asked Questions</h1>
                <div className="faq-list slide-up delay-100" style={{ borderTop: '1px solid var(--color-border)' }}>
                    {faqs.map((item, idx) => (
                        <div key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                            <button
                                onClick={() => toggleFAQ(idx)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1.5rem 0',
                                    background: 'none',
                                    border: 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    color: 'var(--color-text-main)'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem', fontWeight: 500, paddingRight: '1rem' }}>{item.q}</span>
                                {openIndex === idx ? (
                                    <ChevronUp size={24} color="var(--color-teal)" />
                                ) : (
                                    <ChevronDown size={24} color="var(--color-teal)" />
                                )}
                            </button>
                            {openIndex === idx && (
                                <div style={{ paddingBottom: '1.5rem' }}>
                                    <p className="text-muted" style={{ margin: 0, lineHeight: 1.6 }}>{item.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <CTASection
                title="Ready to Bring Wellness to Your Workplace?"
                description="Get in touch to discuss a custom plan for your office."
                buttonText="Request a Quote"
                buttonLink="/contact"
                centeredOverlap={true}
            />
        </div>
    );
};

export default FAQ;
