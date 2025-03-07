import React, { useEffect, useState, useRef } from "react";
import SectionComponent from "../SectionComponent";

const HowItWorks = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile
    const instructionsRef = useRef([]);

    // Define the content for each grid card
    const cardData = [
        {
            number: "01",
            title: "Select Package",
            description:
                "Choose the package that best fits your needs and proceed with the payment process to confirm your selection.",
        },
        {
            number: "02",
            title: "Make Payment with Bitcoin",
            description:
                "Review your order details and complete your Bitcoin transaction to get a secure download link via your provided email address.",
        },
        {
            number: "03",
            title: "Install APK",
            description:
                "Follow the secure download link to install Cryptic APK on your device, ensuring an easy setup for your secure communications.",
        },
        {
            number: "04",
            title: "Start Secure Conversations",
            description:
                "Enjoy private, encrypted messaging at your fingertips, with seamless setup for secure communications.",
        },
    ];

    useEffect(() => {
        // Check the screen size and update the state for mobile detection
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed
        };

        // Call the resize handler initially and on every resize
        handleResize();
        window.addEventListener("resize", handleResize);

        // Clean up the event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const updateLinePosition = () => {
            const instructions = instructionsRef.current;
            if (instructions.length === 0) return;

            const activeElement = instructions[activeIndex];
            if (!activeElement) return;

            const holder = document.querySelector(".line-animate-holder");
            const line = document.querySelector(".line-animate");

            if (holder && line && activeElement) {
                const holderRect = holder.getBoundingClientRect();
                const elementRect = activeElement.getBoundingClientRect();

                // For mobile, use transformY, for desktop, use transformX
                if (isMobile) {
                    const newTop = elementRect.top - holderRect.top;
                    line.style.transform = `translateY(${newTop}px)`; // Use vertical movement
                } else {
                    const newLeft = elementRect.left - holderRect.left;
                    line.style.transform = `translateX(${newLeft}px)`; // Use horizontal movement
                }
            }
        };

        updateLinePosition(); // Set initial position

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Loop back after 4 items
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, isMobile]); // Add isMobile as a dependency to trigger re-renders on resize

    return (
        <section id='how-it-works' className="xui-container xui-py-3">
            <SectionComponent intro="How it Works" heading="Seamless & Secure – It’s Simple" text="Getting started with Cryptic APK is quick and effortless. Follow these simple steps to secure your private communications." />
            <div className="xui-mt-1-half xui-d-flex xui-lg-flex-dir-column">
                <div className="line-animate-holder">
                    <div className="line-animate"></div>
                </div>
                <div className="xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-1 xui-mt-1 instruction-holder">
                    {cardData.map((card, index) => (
                        <div key={index} ref={(el) => (instructionsRef.current[index] = el)} className={`instruction xui-p-1 xui-bdr-rad-half ${activeIndex === index ? "xui-bg-black xui-text-white" : ""}`}>
                            <span className="xui-font-sz-75">{card.number}</span>
                            <h3 className="xui-mt-1 xui-font-sz-90 xui-font-w-600">{card.title}</h3>
                            <p className="xui-mt-1 xui-font-sz-70 xui-line-height-1-half">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
