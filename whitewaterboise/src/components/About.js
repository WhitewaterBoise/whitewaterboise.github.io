import React from 'react';
import { useNavigate } from 'react-router-dom';
import './statics/About.css'; // Import CSS for styling
import PageNavBar from './PageNavBar';
import PageFooter from './PageFooter';
import JMB from './statics/bell-jacqueline-hs.jpg';
const About = () => {
  const navigate = useNavigate();
  const handleSelection = (path) => {
    navigate(path);
  };
  function scrollToBottom() {
    window.scrollTo({ bottom: 0, behavior: 'smooth' });
  }


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
              <img src= {JMB} alt="Jacqueline M. Bell, DO" className="team-member-photo" />
              <div className="team-member-info">
                <h2>Dr. Jacqueline Bell</h2>
                <h3>Lead Psychiatrist, MD</h3>
                <p>
                  Jacqueline Bell, DO specializes in addressing the full range of emotional and behavioral difficulties affecting children and adolescents using evidence-based medicine. She has experience working with youths affected by a wide range of behavioral and emotional disturbances like anxiety, depression, aggression, autism, and trauma. She firmly believes in holistic care that encompasses patient and family dynamics, and strives to only use medication when absolutely necessary, at the lowest effective dose.
                  <br />
                  Dr. Bell is board certified in general psychiatry, and child and adolescent psychiatry. She is a member of the American Psychiatric Association and American Osteopathic Association. During her fellowship training with UT Southwestern at Dallas Children's Medical Center, she served as co-chief resident.
                  <br />
                  In her free time, Dr. Bell enjoys snowboarding, traveling, and spending time with her family.
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
                <h2>Dr. Gayle Matsumuro</h2>
                <h3>Psychiatrist, DO</h3>
                <p>
                  Dr. Gayle Matsumur is a psychiatrist specializing in treating trauma and stress-related
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
            <br />
            <p>Our experienced team is here to guide you through your mental health journey. Schedule a consultation today.</p>
            <br />
            <button onClick={() => { handleSelection("/contact"); scrollToBottom() }} className="cta-button">Schedule a Consultation</button>
          </div>
        </section>
      </div>

      <PageFooter></PageFooter>
    </>
  );
};

export default About;
