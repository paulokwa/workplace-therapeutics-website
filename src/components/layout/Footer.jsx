import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { JANE_BOOKING_URL, NAV_LINKS, CONTACT_EMAIL, CONTACT_PHONE } from '../../data/constants';
import Button from '../ui/Button';
import './Footer.css';

const Footer = () => {
    const location = useLocation();

    // Pages where we want the footer to be higher up (less padding)
    // because they don't have the overlapping CTA section
    const compactFooterPages = ['/contact', '/about', '/workplace-wellness', '/services'];
    const isCompactFooter = compactFooterPages.includes(location.pathname);

    return (
        <footer className="main-footer" style={{ paddingTop: isCompactFooter ? '4rem' : undefined }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                    {/* Brand */}
                    <div>
                        <h3 style={{ marginBottom: '1rem', color: 'white' }}>Workplace Therapeutics</h3>
                        <p style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                            Professional workplace massage therapy in Halifax. Serving businesses since 2018.
                        </p>
                        <div style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1.5rem' }}>
                            <p><strong>Email:</strong> {CONTACT_EMAIL}</p>
                            <p><strong>Phone:</strong> {CONTACT_PHONE}</p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://www.linkedin.com/company/11025564/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                                <Linkedin size={24} />
                            </a>
                            <a href="https://www.instagram.com/workplace_therapeutics/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                                <Instagram size={24} />
                            </a>
                            <a href="https://www.facebook.com/workplacetherapeutics" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                                <Facebook size={24} />
                            </a>
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
