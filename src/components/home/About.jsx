import React from 'react';
import SectionComponent from '../SectionComponent';
import ShieldLock from '../../assets/custom-icons/ShieldLock';
import NotificationOff from '../../assets/custom-icons/NotificationOff';
import UserSecurity from '../../assets/custom-icons/UserSecurity';
import GoogleMarketingPlatform from '../../assets/custom-icons/GoogleMarketingPlatform';

const About = () => {
    return (
        <section className="xui-container xui-py-3">
            <SectionComponent intro='About Cryptic APK' heading='Introducing Cryptic APK' text='A secure messaging app for privacy-conscious users, using robust encryption to keep your communications confidential.' />
            <div className='xui-mt-1-half xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-1'>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                    <div className='benefit xui-p-1 xui-bdr-rad-half'>
                        <span className='xui-w-40 xui-h-40 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center'>
                            <ShieldLock />
                        </span>
                        <p className='xui-mt-1 xui-font-sz-75'>End-to-End Encryption</p>
                        <p className='xui-mt-7 xui-font-sz-70 xui-line-height-1-half'>Every message is secured with industry-leading encryption protocols, ensuring that only you and your intended recipient have access.</p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                    <div className='benefit xui-p-1 xui-bdr-rad-half'>
                        <span className='xui-w-40 xui-h-40 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center'>
                            <NotificationOff />
                        </span>
                        <p className='xui-mt-1 xui-font-sz-75'>Stealth Mode</p>
                        <p className='xui-mt-7 xui-font-sz-70 xui-line-height-1-half'>Maintain a low profile with hidden notifications and discreet interface options designed for complete privacy.</p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
                    <div className='benefit xui-p-1 xui-bdr-rad-half'>
                        <span className='xui-w-40 xui-h-40 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center'>
                            <UserSecurity />
                        </span>
                        <p className='xui-mt-1 xui-font-sz-75'>Anonymous Profiles</p>
                        <p className='xui-mt-7 xui-font-sz-70 xui-line-height-1-half'>Connect without compromising your identity. Our platform supports anonymous interactions, protecting your personal information.</p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900">
                    <div className='benefit xui-p-1 xui-bdr-rad-half'>
                        <span className='xui-w-40 xui-h-40 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center'>
                            <GoogleMarketingPlatform />
                        </span>
                        <p className='xui-mt-1 xui-font-sz-75'>Cross-Platform Compatibility</p>
                        <p className='xui-mt-7 xui-font-sz-70 xui-line-height-1-half'>Use Cryptic APK seamlessly across various devices for secure communication on the go. Enjoy private access wherever you are.</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default About;