import React from 'react';
import { Users, PartyPopper, Calendar } from 'lucide-react';

import step1Img from '../assets/images/hiw-step1-consultation.png';
import step2Img from '../assets/images/hiw-step2-scheduling.png';
import step3Img from '../assets/images/hiw-step3-booking.png';
import step4Img from '../assets/images/hiw-step4-treatment.png';
import step5Img from '../assets/images/hiw-step5-refreshed.png';

import rmtHandsImg from '../assets/rmt-hands-working.png';
import CTASection from '../components/sections/CTASection';
import './HowItWorks.css';
import useScrollReveal from '../hooks/useScrollReveal';

const STEPS = [
    {
        num: '01',
        eyebrow: 'Step One',
        title: 'Free Discovery Consultation',
        img: step1Img,
        imgAlt: 'HR manager in consultation with a wellness coordinator',
        body: [
            "Every great workplace wellness programme starts with a conversation. We'll connect with your HR team or office manager to understand your workplace — its size, layout, culture, and what your employees need most.",
            "Whether you're exploring massage therapy for the first time or looking to upgrade an existing programme, we ask the right questions to tailor our service to you. There's no obligation and no pressure — just clarity.",
        ],
        chips: ['No commitment required', 'Tailored to your workplace', 'Typically 15–20 minutes'],
    },
    {
        num: '02',
        eyebrow: 'Step Two',
        title: 'Custom Scheduling — On Your Terms',
        img: step2Img,
        imgAlt: 'Calendar scheduling interface on a laptop screen',
        body: [
            "You set the rhythm. Choose a one-time wellness event, monthly visits, or a fully recurring programme — your call. We work around your team's busy periods, shift patterns, and preferred days.",
            "Our scheduling is designed to be zero-friction for your HR team. We confirm dates, allocate therapist time slots, and send you everything you need. No back-and-forth juggling.",
        ],
        chips: ['Recurring or one-time', 'Flexible day and time selection', 'Multi-location support'],
    },
    {
        num: '03',
        eyebrow: 'Step Three',
        title: 'Seamless Booking & Direct Billing',
        img: step3Img,
        imgAlt: 'Online booking portal and payment setup on a laptop',
        body: [
            "We set up a private, branded booking portal via Jane App — your employees claim their own 20- or 30-minute slots at their convenience. No paper sign-ups, no crowded spreadsheets.",
            "Direct billing means employees can submit treatments to their extended health benefits, at no additional cost to them. Our receipts are RMT-certified and fully insurable. The billing admin? We handle it all.",
        ],
        chips: ['Private Jane App portal', 'Direct billing capable', 'RMT receipts for benefits'],
    },
    {
        num: '04',
        eyebrow: 'Step Four',
        title: 'Professional On-Site Treatment',
        img: step4Img,
        imgAlt: 'RMT performing a professional chair massage in a modern office',
        body: [
            "Our licensed RMTs arrive early, set up quietly, and get to work. We bring our own professional-grade massage chair, linens, and equipment — you don't need to provide a thing. We adapt to whatever space you have: a boardroom, a quiet corner, or a dedicated wellness room.",
            "Every session is therapeutic, not just relaxing. Our therapists assess each employee's needs and focus on their specific concerns — whether that's shoulder tension from screen time, lower back fatigue, or stress-related tightness.",
        ],
        chips: ['All equipment provided', 'Clinical + relaxation focus', 'Respectful of your space'],
    },
    {
        num: '05',
        eyebrow: 'Step Five',
        title: 'Your Team Returns Refreshed & Focused',
        img: step5Img,
        imgAlt: 'Happy, relaxed employee at their desk after a massage break',
        body: [
            "The results speak for themselves. Employees return to their desks calmer, more focused, and genuinely grateful. Chronic tension eases. Morale lifts. And your investment in their wellbeing sends a powerful message: this company cares.",
            "Many of our clients report reduced sick days, higher team satisfaction scores, and an engaged workforce that looks forward to massage day. We follow up with your HR team after every session to ensure everything met expectations — and to plan what's next.",
        ],
        chips: ['Measurable morale boost', 'Reduced absenteeism', 'Post-session follow-up included'],
    },
];

const HowItWorks = () => {
    useScrollReveal();

    return (
        <div className="how-it-works-page">

            {/* ── Steps ────────────────────────────────── */}
            <section className="hiw-steps-section">
                <div className="container">
                    <div className="hiw-steps-intro slide-up mobile-header-spacing">
                        <h1>How It Works</h1>
                        <p>
                            Bringing professional massage therapy to your workplace is simpler than
                            you think. Here's exactly what happens from first conversation to
                            your team feeling their best.
                        </p>
                    </div>

                    <div className="hiw-steps-list">
                        {STEPS.map((step, i) => (
                            <div
                                key={step.num}
                                className={`hiw-step-card slide-up delay-${Math.min((i + 1) * 100, 500)}`}
                            >
                                {/* 12.5% — Number */}
                                <div className="hiw-step-num-col">
                                    <div className="hiw-step-num-bubble">{step.num}</div>
                                </div>

                                {/* 75% — Content */}
                                <div className="hiw-step-content-col">
                                    <span className="hiw-step-eyebrow">{step.eyebrow}</span>
                                    <h3>{step.title}</h3>
                                    {step.body.map((para, j) => (
                                        <p key={j}>{para}</p>
                                    ))}
                                    {step.chips && (
                                        <div className="hiw-step-highlights">
                                            {step.chips.map(chip => (
                                                <span key={chip} className="hiw-highlight-chip">{chip}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* 12.5% — Image */}
                                <div className="hiw-step-img-col">
                                    <img src={step.img} alt={step.imgAlt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── The Admin Advantage ───────────────────── */}
            <section className="section" style={{ backgroundColor: 'var(--color-teal-dark)', color: 'white', padding: '5rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="mb-3 slide-up" style={{ color: 'white' }}>The Admin Advantage</h2>
                    <p className="mb-5 slide-up delay-100" style={{ maxWidth: '700px', margin: '0 auto 3rem auto', fontSize: '1.25rem', opacity: 0.9 }}>
                        We understand that bringing wellness to the workplace needs to be effortless for HR. We handle the heavy lifting so you don't have to.
                    </p>
                    <div className="admin-grid">
                        <div className="p-4 slide-up delay-200" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <h4 className="flex items-center gap-2 mb-2" style={{ color: 'white' }}><Users size={24} className="text-teal" /> Online Scheduling</h4>
                            <p>Employees book their own slots via our private Jane App booking portal — no HR involvement needed after setup.</p>
                        </div>
                        <div className="p-4 slide-up delay-300" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <h4 className="flex items-center gap-2 mb-2" style={{ color: 'white' }}><PartyPopper size={24} className="text-teal" /> Marketing Materials</h4>
                            <p>We provide email templates and posters to build excitement and drive employee sign-ups before the first visit.</p>
                        </div>
                        <div className="p-4 slide-up delay-400" style={{ padding: '2rem', borderRadius: '1rem' }}>
                            <h4 className="flex items-center gap-2 mb-2" style={{ color: 'white' }}><Calendar size={24} className="text-teal" /> Seamless Logistics</h4>
                            <p>We arrive early, set up quietly, and leave the space exactly as we found it — clean, quiet, and professional.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why RMTs ─────────────────────────────── */}
            <div className="container section">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="rmt-card-responsive">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100%, 1fr))', gap: '2rem', alignItems: 'start' }}>
                            <div>
                                <h2 className="mb-2 mt-0">Why We Only Hire RMTs</h2>
                                <p className="mb-3 text-muted">
                                    Unlike some services that use "bodyworkers" or students, every Workplace Therapeutics practitioner is a licensed, registered, and insured massage therapist.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-teal" />
                                        <span><strong>Insurance Coverage:</strong> Staff can claim treatments under their health benefits.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-teal" />
                                        <span><strong>Clinical Expertise:</strong> We treat specific issues like repetitive strain, not just "fluff".</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-teal" />
                                        <span><strong>Professional Regulation:</strong> All staff are insured and governed by the college of massage therapists.</span>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ borderRadius: '1rem', overflow: 'hidden', height: '250px' }}>
                                <img
                                    src={rmtHandsImg}
                                    alt="Professional massage therapy treatment"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CTASection
                title="The 'No-Commitment' Demo Day"
                description="Experience the impact firsthand. A single half-day event to see how your team responds."
                buttonText="Book a Demo Day"
                buttonLink="/contact"
                centeredOverlap={true}
            />
        </div>
    );
};

export default HowItWorks;
