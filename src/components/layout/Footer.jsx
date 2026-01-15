import React from 'react';
import { Link } from 'react-router-dom';
import { JANE_BOOKING_URL, NAV_LINKS, CONTACT_EMAIL, CONTACT_PHONE } from '../../data/constants';
import Button from '../ui/Button';
import '../../styles/global.css';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-bg-subtle)', padding: '4rem 0', marginTop: 'auto' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                    {/* Brand */}
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-teal-dark)' }}>Workplace Therapeutics</h3>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                            Professional workplace massage therapy in Halifax. Serving businesses since 2018.
                        </p>
                        <div>
                            <p><strong>Email:</strong> {CONTACT_EMAIL}</p>
                            <p><strong>Phone:</strong> {CONTACT_PHONE}</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} style={{ color: 'var(--color-text-muted)' }}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Existing Clients</h4>
                        <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                            Already have an account? Skip the quote and book directly.
                        </p>
                        <Button href={JANE_BOOKING_URL} variant="outline">
                            Book with Jane
                        </Button>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '3rem', paddingTop: '1.5rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/privacy" style={{ color: 'inherit' }}>Privacy Policy</Link>
                        <Link to="/terms" style={{ color: 'inherit' }}>Terms of Use</Link>
                        <Link to="/covid-19" style={{ color: 'inherit' }}>COVID-19</Link>
                        <Link to="/legal" style={{ color: 'inherit' }}>Legal Disclaimer</Link>
                    </div>
                    &copy; {new Date().getFullYear()} Workplace Therapeutics. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
