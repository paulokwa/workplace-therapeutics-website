import React from 'react';
import Button from '../components/ui/Button';
import { Users, PartyPopper, Calendar, Armchair, BedDouble, BookOpen } from 'lucide-react';

import rmtHandsImg from '../assets/rmt-hands-working.png';
import CTASection from '../components/sections/CTASection';

const HowItWorks = () => {
    return (
        <div className="how-it-works-page">
            <div className="container section">
                <h1 className="text-center mb-3">How It Works</h1>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <Step
                        num="1"
                        title="Consultation"
                        text="A quick conversation to confirm your location and needs."
                    />
                    <Step
                        num="2"
                        title="Scheduling"
                        text="You choose the dates and frequency that work for your team."
                    />
                    <Step
                        num="3"
                        title="Booking & Billing"
                        text="We handle the admin with custom booking links and direct billing for employees."
                    />
                    <Step
                        num="4"
                        title="Treatment"
                        text="Our RMTs bring everything needed to transform your space."
                    />
                    <Step
                        num="5"
                        title="Refreshed"
                        text="Your team returns to work feeling stress-free and focused."
                    />





                    {/* The Admin Advantage - MOVED FROM SERVICES */}
                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <h2 className="mb-3">The Admin Advantage</h2>
                        <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto 2rem auto' }}>
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

                    {/* Why We Only Hire RMTs - MOVED FROM SERVICES */}
                    <div style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '2rem', marginTop: '4rem', borderRadius: '1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                            <div>
                                <h2 className="mb-2">Why We Only Hire RMTs</h2>
                                <p className="mb-3 text-muted">
                                    Unlike some services that use "bodyworkers" or students, every Workplace Therapeutics practitioner is a licensed, registered, and insured massage therapist.
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
                            <div style={{ borderRadius: '1rem', overflow: 'hidden', height: '250px' }}>
                                <img
                                    src={rmtHandsImg}
                                    alt="Professional massage therapy treatment"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <CTASection
                title="The 'No-Commitment' Demo Day"
                description="Experience the impact firsthand. A single half-day event to see how your team responds."
                buttonText="Book a Demo Day"
                buttonLink="/contact"
                customMarginTop="-5rem"
                customMarginBottom="-8.5rem"
            />
        </div>
    );
};

const Step = ({ num, title, text }) => (
    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{
            flexShrink: 0,
            width: '3rem',
            height: '3rem',
            background: 'var(--color-teal)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            fontWeight: 'bold',
            fontSize: '1.2rem'
        }}>
            {num}
        </div>
        <div>
            <h3>{title}</h3>
            <p className="text-muted">{text}</p>
        </div>
    </div>
);

export default HowItWorks;
