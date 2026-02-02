import React from 'react';
import iomMediaLogo from '../../assets/logos/iom-media-logo2.png';
import jamFilledLogo from '../../assets/logos/jam-filled-logo2.png';
import salesforceLogo from '../../assets/logos/salesforce-logo2.svg';

const TrustedBy = () => {
    return (
        <div className="text-center slide-up">
            <h2 className="mb-4 slide-up delay-100" style={{ marginBottom: '3rem', color: 'var(--color-text-main)' }}>Trusted By</h2>
            <div className="slide-up delay-200" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="https://www.iom-media.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                    <img src={iomMediaLogo} alt="IOM Media" style={{ maxHeight: '60px', width: 'auto', transition: 'opacity 0.2s' }} />
                </a>
                <a href="https://www.jamfilled.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                    <img src={jamFilledLogo} alt="Jam Filled Entertainment" style={{ maxHeight: '70px', width: 'auto', transition: 'opacity 0.2s' }} />
                </a>
                <a href="https://www.salesforce.com/ca/?ir=1" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                    <img src={salesforceLogo} alt="Salesforce" style={{ maxHeight: '60px', width: 'auto', transition: 'opacity 0.2s' }} />
                </a>
            </div>
        </div>
    );
};

export default TrustedBy;
