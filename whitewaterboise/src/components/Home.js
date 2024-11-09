import React from 'react';
import PageNavBar from './PageNavBar';
import WhatIsTMS from './WhatIsTMS';
import PageFooter from './PageFooter';
import hero from './statics/hero.jpg'
import { useNavigate } from "react-router-dom"; // Or whichever router you're using


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
                    <h1>Welcome to Our TMS Clinic</h1>
                    <p>Your journey to mental wellness starts here</p>
                    <button className="cta-button" onClick={() => handleSelection("/about")}>Get Started</button>
                    <div className="scroll-down" onClick={scrollToTMSSection}>
                        <span style={{fontSize:"40px"}}>&#x25BC;</span> {/* Unicode for a down arrow */}
                    </div>
                </div>
            </div>




            <WhatIsTMS></WhatIsTMS>
            <PageFooter></PageFooter>
        </div ></>
    );
};


export default Home;

