import React from 'react';

import Button from '../components/ui/Button';
import { Armchair, Users, Calendar, PartyPopper, BedDouble, BookOpen } from 'lucide-react';

const Services = () => {

    const services = [
        {
            title: "Chair Massage",
            description: "Fully clothed, 10-20 mins per person. Focuses on back, neck, and shoulders. Perfect for high-intensity offices.",
            icon: Armchair
        },
        {
            title: "Table Massage",
            description: "Premium full-body clinical treatment. Requires a small private room. Ideal for addressing specific injuries or chronic pain.",
            icon: BedDouble
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
            title: "Lunch & Learn",
            description: "Interactive workshops on ergonomics, stress management, and self-care. Empower your team with actionable wellness knowledge.",
            icon: BookOpen
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

                {/* The Admin Advantage */}
                <div className="section" style={{ marginTop: '4rem' }}>
                    <div style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '3rem', borderRadius: '1rem', textAlign: 'center' }}>
                        <h2 className="mb-3">The Admin Advantage</h2>
                        <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            We understand that bringing wellness to the workplace needs to be effortless for HR. We handle the heavy lifting so you don't have to.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="flex items-center gap-2 mb-2"><Users size={20} className="text-teal" /> Online Scheduling</h4>
                                <p className="text-sm text-muted">Employees book their own slots via our private Jane App booking portal.</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="flex items-center gap-2 mb-2"><PartyPopper size={20} className="text-teal" /> Marketing Materials</h4>
                                <p className="text-sm text-muted">We provide email templates and posters to generate excitement.</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="flex items-center gap-2 mb-2"><Calendar size={20} className="text-teal" /> Seamless Logistics</h4>
                                <p className="text-sm text-muted">We arrive early, set up quietly, and leave the space exactly as we found it.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why 100% RMT? */}
                <div className="section row items-center" style={{ gap: '3rem' }}>
                    <div>
                        <h2 className="mb-2">Why We Only Hire RMTs</h2>
                        <p className="mb-3 text-lg text-muted">
                            Unlike some services that use "bodyworkers" or students, every Workplace Therapeutics practitioner is a Registered Massage Therapist.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-teal" />
                                <span><strong>Insurance Coverage:</strong> Staff can claim treatments under their health benefits.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-teal" />
                                <span><strong>Clinical Expertise:</strong> We treat specific issues like repetitive strain, not just "fluff".</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-teal" />
                                <span><strong>Professional Regulation:</strong> All staff are insured and governed by the college of massage therapists.</span>
                            </li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#f0f0f0', borderRadius: '1rem', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Placeholder: Image of RMT License/Hands Working
                    </div>
                </div>

                {/* Event Teaser */}
                <div className="section text-center" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '4rem' }}>
                    <h2 className="mb-2">Planning a Corporate Event?</h2>
                    <p className="mb-3 text-muted">From trade shows to golf tournaments, we have a dedicated team for events.</p>
                    <Button to="/events" variant="outline">Explore Event Services</Button>
                </div>

                <div className="text-center section">
                    <Button to="/contact" variant="primary">Request Pricing for These Options</Button>
                </div>
            </div>
        </div>
    );
};

export default Services;
