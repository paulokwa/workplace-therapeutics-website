import React from 'react';
import { ClipboardCheck, Shield, Droplets, Sparkles, Thermometer, FileText } from 'lucide-react';
import Button from '../components/ui/Button';
import { JANE_BOOKING_URL } from '../data/constants';

const Covid19 = () => {
    return (
        <div className="container section">
            <h1 className="text-center mb-2">We’re COVID-19 prepared</h1>
            <p className="text-center text-muted mb-5" style={{ fontSize: '1.2rem' }}>
                We take the health of our clients and our therapists seriously.
            </p>

            <div className="grid-layout mb-5">
                <InfoCard
                    icon={<ClipboardCheck size={48} className="text-teal" />}
                    title="COVID Screener"
                    text="In Nova Scotia all clients are required to fill out the COVID health form 24 hours before their treatment. All therapists are required to take their temperature daily and get tested weekly. We believe that prevention will be our best defence."
                />
                <InfoCard
                    icon={<Shield size={48} className="text-teal" />}
                    title="Masking Protocols"
                    text="Therapists are mandated to wear a surgical mask before, during and after each treatment. Each therapist has also been educated on how to properly wear and dispose of their mask and PPE."
                />
                <InfoCard
                    icon={<Droplets size={48} className="text-teal" />}
                    title="Hand Washing"
                    text="Before and after each treatment, RMTs will wash their hands, arms and elbows thoroughly with soap and water. We also will provide each therapist with their own Health Canada approved alcohol sanitizer."
                />
                <InfoCard
                    icon={<Sparkles size={48} className="text-teal" />}
                    title="Sanitizing"
                    text="All tables and chairs are thoroughly cleaned and sanitized before and after clients with Health Canada approved products and linens are safely disposed of for deep cleaning."
                />
            </div>

            <div className="bg-subtle p-4 rounded-lg mb-5">
                <h2 className="text-center mb-4">What you can do for us</h2>
                <div className="grid-layout">
                    <InfoCard
                        icon={<Thermometer size={48} className="text-teal" />}
                        title="Symptoms"
                        text={
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', textAlign: 'left' }}>
                                <li>Do not book a session if you have any of the following:</li>
                                <li>Have been exposed to someone with COVID.</li>
                                <li>Are experiencing symptoms related to COVID-19.</li>
                                <li>Have been travelling outside of Nova Scotia in the past 14 days.</li>
                                <li>Have been at one of the listed exposure sites.</li>
                            </ul>
                        }
                    />
                    <InfoCard
                        icon={<Droplets size={48} className="text-teal" />}
                        title="Hand Washing"
                        text="Please wash and sanitize your hands before each treatment. Also, provide a sink and soap for your therapist to wash their hands."
                    />
                    <InfoCard
                        icon={<FileText size={48} className="text-teal" />}
                        title="Health Forms"
                        text="Please fill out the COVID screener 3 hours before your massage treatment. If you are a new client, please be sure to fill out your health form and consent before the treatment."
                    />
                    <InfoCard
                        icon={<Shield size={48} className="text-teal" />}
                        title="Masking"
                        text="Please wear a clean disposable mask before, during and after each treatment. Please keep others 6 feet away from the therapist and massage table throughout the session."
                    />
                </div>
            </div>

            <div className="text-center">
                <Button href="/contact" variant="primary">Contact Us</Button>
            </div>

            <style jsx>{`
                .grid-layout {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }
                .bg-subtle {
                    background-color: var(--color-bg-subtle);
                    border-radius: 1rem;
                    padding: 3rem 2rem;
                }
            `}</style>
        </div>
    );
};

const InfoCard = ({ icon, title, text }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
            {icon}
        </div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{title}</h3>
        <div style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            {text}
        </div>
    </div>
);

export default Covid19;
