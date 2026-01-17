import React from 'react';

import Button from '../components/ui/Button';
import { Armchair, Users, Calendar, PartyPopper, BedDouble, BookOpen } from 'lucide-react';

// Import generated images
import rmtHandsImg from '../assets/rmt-hands-working.png';
import eventSetupImg from '../assets/event-massage-setup.png';



const Services = () => {

    const services = [
        {
            title: "Chair Massage",
            description: "Fully clothed, 10-20 mins per person. Focuses on back, neck, and shoulders. Perfect for busy offices.",
            icon: Armchair
        },
        {
            title: "Table Massage",
            description: "Premium full-body treatment in a private room. Ideal for addressing specific injuries or chronic pain. 30-90 min sessions.",
            icon: BedDouble
        },
        {
            title: "Wellness Days",
            description: "One-off appreciation events. Perfect for trials or quarterly team boosts.",
            icon: PartyPopper
        },
        {
            title: "Ongoing Programs",
            description: "Weekly, bi-weekly, or monthly rotations. The best ROI for retention and stress reduction.",
            icon: Calendar,
            featured: true
        },
        {
            title: "Lunch & Learn",
            description: "Interactive workshops on ergonomics, stress management, and self-care. Great add-on to massage programs.",
            icon: BookOpen
        }
    ];

    return (
        <div className="services-page">
            <div className="container section">
                <h1 className="text-center mb-3">Our Services</h1>
                <p className="text-center mb-2" style={{ maxWidth: 700, margin: '0 auto 1rem auto', color: 'var(--color-text-main)', fontSize: '1.1rem' }}>
                    Reduce stress, boost morale, and retain top talent — without adding to your admin workload. Professional registered massage therapy, delivered on-site at your Halifax workplace.
                </p>
                <p className="text-center mb-3" style={{ maxWidth: 650, margin: '0 auto 3rem auto', color: 'var(--color-text-muted)' }}>
                    Most programs range from 2-6 hours per visit, with weekly, bi-weekly, or monthly scheduling. Flexible funding options available — company-paid, employee-paid, or hybrid models.
                </p>

                {/* Featured Service - Ongoing Programs */}
                <div style={{
                    backgroundColor: 'var(--color-bg-teal-soft)',
                    padding: '2.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '3px solid var(--color-teal)',
                    position: 'relative',
                    marginBottom: '3rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: -14,
                        left: '2rem',
                        background: 'var(--color-teal)',
                        color: 'white',
                        padding: '0.4rem 1rem',
                        borderRadius: '1rem',
                        fontSize: '0.85rem',
                        fontWeight: 'bold'
                    }}>
                        ⭐ Most Popular
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ color: 'var(--color-teal)' }}>
                                <Calendar size={48} />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', margin: 0 }}>Ongoing Programs</h3>
                        </div>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.6' }}>
                            Weekly, bi-weekly, or monthly rotations. The best ROI for retention and stress reduction.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <span style={{ backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                💰 Best Value
                            </span>
                            <span style={{ backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                📈 Highest ROI
                            </span>
                            <span style={{ backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                ⏰ Flexible Scheduling
                            </span>
                        </div>
                    </div>
                </div>

                {/* Other Services - 2×2 Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem',
                    marginBottom: '2rem'
                }} className="services-grid-2x2">
                    {services.filter(s => !s.featured).map((s, idx) => (
                        <div key={idx} style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            border: '1px solid var(--color-border)'
                        }}>
                            <div style={{ color: 'var(--color-teal)', marginBottom: '1rem' }}>
                                <s.icon size={40} />
                            </div>
                            <h3 className="mb-1">{s.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{s.description}</p>
                        </div>
                    ))}
                </div>

                {/* Logistics at a Glance */}
                <div style={{
                    backgroundColor: 'var(--color-bg-teal-soft)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    marginTop: '3rem',
                    marginBottom: '2rem'
                }}>
                    <h3 className="text-center mb-3">Logistics at a Glance</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
                        <div>
                            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Space Needed</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                                Chair: 6×6 ft open area<br />
                                Table: Private room
                            </p>
                        </div>
                        <div>
                            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Session Length</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                                Chair: 10-30 min<br />
                                Table: 30-90 min
                            </p>
                        </div>
                        <div>
                            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Booking Lead Time</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                                2 weeks preferred<br />
                                Rush available
                            </p>
                        </div>
                        <div>
                            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>Disruption</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                                Zero — employees<br />
                                book around meetings
                            </p>
                        </div>
                    </div>
                </div>

                {/* The Admin Advantage */}
                <div className="section" style={{ marginTop: '4rem' }}>
                    <div style={{ padding: '3rem 0', textAlign: 'center' }}>
                        <h2 className="mb-3">The Admin Advantage</h2>
                        <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto 2rem auto' }}>
                            We understand that bringing wellness to the workplace needs to be effortless for HR. We handle the heavy lifting so you don't have to.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="flex items-center gap-2 mb-2"><Users size={20} className="text-teal" /> Online Scheduling</h4>
                                <p className="text-sm text-muted">Employees book their own slots via our private Jane App booking portal.</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="flex items-center gap-2 mb-2"><PartyPopper size={20} className="text-teal" /> Marketing Materials</h4>
                                <p className="text-sm text-muted">We provide email templates and posters to generate excitement.</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="flex items-center gap-2 mb-2"><Calendar size={20} className="text-teal" /> Seamless Logistics</h4>
                                <p className="text-sm text-muted">We arrive early, set up quietly, and leave the space exactly as we found it.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why 100% RMT? */}
                <div className="section" style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '4rem 0', margin: '0 -2rem', borderRadius: '1rem' }}>
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 className="mb-2">Why We Only Hire RMTs (Registered Massage Therapists)</h2>
                            <p className="mb-3 text-lg text-muted">
                                Unlike some services that use "bodyworkers" or students, every Workplace Therapeutics practitioner is a licensed, registered, and insured massage therapist.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-teal" />
                                    <span><strong>Insurance Coverage:</strong> Staff can claim treatments under their health benefits.</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-teal" />
                                    <span><strong>Clinical Expertise:</strong> We treat specific issues like repetitive strain, not just "fluff".</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-teal" />
                                    <span><strong>Professional Regulation:</strong> All staff are insured and governed by the college of massage therapists.</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ borderRadius: '1rem', overflow: 'hidden', height: '300px' }}>
                            <img
                                src={rmtHandsImg}
                                alt="Professional massage therapy treatment"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="section" style={{ padding: '4rem 0', marginTop: '4rem' }}>
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

                        <h2 className="text-center mb-4" style={{ color: '#a0642f', fontSize: '2rem', marginTop: '1.5rem' }}>What Our Clients Say</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
                            {/* Testimonial 1 - Alyssa Lee */}
                            <div style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '1rem',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                border: '1px solid #e8e8e8',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                            }} className="testimonial-card">
                                {/* 5 Stars */}
                                <div style={{ marginBottom: '1rem', color: '#fbbf24', fontSize: '1.1rem' }}>
                                    ★★★★★
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.7', color: '#555', fontSize: '1rem' }}>
                                    "Having a massage therapist coming into our office to offer massages and direct billing without having to leave the building is the BEST! It's so convenient and makes it easy."
                                </p>
                                <p style={{ fontSize: '0.95rem', color: '#a0642f', fontWeight: '600', margin: 0 }}>
                                    Alyssa Lee
                                </p>
                            </div>

                            {/* Testimonial 2 - Craig Young */}
                            <div style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '1rem',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                border: '1px solid #e8e8e8',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                            }} className="testimonial-card">
                                {/* 5 Stars */}
                                <div style={{ marginBottom: '1rem', color: '#fbbf24', fontSize: '1.1rem' }}>
                                    ★★★★★
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.7', color: '#555', fontSize: '1rem' }}>
                                    "The best massage experience I've had in decades. Highly recommend."
                                </p>
                                <p style={{ fontSize: '0.95rem', color: '#a0642f', fontWeight: '600', margin: 0 }}>
                                    Craig Young
                                </p>
                            </div>

                            {/* Testimonial 3 - Pete Delahunty */}
                            <div style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '1rem',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                border: '1px solid #e8e8e8',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                            }} className="testimonial-card">
                                {/* 5 Stars */}
                                <div style={{ marginBottom: '1rem', color: '#fbbf24', fontSize: '1.1rem' }}>
                                    ★★★★★
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.7', color: '#555', fontSize: '1rem' }}>
                                    "Walked in with my shoulders and back holding onto work tension, and walked out feeling free as a leaf. Would recommend!"
                                </p>
                                <p style={{ fontSize: '0.95rem', color: '#a0642f', fontWeight: '600', margin: 0 }}>
                                    Pete Delahunty
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick FAQ Section - Minimal, conversion-focused */}
                <div className="section" style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '4rem 0', margin: '4rem -2rem 0', borderRadius: '1rem' }}>
                    <div className="container">
                        <h2 className="text-center mb-4">Common Questions</h2>
                        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
                            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}>
                                <h4 className="mb-1" style={{ color: 'var(--color-teal)' }}>Do we need a dedicated massage room?</h4>
                                <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>
                                    Not for chair massage! We only need a 6×6 ft open area (conference room corner, empty office, quiet hallway spot). Table massage requires a private room for client comfort.
                                </p>
                            </div>
                            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}>
                                <h4 className="mb-1" style={{ color: 'var(--color-teal)' }}>What if employees don't show up for their bookings?</h4>
                                <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>
                                    Our online booking system sends automatic reminders. In our experience, no-show rates are extremely low because employees genuinely look forward to their sessions.
                                </p>
                            </div>
                            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}>
                                <h4 className="mb-1" style={{ color: 'var(--color-teal)' }}>Can employees claim this through their health benefits?</h4>
                                <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>
                                    Yes! Since all our practitioners are Registered Massage Therapists (RMTs), treatments are eligible for insurance coverage under most employee health plans.
                                </p>
                            </div>
                            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}>
                                <h4 className="mb-1" style={{ color: 'var(--color-teal)' }}>Is this tax-deductible for our business?</h4>
                                <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>
                                    Generally yes, as an employee wellness expense. We recommend consulting your accountant for specific guidance. <a href="/faq" style={{ color: 'var(--color-teal)', textDecoration: 'underline' }}>See our FAQ page</a> for more details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What to Expect Process Explainer */}
                <div className="section" style={{ padding: '3rem 0', textAlign: 'center', marginTop: '4rem' }}>
                    <div className="container">
                        <h3 className="mb-3">What Happens After You Request a Quote?</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                            <div style={{ flex: '1 1 200px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>1</div>
                                <strong>Quick Response</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 0 0' }}>We email within 24 hours</p>
                            </div>
                            <div style={{ flex: '1 1 200px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>2</div>
                                <strong>10-Min Call</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 0 0' }}>Understand your needs & space</p>
                            </div>
                            <div style={{ flex: '1 1 200px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>3</div>
                                <strong>Custom Proposal</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 0 0' }}>Sent same day, ready to approve</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Event Teaser Banner */}
                <div className="section" style={{ backgroundColor: 'var(--color-bg-teal-soft)', padding: '4rem 0', margin: '4rem -2rem 0', borderTop: '1px solid var(--color-border)', borderRadius: '1rem' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                            <div>
                                <h2 className="mb-2">Planning a Corporate Event?</h2>
                                <p className="mb-2">Trade shows, conferences, golf tournaments, marketing activations — we bring the relaxation.</p>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                                    <li className="mb-1 flex items-center gap-2">
                                        <span style={{ color: 'var(--color-orange)' }}>✓</span> White-label service (wear your branded gear)
                                    </li>
                                    <li className="mb-1 flex items-center gap-2">
                                        <span style={{ color: 'var(--color-orange)' }}>✓</span> Draw crowds to your booth
                                    </li>
                                    <li className="mb-1 flex items-center gap-2">
                                        <span style={{ color: 'var(--color-orange)' }}>✓</span> Serving HRM + Nova Scotia by request
                                    </li>
                                </ul>
                                <Button to="/event-massage" variant="primary">Explore Event Services</Button>
                            </div>
                            <div style={{ borderRadius: '1rem', overflow: 'hidden', height: '280px' }}>
                                <img
                                    src={eventSetupImg}
                                    alt="Event massage setup at corporate conference"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center section" style={{ marginTop: '4rem' }}>
                    <Button to="/contact" variant="primary">Request Pricing for These Options</Button>
                </div>
            </div>
        </div>
    );
};

export default Services;
