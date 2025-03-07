import React from 'react';
import { HashLink } from 'react-router-hash-link';
import LogoWhite from "../assets/images/logo-white.png";
import { Link } from 'react-router-dom';
import Twitter from '../assets/custom-icons/Twitter';
import Facebook from '../assets/custom-icons/Facebook';
import Instagram from '../assets/custom-icons/Instagram';
import LinkedIn from '../assets/custom-icons/LinkedIn';

const Footer = () => {
    return (
        <footer className='xui-container cryptic-footer xui-py-4 xui-bg-black xui-text-white xui-font-2'>
            <div className='xui-row'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <div>
                        <img className='xui-img-150' src={LogoWhite} alt="" />
                        <p className='xui-font-sz-95 xui-line-height-1-half xui-lg-w-fluid-60 xui-w-fluid-100 xui-mt-1-half'>Cryptic APK is a state-of-the-art secret messaging app designed for those who value complete privacy.</p>
                        <div className='xui-mt-1-half xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                            <Link to={'/'} target='_blank' className='xui-text-dc-none'><Twitter /></Link>
                            <Link to={'/'} target='_blank' className='xui-text-dc-none'><Facebook /></Link>
                            <Link to={'/'} target='_blank' className='xui-text-dc-none'><Instagram /></Link>
                            <Link to={'/'} target='_blank' className='xui-text-dc-none'><LinkedIn /></Link>
                        </div>
                    </div>
                </div>
                <div className='xui-lg-col-6 xui-col-12 xui-lg-pt-none xui-pt-1-half'>
                    <div className='xui-d-flex xui-flex-jc-space-between'>
                        <div>
                            <h3 className='xui-font-w-500 xui-font-sz-120'>Explore</h3>
                            <ul className='xui-p-none'>
                                <li className='xui-mt-1-half'><HashLink smooth to={'#home'} className='xui-font-sz-95 text-[#EBE9E0] xui-text-dc-none'>Home</HashLink></li>
                                <li className='xui-mt-1-half'><HashLink smooth to={'#about'} className='xui-font-sz-95 text-[#EBE9E0] xui-text-dc-none'>About</HashLink></li>
                                <li className='xui-mt-1-half'><HashLink smooth to={'#how-it-works'} className='xui-font-sz-95 text-[#EBE9E0] xui-text-dc-none'>How it works</HashLink></li>
                                <li className='xui-mt-1-half'><HashLink smooth to={'#packages'} className='xui-font-sz-95 text-[#EBE9E0] xui-text-dc-none'>Packages</HashLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='xui-font-w-500 xui-font-sz-120'>Quick Links</h3>
                            <ul className='xui-p-none'>
                                <li className='xui-mt-1-half'><Link smooth to={'privacy/policy'} className='xui-font-sz-95 text-[#EBE9E0] xui-text-dc-none'>Privacy policy</Link></li>
                                <li className='xui-mt-1-half'><Link smooth to={'terms-of-use'} className='xui-font-sz-95 text-[#EBE9E0] xui-text-dc-none'>Terms of use</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;