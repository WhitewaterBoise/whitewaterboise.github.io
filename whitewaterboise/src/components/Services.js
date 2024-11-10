import React from 'react';
import { useNavigate} from 'react-router-dom';
import './statics/Services.css'; // CSS file for styling
import PageNavBar from './PageNavBar';
import PageFooter from './PageFooter';
const Services = () => {
  const navigate = useNavigate();
  const handleSelection = (path) => {
    navigate(path);
  };
  function scrollToBottom() {
    window.scrollTo({ bottom: 0, behavior: 'smooth' });
  }

  return (

    <div>
        <PageNavBar></PageNavBar>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <br/>
          <h1>Our TMS Services</h1>
          <p>Helping you achieve mental wellness through cutting-edge treatments.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        <div className="container">
          <div className="service-item">
            <div className="service-content">
              <h2>TMS Therapy</h2>
              <p>
                Transcranial Magnetic Stimulation (TMS) is a non-invasive
                treatment that helps individuals suffering from depression by
                stimulating areas of the brain responsible for mood regulation.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content">
              <h2>Anxiety Treatment</h2>
              <p>
                Our clinic offers specialized TMS treatment plans to help reduce
                anxiety symptoms, providing relief to patients with generalized
                anxiety disorder (GAD) and other anxiety-related conditions.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content">
              <h2>OCD Treatment</h2>
              <p>
                We provide FDA-approved TMS treatment for patients with Obsessive
                Compulsive Disorder (OCD), targeting areas of the brain involved
                in obsessive thoughts and compulsive behaviors.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content">
              <h2>PTSD Treatment</h2>
              <p>
                For individuals suffering from Post-Traumatic Stress Disorder
                (PTSD), we offer TMS as a safe and effective alternative to
                traditional medications, improving overall mental health and
                quality of life.
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content">
              <h2>Addiction Treatment</h2>
              <p>
                Our TMS therapy can assist in addiction recovery by targeting the
                reward pathways in the brain, reducing cravings and relapse
                tendencies for those battling substance use disorders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Take the First Step?</h2>
          <p>
            Schedule a consultation with our experienced team to find out if TMS
            therapy is the right choice for you.
          </p>
          <button  onClick={() =>{ handleSelection("/contact"); scrollToBottom()}} className="cta-button">Schedule a Consultation</button>
        </div>
      </section>
      <PageFooter></PageFooter>
    </div>
  );
};

export default Services;