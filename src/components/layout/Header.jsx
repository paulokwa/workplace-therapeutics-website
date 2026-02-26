import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, User } from 'lucide-react';
import { JANE_BOOKING_URL, NAV_LINKS } from '../../data/constants';
import Button from '../ui/Button';
import SideNavbar from './SideNavbar';
import './Header.css';
import Logo from '../../assets/icons/logo-header.svg';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Start with scrolled state on non-home pages for visibility
    const [isScrolled, setIsScrolled] = useState(!isHomePage);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = React.useRef(0);

    const checkHeaderBackground = () => {
        // Query commonly known dark sections including the home page hero, join page hero, CTA banners, and the footer
        const darkSections = Array.from(document.querySelectorAll('.bg-hero, .join-hero, .join-cta-banner, .footer, .dark-section'));
        let isOverDarkSection = false;
        const headerMidpoint = 40; // Approx middle of the 80px header

        for (const section of darkSections) {
            const rect = section.getBoundingClientRect();
            // Check if the header midpoint is within the vertical bounds of the dark section
            if (rect.top <= headerMidpoint && rect.bottom >= headerMidpoint) {
                isOverDarkSection = true;
                break;
            }
        }

        // If we are over a dark section, we want isScrolled to be false (so it gets white text/logo).
        // If we are NOT over a dark section (e.g. over a light background), isScrolled is true.
        setIsScrolled(!isOverDarkSection);
        setIsVisible(true);
    };

    // Update state when route changes
    React.useEffect(() => {
        setIsVisible(true); // Always show header on route change
        setIsMenuOpen(false); // Close menu on route change

        // Let the DOM render the new page content before calculating overlap
        setTimeout(checkHeaderBackground, 50);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            checkHeaderBackground();
            lastScrollY.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Handle initially
        checkHeaderBackground();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname, isMenuOpen]);

    // Block scrolling when menu is open
    // Block scrolling when menu is open (Mobile only - Desktop SideNavbar handles its own)
    useEffect(() => {
        if (isMenuOpen && window.innerWidth < 1300) {
            document.body.style.overflow = 'hidden';
        } else {
            // Only clear if not handled by SideNavbar (SideNavbar handles itself)
            // Actually, if we switch from mobile to desktop while open, complications arise.
            // Simplest: Let SideNavbar handle its own. This effect handles Mobile.
            // If internal logic is separate, it's safer.
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Ensure header is visible when resizing to mobile
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1300) {
                setIsVisible(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''} ${!isVisible ? 'header-hidden' : ''}`}>
            <div className="container header-container">
                {/* Desktop Menu Button - Left */}
                {/* Desktop Menu Button - Moved to Actions */}

                {/* Logo - Center for Desktop, Left for Mobile */}
                <Link to="/" className="logo">
                    <img src={Logo} alt="Workplace Therapeutics" className="logo-img" />
                </Link>

                {/* Desktop Actions - Right */}
                {/* Floating Menu Button - Desktop */}
                {/* Floating Menu Button - Desktop */}
                <button className={`desktop-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="menu-icon-wrapper">
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </span>
                    <span className="menu-text">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
                </button>

                {/* Desktop Actions - Right (Hidden or Repositioned) */}
                <div className="desktop-actions" style={{ display: 'none' }}>
                    {/* Hiding other actions as per request to remove navbar. 
                        Ideally these should be in the Side Menu now. */}
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

            {/* Desktop Side Navbar (New) */}
            <SideNavbar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

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
