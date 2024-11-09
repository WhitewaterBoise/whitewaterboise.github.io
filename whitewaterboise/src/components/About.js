import React from 'react';
import './About.css'; // Import CSS for styling
import PageNavBar from './PageNavBar';
import PageFooter from './PageFooter';
const About = () => {
  return (
    <><PageNavBar></PageNavBar>
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Our Team</h1>
          <p>Meet our dedicated psychiatrists committed to your mental health and well-being.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          {/* First Psychiatrist */}
          <div className="team-member">
            <img src="/images/dr-smith.jpg" alt="Dr. John Smith" className="team-member-photo" />
            <div className="team-member-info">
              <h2>Dr. John Smith</h2>
              <h3>Lead Psychiatrist, MD</h3>
              <p>
                Dr. John Smith is a board-certified psychiatrist with over 15 years of experience 
                in treating mood disorders, anxiety, and depression. He specializes in using 
                advanced therapies like Transcranial Magnetic Stimulation (TMS) for patients 
                who have not found relief through traditional methods. His compassionate 
                approach ensures personalized care for every patient.
              </p>
              <h4>Specializations:</h4>
              <ul>
                <li>Depression Treatment</li>
                <li>Anxiety Disorders</li>
                <li>Obsessive Compulsive Disorder (OCD)</li>
                <li>TMS Therapy</li>
              </ul>
            </div>
          </div>

          {/* Second Psychiatrist */}
          <div className="team-member">
            <img src="/images/dr-jones.jpg" alt="Dr. Sarah Jones" className="team-member-photo" />
            <div className="team-member-info">
              <h2>Dr. Sarah Jones</h2>
              <h3>Psychiatrist, DO</h3>
              <p>
                Dr. Sarah Jones is a psychiatrist specializing in treating trauma and stress-related 
                disorders. She has extensive experience in working with individuals suffering 
                from Post-Traumatic Stress Disorder (PTSD) and offers a range of therapeutic 
                approaches including Cognitive Behavioral Therapy (CBT) and TMS. She believes 
                in a holistic approach to care, focusing on both the mind and body.
              </p>
              <h4>Specializations:</h4>
              <ul>
                <li>PTSD</li>
                <li>Trauma-Focused Therapy</li>
                <li>Substance Abuse and Addiction</li>
                <li>TMS Therapy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Begin Your Journey to Mental Wellness?</h2>
          <p>Our experienced team is here to guide you through your mental health journey. Schedule a consultation today.</p>
          <button className="cta-button">Schedule a Consultation</button>
        </div>
      </section>
    </div>

<PageFooter></PageFooter>
    </>
  );
};

export default About;
