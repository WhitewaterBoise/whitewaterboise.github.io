import React, { useState, useEffect } from 'react';
import './WhatIsTMS.css'; // Custom CSS for styling
import { useNavigate} from 'react-router-dom';
const WhatIsTMS = () => {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const handleSelection = (path) => {
    navigate(path);
  };
  // Scroll-triggered visibility
  const handleScroll = () => {
    const section = document.getElementById('tms-section');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div
      id="tms-section"
      className={`tms-container ${isVisible ? 'fade-in' : ''}`}
    >
      <h2>What is TMS?</h2>
      <p>
        Transcranial Magnetic Stimulation (TMS) is a non-invasive procedure that
        uses magnetic fields to stimulate nerve cells in the brain to improve
        symptoms of depression. It is an effective treatment option for those
        who haven't found success with traditional treatments.
      </p>

      <button  onClick={() =>{ handleSelection("/quiz"); scrollToTop()}} className="cta-button">Depression Test</button>
    </div>
  );
};

export default WhatIsTMS;