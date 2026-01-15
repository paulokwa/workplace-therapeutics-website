import React from 'react';

const Legal = () => {
    return (
        <div className="container section">
            <h1 className="mb-3">Legal Disclaimer</h1>

            <div className="content-block">
                <p>
                    The information on this Website operated by Workplace Therapeutics is for general information and education on massage therapy only.
                </p>
                <p>
                    By visiting this Website, you have not retained Workplace Therapeutics to give professional advice and the information on the Website should not be considered a substitute for professional advice.
                </p>
                <p>
                    Workplace Therapeutics makes no warranty as to the accuracy, validity, timeliness or completeness of any information on this Website or any Website that can be accessed through this Website.
                </p>
                <p>
                    Workplace Therapeutics assumes no liability for any damages whatsoever, including, without limitation, indirect, special, consequential, punitive or incidental damages of any kind, whether brought in contract or tort, arising out of or in connection with this Website, the inability to use this Website or the use, reliance upon, or performance of any material contained in or accessed from this Website, or any linked Website, even if we are expressly advised of the possibility of such damages.
                </p>
                <p>
                    By using this Website, you agree to take full responsibility for any harm or damage you suffer as a result of the use, or non-use, of the information available on this Website or the resources available for use or download from this Website. You agree to use judgment and conduct due diligence before taking any action or implementing any action or program suggested or recommended on this Website.
                </p>
                <p>
                    Workplace Therapeutics is not responsible for any errors or omissions, or for the results obtained from the use of any information on this Website.
                </p>
            </div>

            <style jsx>{`
                .content-block p {
                    margin-bottom: 1.5rem;
                    line-height: 1.7;
                }
            `}</style>
        </div>
    );
};

export default Legal;
