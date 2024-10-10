import React from 'react';
import PageNavBar from './PageNavBar';
import WhatIsTMS from './WhatIsTMS';
import { Button, Card, } from 'flowbite-react';
import PageFooter from './PageFooter';
import hero from './statics/hero.jpg'


const Home = () => {
    const scrollToTMSSection = () => {
        const tmsSection = document.getElementById('tms-section');
        tmsSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <div>
            <PageNavBar></PageNavBar>

            <div className="hero-container" style={{ backgroundImage: `url(${hero})` }}>
                <div className="hero-content">
                    <h1>Welcome to Our TMS Clinic</h1>
                    <p>Your journey to mental wellness starts here</p>
                    <button className="cta-button">Get Started</button>
                    <div className="scroll-down" onClick={scrollToTMSSection}>
                        <span>&#x25BC;</span> {/* Unicode for a down arrow */}
                    </div>
                </div>
            </div>




            <WhatIsTMS></WhatIsTMS>
            <PageFooter></PageFooter>
        </div ></>
    );
};


export default Home;

