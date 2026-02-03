import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, User } from 'lucide-react';
import { JANE_BOOKING_URL, NAV_LINKS } from '../../data/constants';
import Button from '../ui/Button';
import './Header.css';
import Logo from '../../assets/icons/logo-header.svg';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Start with scrolled state on non-home pages for visibility
    const [isScrolled, setIsScrolled] = useState(!isHomePage);

    // Update state when route changes
    React.useEffect(() => {
        if (isHomePage) {
            setIsScrolled(window.scrollY > 20);
        } else {
            setIsScrolled(true);
        }
        setIsMenuOpen(false); // Close menu on route change
    }, [isHomePage, location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            // Only apply scroll-based styling on home page
            if (isHomePage) {
                setIsScrolled(window.scrollY > 20);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    // Block scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container header-container">
                {/* Desktop Menu Button - Left */}
                {/* Desktop Menu Button - Moved to Actions */}

                {/* Logo - Center for Desktop, Left for Mobile */}
                <Link to="/" className="logo">
                    <img src={Logo} alt="Workplace Therapeutics" className="logo-img" />
                </Link>

                {/* Desktop Actions - Right */}
                <div className="desktop-actions">
                    <button className="desktop-menu-btn" onClick={toggleMenu}>
                        <span className="menu-text">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
                    </button>
                    <Button to="/contact" variant="icon-orange" className="header-btn">
                        <div className="btn-icon-circle">
                            <MessageCircle size={16} color="var(--color-orange-dark)" strokeWidth={2.5} />
                        </div>
                        REQUEST QUOTE
                    </Button>
                    <Button href={JANE_BOOKING_URL} variant="icon-teal" className="header-btn">
                        <div className="btn-icon-circle">
                            <User size={16} color="var(--color-teal)" strokeWidth={2.5} />
                        </div>
                        CLIENT PORTAL
                    </Button>
                </div>

                {/* Mobile Toggle - Right (Visible only on mobile) */}
                <button className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="toggle-icon">
                        <Menu size={24} className="icon-menu" />
                        <X size={24} className="icon-x" />
                    </span>
                </button>
            </div>

            {/* Desktop Menu Panel */}
            <div className={`desktop-menu-panel ${isMenuOpen ? 'open' : ''}`}>
                <div className="container">
                    <nav className="desktop-panel-nav">
                        <ul className="desktop-panel-links">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) => isActive ? 'panel-link active' : 'panel-link'}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu (kept for mobile view) */}
            <div className={`mobile-menu-container ${isMenuOpen ? 'open' : ''}`}>
                {isMenuOpen && (
                    <>
                        <div className="menu-backdrop" onClick={toggleMenu}></div>
                        <div className="mobile-menu">
                            <nav>
                                <ul>
                                    {NAV_LINKS.map((link) => (
                                        <li key={link.name}>
                                            <NavLink
                                                to={link.path}
                                                onClick={toggleMenu}
                                                className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                                            >
                                                {link.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
