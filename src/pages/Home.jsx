import React, { useState } from 'react';

import outcomeMoraleImg from '../assets/outcome-morale.png';
import outcomeStressImg from '../assets/outcome-stress.png';
import outcomeFocusImg from '../assets/outcome-focus.png';
import serviceEventImg from '../assets/service-event.png';
import serviceOfficeImg from '../assets/service-office.png';
import heroLogo from '../assets/logos/horizontal low res photos/Workplace_Therapeutics_Horizontal_White_Tagline.png';


import Button from '../components/ui/Button';
import { JANE_BOOKING_URL } from '../data/constants';
import { CheckCircle2, DollarSign, Clock, Heart, MapPin, Briefcase, Armchair, Bed, Quote } from 'lucide-react';
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

            {/* Outcomes Section */}
            <div style={{ backgroundColor: '#ececec' }}>
                <section className="section container" style={{ padding: '3.5rem 0 6.65rem 0' }}>
                    <h2 className="text-center" style={{ fontSize: '56px', color: 'var(--color-teal-dark)', marginBottom: '3.05rem' }}>Why Workplace Massage?</h2>
                    <div
                        className="outcomes-container"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {outcomes.map((item) => {
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
                                            {item.longText}
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
                <section className="section container" style={{ padding: '2.5rem 0 5rem 0' }}>
                    <h2 className="text-center" style={{ fontSize: '56px', color: 'var(--color-teal-dark)', marginBottom: '2.5rem' }}>Our Services</h2>
                    <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Office Massage Card */}
                        <div className="service-card" style={{ boxShadow: 'var(--shadow-md)', borderRadius: '0 1rem 0 1rem', overflow: 'hidden', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '280px', overflow: 'hidden', flexShrink: 0 }}>
                                <img src={serviceOfficeImg} alt="Office Massage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ backgroundColor: 'var(--color-orange)', padding: '2.5rem', fontFamily: "'Mulish', sans-serif", fontSize: '18px', lineHeight: '1.5', color: '#f0f0f0', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#f0f0f0' }}>Office Massage</h3>
                                <p style={{ marginBottom: '1.5rem', flex: 1 }}>
                                    Our experienced therapists bring chair or table massage directly to your workplace. Reduce stress, boost morale, and support your team's well-being with recurring wellness programs or one-time appreciation events.
                                </p>
                                <Button to="/services" variant="outline" style={{ backgroundColor: 'white', color: 'var(--color-orange)', border: 'none', width: 'auto', padding: '0.75rem 1.5rem', boxShadow: 'var(--shadow-md)' }}>LEARN MORE</Button>
                            </div>
                        </div>

                        {/* Event Massage Card */}
                        <div className="service-card" style={{ boxShadow: 'var(--shadow-md)', borderRadius: '0 1rem 0 1rem', overflow: 'hidden', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '280px', overflow: 'hidden', flexShrink: 0 }}>
                                <img src={serviceEventImg} alt="Event Massage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ backgroundColor: 'var(--color-teal)', padding: '2.5rem', fontFamily: "'Mulish', sans-serif", fontSize: '18px', lineHeight: '1.5', color: '#f0f0f0', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#f0f0f0' }}>Event Massage</h3>
                                <p style={{ marginBottom: '1.5rem', flex: 1 }}>
                                    Make your next event unforgettable with professional chair massage. Perfect for trade shows, conferences, wellness fairs, corporate retreats, and celebrations. We bring everything needed to create a memorable experience for your guests.
                                </p>
                                <Button to="/event-massage" variant="outline" style={{ backgroundColor: 'white', color: 'var(--color-teal)', border: 'none', width: 'auto', padding: '0.75rem 1.5rem', boxShadow: 'var(--shadow-md)' }}>DISCOVER</Button>
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

            {/* Testimonials Section */}
            <div className="section" style={{ backgroundColor: '#f3f4f6', padding: '4rem 0 12rem 0', marginTop: '0' }}>
                <div className="container">
                    {/* Google Rating Badge */}
                    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'white',
                            padding: '0.5rem 1.25rem',
                            borderRadius: '2rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            border: '1px solid #e5e5e5'
                        }}>
                            <span style={{ fontSize: '1.25rem' }}>⭐⭐⭐⭐⭐</span>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>Rated 5.0 on Google</span>
                        </div>
                    </div>

                    <h2 className="text-center mb-5" style={{ color: 'var(--color-teal-dark)', fontSize: '2.5rem', marginTop: '1.5rem', marginBottom: '4rem' }}>What Our Clients Say</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1100px', margin: '0 auto' }}>
                        {/* Testimonial 1 - Alyssa Lee */}
                        <div style={{
                            position: 'relative',
                            backgroundColor: 'white',
                            padding: '3rem 2rem 2rem 2rem',
                            border: '3px solid #dae1e7',
                            marginTop: '1rem'
                        }}>
                            {/* Quote Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '-1.5rem',
                                left: '2rem',
                                backgroundColor: 'white',
                                padding: '0 1rem',
                                color: 'var(--color-teal)'
                            }}>
                                <Quote size={48} fill="currentColor" strokeWidth={0} />
                            </div>

                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#4b5563', fontSize: '1.05rem' }}>
                                Having a massage therapist coming into our office to offer massages and direct billing without having to leave the building is the BEST! It's so convenient and makes it easy.
                            </p>

                            <div>
                                <h4 style={{ color: 'var(--color-teal)', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.95rem', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                                    ALYSSA LEE
                                </h4>
                                <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>
                                    Personal & Business Client
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 2 - Craig Young */}
                        <div style={{
                            position: 'relative',
                            backgroundColor: 'white',
                            padding: '3rem 2rem 2rem 2rem',
                            border: '3px solid #dae1e7',
                            marginTop: '1rem'
                        }}>
                            {/* Quote Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '-1.5rem',
                                left: '2rem',
                                backgroundColor: 'white',
                                padding: '0 1rem',
                                color: 'var(--color-teal)'
                            }}>
                                <Quote size={48} fill="currentColor" strokeWidth={0} />
                            </div>

                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#4b5563', fontSize: '1.05rem' }}>
                                The best massage experience I've had in decades. Highly recommend.
                            </p>

                            <div>
                                <h4 style={{ color: 'var(--color-teal)', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.95rem', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                                    CRAIG YOUNG
                                </h4>
                                <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>
                                    Satisfied Client
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 3 - Pete Delahunty */}
                        <div style={{
                            position: 'relative',
                            backgroundColor: 'white',
                            padding: '3rem 2rem 2rem 2rem',
                            border: '3px solid #dae1e7',
                            marginTop: '1rem'
                        }}>
                            {/* Quote Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '-1.5rem',
                                left: '2rem',
                                backgroundColor: 'white',
                                padding: '0 1rem',
                                color: 'var(--color-teal)'
                            }}>
                                <Quote size={48} fill="currentColor" strokeWidth={0} />
                            </div>

                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#4b5563', fontSize: '1.05rem' }}>
                                Walked in with my shoulders and back holding onto work tension, and walked out feeling free as a leaf. Would recommend!
                            </p>

                            <div>
                                <h4 style={{ color: 'var(--color-teal)', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.95rem', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                                    PETE DELAHUNTY
                                </h4>
                                <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>
                                    Recent Client
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Final CTA - Floating Card Style */}
            <div style={{ padding: '0', marginTop: '-10rem', marginBottom: '-8rem', position: 'relative', zIndex: 10 }}>
                <div className="container">
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '1.5rem',
                        padding: '4rem',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '3rem'
                    }}>
                        <div style={{ flex: '1 1 300px', textAlign: 'left' }}>
                            <h2 style={{
                                fontSize: '3rem',
                                fontWeight: '800',
                                color: 'var(--color-teal-dark)',
                                marginBottom: '1.5rem',
                                lineHeight: '1.1',
                                letterSpacing: '-0.02em'
                            }}>
                                Well-Being That Pays Off
                            </h2>
                            <p style={{
                                fontSize: '1.15rem',
                                color: '#4b5563',
                                maxWidth: '600px',
                                lineHeight: '1.6'
                            }}>
                                Support your team’s physical and mental health with on-site massage programs proven to reduce stress, improve engagement, and elevate workplace culture.
                            </p>
                        </div>
                        <div style={{ flex: '0 0 auto' }}>
                            <Button to="/contact" variant="primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                                Request a Workplace Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Home;
