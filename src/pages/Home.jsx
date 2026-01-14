import React, { useEffect } from 'react';

import Button from '../components/ui/Button';
import { JANE_BOOKING_URL } from '../data/constants';
import { CheckCircle2, DollarSign, Clock, Heart } from 'lucide-react';
import '../styles/global.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section text-center section" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
                <div className="container">
                    <h1 className="mb-2">Workplace Massage That Actually Works.</h1>
                    <p className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        On-site chair and table massage for Halifax workplaces — whether you’re booking it or championing it.
                    </p>

                    <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <Button to="/contact" variant="primary">Request a Quote</Button>
                        <Button href={JANE_BOOKING_URL} variant="outline">Book with Jane</Button>
                    </div>
                </div>
            </section>

            {/* Mode Specific Messaging (If mode selected) */}


            {/* Outcomes Section */}
            <section className="section container">
                <h2 className="text-center mb-3">Why Workplace Massage?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    <OutcomeItem icon={Heart} title="Boost Morale" text="Show your team they are valued." />
                    <OutcomeItem icon={Clock} title="Reduce Stress" text="15 mins to reset and recharge." />
                    <OutcomeItem icon={CheckCircle2} title="Increase Focus" text="Relieve tension, improve productivity." />
                </div>
            </section>

            {/* Payment vs Approval Table */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-teal-soft)' }}>
                <div className="container">
                    <h2 className="text-center mb-3">Two Ways Workplace Massage Happens</h2>
                    <div className="payment-table" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '1rem',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <div className="payment-option">
                            <h3 className="text-teal mb-1">Employer-Paid</h3>
                            <p className="mb-2"><strong>Who pays:</strong> Company funds (100% or subsidized).</p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
                                <li>Boosts morale instantly</li>
                                <li>Great for staff appreciation days</li>
                                <li>Tax-deductible for the business</li>
                            </ul>
                        </div>
                        <div className="payment-option" style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '2rem' }}>
                            <h3 className="text-orange mb-1">Employee-Paid</h3>
                            <p className="mb-2"><strong>Who pays:</strong> Employees pay individually.</p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
                                <li>No cost to the company</li>
                                <li>Workplace just approves space + time</li>
                                <li>Often covered by employee health plans</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section container text-center">
                <h2 className="mb-2">Ready to get started?</h2>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Button to="/contact" variant="primary">
                        Request a Quote
                    </Button>
                    <Button href={JANE_BOOKING_URL} variant="secondary">Book with Jane</Button>
                </div>
            </section>

        </div>
    );
};

const OutcomeItem = ({ icon: Icon, title, text }) => (
    <div className="text-center" style={{ padding: '1.5rem', background: 'white', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ color: 'var(--color-orange)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <Icon size={40} />
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-muted)' }}>{text}</p>
    </div>
);

export default Home;
