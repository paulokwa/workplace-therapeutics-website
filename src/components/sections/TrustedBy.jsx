import React from 'react';
import iomMediaLogo from '../../assets/logos/iom-media-logo.png';
import jamFilledLogo from '../../assets/logos/jam-filled-logo.png';
import salesforceLogo from '../../assets/logos/salesforce-logo.png';

const TrustedBy = () => {
    return (
        <div className="text-center" style={{ marginTop: '4rem' }}>
            <h2 className="mb-4" style={{ marginBottom: '3rem', color: 'var(--color-text-main)' }}>Trusted By</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center', opacity: 0.8 }}>
                <a href="https://www.iom-media.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                    <img src={iomMediaLogo} alt="IOM Media" style={{ maxHeight: '60px', width: 'auto', filter: 'grayscale(100%)', opacity: 0.8, transition: 'opacity 0.2s' }} />
                </a>
                <a href="https://www.jamfilled.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                    <img src={jamFilledLogo} alt="Jam Filled Entertainment" style={{ maxHeight: '70px', width: 'auto', filter: 'grayscale(100%)', opacity: 0.8, transition: 'opacity 0.2s' }} />
                </a>
                <a href="https://www.salesforce.com/ca/?ir=1" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                    <img src={salesforceLogo} alt="Salesforce" style={{ maxHeight: '60px', width: 'auto', filter: 'grayscale(100%)', opacity: 0.8, transition: 'opacity 0.2s' }} />
                </a>
            </div>
        </div>
    );
};

export default TrustedBy;
