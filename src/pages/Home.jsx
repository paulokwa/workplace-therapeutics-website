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

const CurvedEdge = ({ direction = 'left', color = 'white' }) => {
    // left: curve bulges to the left (content is on the right)
    // right: curve bulges to the right (content is on the left)
    const isLeft = direction === 'left';

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            [isLeft ? 'right' : 'left']: 'calc(100% - 1px)',
            width: '15vh', // Responsive width relative to viewport height for consistent curve
            height: '100%',
            pointerEvents: 'none',
            zIndex: 2
        }}>
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    transform: isLeft ? 'scaleX(1)' : 'scaleX(-1)'
                }}
            >
                <path
                    d="M 100 0 V 100 Q 0 50 100 0 Z"
                    fill={color}
                />
            </svg>
        </div>
    );
};

const Home = () => {
    const [showCitation, setShowCitation] = useState({});
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => revealObserver.observe(el));

        return () => {
            revealElements.forEach(el => revealObserver.unobserve(el));
        };
    }, []);

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
                <div className="container reveal">
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

            {/* Why Workplace Massage Section */}
            {isMobile ? (
                // Mobile Layout - Vertical Stack
                <section className="section" style={{ backgroundColor: '#f9fafb', position: 'relative', zIndex: 100, paddingBottom: '2rem' }}>
                    <div className="container">
                        <h4 className="text-center" style={{
                            fontFamily: 'var(--font-heading)',
                            fontStyle: 'italic',
                            color: 'var(--color-text-muted)',
                            marginBottom: '3rem',
                            fontSize: '1.5rem'
                        }}>
                            Why Workplace Massage?
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {outcomes.map((item) => (
                                <div key={item.id} style={{ marginBottom: '1rem' }}>
                                    {/* Prominent Header - Outside Card */}
                                    <h3 style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '800',
                                        color: 'var(--color-teal-dark)',
                                        marginBottom: '1rem',
                                        lineHeight: 1.1,
                                        letterSpacing: '-0.02em',
                                        fontFamily: 'var(--font-heading)',
                                        textAlign: 'center',
                                        padding: '0 1rem'
                                    }}>
                                        {item.title}
                                    </h3>

                                    <div style={{ position: 'relative', marginTop: '1rem' }}>
                                        {/* Pop-out Image Wrapper */}
                                        <div style={{
                                            width: '85%',
                                            margin: '0 auto',
                                            position: 'relative',
                                            zIndex: 10,
                                            marginBottom: '-3rem', // key overlap
                                            borderRadius: '1.5rem',
                                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                                            overflow: 'hidden'
                                        }}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    display: 'block',
                                                    aspectRatio: '4/3',
                                                    objectFit: 'cover',
                                                    transform: 'scale(1.1)'
                                                }}
                                            />
                                        </div>

                                        {/* White Content Card */}
                                        <div style={{
                                            backgroundColor: '#fff',
                                            borderRadius: '1.5rem',
                                            padding: '4.5rem 2rem 2rem 2rem', // Top padding clears the image overlap
                                            boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)',
                                            position: 'relative',
                                            zIndex: 1
                                        }}>
                                            <div style={{ color: 'var(--color-orange)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                                                <item.icon size={28} />
                                                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Key Benefit</span>
                                            </div>
                                            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '1.5rem', textAlign: 'center' }}>{item.longText}</p>

                                            <div style={{ textAlign: 'center' }}>
                                                {!showCitation[item.id] ? (
                                                    <button
                                                        onClick={() => setShowCitation(prev => ({ ...prev, [item.id]: true }))}
                                                        style={{
                                                            background: 'var(--color-bg-subtle)',
                                                            border: 'none',
                                                            borderRadius: '2rem',
                                                            padding: '0.5rem 1rem',
                                                            color: 'var(--color-text-muted)',
                                                            fontSize: '0.85rem',
                                                            cursor: 'pointer',
                                                            fontWeight: 500
                                                        }}
                                                    >
                                                        View Research Source
                                                    </button>
                                                ) : (
                                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-text-muted)', backgroundColor: 'var(--color-bg-subtle)', padding: '1rem', borderRadius: '0.5rem' }}>
                                                        {item.citation}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                // Desktop Layout - Split Barn Door Animation
                <div ref={whyMassageRef} style={{ height: '500vh', position: 'relative', zIndex: 10 }}>
                    <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', backgroundColor: 'transparent' }}>
                        {outcomes.map((item, index) => {
                            const entryPoint = index;
                            const localProgress = whyMassageProgress - entryPoint;
                            const enterDuration = 0.5;
                            const p = Math.min(1, Math.max(0, localProgress / enterDuration));
                            const easeP = p;
                            const isReversed = index % 2 !== 0; // index 0 (even) = normal (Text R), index 1 (odd) = reversed (Text L)

                            return (
                                <div
                                    key={item.id}
                                    style={{
                                        position: 'absolute',
                                        top: 0, left: 0, width: '100%', height: '100%',
                                        zIndex: index + 10,
                                        pointerEvents: p < 0.1 ? 'none' : 'auto',
                                    }}
                                >
                                    {/* Left Panel - Image Area */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: isReversed ? '50%' : '0',
                                        width: '50%', height: '100%',
                                        overflow: 'hidden',
                                        backgroundColor: 'white',
                                        // Image panel moves away
                                        transform: `translate3d(${(easeP - 1) * 120 * (isReversed ? -1 : 1)}%, 0, 0)`,
                                        transition: 'transform 0.1s linear',
                                        zIndex: 1 // Lower z-index so text can overlap
                                    }}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: '100%', height: '100%', objectFit: 'cover',
                                                transform: 'scale(1.1)',
                                            }}
                                        />
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

                                    {/* Right Panel - Content Area */}
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
                                        // Content panel moves in. 
                                        // We add an extra offset (20%) to the translation to ensure the curve (which sticks out) 
                                        // is fully off-screen when the item is stowed.
                                        transform: `translate3d(${(1 - easeP) * 120 * (isReversed ? -1 : 1)}%, 0, 0)`,
                                        transition: 'transform 0.1s linear',
                                        zIndex: 2, // Higher z-index to overlap image
                                        overflow: 'visible' // Allow curve to stick out
                                    }}>
                                        {/* The Curved Edge */}
                                        <CurvedEdge direction={isReversed ? 'right' : 'left'} />

                                        <div style={{ maxWidth: '500px', textAlign: 'left', position: 'relative', zIndex: 10 }}>
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
            )}

            <section className="section" style={{ position: 'relative', zIndex: 20, backgroundColor: 'var(--color-bg)' }}>
                <div className="container">
                    <h4 className="text-center reveal" style={{
                        fontFamily: 'var(--font-heading)',
                        fontStyle: 'italic',
                        color: 'var(--color-text-muted)',
                        marginBottom: '1rem',
                        fontSize: '1.25rem'
                    }}>
                        Our Services
                    </h4>
                    <h2 className="text-center reveal delay-100" style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        color: 'var(--color-teal-dark)',
                        marginBottom: '4rem',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em'
                    }}>
                        Tailored for your team.
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {/* Office Massage Card */}
                        <div
                            className="reveal"
                            style={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                backgroundColor: 'white',
                                boxShadow: 'var(--shadow-md)',
                                minHeight: '500px'
                            }}
                        >
                            <div style={{ flex: '1', minHeight: '300px' }}>
                                <img
                                    src={serviceOfficeImg}
                                    alt="Office Massage"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            <div style={{
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: isMobile ? '2rem' : '4rem',
                                backgroundColor: 'var(--color-teal-soft)'
                            }}>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1.5rem',
                                    fontWeight: 'bold',
                                    color: 'var(--color-teal-dark)',
                                    lineHeight: 1.2
                                }}>
                                    Office Massage
                                </h3>
                                <p style={{
                                    fontSize: '1.15rem',
                                    lineHeight: '1.7',
                                    color: 'var(--color-text-main)',
                                    marginBottom: '2rem'
                                }}>
                                    Bring relaxation directly to your desk. Our certified therapists provide targeted chair massage that fits perfectly into the workday, helping your team feel refreshed and ready to focus.
                                </p>
                                <Button to="/office-massage" variant="outline" style={{ alignSelf: 'flex-start' }}>DISCOVER</Button>
                            </div>
                        </div>

                        {/* Event Massage Card */}
                        <div
                            className="reveal"
                            style={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row-reverse',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                backgroundColor: 'white',
                                boxShadow: 'var(--shadow-md)',
                                minHeight: '500px'
                            }}
                        >
                            <div style={{ flex: '1', minHeight: '300px' }}>
                                <img
                                    src={serviceEventImg}
                                    alt="Event Massage"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            <div style={{
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: isMobile ? '2rem' : '4rem',
                                backgroundColor: 'var(--color-orange-soft)'
                            }}>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1.5rem',
                                    fontWeight: 'bold',
                                    color: 'var(--color-orange-dark)',
                                    lineHeight: 1.2
                                }}>
                                    Event Massage
                                </h3>
                                <p style={{
                                    fontSize: '1.15rem',
                                    lineHeight: '1.7',
                                    color: 'var(--color-text-main)',
                                    marginBottom: '2rem'
                                }}>
                                    Make your next event unforgettable with professional chair massage. Perfect for trade shows, conferences, wellness fairs, corporate retreats, and celebrations. We bring everything needed to create a memorable experience for your guests.
                                </p>
                                <Button to="/event-massage" variant="outline" style={{ alignSelf: 'flex-start', color: 'var(--color-orange)', borderColor: 'var(--color-orange)' }}>DISCOVER</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* How It Works - Standard Flow (Disabled Slide Over) */}
            <div style={{ position: 'relative', zIndex: 30 }}>
                <HowItWorks />
            </div>



            {/* Testimonials Section */}
            <section className="section" style={{ position: 'relative', zIndex: 55, backgroundColor: '#f3f4f6', padding: isMobile ? '4rem 0 4rem 0' : '4rem 0 13rem 0', marginTop: '0' }}>
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
            </section>



            {/* Final CTA - Floating Card Style (Desktop) / Standard Section (Mobile) */}
            <div style={{
                padding: isMobile ? '4rem 0' : '0',
                marginTop: isMobile ? '0' : '-10rem',
                marginBottom: isMobile ? '0' : '-14rem',
                position: 'relative',
                zIndex: 60,
                backgroundColor: isMobile ? 'white' : 'transparent' // Ensure background on mobile
            }}>
                <div className="container">
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '1.5rem',
                        padding: isMobile ? '2rem' : '4rem',
                        // Remove shadow on mobile if it's just a section, or keep it for card look? Kept for consistency but layout is flat.
                        boxShadow: isMobile ? 'none' : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: isMobile ? '2rem' : '3rem',
                        textAlign: isMobile ? 'center' : 'left'
                    }}>
                        <div style={{ flex: '1 1 300px', textAlign: isMobile ? 'center' : 'left' }}>
                            <h2 style={{
                                fontSize: isMobile ? '2rem' : '3rem',
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
                                lineHeight: '1.6',
                                margin: isMobile ? '0 auto' : '0'
                            }}>
                                Support your team’s physical and mental health with on-site massage programs proven to reduce stress, improve engagement, and elevate workplace culture.
                            </p>
                        </div>
                        <div style={{ flex: '0 0 auto', width: isMobile ? '100%' : 'auto' }}>
                            <Button to="/contact" variant="primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', width: isMobile ? '100%' : 'auto' }}>
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
