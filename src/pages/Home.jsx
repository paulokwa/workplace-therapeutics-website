import React, { useEffect, useState, useRef } from 'react';

import outcomeMoraleImg from '../assets/outcome-morale.png';
import outcomeStressImg from '../assets/outcome-stress.png';
import outcomeFocusImg from '../assets/outcome-focus.png';

import Button from '../components/ui/Button';
import { JANE_BOOKING_URL } from '../data/constants';
import { CheckCircle2, DollarSign, Clock, Heart } from 'lucide-react';
import '../styles/global.css';
import HowItWorks from '../components/sections/HowItWorks';

const Home = () => {
    const [activeOutcome, setActiveOutcome] = useState(null);
    const observerRefs = useRef({});

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (!isMobile) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveOutcome(entry.target.dataset.id);
                    }
                });
            },
            {
                threshold: 0.6, // Trigger when 60% visible
                rootMargin: "-10% 0px -10% 0px" // Slight margin to centralize the trigger area
            }
        );

        Object.values(observerRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const outcomes = [
        {
            id: 'morale',
            icon: Heart,
            title: "Boost Morale",
            shortText: "Show your team they are valued.",
            longText: "The Return on Investment: Wellness programs are proven money-savers. Studies show that a well-implemented wellness program can return significant savings in healthcare and reduced turnover.", // Synthesized from prompt for brevity/impact if needed, or use exact prompt
            // Prompt text: "The Return on Investment: Wellness programs are proven money-savers. Studies show that for every $1 spent on corporate wellness, companies save between $1.50 and $6.00 in healthcare and disability costs."
            // I'll use the prompt text.
            longText: "The Return on Investment: Wellness programs are proven money-savers. Studies show that for every $1 spent on corporate wellness, companies save between $1.50 and $6.00 in healthcare and disability costs.",
            image: outcomeMoraleImg
        },
        {
            id: 'stress',
            icon: Clock,
            title: "Reduce Stress",
            shortText: "15 mins to reset and recharge.",
            longText: "The Cost of Stress: Canadian employers lose approximately $20 billion annually due to untreated mental health and stress-related issues. Absenteeism alone costs roughly $3,550 per employee per year.",
            image: outcomeStressImg
        },
        {
            id: 'focus',
            icon: CheckCircle2,
            title: "Increase Focus",
            shortText: "Relieve tension, improve productivity.",
            longText: "Productivity Boost: Research indicates that 15 minutes of chair massage makes employees more alert, faster, and more accurate at tasks (like math computations) than a simple rest break.",
            image: outcomeFocusImg
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section hero-section-bg text-center section">
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

            <HowItWorks />

            {/* Outcomes Section */}
            <section className="section container">
                <h2 className="text-center mb-3">Why Workplace Massage?</h2>
                <div
                    className="outcomes-container"
                >
                    {outcomes.map((item) => {
                        const isActive = activeOutcome === item.id;
                        return (
                            <div
                                key={item.id}
                                ref={(el) => (observerRefs.current[item.id] = el)}
                                data-id={item.id}
                                onMouseEnter={() => setActiveOutcome(item.id)}
                                className={`outcome-card ${isActive ? 'active' : ''}`}
                                style={{
                                    flex: isActive ? 3 : 1,
                                    position: 'relative',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.5s ease-in-out',
                                    backgroundColor: 'white',
                                    boxShadow: 'var(--shadow-sm)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '2rem',
                                    minHeight: '300px' // Keep base min-height, overriden by css media query if needed
                                }}
                            >
                                {/* Background Image (Visible when Active) */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        opacity: isActive ? 1 : 0,
                                        transition: 'opacity 0.5s ease-in-out',
                                        filter: 'blur(4px) brightness(0.7)',
                                        zIndex: 0
                                    }}
                                />

                                {/* Content Overlay */}
                                <div style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    textAlign: 'center',
                                    width: '100%',
                                    color: isActive ? 'white' : 'inherit'
                                }}>

                                    {/* Icon - Hide or shrink when active if needed? Prompt: "bright conise marketing copy regarding the topic will comein to view" */}
                                    <div style={{
                                        color: isActive ? 'white' : 'var(--color-orange)',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        transition: 'color 0.3s'
                                    }}>
                                        <item.icon size={isActive ? 48 : 40} />
                                    </div>

                                    <h3 style={{
                                        fontSize: isActive ? '2rem' : '1.5rem',
                                        marginBottom: '1rem',
                                        fontWeight: 'bold',
                                        textShadow: isActive ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'
                                    }}>
                                        {item.title}
                                    </h3>

                                    {/* Short Text (Visible when NOT active) */}
                                    <p style={{
                                        display: isActive ? 'none' : 'block',
                                        color: 'var(--color-text-muted)',
                                        fontSize: '1.1rem'
                                    }}>
                                        {item.shortText}
                                    </p>

                                    {/* Detailed Text (Visible when Active) */}
                                    <div style={{
                                        display: isActive ? 'block' : 'none',
                                        animation: isActive ? 'fadeIn 0.5s ease-in-out' : 'none'
                                    }}>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            lineHeight: '1.6',
                                            fontWeight: '500',
                                            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                                            maxWidth: '90%',
                                            margin: '0 auto'
                                        }}>
                                            {item.longText}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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


export default Home;

