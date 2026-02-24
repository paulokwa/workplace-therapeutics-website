import React from 'react';
import { Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import useScrollReveal from '../hooks/useScrollReveal';
import rmtHeroImg from '../assets/images/rmt-team-hero.png';
import { CONTACT_EMAIL } from '../data/constants';
import './JoinOurTeam.css';

const BENEFITS = [
    {
        icon: '🗓️',
        title: 'Flexible Scheduling',
        description:
            'Work sessions that fit around your life. Choose the corporate events and ongoing contracts that suit your availability — no rigid 9-to-5.',
    },
    {
        icon: '💼',
        title: 'Consistent Client Pipeline',
        description:
            'We handle marketing, client relationships, and logistics. You show up, do what you love, and leave with a full appointment book.',
    },
    {
        icon: '💰',
        title: 'Competitive Contractor Pay',
        description:
            'Earn excellent rates for every session. We value your expertise and license — our compensation reflects that commitment.',
    },
    {
        icon: '🤝',
        title: 'Supportive Team Culture',
        description:
            'Join a community of like-minded RMTs who care about quality and professionalism. Share knowledge, grow together, and never feel isolated.',
    },
    {
        icon: '🏢',
        title: 'Premium Workplace Clients',
        description:
            "Work with Halifax's leading employers — forward-thinking companies and government agencies that champion employee wellness.",
    },
    {
        icon: '📈',
        title: 'Build Your Reputation',
        description:
            'Grow your professional profile by delivering results-driven therapy at visible, respected workplaces across HRM.',
    },
];

const REQUIREMENTS = [
    'Current, active registration with the College of Massage Therapists of Nova Scotia (CMTNS)',
    'Valid professional liability insurance (minimum $2M)',
    'Strong communication skills and a client-centred, professional demeanour',
    'Reliable transportation — sessions are held at client workplace locations across HRM',
    'Ability to work independently and manage your own time effectively',
    'Commitment to upholding the highest standards of hygiene and therapeutic care',
];

const STEPS = [
    {
        num: '1',
        title: 'Send Us Your Introduction',
        desc: 'Email us a short introduction about yourself, your specialties, and why Workplace Therapeutics excites you.',
    },
    {
        num: '2',
        title: 'Discovery Conversation',
        desc: "We'll reach out to chat about mutual fit, session logistics, compensation, and answer any questions you have.",
    },
    {
        num: '3',
        title: 'Welcome to the Team',
        desc: 'Complete onboarding, get added to our roster, and start doing what you do best — transforming how people feel at work.',
    },
];

const JoinOurTeam = () => {
    useScrollReveal();

    const applyEmail = `mailto:${CONTACT_EMAIL}?subject=RMT%20Application%20%E2%80%94%20Workplace%20Therapeutics&body=Hi%20Laura%2C%0A%0AI%27m%20interested%20in%20joining%20the%20Workplace%20Therapeutics%20team%20as%20a%20contract%20RMT.%0A%0AName%3A%0ACMTNS%20Registration%20%23%3A%0AYears%20of%20experience%3A%0AAvailability%3A%0A%0AA%20bit%20about%20me%3A`;

    return (
        <div className="join-page">

            {/* ── HERO ─────────────────────────────────── */}
            <section className="join-hero">
                <div className="container join-hero-inner">
                    <div className="slide-up">
                        <span className="section-eyebrow">We're Hiring</span>
                        <h1>
                            Bring Your Skills{' '}
                            <span className="join-hero-accent">Where They Matter Most</span>
                        </h1>
                        <p>
                            Workplace Therapeutics is Halifax's leading corporate massage provider.
                            We're growing our team of Registered Massage Therapists and looking for
                            passionate, client-focused professionals ready to make a real impact —
                            one chair massage at a time.
                        </p>
                        <div className="join-hero-badges">
                            <span className="join-badge">📍 Halifax, NS &amp; HRM</span>
                            <span className="join-badge">🕐 Flexible Hours</span>
                            <span className="join-badge">🤝 Contract Position</span>
                            <span className="join-badge">✅ RMT License Required</span>
                        </div>
                        <Button href={applyEmail} variant="primary">
                            Apply Now — It's Easy
                        </Button>
                    </div>
                    <div className="join-hero-img-wrap slide-up delay-200">
                        <img
                            src={rmtHeroImg}
                            alt="Registered Massage Therapists — the Workplace Therapeutics team"
                            className="join-hero-img"
                        />
                    </div>
                </div>
            </section>

            {/* ── WHY JOIN US ──────────────────────────── */}
            <section className="benefits-section">
                <div className="container">
                    <div className="text-center slide-up">
                        <span className="section-eyebrow">Why Work With Us</span>
                        <h2>A Partnership Built Around <span className="text-teal">You</span></h2>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: 1.7 }}>
                            We take the complexity out of running a mobile massage practice, so you
                            can focus entirely on delivering exceptional care.
                        </p>
                    </div>
                    <div className="benefits-grid">
                        {BENEFITS.map((b, i) => (
                            <div
                                key={b.title}
                                className={`benefit-card slide-up delay-${(i % 3 + 1) * 100}`}
                            >
                                <span className="benefit-icon">{b.icon}</span>
                                <h3>{b.title}</h3>
                                <p>{b.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── REQUIREMENTS + TESTIMONIAL ───────────── */}
            <section className="requirements-section">
                <div className="container requirements-inner">
                    <div className="slide-up">
                        <span className="section-eyebrow">What We Look For</span>
                        <h2>Are You the Right Fit?</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                            We hold our team to a high standard — and in return, we treat every
                            therapist like the professional they are.
                        </p>
                        <ul className="requirements-list">
                            {REQUIREMENTS.map((req, i) => (
                                <li key={i}>
                                    <span className="req-check">✓</span>
                                    <span>{req}</span>
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

            {/* ── HOW TO APPLY ─────────────────────────── */}
            <section className="apply-section">
                <div className="container">
                    <div className="text-center slide-up">
                        <span className="section-eyebrow">Getting Started</span>
                        <h2>Three Simple Steps to Join</h2>
                    </div>
                    <div className="apply-steps">
                        {STEPS.map((s, i) => (
                            <div key={s.num} className={`apply-step slide-up delay-${(i + 1) * 100}`}>
                                <div className="apply-step-number">{s.num}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ───────────────────────────── */}
            <section className="join-cta-banner">
                <div className="container slide-up">
                    <h2>Ready to Make a Difference?</h2>
                    <p>
                        We'd love to hear from you. Send us a quick introduction and let's
                        explore what a partnership could look like.
                    </p>
                    <a href={applyEmail} className="join-cta-email-btn">
                        <Mail size={20} />
                        Email Us Your Application
                    </a>
                    <p className="join-cta-note">
                        No formal application portal — just send an email to{' '}
                        <strong>{CONTACT_EMAIL}</strong>
                    </p>
                </div>
            </section>

        </div>
    );
};

export default JoinOurTeam;
