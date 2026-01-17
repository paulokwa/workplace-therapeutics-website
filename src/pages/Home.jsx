import React, { useState } from 'react';

import outcomeMoraleImg from '../assets/outcome-morale.png';
import outcomeStressImg from '../assets/outcome-stress.png';
import outcomeFocusImg from '../assets/outcome-focus.png';
import serviceEventImg from '../assets/service-event.png';
import serviceOfficeImg from '../assets/service-office.png';
import heroLogo from '../assets/logos/horizontal low res photos/Workplace_Therapeutics_Horizontal_White_Tagline.png';


import Button from '../components/ui/Button';
import { JANE_BOOKING_URL } from '../data/constants';
import { CheckCircle2, DollarSign, Clock, Heart, MapPin, Briefcase, Armchair, Bed } from 'lucide-react';
import '../styles/global.css';
import HowItWorks from '../components/sections/HowItWorks';

const Home = () => {
    const [showCitation, setShowCitation] = useState({});

    const outcomes = [
        {
            id: 'morale',
            icon: Heart,
            title: "Boost Morale",
            shortText: "Show your team they are valued.",
            longText: "The Return on Investment: Wellness programs are proven money-savers. Studies show that for every $1 spent on corporate wellness, companies save between $1.50 and $6.00 in healthcare and disability costs.",
            citation: "Data from Don Dillon, \"Workplace Wellness: How About this ROI?\", citing Joan Burton (IAPA) 2008, \"The Business Case for a Healthy Workplace\".",
            image: outcomeMoraleImg
        },
        {
            id: 'stress',
            icon: Clock,
            title: "Reduce Stress",
            shortText: "15 mins to reset and recharge.",
            longText: "The Cost of Stress: Canadian employers lose approximately $20 billion annually due to untreated mental health and stress-related issues. Absenteeism alone costs roughly $3,550 per employee per year.",
            citation: "Data from a press release by the Coalition of Ontario Psychiatrists (Jan 27, 2015).",
            image: outcomeStressImg
        },
        {
            id: 'focus',
            icon: CheckCircle2,
            title: "Increase Focus",
            shortText: "Relieve tension, improve productivity.",
            longText: "Productivity Boost: Research indicates that 15 minutes of chair massage makes employees more alert, faster, and more accurate at tasks (like math computations) than a simple rest break.",
            citation: "Research by Dr. Tiffany Field, published in The International Journal of Neuroscience (1996).",
            image: outcomeFocusImg
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section hero-section-bg text-center section" style={{ paddingBottom: '10rem' }}>
                <div className="container">
                    <img
                        src={heroLogo}
                        alt="Workplace Therapeutics"
                        style={{
                            maxWidth: '500px',
                            width: '90%',
                            margin: '0 auto 2rem auto',
                            display: 'block'
                        }}
                    />
                    <h1 className="mb-2">Workplace Massage That Actually <em>Works.</em></h1>
                    <p className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        On-site chair & table massage for Halifax workplaces and events. We bring everything — from 10–30 min chair massage to 30–90 min table sessions.
                    </p>

                    <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <Button to="/contact" variant="primary">Request a Quote</Button>

                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        marginTop: '3rem',
                        maxWidth: '1000px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontSize: '0.95rem',
                        color: 'white'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Briefcase size={18} style={{ color: 'var(--color-orange)' }} />
                            <span>We bring everything (chair/table setup)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Armchair size={18} style={{ color: 'var(--color-orange)' }} />
                            <span>Chair massage: 10–30 min sessions</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Bed size={18} style={{ color: 'var(--color-orange)' }} />
                            <span>Table massage: 30–90 min sessions (private room)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={18} style={{ color: 'var(--color-orange)' }} />
                            <span>Serving HRM (Halifax + surrounding areas)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mode Specific Messaging (If mode selected) */}



            {/* Outcomes Section */}
            <section className="section container">
                <h2 className="text-center mb-3">Why Workplace Massage?</h2>
                <div
                    className="outcomes-container"
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {outcomes.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="outcome-card"
                                style={{
                                    flex: '1 1 300px',
                                    position: 'relative',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease-in-out',
                                    backgroundColor: 'white',
                                    boxShadow: 'var(--shadow-sm)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '2rem',
                                    minHeight: '400px'
                                }}
                            >
                                {/* Background Image (Always visible) */}
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
                                        opacity: 1,
                                        filter: 'blur(2px) brightness(0.4)',
                                        zIndex: 0
                                    }}
                                />

                                {/* Content Overlay */}
                                <div style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    textAlign: 'center',
                                    width: '100%',
                                    color: 'white'
                                }}>

                                    {/* Icon */}
                                    <div style={{
                                        color: 'var(--color-orange)',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <item.icon size={48} />
                                    </div>

                                    <h3 style={{
                                        fontSize: '2rem',
                                        marginBottom: '1rem',
                                        fontWeight: 'bold',
                                        color: 'white',
                                        textShadow: '0 4px 8px rgba(0,0,0,0.8)'
                                    }}>
                                        {item.title}
                                    </h3>

                                    {/* Detailed Text (Always visible) */}
                                    <div>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            lineHeight: '1.6',
                                            fontWeight: '500',
                                            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                                            maxWidth: '90%',
                                            margin: '0 auto',
                                            marginBottom: '1rem'
                                        }}>
                                            {item.longText}
                                        </p>

                                        {/* Citation Toggle */}
                                        <div style={{ marginTop: '1rem' }}>
                                            {/* If citations are hidden, show toggle button */}
                                            {!showCitation[item.id] && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowCitation(prev => ({ ...prev, [item.id]: true }));
                                                    }}
                                                    style={{
                                                        background: 'rgba(255,255,255,0.2)',
                                                        border: 'none',
                                                        borderRadius: '20px',
                                                        padding: '0.25rem 0.75rem',
                                                        color: 'white',
                                                        fontSize: '0.8rem',
                                                        cursor: 'pointer',
                                                        backdropFilter: 'blur(4px)',
                                                        transition: 'background 0.3s'
                                                    }}
                                                    className="citation-toggle-hover"
                                                >
                                                    Source
                                                </button>
                                            )}

                                            {/* If citations are shown, show the citation text */}
                                            {showCitation[item.id] && (
                                                <p style={{
                                                    fontSize: '0.8rem',
                                                    fontStyle: 'italic',
                                                    color: 'rgba(255,255,255,0.8)',
                                                    marginTop: '0.5rem',
                                                    maxWidth: '90%',
                                                    margin: '0.5rem auto 0',
                                                    animation: 'fadeIn 0.3s ease-in-out'
                                                }}>
                                                    {item.citation}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="section container">
                <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {/* Office Massage Card */}
                    <div className="service-card" style={{ boxShadow: 'var(--shadow-md)', borderRadius: '1rem', overflow: 'hidden', backgroundColor: 'white' }}>
                        <div style={{ height: '240px', overflow: 'hidden' }}>
                            <img src={serviceOfficeImg} alt="Office Massage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h3 className="mb-2 text-orange">Office Massage</h3>
                            <p className="mb-2 font-bold" style={{ color: 'var(--color-text-muted)' }}>Mobile Chair Massage for Workplace Wellness</p>
                            <p className="mb-3">Massage at Work helps reduce stress, promote relaxation and boost team morale – creating a healthier, more engaged workplace.</p>
                            <p className="mb-3">Whether you're a small office or a multi-national corporation – onsite massage offers a convenient, accessible way to support your team's well-being.</p>
                            <p className="mb-3">Bring renewed energy to your workplace with recurring wellness programs, appreciation days and occasional boosts during busy seasons and projects.</p>
                            <div style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                                <strong>Note:</strong> We also offer Table Massage options, which require a private room to ensure privacy and comfort.
                            </div>
                            <Button to="/services" variant="outline" style={{ width: '100%' }}>Learn More about Workplace Massage</Button>
                        </div>
                    </div>

                    {/* Event Massage Card */}
                    <div className="service-card" style={{ boxShadow: 'var(--shadow-md)', borderRadius: '1rem', overflow: 'hidden', backgroundColor: 'white' }}>
                        <div style={{ height: '240px', overflow: 'hidden' }}>
                            <img src={serviceEventImg} alt="Event Massage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h3 className="mb-2 text-teal">Event Massage</h3>
                            <p className="mb-2 font-bold" style={{ color: 'var(--color-text-muted)' }}>Event Chair Massage for any size event — Serving HRM / Nova Scotia (by request)</p>
                            <p className="mb-2">Flexible and fully adaptable for:</p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                                <li>Trade shows & Conventions</li>
                                <li>Marketing Activations and Launches</li>
                                <li>Conferences & Corporate Retreats</li>
                                <li>Health and Wellness Fairs</li>
                                <li>Golf Tournaments & Sporting Events</li>
                                <li>Celebrations & Appreciation Days</li>
                                <li>Home Spa & Wedding Parties</li>
                            </ul>
                            <p className="mb-3">Leave a lasting impression on clients, guests, customers & employees with relaxing, professional chair massage at your next event.</p>
                            <Button to="/event-massage" variant="outline" style={{ width: '100%' }}>Learn more about Event Massage</Button>
                        </div>
                    </div>
                </div>
            </section>

            <HowItWorks />



            {/* Locations Banner */}
            <div style={{ backgroundColor: '#333', color: 'white', padding: '1.5rem', textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Serving Halifax • Dartmouth • Bedford • Sackville • Burnside
                </p>
            </div>

            {/* Final CTA */}
            <section className="section container text-center">
                <h2 className="mb-2">Ready to get started?</h2>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Button to="/contact" variant="primary">
                        Request a Quote
                    </Button>
                </div>
            </section>

        </div>
    );
};


export default Home;

