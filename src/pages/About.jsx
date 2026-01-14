import React from 'react';
import Button from '../components/ui/Button';

const About = () => {
    return (
        <div className="about-page">
            <div className="container section">
                <h1 className="text-center mb-3">About Us</h1>

                <div className="responsive-split">
                    <div style={{ background: '#ddd', height: '400px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Placeholder: Laura's Photo
                    </div>
                    <div>
                        <h2 className="mb-2">Meet Laura Cormier, RMT</h2>
                        <p className="mb-2">
                            Laura founded Workplace Therapeutics in 2018 with a simple mission: to make wellness accessible where people spend the majority of their time—at work.
                        </p>
                        <p className="mb-2">
                            As a Registered Massage Therapist, Laura understands the specific physical strain of desk work. Her approach focuses on effective tension relief, stress reduction, and education to help employees feel better long after the session ends.
                        </p>
                        <p className="mb-3">
                            Workplace Therapeutics serves businesses across the Halifax Regional Municipality, bringing professional-grade care directly to your office.
                        </p>
                        <Button to="/contact" variant="primary">Work With Us</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
