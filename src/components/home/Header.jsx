import { Link } from "react-router-dom";
import HeaderBG from"../../assets/images/header-bg.jpg";
import { HashLink } from "react-router-hash-link";

export default function Header(){
    return(
        <>
            <section id='home' className="xui-container xui-pt-5 xui-pb-8 xui-text-center xui-bg-sz-cover" style={{backgroundImage: `url('${HeaderBG}')`, backgroundPosition: 'bottom'}}>
                <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="xui-font-w-700 xui-lg-font-sz-350 xui-font-sz-200">Embrace Unmatched Privacy</h1>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="xui-line-height-1-half xui-lg-w-fluid-45 xui-w-fluid-100 xui-mx-auto xui-mt-2 xui-font-sz-90">Experience the future of secure communication with Cryptic APK—where every conversation is encrypted, discreet, and exclusively yours.</p>
                <HashLink smooth to='#purchase' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" className="padding-[.8rem_3rem] xui-d-inline-block xui-font-sz-80 xui-text-dc-none xui-bg-black xui-text-white bdr-radius-[.7rem] xui-mt-1-half">Get Cryptic Apk</HashLink>
            </section>

    
        </>
    )
}