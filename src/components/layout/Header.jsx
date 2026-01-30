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
    }, [isHomePage]);

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

    // Block scrolling when menu is open (mobile and tablet)
    useEffect(() => {
        const checkAndLockScroll = () => {
            // We generally want to lock if menu is open. 
            // However, if we resize to desktop (min-width: 1300px), the menu is hidden by CSS, 
            // but we should also probably ensure the logic doesn't lock scroll if the menu state persists technically.
            const isDesktop = window.matchMedia('(min-width: 1300px)').matches;

            if (isMenuOpen && !isDesktop) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };

        checkAndLockScroll(); // Check on mount/update

        window.addEventListener('resize', checkAndLockScroll);

        return () => {
            // Reset on cleanup
            document.body.style.overflow = '';
            window.removeEventListener('resize', checkAndLockScroll);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <img src={Logo} alt="Workplace Therapeutics" className="logo-img" />
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Actions */}
                <div className="desktop-actions">
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

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
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
        </header>
    );
};

export default Header;
