import React from 'react';
import Button from '../components/ui/Button';

const Pricing = () => {
    return (
        <div className="pricing-page">
            <div className="container section">
                <h1 className="text-center mb-3">Simple, Transparent Packages</h1>
                <p className="text-center mb-3 text-muted">Pricing typically depends on team size, frequency, and travel logistics. Here are our most common starting points.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    <PricingCard title="Starter / Pilot" desc="1-2 hours. Perfect for small teams or a trial run." />
                    <PricingCard title="Half Day" desc="3-4 hours. Covers 10-15 people." />
                    <PricingCard title="Full Day" desc="6-7 hours. Great for larger offices (20+ people)." />
                    <PricingCard title="Ongoing Program" desc="Best rates for weekly or monthly commitments." highlighted />
                </div>

                {/* Payment vs Approval Table */}
                <div className="payment-section mb-4">
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
                            <h3 className="text-teal mb-1">Employer Funded</h3>
                            <p className="mb-2"><strong>Who pays:</strong> Company funds (100% or subsidized).</p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
                                <li>Boosts morale instantly</li>
                                <li>Great for staff appreciation days</li>
                                <li>Tax-deductible for the business</li>
                            </ul>
                        </div>
                        <div className="payment-option" style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '2rem' }}>
                            <h3 className="text-orange mb-1">Employer Non-Funded</h3>
                            <p className="mb-2"><strong>Who pays:</strong> Employees pay individually.</p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
                                <li>No cost to the company</li>
                                <li>Workplace just approves space + time</li>
                                <li>Often covered by employee health plans</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <Button to="/contact" variant="primary">Request a Custom Quote</Button>
                </div>
            </div>
        </div>
    );
};

const PricingCard = ({ title, desc, highlighted }) => (
    <div style={{
        padding: '2rem',
        border: highlighted ? '2px solid var(--color-teal)' : '1px solid var(--color-border)',
        borderRadius: '1rem',
        backgroundColor: 'white',
        boxShadow: highlighted ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        position: 'relative'
    }}>
        {highlighted && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-teal)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 'bold' }}>Most Popular</div>}
        <h3>{title}</h3>
        <p className="text-muted">{desc}</p>
    </div>
);

export default Pricing;
