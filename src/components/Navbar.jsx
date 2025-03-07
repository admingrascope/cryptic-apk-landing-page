/* eslint-disable react/no-unknown-property */
import { NavLink, useLocation } from 'react-router-dom';
import Logo from "../assets/images/logo.png";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const location = useLocation();
    console.log(location);
    const hideMenu = location.pathname === "/privacy/policy" || location.pathname === "/terms-of-use";

    return (
        <>
        <nav className="xui-navbar xui-pos-sticky top-[0] left-[0] xui-bg-white xui-container pd-nav xui-text-black" brand="true" layout="2" menu="2">
            <div className="brand xui-h-fluid-100">
                <NavLink className="xui-text-dc-none xui-h-fluid-100 xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <img className='xui-img-100' src={Logo} alt="" />
                </NavLink>
            </div>
            <div className="links" placed="center">
                <div className="main dark-color primary xui-bg-white">
                    {!hideMenu && ( // Hide this UL when on privacy-policy or terms-of-use routes
                        <ul className='xui-grid-gap-2'>
                            <li>
                                <HashLink className={`xui-font-2 xui-font-sz-100 nav-links xui-md-font-sz-120 xui-lg-font-sz-95 ${location.hash === "#home" || location.hash === "" ? 'active-link xui-font-w-600' : ''}`} smooth to={"#home"}>Home</HashLink>
                            </li>
                            <li>
                                <HashLink className={`xui-font-2 xui-font-sz-100 nav-links xui-md-font-sz-120 xui-lg-font-sz-95 ${location.hash === "#about" ? 'active-link xui-font-w-600' : ''}`} smooth to={"#about"}>About</HashLink>
                            </li>
                            <li>
                                <HashLink className={`xui-font-2 xui-font-sz-100 nav-links xui-md-font-sz-120 xui-lg-font-sz-95 ${location.hash === "#how-it-works" ? 'active-link xui-font-w-600' : ''}`} smooth to={"#how-it-works"}>How it works</HashLink>
                            </li>
                            <li>
                                <HashLink className={`xui-font-2 xui-font-sz-100 nav-links xui-md-font-sz-120 xui-lg-font-sz-95 ${location.hash === "#packages" ? 'active-link xui-font-w-600' : ''}`} smooth to={"#packages"}>Packages</HashLink>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="fixed xui-lg-d-block xui-md-d-block xui-d-block">
                    <ul>
                        <li>
                            <HashLink smooth to={'#purchase'} className='xui-font-2 xui-bg-black xui-text-white xui-font-sz-80'>Get Started</HashLink>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
