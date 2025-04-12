import React from 'react';
import PageNavBar from './PageNavBar';
import WhatIsTMS from './WhatIsTMS';
import PageFooter from './PageFooter';
import hero from './statics/hero.jpg'
import InsuranceAccepted from "./InsuranceAccepted";
import { useNavigate } from "react-router-dom"; // Or whichever router you're using
import ContactForm from './Contactform';
import './statics/ContactMe.css'; // Importing the CSS file
const Home = () => {
    const scrollToTMSSection = () => {
        const tmsSection = document.getElementById('tms-section');
        tmsSection.scrollIntoView({ behavior: 'smooth' });
    };
    const navigate = useNavigate();

    const handleSelection = (path) => {
        navigate(path);
    };
    return (
        <>
            <div>
                <PageNavBar></PageNavBar>

                <div className="hero-container" style={{ backgroundImage: `url(${hero})` }}>
                    <div className="hero-content">
                        <h1 style={{letterSpacing:-1.5}}>Welcome to Our TMS Clinic</h1>
                        <p style={{letterSpacing:-1}}>Discover a new way to rid your life of depression.</p>
                        <button className="gs-button" onClick={() => handleSelection("/about")}>Get Started</button>
                        <div className="scroll-down" onClick={scrollToTMSSection}>
                            <span style={{ fontSize: "40px" }}>&#x25BC;</span> {/* Unicode for a down arrow */}
                        </div>
                    </div>
                </div>

                <InsuranceAccepted></InsuranceAccepted>
                <WhatIsTMS></WhatIsTMS>
                
                <div className='contact-page-hero-borders px-10' style={{transform:"scale(0.8)"}}><ContactForm></ContactForm></div>
                <PageFooter></PageFooter>
            </div ></>
    );
};


export default Home;

