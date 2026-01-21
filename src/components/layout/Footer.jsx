import React from 'react';
import { Link } from 'react-router-dom';
import { JANE_BOOKING_URL, NAV_LINKS, CONTACT_EMAIL, CONTACT_PHONE } from '../../data/constants';
import Button from '../ui/Button';
import '../../styles/global.css';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-teal-dark)', padding: '12rem 0 4rem 0', marginTop: 'auto', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                    {/* Brand */}
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: 'white' }}>Workplace Therapeutics</h3>
                        <p style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                            Professional workplace massage therapy in Halifax. Serving businesses since 2018.
                        </p>
                        <div style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            <p><strong>Email:</strong> {CONTACT_EMAIL}</p>
                            <p><strong>Phone:</strong> {CONTACT_PHONE}</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: 'white' }}>Existing Clients</h4>
                        <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                            Already have an account? Skip the quote and book directly.
                        </p>
                        <Button href={JANE_BOOKING_URL} variant="outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
                            Book with Jane
                        </Button>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '3rem', paddingTop: '1.5rem', textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
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
