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
            description: "Create a memorable brand experience. We can wear your branded gear and distribute your materials.",
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
            <section className="section text-center" style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '4rem 1rem' }}>
                <div className="container">
                    <h1 className="mb-2">Event Massage Services</h1>
                    <p className="lead mb-3" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                        Make your next event unforgettable. From trade shows to staff appreciation days, we bring the relaxation to you.
                    </p>
                    <Button to="/contact" variant="primary">Get an Event Quote</Button>
                </div>
            </section>

            {/* Why Event Massage? */}
            <section className="section container">
                <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="mb-2">Stand Out & De-Stress</h2>
                        <p className="mb-2">
                            In the busy environment of a trade show or the high-energy atmosphere of a corporate event, a massage station is a magnet for attention.
                        </p>
                        <ul className="mb-3" style={{ listStyle: 'none', padding: 0 }}>
                            <li className="mb-1 flex items-center gap-2">
                                <span className="text-teal">✓</span> Keep attendees energized and focused
                            </li>
                            <li className="mb-1 flex items-center gap-2">
                                <span className="text-teal">✓</span> Create positive brand associations
                            </li>
                            <li className="mb-1 flex items-center gap-2">
                                <span className="text-teal">✓</span> Reward your team instantly
                            </li>
                        </ul>
                    </div>
                    <div style={{ backgroundColor: '#f5f5f5', borderRadius: '1rem', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                        Placeholder: Event Image (Trade Show Booth)
                    </div>
                </div>
            </section>

            {/* Event Types Grid */}
            <section className="section" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <h2 className="text-center mb-4">Perfect For Any Occasion</h2>
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

            {/* Customization Options */}
            <section className="section container">
                <h2 className="text-center mb-4">Customized to Your Brand</h2>
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

                </div>
            </section>

            {/* CTA */}
            <section className="section text-center" style={{ backgroundColor: 'var(--color-bg-teal-soft)' }}>
                <div className="container">
                    <h2 className="mb-2">Ready to Book?</h2>
                    <p className="mb-3">Event dates fill up fast. Contact us to secure your spot.</p>
                    <Button to="/contact" variant="primary">Get a Quote</Button>
                </div>
            </section>
        </div>
    );
};

export default EventMassage;
