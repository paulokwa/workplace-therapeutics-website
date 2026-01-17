import React from 'react';
import Button from '../components/ui/Button';

const About = () => {
    return (
        <div className="about-page">
            <div className="container section">
                <h1 className="text-center mb-4">About Us</h1>

                {/* Main Story & Founder */}
                <div className="responsive-split mb-5" style={{ gap: '4rem', alignItems: 'center' }}>
                    <div style={{ background: '#ddd', height: '400px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        Placeholder: Laura's Photo
                    </div>
                    <div>
                        <h2 className="mb-3">Our Story</h2>
                        <h3 className="h5 text-teal mb-3">Mobile Massage Provided Since 2018</h3>
                        <p className="mb-3">
                            Workplace Therapeutics was founded by Laura Cormier, RMT, with a vision to bridge the gap between busy work schedules and essential self-care.
                            Since 2018, we have been the trusted partner for Halifax's most forward-thinking companies.
                        </p>
                        <p className="mb-3">
                            What started as a one-woman mission has grown into a premier mobile massage service, helping organizations reduce stress, boost morale, and create meaningful wellness experiences for their teams.
                        </p>
                        <p className="mb-4">
                            We believe that wellness shouldn't be a luxury reserved for the weekend—it should be a seamless part of the workday.
                        </p>
                        <Button to="/contact" variant="primary">Work With Us</Button>
                    </div>
                </div>

                {/* Our Clients */}
                <div className="section text-center">
                    <h2 className="mb-4">Trusted By</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.6 }}>
                        {/* Placeholders for clients */}
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>CLIENT 1</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>CLIENT 2</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>CLIENT 3</div>
                    </div>
                </div>

                {/* Industries We Serve */}
                <div className="section">
                    <h2 className="text-center mb-4">Industries We Serve</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                        {['Technology & Software', 'Banking & Finance', 'Healthcare & Hospitals', 'Manufacturing', 'Professional Services', 'Government', 'Education', 'Call Centers'].map(industry => (
                            <div key={industry} style={{
                                backgroundColor: 'white',
                                padding: '1.5rem',
                                borderRadius: '0.5rem',
                                textAlign: 'center',
                                boxShadow: 'var(--shadow-sm)',
                                border: '1px solid var(--color-border)'
                            }}>
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="section" style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '3rem', borderRadius: '1rem' }}>
                    <h2 className="text-center mb-4">What People Say</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <p className="italic mb-3">"The therapist always has the room prepared with a comfortable massage chair, soothing music and a calming fragrance... I thank our firm’s management team as well as [Workplace Therapeutics] for continuing to care for my Health & Wellness."</p>
                            <p className="font-bold text-sm">- Law Firm Employee</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <p className="italic mb-3">"I was so relaxed after strong but gentle hands massaged the knots out of my muscles that the rest of the day was much easier to tolerate."</p>
                            <p className="font-bold text-sm">- Hospital Staff Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
