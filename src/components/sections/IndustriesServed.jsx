import React from 'react';

const IndustriesServed = () => {
    return (
        <div>
            <h2 className="text-center mb-4" style={{ marginBottom: '3rem', color: 'var(--color-text-main)' }}>Industries We Serve</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                {['Technology & Software', 'Banking & Finance', 'Healthcare & Hospitals', 'Manufacturing', 'Professional Services', 'Government', 'Education', 'Call Centers'].map(industry => (
                    <div key={industry} style={{
                        backgroundColor: 'white',
                        padding: '1.5rem',
                        borderRadius: '0.5rem',
                        textAlign: 'center',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid var(--color-border)',
                        flex: '1 0 220px',
                        maxWidth: '400px'
                    }}>
                        {industry}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustriesServed;
