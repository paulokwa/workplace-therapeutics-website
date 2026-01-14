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

                <h2 className="text-center mb-2">Two Pricing Models</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ padding: '2rem', background: 'var(--color-bg-teal-soft)', borderRadius: '1rem' }}>
                        <h3 className="text-teal">Employer-Paid</h3>
                        <p>Company covers 100%.</p>
                        <div className="text-muted text-sm">Best for morale & tax benefits.</div>
                    </div>
                    <div style={{ padding: '2rem', background: 'var(--color-bg-orange-soft)', borderRadius: '1rem' }}>
                        <h3 className="text-orange">Employee-Paid</h3>
                        <p>Employees pay individually.</p>
                        <div className="text-muted text-sm">Zero cost to company. Low risk.</div>
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
