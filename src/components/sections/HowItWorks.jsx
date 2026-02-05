import React from 'react';
import { MessageSquare, Calendar, ClipboardCheck, Armchair, Sparkles } from 'lucide-react';

const HowItWorks = ({ isMobile }) => {
    const steps = [
        {
            id: 1,
            number: "01",
            icon: MessageSquare,
            title: "Consultation",
            text: "A quick conversation to confirm your location and needs."
        },
        {
            id: 2,
            number: "02",
            icon: Calendar,
            title: "Scheduling",
            text: "You choose the dates and frequency that work for your team."
        },
        {
            id: 3,
            number: "03",
            icon: ClipboardCheck,
            title: "Booking & Billing",
            text: "We handle the admin with custom booking links and direct billing for employees."
        },
        {
            id: 4,
            number: "04",
            icon: Armchair,
            title: "Treatment",
            text: "Our RMTs bring everything needed to transform your space."
        },
        {
            id: 5,
            number: "05",
            icon: Sparkles,
            title: "Refreshed",
            text: "Your team returns to work feeling stress-free and focused."
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-teal-dark)', color: '#fff', padding: isMobile ? '4rem 1rem' : '5rem 2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '1rem', overflow: 'hidden' }}>
            <div className="container">
                <div
                    className="how-it-works-grid"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: isMobile ? '3rem' : '2rem',
                    }}
                >
                    {steps.map((step, index) => (
                        <div key={step.id} className={`how-it-works-step slide-up delay-${Math.min(800, (index + 1) * 200)}`} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            textAlign: 'left',
                            flex: '0 1 280px',
                            minWidth: '280px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', width: '100%' }}>
                                <step.icon
                                    size={48}
                                    color="var(--color-orange)"
                                    strokeWidth={1.5}
                                    style={{ marginRight: '1.5rem', flexShrink: 0 }}
                                />
                                <span style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 'bold',
                                    color: 'var(--color-orange)',
                                    marginRight: '1rem',
                                    lineHeight: 1
                                }}>
                                    {step.number}
                                </span>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: '1.5rem',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}>
                                    {step.title}
                                </h3>
                            </div>
                            <p style={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: '1.6',
                                margin: 0,
                                fontSize: '1rem'
                            }}>
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;


