import React from 'react';
import Button from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';
import refreshedEmployeeImg from '../assets/images/refreshed_employee.png';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';

const WorkplaceWellness = () => {
    const benefits = [
        "Boost Morale",
        "Improve Focus",
        "Lower Stress",
        "Retain Top Talent",
        "Decrease Absenteeism",
        "Increase Engagement"
    ];

    return (
        <div className="workplace-wellness-page">
            {/* Hero / Intro Section */}
            <section className="section" style={{ padding: '8rem 0 4rem 0' }}>
                <div className="container">
                    <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                        {/* Copy Column */}
                        <div>
                            <h1 style={{
                                fontSize: '2.5rem',
                                color: 'var(--color-teal-dark)',
                                marginBottom: '1.5rem',
                                lineHeight: 1.2
                            }}>
                                Hey did you know that <strong>work</strong> is the main <strong>stress</strong> for 62% of Canadian workers?
                            </h1>

                            <div style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
                                <p className="mb-3">
                                    And we all know what happens when workers are stressed. <strong>Sick days, stress leave, and a lack of productivity.</strong> That probably sounds like the opposite of what you want!
                                </p>
                                <p className="mb-3">
                                    But, what happens if employers build care for their people and focus on wellness into the workplace?
                                </p>
                                <p className="mb-3">
                                    Chances are, if you’ve landed on our website, you’ve been mulling this over.
                                </p>
                                <p className="mb-3">
                                    <strong>Good news! You’re not alone.</strong> More and more progressive companies are creating in-house wellness programs and the results speak for themselves.
                                </p>
                                <p className="mb-3">
                                    When stressed out, high-strung workers feel their employers actually care, they do better work. Full stop.
                                </p>
                                <p className="mb-0">
                                    And this can only help your business.
                                </p>
                                <p className="mt-3" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-teal)' }}>
                                    Happier, Healthier people. A more robust bottom line.
                                </p>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}>
                                <img
                                    src={refreshedEmployeeImg}
                                    alt="Refreshed and happy workplace member"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-teal-dark)', color: 'white', padding: '5rem 0' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'white' }}>
                        Benefits Of Workplace Massage
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '3rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {benefits.map((benefit, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    border: '2px solid white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CheckCircle size={32} color="white" strokeWidth={1.5} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '500', color: 'white' }}>{benefit}</h3>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem' }}>
                        <Button to="/contact" variant="primary" style={{ backgroundColor: 'var(--color-orange)', borderColor: 'var(--color-orange)' }}>
                            Get Demo
                        </Button>
                    </div>
                </div>
            </section>

            <TestimonialCarousel />


        </div>
    );
};

export default WorkplaceWellness;
