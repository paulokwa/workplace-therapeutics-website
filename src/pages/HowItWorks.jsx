import React from 'react';
import Button from '../components/ui/Button';

const HowItWorks = () => {
    return (
        <div className="how-it-works-page">
            <div className="container section">
                <h1 className="text-center mb-3">How It Works</h1>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <Step
                        num="1"
                        title="We discuss your needs"
                        text="We determine the number of staff, best date/time, and pricing model (employer or employee paid)."
                    />
                    <Step
                        num="2"
                        title="You provide the space"
                        text="We need a small meeting room or quiet corner (approx 8x10ft). We bring the chair, music, and supplies."
                    />
                    <Step
                        num="3"
                        title="We handle the scheduling"
                        text="We provide a sign-up sheet or custom booking link. Employees book their own slots."
                    />
                    <Step
                        num="4"
                        title="Setup & Massage"
                        text="We arrive 15 mins early to set up. We follow strict sanitization protocols between every client."
                    />

                    <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--color-bg-subtle)', borderRadius: '1rem' }}>
                        <h3>Start with a Pilot Day</h3>
                        <p className="mb-2">Not sure if it will work? Try a single half-day pilot. No long-term commitment.</p>
                        <Button to="/contact" variant="primary">Book a Pilot Day</Button>
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
