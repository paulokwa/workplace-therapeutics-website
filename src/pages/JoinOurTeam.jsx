import React from 'react';
import Button from '../components/ui/Button';
import useScrollReveal from '../hooks/useScrollReveal';
import rmtHeroImg from '../assets/images/rmt-team-hero.png';
import { CONTACT_EMAIL } from '../data/constants';
import './JoinOurTeam.css';

const RMT_INTEREST_FORM_URL = import.meta.env.VITE_RMT_INTEREST_FORM_URL;
const INTEREST_FORM_URL = RMT_INTEREST_FORM_URL || `mailto:${CONTACT_EMAIL}?subject=RMT%20Interest%20%E2%80%94%20Workplace%20Therapeutics`;

const BENEFITS = [
    {
        icon: '🗓️',
        title: 'Fit Around Your Existing Practice',
        description:
            'Tell us when you are available. As opportunities arise, you can consider assignments that fit around your existing practice and other commitments.',
    },
    {
        icon: '💼',
        title: 'We Handle Corporate Relationships',
        description:
            'Workplace Therapeutics handles employer outreach, corporate client communication and booking coordination, so you can focus on providing professional care.',
    },
    {
        icon: '📋',
        title: 'Clear Assignment Details',
        description:
            'Before you accept an assignment, we will discuss the location, hours, compensation, payment timing and equipment arrangements with you.',
    },
    {
        icon: '🔄',
        title: 'Occasional and Recurring Opportunities',
        description:
            'Our aim is to develop both individual workplace events and recurring clinics. Tell us which type of opportunity interests you.',
    },
    {
        icon: '🏢',
        title: 'Workplace-Focused Care',
        description:
            'Bring your skills into professional workplaces and help employees access convenient onsite massage therapy during their working day.',
    },
    {
        icon: '💬',
        title: 'A Conversation Before Commitment',
        description:
            'Meet Laura, ask questions and discuss what would make workplace assignments a good fit for you before deciding whether to proceed.',
    },
];

const REQUIREMENTS = [
    'Qualified to practise as a Registered Massage Therapist in Nova Scotia, with current membership in good standing in an association prescribed under the provincial Massage Therapist Titles Protection Regulations, such as MTANS.',
    'Current professional liability insurance covering the services and settings involved.',
    'Professional, respectful and client-centred communication.',
    'Ability to travel reliably to agreed workplace locations within your chosen service area.',
    'Ability to work independently and provide safe, appropriate care.',
    'Appropriate consent, documentation, hygiene and professional standards.',
];

const STEPS = [
    {
        num: '1',
        title: 'Register Your Interest',
        desc: RMT_INTEREST_FORM_URL
            ? 'Complete a short interest form with your contact details, availability and work preferences.'
            : 'Email us with your contact details, availability and work preferences to register your interest.',
    },
    {
        num: '2',
        title: 'Have a Conversation',
        desc: 'We will arrange a conversation to discuss your experience, questions and the practical arrangements that would make workplace assignments worthwhile for you.',
    },
    {
        num: '3',
        title: 'Stay in Touch About Opportunities',
        desc: 'If there is a mutual fit, we can keep your details on our therapist pool with your permission. When suitable work arises, we will confirm availability and agree the details. Professional credentials and insurance must be verified before any assignment.',
    },
];

const JoinOurTeam = () => {
    useScrollReveal();

    return (
        <div className="join-page">
            <section className="join-hero">
                <div className="container join-hero-inner">
                    <div className="slide-up">
                        <span className="section-eyebrow">RMT Contractor Opportunities</span>
                        <h1>Bring Your Skills <span className="join-hero-accent">Into the Workplace</span></h1>
                        <p>
                            Interested in bringing registered massage therapy into Halifax workplaces? Workplace Therapeutics is building a pool of RMTs for future staff appreciation events, wellness days and recurring workplace clinics across HRM. Register your interest and let’s explore whether the opportunity fits your availability.
                        </p>
                        <div className="join-hero-badges">
                            <span className="join-badge">Halifax &amp; HRM</span>
                            <span className="join-badge">Flexible Opportunities</span>
                            <span className="join-badge">Independent Contractor Opportunities</span>
                            <span className="join-badge">Qualified RMTs</span>
                        </div>
                        <Button href={INTEREST_FORM_URL} variant="primary">
                            {RMT_INTEREST_FORM_URL ? 'Register Your Interest' : 'Register Your Interest by Email'}
                        </Button>
                        <p className="join-availability-note">
                            We are building our therapist pool. No assignments or minimum hours are currently guaranteed. Registering your interest does not commit you to accepting work.
                        </p>
                        <p className="join-email-option">
                            Prefer to email? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                        </p>
                    </div>
                    <div className="join-hero-img-wrap slide-up delay-200">
                        <img
                            src={rmtHeroImg}
                            alt="Registered Massage Therapists"
                            className="join-hero-img"
                        />
                    </div>
                </div>
            </section>

            <section className="benefits-section">
                <div className="container">
                    <div className="text-center slide-up">
                        <span className="section-eyebrow">Why Work With Us</span>
                        <h2>A Partnership Built Around <span className="text-teal">You</span></h2>
                        <p className="benefits-intro">
                            We are developing workplace opportunities for RMTs who value clear communication, practical arrangements and the flexibility to consider work that suits them.
                        </p>
                    </div>
                    <div className="benefits-grid">
                        {BENEFITS.map((benefit, i) => (
                            <div key={benefit.title} className={`benefit-card slide-up delay-${(i % 3 + 1) * 100}`}>
                                <span className="benefit-icon">{benefit.icon}</span>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="what-to-expect-section">
                <div className="container what-to-expect-inner slide-up">
                    <div>
                        <span className="section-eyebrow">Practical Details</span>
                        <h2>What Would Working With Us Look Like?</h2>
                        <p>
                            Opportunities may include staff appreciation events, individual wellness days or recurring workplace clinics. The service format and practical arrangements will depend on each employer’s needs.
                        </p>
                    </div>
                    <ul>
                        <li>Tell us your preferred work areas, availability and interest in occasional or recurring assignments.</li>
                        <li>We will discuss compensation, payment timing, equipment, transport and setup responsibilities before you accept any assignment.</li>
                        <li>You do not need to reserve days or turn down other work to register your interest.</li>
                        <li>Availability will be confirmed again when a specific opportunity becomes available.</li>
                    </ul>
                </div>
            </section>

            <section className="requirements-section">
                <div className="container requirements-inner">
                    <div className="slide-up">
                        <span className="section-eyebrow">What We Look For</span>
                        <h2>Are You the Right Fit?</h2>
                        <p className="requirements-intro">
                            Already experienced in workplace massage, or interested in moving into it? We welcome enquiries from qualified RMTs at different stages of their careers.
                        </p>
                        <ul className="requirements-list">
                            {REQUIREMENTS.map((requirement) => (
                                <li key={requirement}>
                                    <span className="req-check" aria-hidden="true">✓</span>
                                    <span>{requirement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="slide-up delay-200">
                        <span className="section-eyebrow">From the Team</span>
                        <div className="testimonial-card">
                            <blockquote>
                                "Joining Workplace Therapeutics was the best career move I've made.
                                I get to focus completely on my clients — no chasing invoices,
                                no cold marketing. Laura has built something really special here,
                                and the clients we work with genuinely value what we do."
                            </blockquote>
                            <cite>
                                Sarah M., RMT
                                <span>Contract Therapist — Workplace Therapeutics</span>
                            </cite>
                        </div>
                    </div>
                </div>
            </section>

            <section className="apply-section">
                <div className="container">
                    <div className="text-center slide-up">
                        <span className="section-eyebrow">Getting Started</span>
                        <h2>Three Simple Steps to Join</h2>
                    </div>
                    <div className="apply-steps">
                        {STEPS.map((step, i) => (
                            <div key={step.num} className={`apply-step slide-up delay-${(i + 1) * 100}`}>
                                <div className="apply-step-number">{step.num}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="join-cta-banner">
                <div className="container slide-up">
                    <h2>Interested in Future Workplace Opportunities?</h2>
                    <p>
                        Tell us a little about yourself and the kind of work you are looking for. We would be happy to discuss whether Workplace Therapeutics could fit alongside your existing practice.
                    </p>
                    <Button href={INTEREST_FORM_URL} variant="primary" className="join-cta-email-btn">
                        {RMT_INTEREST_FORM_URL ? 'Register Your Interest' : 'Register Your Interest by Email'}
                    </Button>
                    <p className="join-cta-email-option">
                        Prefer to ask a question first? <a href={`mailto:${CONTACT_EMAIL}`}>Email Laura</a>.
                    </p>
                    <p className="join-cta-note">
                        Future opportunities depend on client bookings. Joining the interest pool does not guarantee work.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default JoinOurTeam;
