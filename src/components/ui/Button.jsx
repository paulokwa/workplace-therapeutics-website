import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.css';

const Button = ({
    children,
    variant = 'primary', // primary, secondary, outline
    to,
    href,
    onClick,
    className = '',
    ...props
}) => {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const combinedClass = `${baseClass} ${variantClass} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClass} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
