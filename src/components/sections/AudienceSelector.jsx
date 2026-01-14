import React from 'react';
import { useAudience } from '../../contexts/AudienceContext';
import { Building2, User } from 'lucide-react';
import './AudienceSelector.css';

const AudienceSelector = () => {
    const { setMode } = useAudience();

    return (
        <div className="audience-selector-container">
            <div className="container">
                <h2 className="selector-title">How should we tailor this site for you?</h2>
                <div className="selector-grid">

                    <button
                        className="selector-card employer"
                        onClick={() => setMode('employer')}
                    >
                        <div className="icon-wrapper">
                            <Building2 size={48} />
                        </div>
                        <h3>I manage a team or workplace</h3>
                        <p>I'm looking for pricing, logistics, and ROI for my company.</p>
                        <span className="selector-cta">Enter Employer Mode &rarr;</span>
                    </button>

                    <button
                        className="selector-card employee"
                        onClick={() => setMode('employee')}
                    >
                        <div className="icon-wrapper">
                            <User size={48} />
                        </div>
                        <h3>I works at a company</h3>
                        <p>I want to champion this to my boss or simply book for myself.</p>
                        <span className="selector-cta">Enter Employee Mode &rarr;</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default AudienceSelector;
