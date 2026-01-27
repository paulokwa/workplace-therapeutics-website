import React from 'react';
import Button from '../components/ui/Button';
import lauraPhoto from '../assets/images/laura-cormier.jpg';

const About = () => {
    return (
        <div className="about-page">
            <div className="container section">
                <h1 className="text-center mb-4" style={{ marginBottom: '4rem' }}>About Us</h1>

                {/* Main Story & Founder */}
                <div className="responsive-split mb-5" style={{ gap: '4rem', alignItems: 'center' }}>
                    <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                        <img src={lauraPhoto} alt="Laura Cormier, RMT - Founder of Workplace Therapeutics" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                    <div>
                        <h2 className="mb-3">Our Story</h2>
                        <h3 className="h5 text-teal mb-3">Mobile Massage Provided Since 2018</h3>
                        <p className="mb-3">
                            Workplace Therapeutics was founded by Laura Cormier, RMT, with a vision to bridge the gap between busy work schedules and essential self-care.
                            Since 2018, we have been the trusted partner for Halifax's most forward-thinking companies.
                        </p>
                        <p className="mb-3">
                            What started as a one-woman mission has grown into a premier mobile massage service, helping organizations reduce stress, boost morale, and create meaningful wellness experiences for their teams.
                        </p>
                        <p className="mb-4" style={{ marginBottom: '3rem' }}>
                            We believe that wellness shouldn't be a luxury reserved for the weekend—it should be a seamless part of the workday.
                        </p>
                        <Button to="/contact" variant="primary">Work With Us</Button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;
