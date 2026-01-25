import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { JANE_BOOKING_URL, CONTACT_EMAIL, CONTACT_PHONE } from '../data/constants';
import { Mail, Phone, MapPin } from 'lucide-react';


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to store form data locally or send via email
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            <div className="container section">
                <h1 className="text-center mb-3">
                    Request a Quote
                </h1>
                <p className="text-center mb-3 text-muted" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    Ready to bring wellness to your workplace? Fill out the form below and we'll get back to you within 1 business day.
                </p>

                <div className="contact-layout">

                    {/* Contact Info */}
                    <div style={{ order: 2 }}>
                        <div style={{ background: 'var(--color-bg-subtle)', padding: '2rem', borderRadius: '1rem' }}>
                            <h3 className="mb-2">Other Ways to Reach Us</h3>

                            <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Mail className="text-teal" />
                                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                            </div>

                            <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Phone className="text-teal" />
                                <span>{CONTACT_PHONE}</span>
                            </div>

                            <div className="mb-3" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <MapPin className="text-teal" />
                                <span>Serving Halifax Regional Municipality (HRM)</span>
                            </div>

                            <hr style={{ borderColor: 'var(--color-border)', margin: '2rem 0' }} />

                            <h4 className="mb-1">Already a client?</h4>
                            <Button href={JANE_BOOKING_URL} variant="secondary" style={{ width: '100%' }}>Book with Jane</Button>
                        </div>

                        {/* What Happens After You Request a Quote - MOVED FROM HOW IT WORKS */}
                        <div style={{ marginTop: '2rem', textAlign: 'left' }}>
                            <h4 className="mb-3 text-center">What Happens Next?</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ flexShrink: 0, width: '2rem', height: '2rem', background: 'var(--color-teal)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                                    <div>
                                        <strong>Quick Response</strong>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>We email within 24 hours</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ flexShrink: 0, width: '2rem', height: '2rem', background: 'var(--color-teal)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                                    <div>
                                        <strong>10-Min Call</strong>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>Understand your needs & space</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ flexShrink: 0, width: '2rem', height: '2rem', background: 'var(--color-teal)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                                    <div>
                                        <strong>Custom Proposal</strong>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>Sent same day, ready to approve</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{ order: 1 }}>
                        {submitted ? (
                            <div style={{ background: '#f0fdfa', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--color-teal)' }}>
                                <h3 className="text-teal mb-1">Thank you!</h3>
                                <p>We have received your request and will be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                                    <input required type="text" style={inputStyle} placeholder="Jane Doe" />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Company Name</label>
                                        <input required type="text" style={inputStyle} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Role</label>
                                        <input type="text" style={inputStyle} placeholder="HR Manager, Owner, etc." />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                                        <input required type="email" style={inputStyle} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone (Optional)</label>
                                        <input type="tel" style={inputStyle} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Company Size (Approx)</label>
                                    <select style={inputStyle}>
                                        <option>1-10</option>
                                        <option>11-50</option>
                                        <option>51-100</option>
                                        <option>100+</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Interested In</label>
                                    <select style={inputStyle}>
                                        <option>Chair Massage (Regular)</option>
                                        <option>Wellness Day Event</option>
                                        <option>Pilot / Trial</option>
                                        <option>Not sure yet</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Notes / Preferred Dates</label>
                                    <textarea rows="4" style={inputStyle}></textarea>
                                </div>

                                <Button type="submit" variant="primary">Send Request</Button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--color-border)',
    fontFamily: 'inherit',
    fontSize: '1rem'
};

export default Contact;
