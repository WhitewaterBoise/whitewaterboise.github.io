import React from 'react';
import { useNavigate } from 'react-router-dom';
import './statics/About.css'; // Import CSS for styling
import PageNavBar from './PageNavBar';
import PageFooter from './PageFooter';
import JMB from './statics/bell-jacqueline-hs.jpg';
import GM from './statics/gayle.png'
const About = () => {
  const navigate = useNavigate();
  const handleSelection = (path) => {
    navigate(path);
  };
  function scrollToBottom() {
    window.scrollTo({ bottom: 0, behavior: 'smooth' });
  }


  return (
    <>
      <div className="about-page">
      <PageNavBar></PageNavBar>
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
                <h3>Doctor of Osteopathic Medicine</h3>
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
              <img src={GM} alt="Gayle Matsumuro" className="team-member-photo" />
              <div className="team-member-info">
                <h2> Gayle Matsumuro, PMHNP</h2>
                <h3>Psychiatric Mental Health Nurse Practitioner</h3>
                <p>
                Gayle Matsumuro is a dedicated Psychiatric Mental Health Nurse Practitioner (PMHNP) with extensive experience in adolescent and adult mental health care. She specializes in treating mood disorders, anxiety, and depression, with a focus on providing compassionate, individualized care. Gayle is known for her collaborative approach, working closely with teens and their families to create personalized treatment plans. She combines medication management with therapeutic support, helping young patients navigate mental health challenges and build resilience. Passionate about mental health advocacy, Gayle continually stays informed on the latest advancements to offer her patients the best in evidence-based care.
                </p>
                <h4>Specializations:</h4>
                <ul>
                <li>Adolescent mentional health </li>
                  <li>Anxiety Disorders</li>
                  <li>Obsessive Compulsive Disorder (OCD)</li>
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
        <PageFooter></PageFooter>
      </div>

      
    </>
  );
};

export default About;
