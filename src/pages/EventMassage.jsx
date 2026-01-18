import React from 'react';
import Button from '../components/ui/Button';
import { Palette, Tent, Trophy, Users, Megaphone, Coffee } from 'lucide-react';

const EventMassage = () => {
    const eventTypes = [
        {
            title: "Trade Shows & Conferences",
            description: "Draw a crowd to your booth or keep attendees refreshed between sessions. It's the ultimate traffic driver.",
            icon: Users
        },
        {
            title: "Marketing Activations",
            description: "Create a memorable brand experience that amplifies your message. We become your brand ambassadors — wearing your apparel, distributing materials, and creating an Instagram-worthy wellness moment.",
            icon: Megaphone
        },
        {
            title: "Golf Tournaments",
            description: "The perfect treat at the 9th hole or after the game. Help players loosen up and recover.",
            icon: Trophy
        },
        {
            title: "Corporate Retreats",
            description: "Add a touch of luxury to your team offsite. A relaxation station creates an instant oasis of calm.",
            icon: Tent
        }
    ];

    return (
        <div className="event-massage-page">
            {/* Hero Section */}
            <section className="section text-center" style={{ backgroundColor: '#fff', padding: '4rem 1rem' }}>
                <div className="container">
                    <h1 className="mb-2">Event Massage Services</h1>
                    <p className="lead mb-3" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                        Turn attendees into engaged participants. On-site massage creates buzz, drives traffic, and delivers a premium brand experience they'll remember.
                    </p>
                    <Button to="/contact" variant="primary">Get an Event Quote</Button>
                </div>
            </section>

            {/* Why Event Massage? */}
            <section className="section">
                <div className="container">
                    <div style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '2rem', borderRadius: '1rem' }}>
                        <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                            <div>
                                <h2 className="mb-2">A Magnet for Attention — And Results</h2>
                                <p className="mb-2">
                                    At crowded events where every booth competes for attention, massage is the universal draw. It creates natural dwell time, sparks conversations, and gives attendees a reason to remember your brand long after the event ends.
                                </p>
                                <ul className="mb-3" style={{ listStyle: 'none', padding: 0 }}>
                                    <li className="mb-1 flex items-center gap-2">
                                        <span className="text-teal">✓</span> <strong>Drive booth traffic</strong> — Everyone has tension. Massage has universal appeal.
                                    </li>
                                    <li className="mb-1 flex items-center gap-2">
                                        <span className="text-teal">✓</span> <strong>Extend engagement time</strong> — 10-15 min sessions = meaningful conversations
                                    </li>
                                    <li className="mb-1 flex items-center gap-2">
                                        <span className="text-teal">✓</span> <strong>Create shareable moments</strong> — Attendees remember experiences, not brochures
                                    </li>
                                </ul>
                            </div>
                            <div style={{ borderRadius: '1rem', overflow: 'hidden', height: '300px' }}>
                                <img
                                    src="/src/assets/event-massage-setup.png"
                                    alt="Professional massage station at trade show booth"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Types Grid */}
            <section className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Perfect For Any Occasion</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {eventTypes.map((type, idx) => (
                            <div key={idx} style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '1rem', textAlign: 'center' }}>
                                <div style={{ color: 'var(--color-teal)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                    <type.icon size={40} />
                                </div>
                                <h3 className="h4 mb-1">{type.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works - Logistics */}
            <section className="section">
                <div className="container">
                    <div style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '2rem', borderRadius: '1rem' }}>
                        <h2 className="text-center" style={{ marginBottom: '3rem' }}>Quick Setup, Big Impact</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>

                            <div className="text-center">
                                <h3 className="h4 mb-1">Compact Footprint</h3>
                                <p style={{ color: 'var(--color-text-muted)' }}>
                                    Each massage station requires just <strong>6×6 feet</strong>. Perfect for booths, corners, or meeting rooms.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="h4 mb-1">Fast Sessions</h3>
                                <p style={{ color: 'var(--color-text-muted)' }}>
                                    <strong>10-15 minute</strong> chair massages keep things moving. Each therapist serves 4-6 guests per hour.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="h4 mb-1">We Handle Everything</h3>
                                <p style={{ color: 'var(--color-text-muted)' }}>
                                    Professional massage chairs, sanitized linens, and setup/breakdown. You focus on your event.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Customization Options */}
            <section className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Customized to Your Brand</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Palette size={32} className="text-orange" style={{ minWidth: '32px' }} />
                            <div>
                                <h3 className="h4 mb-1">White Label Service</h3>
                                <p>We can wear your branded apparel and distribute your marketing materials. We become an extension of your team.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Coffee size={32} className="text-orange" style={{ minWidth: '32px' }} />
                            <div>
                                <h3 className="h4 mb-1">Relaxation Stations</h3>
                                <p>We can transform a simple corner or meeting room into a spa-like oasis with music, aromatherapy, and lighting.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Users size={32} className="text-orange" style={{ minWidth: '32px' }} />
                            <div>
                                <h3 className="h4 mb-1">Licensed & Reliable</h3>
                                <p>All therapists are registered professionals with liability insurance. We arrive early, stay on schedule, and never cancel on event day.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section text-center">
                <div className="container">
                    <div style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '3rem 2rem', borderRadius: '1rem' }}>
                        <h2 className="mb-2">Reserve Your Event Date</h2>
                        <p className="mb-3">Peak conference and trade show seasons book 4-6 weeks in advance. Get pricing and availability within 24 hours.</p>
                        <Button to="/contact" variant="primary">Get Your Event Quote</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventMassage;
