import React from 'react';
import SectionComponent from '../SectionComponent';

const Packages = () => {
    return (
        <section id='packages' className="xui-container xui-py-3">
            <SectionComponent intro='Our Packages' heading='Explore Our Exclusive Packages' text='Discover flexible plans designed for teams of all sizes, each crafted to deliver top-tier security and exceptional value.' />
            <div className='xui-mt-2 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-3'>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" className='xui-bg-black xui-text-white xui-px-1-half xui-py-1-half xui-bdr-rad-half'>
                    <h3 className='xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600'>Group of 2 Package</h3>
                    <p className='xui-mt-1 xui-font-sz-85 xui-line-height-1-half'>Optimized for close partnerships, this package offers secure, private communication for two users at a shared, cost-effective rate.</p>
                    <h3 className='mt-[12rem] xui-lg-font-sz-160 xui-font-sz-125 xui-font-w-600 bdr-top-width-[1px] bdr-top-style-[solid] bdr-top-color-[#D9D9D9] xui-pt-1'>$50.00 /month</h3>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className='xui-bg-black xui-text-white xui-px-1-half xui-py-1-half xui-bdr-rad-half'>
                    <h3 className='xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600'>Group of 5 Package</h3>
                    <p className='xui-mt-1 xui-font-sz-85 xui-line-height-1-half'>Ideal for small groups—enjoy robust, confidential communication for up to five users, ensuring seamless security at every step.</p>
                    <h3 className='mt-[12rem] xui-lg-font-sz-160 xui-font-sz-125 xui-font-w-600 bdr-top-width-[1px] bdr-top-style-[solid] bdr-top-color-[#D9D9D9] xui-pt-1'>$110.00 /month</h3>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" className='xui-bg-black xui-text-white xui-px-1-half xui-py-1-half xui-bdr-rad-half'>
                    <h3 className='xui-lg-font-sz-150 xui-font-sz-120 xui-font-w-600'>Group of 8 Package</h3>
                    <p className='xui-mt-1 xui-font-sz-85 xui-line-height-1-half'>Ideal for larger teams—supports eight users with enhanced privacy and robust security. Enjoy secure, group-wide communication.</p>
                    <h3 className='mt-[12rem] xui-lg-font-sz-160 xui-font-sz-125 xui-font-w-600 bdr-top-width-[1px] bdr-top-style-[solid] bdr-top-color-[#D9D9D9] xui-pt-1'>$150.00 /month</h3>
                </div>
                
            </div>
        </section>
    );
};

export default Packages;