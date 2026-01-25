import React from 'react';
import Button from '../components/ui/Button';
import { Armchair, Users, BedDouble, BookOpen } from 'lucide-react';

import chairMassageImg from '../assets/chair_massage_office.png';
import tableMassageImg from '../assets/table_massage_room.png';
import lunchLearnImg from '../assets/lunch_and_learn_workshop.png';
import eventMassageImg from '../assets/corporate_event_massage.png';

const Services = () => {

    const serviceCards = [
        {
            title: "Workplace Seated Massage",
            description: "Our corporate seated massage services provide a rejuvenating experience that incorporates remedial massage, shiatsu, and trigger point therapy. Relieve stress and leave your team feeling energised and refreshed. Therapists use ergonomic chairs to provide 10, 15, or 20 minutes of neck, shoulder, back, and arm massage per person.",
            image: chairMassageImg,
            icon: Armchair
        },
        {
            title: "Private Table Massage",
            description: "For a deeper, more clinical approach, our private table massage offers a full-body restorative experience. Ideal for employees dealing with chronic pain, injury recovery, or significant stress, these 30-60 minute sessions provide the same quality of care as a high-end clinic, right in your office.",
            image: tableMassageImg,
            icon: BedDouble
        },
        {
            title: "Lunch & Learn Workshops",
            description: "Transform your lunch break into an opportunity for growth. Our interactive wellness workshops empower your team with practical tools to manage stress, improve ergonomics, and prioritize self-care—all without disrupting the workday. Engaging, educational, and effective.",
            image: lunchLearnImg,
            icon: BookOpen
        },
        {
            title: "Corporate Events & Conferences",
            description: "Elevate your next corporate gathering with our professional event wellness services. Whether it's driving traffic to your trade show booth, creating a memorable brand activation, or adding a touch of luxury to a corporate retreat, our team handles all the logistics. We become your brand ambassadors, creating an inviting atmosphere that keeps attendees engaged and leaves a lasting impression.",
            image: eventMassageImg,
            icon: Users
        }
    ];

    // Inline Styles for Layout consistency since Tailwind is not detected/working
    const pageStyle = {
        backgroundColor: '#f9fafb', // stone-50 equivalent
        minHeight: '100vh',
        paddingBottom: '5rem',
        fontFamily: 'Inter, sans-serif'
    };

    const headerStyle = {
        backgroundColor: 'rgba(120, 53, 15, 0.05)', // brand-brown/5
        paddingTop: '8rem',
        paddingBottom: '3rem',
        marginBottom: '3rem',
        borderBottom: '1px solid rgba(120, 53, 15, 0.1)',
        textAlign: 'center'
    };

    const sectionTitleStyle = {
        color: '#0f766e', // teal-700
        fontSize: '3rem',
        fontWeight: 'bold',
        marginTop: '0.5rem',
        marginBottom: '1rem'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
    };

    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: '1rem',
        border: '1px solid #e7e5e4', // stone-200
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease',
        height: '100%'
    };

    const imageContainerStyle = {
        width: '100px',
        height: '100px',
        marginBottom: '1.5rem',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid #fafaf9', // stone-50
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        flexShrink: 0
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    const cardTitleStyle = {
        color: '#0f766e', // teal-700
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
    };

    const cardDescStyle = {
        color: '#57534e', // stone-600
        fontSize: '0.875rem',
        lineHeight: '1.6',
        marginBottom: '2rem',
        flexGrow: 1
    };

    return (
        <div style={pageStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <div className="container">
                    <span style={{ color: '#0d9488', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                        Comprehensive Wellness
                    </span>
                    <h1 style={sectionTitleStyle}>Our Services</h1>
                    <p style={{ fontSize: '1.25rem', color: '#57534e', maxWidth: '42rem', margin: '0 auto' }}>
                        Professional registered massage therapy and wellness education, delivered directly to your workplace or event.
                    </p>
                </div>
            </div>

            <div style={gridStyle}>
                {serviceCards.map((service, idx) => (
                    <div key={idx} style={cardStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                        }}
                    >

                        {/* Little Image Area - Constrained Size */}
                        <div style={imageContainerStyle}>
                            <img
                                src={service.image}
                                alt={service.title}
                                style={imageStyle}
                            />
                        </div>

                        <h3 style={cardTitleStyle}>{service.title}</h3>

                        <p style={cardDescStyle}>
                            {service.description}
                        </p>

                        <div style={{ width: '100%', marginTop: 'auto' }}>
                            <Button to="/contact" variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Get a Quote
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
