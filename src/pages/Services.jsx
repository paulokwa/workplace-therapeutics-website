import React from 'react';

import Button from '../components/ui/Button';
import { Armchair, Users, Calendar, PartyPopper } from 'lucide-react';

const Services = () => {

    const services = [
        {
            title: "Chair Massage",
            description: "Fully clothed, 10-20 mins per person. Focuses on back, neck, and shoulders. Perfect for high-intensity offices.",
            icon: Armchair
        },
        {
            title: "Wellness Days",
            description: "A one-off event to show appreciation. We bring everything needed for a day of relaxation.",
            icon: PartyPopper
        },
        {
            title: "Ongoing Programs",
            description: "Weekly, bi-weekly, or monthly rotations. The best ROI for retention and stress reduction.",
            icon: Calendar
        },
        {
            title: "Events & Conferences",
            description: "Draw a crowd to your booth or keep attendees refreshed.",
            icon: Users
        }
    ];

    return (
        <div className="services-page">
            <div className="container section">
                <h1 className="text-center mb-3">Our Services</h1>
                <p className="text-center mb-3" style={{ maxWidth: 600, margin: '0 auto 3rem auto', color: 'var(--color-text-muted)' }}>
                    We bring the clinic to you. Professional, efficient, and tailored to your workplace environment.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {services.map((s, idx) => (
                        <div key={idx} style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            border: '1px solid var(--color-border)'
                        }}>
                            <div style={{ color: 'var(--color-teal)', marginBottom: '1rem' }}>
                                <s.icon size={40} />
                            </div>
                            <h3 className="mb-1">{s.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{s.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center section">
                    <Button to="/contact" variant="primary">Request Pricing for These Options</Button>
                </div>
            </div>
        </div>
    );
};

export default Services;
