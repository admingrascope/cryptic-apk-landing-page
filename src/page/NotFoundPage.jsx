import React from 'react';
import SectionComponent from '../components/SectionComponent';
import HeaderBG from"../assets/images/header-bg.jpg";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section className="xui-container xui-pt-5 xui-pb-8 xui-text-center xui-bg-sz-cover" style={{backgroundImage: `url('${HeaderBG}')`, backgroundPosition: 'bottom'}}>
            <SectionComponent customClass intro='Not Found' heading='This Page Does Not Exist!' />
            <Link smooth to='/' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" className="padding-[.8rem_3rem] xui-d-inline-block xui-font-sz-80 xui-text-dc-none xui-bg-black xui-text-white bdr-radius-[.7rem] xui-mt-1-half">Back to Home</Link>
        </section>
    );
};

export default NotFoundPage;