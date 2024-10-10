import React, { useState, useEffect } from 'react';
import './WhatIsTMS.css'; // Custom CSS for styling

const WhatIsTMS = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    </div>
  );
};

export default WhatIsTMS;