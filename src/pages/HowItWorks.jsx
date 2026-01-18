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
