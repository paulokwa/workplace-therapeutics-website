import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, MessageCircle, User } from 'lucide-react';
import { NAV_LINKS, JANE_BOOKING_URL } from '../../data/constants';
import Button from '../ui/Button';
import './SideNavbar.css';

const SideNavbar = ({ isOpen, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // Lock html as well
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className="limit-desktop">
            <div
                className={`side-navbar-overlay ${isOpen ? 'open' : ''}`}
                onClick={onClose}
                aria-hidden="true"
            />
            <aside className={`side-navbar-drawer ${isOpen ? 'open' : ''}`}>
                <div className="side-navbar-header">
                    <span className="side-navbar-title">Menu</span>
                    <button className="close-btn" onClick={onClose} aria-label="Close menu">
                        <X size={24} />
                    </button>
                </div>

                <nav className="side-navbar-nav">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}
                            onClick={onClose}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="side-navbar-actions">
                    <Button to="/contact" variant="icon-orange" className="side-nav-btn">
                        <div className="btn-icon-circle">
                            <MessageCircle size={16} color="var(--color-orange-dark)" strokeWidth={2.5} />
                        </div>
                        REQUEST QUOTE
                    </Button>
                    <Button href={JANE_BOOKING_URL} variant="icon-teal" className="side-nav-btn">
                        <div className="btn-icon-circle">
                            <User size={16} color="var(--color-teal)" strokeWidth={2.5} />
                        </div>
                        CLIENT PORTAL
                    </Button>
                </div>

                <div className="side-navbar-footer">
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-500)' }}>
                        &copy; {new Date().getFullYear()} Workplace Therapeutics
                    </p>
                </div>
            </aside>
        </div>
    );
};

export default SideNavbar;
