import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../data/constants';

const Terms = () => {
    return (
        <div className="container section">
            <h1 className="mb-3">Terms of Use</h1>

            <div className="content-block">
                <p>
                    The following Terms of Use are entered into by and between You and Workplace Therapeutics (“Company”, “we”, or “us”).
                </p>
                <p>
                    The following terms and conditions, together with any documents they expressly incorporate by reference (“Terms of Use”), govern your access to and use of Workplace Therapeutics, including any content, functionality and services offered on or through Workplace Therapeutics (the “Website”), whether as a guest or a registered user.
                </p>

                <h3>Copyright & Content</h3>
                <p>
                    All content on the Website is protected by copyright, trademark and other applicable laws, and are the property of the Workplace Therapeutics unless otherwise noted.
                </p>
                <p>
                    Nothing on this Website may be, in whole or in part, sold or otherwise transmitted in any form or by any means for commercial purposes, except with the prior written permission of Workplace Therapeutics.
                </p>

                <h3>Disclaimer</h3>
                <p>
                    The information on this Website is provided as general information and is not medical advice. If you need advice about a specific medical problem, you should contact a professional in your province or territory.
                </p>
                <p>
                    The full text of the disclaimer for the Website is <Link to="/legal">here</Link>
                </p>

                <h3>Privacy</h3>
                <p>
                    We respect your privacy and follow the principles of PIPEDA in the collection of Personal Information from you on our Website. Please see our full text of our Privacy Policy <Link to="/privacy">here</Link>
                </p>

                <h3>Email And Other Electronic Communications</h3>
                <p>
                    Visiting the Website or sending emails to the Company constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures, and other communications that we provide to you electronically, via email and on the Website, satisfy any legal requirement that such communications be in writing.
                </p>
                <p>
                    We would be pleased to communicate with you by e-mail, and there are various places on this Website that provide you the ability to send an electronic communication to the Company. Any such email or other electronic communication, however, does not create a business relationship or any contractual relationship. As set forth more fully in our Privacy Policy, we will take reasonable steps to ensure that any communications remain confidential, but we cannot guarantee the security of such communications and cannot guarantee that we would not be required to disclose such communications as a result of a court order.
                </p>

                <h3>User Communication</h3>
                <p>
                    The Website may contain chat areas, news groups, forums, communities, comment sections or other message or communication facilities designed to enable you to communicate with the public at large or with a group.
                </p>
                <p>
                    You agree that when using features of the Website that allow for communication by you, that you will not defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of others.
                </p>
                <p>
                    You agree not to publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information, or upload files unless you own or control the rights thereto or have received all necessary consents.
                </p>
                <p>
                    You agree not to advertise or offer to sell or buy any goods or services for any business purpose, or harvest or otherwise collect information about others, including e-mail addresses, without their consent or violate any applicable laws or regulations.
                </p>
                <p>
                    The Company has no obligation to monitor the user communications but reserves the right to review materials posted to the Website and to remove any materials in its sole discretion. The Company reserves the right to terminate your access to any or all of the user communication services at any time without notice for any reason whatsoever and to disclose any information as necessary to satisfy any applicable laws.
                </p>

                <h3>Cancellation and Refund Policies</h3>
                <p>
                    If you are selling services or products directly through the Website, you should restate any of the relevant terms of the sale here including cancellation and refund policies.
                </p>

                <h3>Changes To the Terms Of Use</h3>
                <p>
                    We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter. Your continued use of the Website following the posting of revised Terms of Use means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you.
                </p>

                <h3>Jurisdiction</h3>
                <p>
                    This agreement between you, the user, and Workplace Therapeutics, shall be governed by, and interpreted in accordance with, the laws of the province of Nova Scotia and the laws of Canada applicable therein. You hereby consent and submit to the exclusive jurisdiction of the courts of the province of Nova Scotia in any proceeding related to this agreement.
                </p>

                <h3>Contact Information</h3>
                <p>
                    We welcome your questions about the Terms of Use. You can contact us here:
                </p>
                <p>
                    <strong>Laura Cormier</strong><br />
                    Workplace Therapeutics<br />
                    Halifax, NS<br />
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><br />
                    <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
                </p>
            </div>

            <style jsx>{`
                .content-block p {
                    margin-bottom: 1.5rem;
                    line-height: 1.7;
                }
                .content-block h3 {
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: var(--color-teal-dark);
                }
            `}</style>
        </div>
    );
};

export default Terms;
