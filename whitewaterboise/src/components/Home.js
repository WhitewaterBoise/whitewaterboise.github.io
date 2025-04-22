import React from 'react';
import PageNavBar from './PageNavBar';
import WhatIsTMS from './WhatIsTMS';
import PageFooter from './PageFooter';
import hero from './statics/hero.jpg'
import InfoSection from './InfoSection';
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



                <section className="w-full bg-white text-black px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden ">

                    <div style={{ backgroundColor: "#4498e723" }} className="absolute -top-10 -left-10 w-[800px] h-[800px]  rounded-full blur-3xl  pointer-events-none"></div>


                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <h1 style={{ letterSpacing: -1.5, fontSize: "35px", color: "#1a6486ef ", zIndex: 1 }} ><strong>Welcome to Our TMS Clinic</strong></h1>
                        <p className="text-gray-600 mb-3">
                            Discover a new way to rid your life of depression.
                        </p>
                        {/* <button onClick={() => handleSelection("/contact")} style={{ zIndex: 99 }} className=" text-black font-semibold px-6 py-3 rounded gs-button">
                            Get Started
                        </button> */}
                        <div className="scroll-down" onClick={scrollToTMSSection} style={{ zIndex: 0 }}>
                            <span style={{ fontSize: "40px", color: "#0b3761ff" }}>&#x25BC;</span> {/* Unicode for a down arrow */}
                        </div>
                        {/* <div className="flex justify-center md:justify-start space-x-4 pt-4">
                            <a href="#" className="text-black"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-black"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-black"><i className="fas fa-share-alt"></i></a>
                        </div> */}
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
                        <div className="relative w-72 h-96 md:w-96 md:h-[500px]">
                            {/* <div className="absolute inset-0 bg-blue-300 rounded-full -rotate-12"></div> */}
                            <img
                                src={hero}
                                alt="Office"
                                className="rounded-3xl shadow-lg w-full h-full object-cover z-2"
                            />
                        </div>
                    </div>
                </section>



                <InsuranceAccepted></InsuranceAccepted>
                <WhatIsTMS></WhatIsTMS>

                <div className=' px-10'>
                    <div className=' flex flex-col md:flex-row items-start justify-between '>
                        <div className='w-auto item-center md:w-1/2 md:mr-5 mx-auto '>
                            <InfoSection></InfoSection>
                        </div>
                        <div className='w-auto item-center md:w-1/2 md:mr-5 mx-auto '>
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
                <PageFooter></PageFooter>
            </div ></>
    );
};


export default Home;

