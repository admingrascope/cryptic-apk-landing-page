import MiniLogoWhite from "../assets/images/mini-logo-white.png"
export default function Loader(){
   
    return(
        <>
        <section className='xui-loader cryptic-loader-screen xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
            <div className='xui-mx-w-400 xui-text-center'>
                <img className='xui-lg-img-150 xui-img-100 xui-mx-auto xui-mb-1' src={MiniLogoWhite} alt="logo" />
                <div className='xui-w-200'>
                    <span className='xui-d-inline-block xui-font-sz-100 xui-text-white'>Loading...</span>
                    <div className='cryptic-loader-holder'>
                        <span className='cryptic-loader-anime'></span>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
