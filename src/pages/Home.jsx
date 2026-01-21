import React, { useState, useEffect, useRef } from 'react';

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

    // Why Massage Animation State
    const whyMassageRef = useRef(null);
    const [whyMassageProgress, setWhyMassageProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!whyMassageRef.current) return;
            const rect = whyMassageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;

            // Use fixed animation range (3 screens) regardless of container height.
            // Container is taller (500vh) to allow pinning buffer.
            const animationRange = windowHeight * 3;
            const scrolled = -rect.top;

            let p = 0;
            if (scrolled > 0) {
                p = (scrolled / animationRange) * 3;
            }

            // Allow slightly negative (before start) and slightly over (after end) for smooth transitions if needed, 
            // but for transforms we mostly clamp.
            setWhyMassageProgress(p);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const outcome1 = outcomes[0];
    const outcome2 = outcomes[1];
    const outcome3 = outcomes[2];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section
                className="hero-section hero-section-bg text-center section"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 0,
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingBottom: '4rem'
                }}
            >
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

            {/* Why Workplace Massage Section - Split Barn Door Animation */}
            <div ref={whyMassageRef} style={{ height: '500vh', position: 'relative', zIndex: 10 }}>
                <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', backgroundColor: 'transparent' }}>

                    {/* Intro: Optional "Why Workplace Massage" Title before cards? 
                        User asked for cards to come in from scroll form hero. 
                        Let's have the cards animate slightly delayed so we see the title first? 
                        Or title is ON the cards (as per current design).
                        Current design has title on overlay.
                    */}

                    {outcomes.map((item, index) => {
                        // Calculate entrance progress for this card.
                        // index 0: enters 0.0 - 0.5. Stable 0.5 - 1.0? 
                        // Map progress (0-3) to local entrance (0-1).
                        // Let's make entrance quick (0.3 of a unit).

                        // We want index 0 to start entering immediately (at -0.2?). 
                        // User: "upon scroll form the hero screen ... 50% left 50% right".
                        // So at Scroll 0, they are OPEN? Or Closed?
                        // If they "come in", they start outside and move inside.
                        // So at Scroll 0, they should be somewhat outside.
                        // And fully inside by Scroll 0.5.

                        const entryPoint = index;
                        const localProgress = whyMassageProgress - entryPoint;

                        // Clamp 0 to 1 with a slope.
                        // 0 -> 0% (Fully out).
                        // 0.4 -> 100% (Fully In).
                        const enterDuration = 0.5;
                        const p = Math.min(1, Math.max(0, localProgress / enterDuration));

                        // Easing
                        //  const easeP = p * (2 - p); // Quad ease out
                        const easeP = p;

                        const isReversed = index % 2 !== 0;

                        return (
                            <div
                                key={item.id}
                                style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    zIndex: index + 10,
                                    pointerEvents: p < 0.1 ? 'none' : 'auto', // Don't block clicks if not visible
                                }}
                            >
                                {/* Left Panel - Image */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: isReversed ? '50%' : '0',
                                    width: '50%', height: '100%',
                                    overflow: 'hidden',
                                    backgroundColor: 'white',
                                    transform: `translate3d(${(easeP - 1) * 100 * (isReversed ? -1 : 1)}%, 0, 0)`,
                                    transition: 'transform 0.1s linear'
                                }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            transform: 'scale(1.1)', // Slight zoom for parallax feel?
                                        }}
                                    />
                                    {/* Vertical Divider Line shadow */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: isReversed ? 'auto' : 0,
                                        left: isReversed ? 0 : 'auto',
                                        width: '1px',
                                        height: '100%',
                                        boxShadow: isReversed ? '-5px 0 15px rgba(0,0,0,0.1)' : '5px 0 15px rgba(0,0,0,0.1)'
                                    }}></div>
                                </div>

                                {/* Right Panel - Content */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: isReversed ? '0' : '50%',
                                    width: '50%', height: '100%',
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '4rem',
                                    transform: `translate3d(${(1 - easeP) * 100 * (isReversed ? -1 : 1)}%, 0, 0)`,
                                    transition: 'transform 0.1s linear'
                                }}>
                                    <div style={{ maxWidth: '500px', textAlign: 'left' }}>
                                        {/* Section Label only on first card? Or all? Design had it on all. */}
                                        <h4 style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontWeight: '400', fontSize: '1.25rem' }}>Why Workplace Massage?</h4>
                                        <div style={{ color: 'var(--color-orange)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}><item.icon size={64} /></div>
                                        <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 'bold', color: 'var(--color-teal-dark)', lineHeight: 1.2 }}>{item.title}</h3>
                                        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--color-text-main)', marginBottom: '2rem' }}>{item.longText}</p>

                                        <div style={{ marginTop: '1.5rem' }}>
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
                                                    View Research Source
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
                            </div>
                        );
                    })}

                </div>
            </div>

            {/* Our Services Section - NOW: Sticky Deck Style */}
            <div style={{ position: 'relative', zIndex: 20, backgroundColor: 'white', marginTop: '-100vh' }}>
                <div style={{ position: 'relative' }}>

                    {/* Office Massage Card */}
                    <div
                        style={{
                            position: 'sticky',
                            top: 0,
                            height: '100vh',
                            width: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'row', // Overlay Left
                            alignItems: 'stretch',
                            backgroundColor: 'white',
                            zIndex: 1
                        }}
                    >
                        {/* Background Image */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 0
                        }}>
                            <img
                                src={serviceOfficeImg}
                                alt="Office Massage"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </div>

                        {/* Overlay */}
                        <div className="sticky-card-overlay" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '4rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.90)',
                            zIndex: 1,
                            backdropFilter: 'blur(5px)',
                            marginRight: 'auto', // Left side
                            marginLeft: '0'
                        }}>
                            <div style={{ maxWidth: '500px', textAlign: 'center' }}>
                                <h4 style={{
                                    fontStyle: 'italic',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '1.5rem',
                                    fontWeight: '400',
                                    fontSize: '1.25rem',
                                    letterSpacing: '0.05em'
                                }}>
                                    Our Services
                                </h4>
                                <h3 style={{
                                    fontSize: '3rem',
                                    marginBottom: '1.5rem',
                                    fontWeight: 'bold',
                                    color: 'var(--color-teal-dark)',
                                    lineHeight: 1.2
                                }}>
                                    Office Massage
                                </h3>
                                <p style={{
                                    fontSize: '1.25rem',
                                    lineHeight: '1.8',
                                    color: 'var(--color-text-main)',
                                    marginBottom: '2rem'
                                }}>
                                    Our experienced therapists bring chair or table massage directly to your workplace. Reduce stress, boost morale, and support your team's well-being with recurring wellness programs or one-time appreciation events.
                                </p>
                                <Button to="/services" variant="outline" style={{ backgroundColor: 'white', color: 'var(--color-orange)', border: '2px solid var(--color-orange)', width: 'auto', padding: '0.75rem 1.5rem', boxShadow: 'var(--shadow-md)' }}>LEARN MORE</Button>
                            </div>
                        </div>
                    </div>

                    {/* Event Massage Card */}
                    <div
                        style={{
                            position: 'sticky',
                            top: 0,
                            height: '100vh',
                            width: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'row-reverse', // Overlay Right
                            alignItems: 'stretch',
                            backgroundColor: 'white',
                            zIndex: 2
                        }}
                    >
                        {/* Background Image */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 0
                        }}>
                            <img
                                src={serviceEventImg}
                                alt="Event Massage"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </div>

                        {/* Overlay */}
                        <div className="sticky-card-overlay" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '4rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.90)',
                            zIndex: 1,
                            backdropFilter: 'blur(5px)',
                            marginRight: '0',
                            marginLeft: 'auto' // Right side
                        }}>
                            <div style={{ maxWidth: '500px', textAlign: 'center' }}>
                                <h4 style={{
                                    fontStyle: 'italic',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '1.5rem',
                                    fontWeight: '400',
                                    fontSize: '1.25rem',
                                    letterSpacing: '0.05em'
                                }}>
                                    Our Services
                                </h4>
                                <h3 style={{
                                    fontSize: '3rem',
                                    marginBottom: '1.5rem',
                                    fontWeight: 'bold',
                                    color: 'var(--color-teal-dark)',
                                    lineHeight: 1.2
                                }}>
                                    Event Massage
                                </h3>
                                <p style={{
                                    fontSize: '1.25rem',
                                    lineHeight: '1.8',
                                    color: 'var(--color-text-main)',
                                    marginBottom: '2rem'
                                }}>
                                    Make your next event unforgettable with professional chair massage. Perfect for trade shows, conferences, wellness fairs, corporate retreats, and celebrations. We bring everything needed to create a memorable experience for your guests.
                                </p>
                                <Button to="/event-massage" variant="outline" style={{ backgroundColor: 'white', color: 'var(--color-teal)', border: '2px solid var(--color-teal)', width: 'auto', padding: '0.75rem 1.5rem', boxShadow: 'var(--shadow-md)' }}>DISCOVER</Button>
                            </div>
                        </div>
                    </div>

                </div>
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

        </div >
    );
};


export default Home;
