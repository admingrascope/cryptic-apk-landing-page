import { Link } from "react-router-dom";
import HeaderBG from"../assets/images/header-bg.jpg";
import SectionComponent from "../components/SectionComponent";

export default function PrivacyPolicy(){
    return(
        <>
            <section className="xui-container xui-pt-5 xui-pb-8 xui-text-center xui-bg-sz-cover" style={{backgroundImage: `url('${HeaderBG}')`, backgroundPosition: 'bottom'}}>
                <SectionComponent customClass intro='Privacy Policy' heading='Privacy Policy' />
            </section>
            <div className="xui-pt-1 xui-pb-5 xui-container">
                <div className="">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">1. Introduction</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Welcome to Cryptic Apk. Your privacy is our priority. This Privacy Policy explains how we collect, use, store, and disclose your information when you access and use our secure messaging app. By using Cryptic Apk, you agree to the practices described in this Policy.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">2. Information We Collect</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Personal Information:<br /> We may collect information such as your email address, username, and other details provided during account registration or support interactions.</p>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Non-Personal Information:<br /> We gather data that does not directly identify you, such as device type, usage patterns, and anonymized analytics to help improve our service.</p>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Device and Log Information:<br /> Our servers automatically record certain information including IP addresses, device identifiers, and log files for security and performance optimization.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">3. How We Use Your Information</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">We use the collected information to:</p>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Provide and Improve Services:<br /> Deliver a secure and user-friendly messaging experience and enhance our platform based on user feedback and analytics.</p>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Process Transactions:<br /> Manage and process any transactions related to our subscription or service fees.</p>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Communicate with You:<br /> Send service-related notifications, updates, and support communications.</p>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Ensure Security:<br /> Protect the integrity of our services and your personal data through robust security measures.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">4. Data Sharing and Disclosure</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Third-Party Service Providers:<br /> We may share your data with trusted partners who assist in delivering our services, under strict confidentiality agreements.</p>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Legal Requirements:<br /> We will disclose information if required by law or in response to valid legal requests from public authorities.</p>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">No Sale of Data:<br /> We do not sell your personal information to third parties.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">5. Security Measures</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">We implement industry-standard security practices to safeguard your data, including encryption protocols and regular security assessments. However, please be aware that no method of transmission over the Internet is completely secure.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">6. Your Rights and Choices</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Access and Correction:<br /> You have the right to access and update your personal information.</p>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Data Deletion:<br /> You may request the deletion of your data in accordance with applicable laws.</p>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">Opt-Out:<br /> You can opt out of non-essential data collection practices; however, this may affect your experience with the app.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">7. Cookies and Tracking Technologies</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">We may use cookies and similar tracking technologies to enhance your experience and analyze usage trends. You can manage your cookie preferences through your device or browser settings.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">8. Changes to This Policy</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">We reserve the right to modify this Privacy Policy at any time. Updates will be posted on this page with an updated effective date. We encourage you to review this Policy periodically.</p>
                </div>
                <div className="xui-mt-2">
                    <h3 className="xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600">9. Contact Us</h3>
                    <p className="xui-line-height-1-half xui-lg-w-fluid-90 xui-w-fluid-100 xui-mt-1-half xui-font-sz-90">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: Email: [support@crypticapk.com.</p>
                </div>
            </div>
    
        </>
    )
}