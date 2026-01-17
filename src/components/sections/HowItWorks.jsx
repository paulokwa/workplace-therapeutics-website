import React from 'react';
import LottieIcon from '../LottieIcon';
import animationStep1 from '../../assets/animations/how-it-works-step-1-space.json';
import animationStep2 from '../../assets/animations/how-it-works-step-2-delivery.json';
import animationStep3 from '../../assets/animations/how-it-works-step-3-impact.json';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            animation: animationStep1,
            title: "We Create Space",
            text: "We pinpoint the perfect spot in your office for relaxation."
        },
        {
            id: 2,
            animation: animationStep2,
            title: "We Deliver",
            text: "Our registered therapists arrive with everything needed."
        },
        {
            id: 3,
            animation: animationStep3,
            title: "You Feel the Drop",
            text: "Stress levels fall, focus improves, and morale soars."
        }
    ];

    return (
        <section className="section container">
            <div
                className="how-it-works-grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    textAlign: 'center',
                    alignItems: 'start'
                }}
            >
                {steps.map((step) => (
                    <div key={step.id} className="how-it-works-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <LottieIcon
                            animationData={step.animation}
                            className="lottie-icon"
                        />
                        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '300px', lineHeight: '1.5' }}>{step.text}</p>
                    </div>
                ))}
            </div>

            {/* Inline styles for Lottie sizing relative to this component, 
                though global css or a dedicated css file might be better. 
                Using a style tag here for self-containment as requested by structure 
                or just ensuring the className prop usage works.
            */}
            <style>{`
                .lottie-icon {
                    width: 100%;
                    max-width: 180px;
                    height: auto;
                }
                @media (max-width: 768px) {
                    .lottie-icon {
                        max-width: 140px;
                    }
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;
