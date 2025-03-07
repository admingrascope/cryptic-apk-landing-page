import { Link } from "react-router-dom";
import HeaderBG from"../assets/images/header-bg.jpg";
import SectionComponent from "../components/SectionComponent";

export default function TermsOfUse(){
    return(
        <>
            <section className="xui-container xui-pt-5 xui-pb-8 xui-text-center xui-bg-sz-cover" style={{backgroundImage: `url('${HeaderBG}')`, backgroundPosition: 'bottom'}}>
                <SectionComponent customClass intro='Terms & Policy' heading='Terms Of Use' />
            </section>
            <div className="xui-pt-1 xui-pb-5 xui-container">
                <div className="">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">1. Introduction</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Welcome to Cryptic Apk. These Terms of Use ("Terms") govern your access to and use of our secure messaging application and related services ("Service"). By accessing or using Cryptic Apk, you agree to comply with and be bound by these Terms.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">2. Acceptance of Terms</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">By using Cryptic Apk, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Service.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">3. Description of Service</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Cryptic Apk provides a secure messaging platform designed for private and encrypted communication. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">4. Privacy</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Your privacy is important to us. Please review our Privacy Policy to understand our practices regarding your personal data and how we protect it.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">5. User Conduct</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">You agree to use Cryptic Apk only for lawful purposes and in a manner that does not infringe on the rights of, restrict, or inhibit anyone else's use and enjoyment of the Service. Prohibited behavior includes, but is not limited to:</p>
                    <ul>
                        <li className="xui-line-height-1-half xui-mt-half xui-font-sz-90">Unauthorized access or use of another user's account</li>
                        <li className="xui-line-height-1-half xui-mt-half xui-font-sz-90">Distribution of harmful or malicious content</li>
                        <li className="xui-line-height-1-half xui-mt-half xui-font-sz-90">Any activity that compromises the security of the Service</li>
                    </ul>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">6. Intellectual Property</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">All content, trademarks, logos, and software associated with Cryptic Apk are the property of Cryptic Apk or its licensors. Unauthorized use or reproduction of any materials is strictly prohibited.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">7. Disclaimers</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Cryptic Apk is provided "as is" without any warranties, express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or completely secure. Use the Service at your own risk.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">8. Limitation of Liability</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">In no event shall Cryptic Apk or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service, even if advised of the possibility of such damages.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">9. Indemnification</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">You agree to indemnify and hold harmless Cryptic Apk, its officers, employees, and affiliates from any claims, damages, obligations, losses, liabilities, costs, or expenses arising from your use of the Service or your violation of these Terms.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">10. Governing Law</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">11. Termination</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">We reserve the right to suspend or terminate your access to Cryptic Apk at our discretion, with or without notice, for conduct that violates these Terms or is harmful to other users or the Service.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">12. Changes to the Terms</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Cryptic Apk may modify these Terms from time to time. Updated versions will be posted on our website with a revised effective date. Continued use of the Service after such changes constitutes your acceptance of the updated Terms.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">13. Contact Us</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: Email: [support@crypticapk.com.</p>
                </div>
            </div>
    
        </>
    )
}