import React from 'react';

const SectionComponent = ( {intro, heading, text, customClass} ) => {
    return (
        <div className='xui-text-center'>
            <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className='padding-[.8rem_1.8rem] xui-d-inline-block xui-font-sz-75 xui-bdr-black xui-bdr-w-1 xui-bdr-s-solid bdr-radius-[.8rem]'>{intro}</span>
            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className={`${!customClass ? 'xui-lg-font-sz-200 xui-font-sz-150 xui-lg-font-w-400 xui-font-w-600' : 'xui-lg-font-sz-350 xui-font-sz-200 xui-font-w-700'} xui-mt-1`}>{heading}</h3>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" className="xui-line-height-1-half xui-lg-w-fluid-40 xui-w-fluid-100 xui-mx-auto xui-mt-2 xui-font-sz-85">{text}</p>
        </div>
    );
};

export default SectionComponent;