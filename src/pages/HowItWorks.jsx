import React from 'react';
import Button from '../components/ui/Button';
import { Users, PartyPopper, Calendar, Armchair, BedDouble, BookOpen } from 'lucide-react';

import rmtHandsImg from '../assets/rmt-hands-working.png';

const HowItWorks = () => {
    return (
        <div className="how-it-works-page">
            <div className="container section">
                <h1 className="text-center mb-3">How It Works</h1>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <Step
                        num="1"
                        title="A Quick 10-Min Consult"
                        text="We confirm your location and preferred dates. Simple as that."
                    />
                    <Step
                        num="2"
                        title="You Point to the Spot"
                        text="Any quiet meeting room or corner works. We adapt to your layout."
                    />
                    <Step
                        num="3"
                        title="We Handle All Admin"
                        text="We send you a custom booking link. Your team simply grabs their spots."
                    />
                    <Step
                        num="4"
                        title="Zero-Disruption Service"
                        text="Our RMTs arrive quietly, set up in minutes, and follow strict safety protocols."
                    />

                    <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--color-bg-subtle)', borderRadius: '1rem' }}>
                        <h3>The 'No-Commitment' Pilot Day</h3>
                        <p className="mb-2">Experience the impact firsthand. A single half-day event to see how your team responds.</p>
                        <Button to="/contact" variant="primary">Book a Pilot Day</Button>
                    </div>

                    {/* Quick Setup, Big Impact - MOVED FROM SERVICES */}
                    <div style={{ marginTop: '4rem', marginBottom: '2rem' }}>
                        <div style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '2rem', borderRadius: '1rem' }}>
                            <h2 className="text-center" style={{ marginBottom: '3rem' }}>Quick Setup, Big Impact</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                                <div className="text-center">
                                    <h3 className="h4 mb-1">Compact Footprint</h3>
                                    <p style={{ color: 'var(--color-text-muted)' }}>
                                        Each massage station requires just <strong>6×6 feet</strong>. Perfect for booths, corners, or meeting rooms.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h3 className="h4 mb-1">Fast Sessions</h3>
                                    <p style={{ color: 'var(--color-text-muted)' }}>
                                        <strong>10-15 minute</strong> chair massages keep things moving. Each therapist serves 4-6 guests per hour.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h3 className="h4 mb-1">We Handle Everything</h3>
                                    <p style={{ color: 'var(--color-text-muted)' }}>
                                        Professional massage chairs, sanitized linens, and setup/breakdown. You focus on your event.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

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

                    {/* What Happens After You Request a Quote - MOVED FROM SERVICES */}
                    <div style={{ marginTop: '4rem', marginBottom: '4rem', textAlign: 'center' }}>
                        <h3 className="mb-3">What Happens After You Request a Quote?</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                            <div style={{ flex: '1 1 200px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>1</div>
                                <strong>Quick Response</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 0 0' }}>We email within 24 hours</p>
                            </div>
                            <div style={{ flex: '1 1 200px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>2</div>
                                <strong>10-Min Call</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 0 0' }}>Understand your needs & space</p>
                            </div>
                            <div style={{ flex: '1 1 200px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>3</div>
                                <strong>Custom Proposal</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 0 0' }}>Sent same day, ready to approve</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
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
