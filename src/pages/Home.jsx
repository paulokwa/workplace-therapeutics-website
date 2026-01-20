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

                    <p className="mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        On-site chair & table massage for Halifax workplaces and events. We bring everything — from 10–30 min chair massage to 30–90 min table sessions.
                    </p>

                    <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <Button to="/contact" variant="primary">Request a Quote</Button>

                    </div>


                </div>
            </section>

            {/* Mode Specific Messaging (If mode selected) */}



            {/* Outcomes Section */}
            <div style={{ backgroundColor: '#ececec' }}>
                <section className="section container">
                    <h2 className="text-center mb-3">Why Workplace Massage?</h2>
                    <div
                        className="outcomes-container"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {[
                            {
                                id: 'morale',
                                icon: Heart,
                                title: "Boost Morale",
                                text: "Wellness programs are proven money-savers. Studies show that for every $1 spent, companies save between $1.50 and $6.00 in healthcare costs.",
                                citation: "Data from Don Dillon, \"Workplace Wellness: How About this ROI?\"",
                                image: outcomeMoraleImg
                            },
                            {
                                id: 'stress',
                                icon: Clock,
                                title: "Reduce Stress",
                                text: "Untreated stress costs Canadian employers billions annually. Massage helps reduce absenteeism and mental health related costs.",
                                citation: "Data from a press release by the Coalition of Ontario Psychiatrists",
                                image: outcomeStressImg
                            },
                            {
                                id: 'focus',
                                icon: CheckCircle2,
                                title: "Increase Focus",
                                text: "Just 15 minutes of chair massage improves alertness, speed, and accuracy more effectively than a standard break.",
                                citation: "Research by Dr. Tiffany Field, published in The International Journal of Neuroscience",
                                image: outcomeFocusImg
                            }
                        ].map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="outcome-card"
                                    style={{
                                        boxShadow: 'var(--shadow-md)',
                                        borderRadius: '1rem',
                                        overflow: 'hidden',
                                        backgroundColor: 'white',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    {/* Image Area */}
                                    <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transform: 'scale(1.03)',
                                                transformOrigin: 'center'
                                            }}
                                        />
                                    </div>

                                    {/* Content Area */}
                                    <div style={{
                                        padding: '2rem',
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{
                                            color: 'var(--color-orange)',
                                            marginBottom: '1rem'
                                        }}>
                                            <item.icon size={40} />
                                        </div>

                                        <h3 style={{
                                            fontSize: '1.5rem',
                                            marginBottom: '1rem',
                                            fontWeight: 'bold',
                                            color: 'var(--color-text-main)'
                                        }}>
                                            {item.title}
                                        </h3>

                                        <p style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6',
                                            color: 'var(--color-text-muted)',
                                            marginBottom: '1.5rem'
                                        }}>
                                            {item.text}
                                        </p>

                                        <div style={{ marginTop: 'auto' }}>
                                            {!showCitation[item.id] ? (
                                                <button
                                                    onClick={() => setShowCitation(prev => ({ ...prev, [item.id]: true }))}
                                                    style={{
                                                        background: 'transparent',
                                                        border: '1px solid var(--color-border)',
                                                        borderRadius: '20px',
                                                        padding: '0.25rem 0.75rem',
                                                        color: 'var(--color-text-muted)',
                                                        fontSize: '0.8rem',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s'
                                                    }}
                                                >
                                                    Source
                                                </button>
                                            ) : (
                                                <p style={{
                                                    fontSize: '0.8rem',
                                                    fontStyle: 'italic',
                                                    color: 'var(--color-text-muted)',
                                                    animation: 'fadeIn 0.3s ease-in-out'
                                                }}>
                                                    {item.citation}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* Services Overview Section - Swapped to top with Gradient */}
            <div style={{ background: 'linear-gradient(to bottom, #dcdcdc, #bdbec0)' }}>
                <section className="section container">
                    <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Office Massage Card */}
                        <div className="service-card" style={{ boxShadow: 'var(--shadow-md)', borderRadius: '0 1rem 0 1rem', overflow: 'hidden', backgroundColor: 'white' }}>
                            <div style={{ height: '280px', overflow: 'hidden' }}>
                                <img src={serviceOfficeImg} alt="Office Massage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ backgroundColor: 'var(--color-orange)', padding: '2.5rem', color: 'white' }}>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white' }}>Office Massage</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Our experienced therapists bring chair or table massage directly to your workplace. Reduce stress, boost morale, and support your team's well-being with recurring wellness programs or one-time appreciation events.
                                </p>
                                <Button to="/services" variant="outline" style={{ backgroundColor: 'white', color: 'var(--color-orange)', border: 'none', width: 'auto', padding: '0.75rem 1.5rem' }}>LEARN MORE</Button>
                            </div>
                        </div>

                        {/* Event Massage Card */}
                        <div className="service-card" style={{ boxShadow: 'var(--shadow-md)', borderRadius: '0 1rem 0 1rem', overflow: 'hidden', backgroundColor: 'white' }}>
                            <div style={{ height: '280px', overflow: 'hidden' }}>
                                <img src={serviceEventImg} alt="Event Massage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ backgroundColor: 'var(--color-teal)', padding: '2.5rem', color: 'white' }}>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white' }}>Event Massage</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    Make your next event unforgettable with professional chair massage. Perfect for trade shows, conferences, wellness fairs, corporate retreats, and celebrations. We bring everything needed to create a memorable experience for your guests.
                                </p>
                                <Button to="/event-massage" variant="outline" style={{ backgroundColor: 'white', color: 'var(--color-teal)', border: 'none', width: 'auto', padding: '0.75rem 1.5rem' }}>DISCOVER</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



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

