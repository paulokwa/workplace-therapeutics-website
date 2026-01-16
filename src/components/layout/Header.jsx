import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { JANE_BOOKING_URL, NAV_LINKS } from '../../data/constants';
import Button from '../ui/Button';
import './Header.css';
import Logo from '../../assets/icons/logo-header.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
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

                    <Button to="/contact" variant="primary" className="header-btn">
                        Request a Quote
                    </Button>
                    <Button href={JANE_BOOKING_URL} variant="secondary" className="header-btn">
                        Existing Clients
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <nav>
                        <ul>
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} onClick={toggleMenu} className="mobile-link">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
