import React from 'react';
import './statics/ContactMe.css'; // Importing the CSS file
import ROOM from "./statics/office.jpg"
import PageNavBar from './PageNavBar';
import PageFooter from './PageFooter';
import ContactForm from './Contactform';
import { FaFacebook } from 'react-icons/fa';
const ContactMe = () => {


  return (
    <><PageNavBar></PageNavBar>
      <div style={{ backgroundColor: "#093d4817 " }} className=' px-6 md:px-12 py-12  flex flex-col md:flex-row items-start justify-between relative overflow-hidden'>
        <section className="contact1-hero w-full md:w-1/2">
          <div className="contact1-content">
            <h2 style={{ color: " #074cbb " }}>Contact</h2>
            <p>Phone:<span style={{ marginLeft: "5px" }}>(208) 350-6690</span></p>
            <p>Fax:<span style={{ marginLeft: "5px" }}>(208) 350-6656</span></p>
            <p style={{ paddingLeft: '45%' }}>
              <a
                href="https://www.facebook.com/people/Whitewater-TMS/61575442227252/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <FaFacebook size={32} />
              </a>
            </p>
            <br></br>
            <img src={ROOM} alt="office room" style={{ width: "350px", height: "220px", borderRadius: "5%" }}></img>
          </div>
        </section>
        <section className=" w-full md:w-1/2 contact2-hero">
          <div className="contact2-content">
            <h2 style={{ color: " #074cbb " }} >Location: </h2>
            <p>908 N Whitewater Park Blvd, Boise, ID 83703</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.9369209997717!2d-116.23205403613879!3d43.63393518296199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef8cc34d7537f%3A0x47448f4ebf5eff8c!2s908%20N%20Whitewater%20Park%20Blvd%2C%20Boise%2C%20ID%2083703!5e0!3m2!1sen!2sus!4v1728517906415!5m2!1sen!2sus"
              width="360px"
              height="400px"
              title='map'
              style={{ border: 0, borderRadius: "5%" }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </div>
      <section className="contact3-hero">
        <div className="contact3-content">
          <h2 style={{ color: " #074cbb " }}> Parking Instruction</h2>
          <p>Parking is located in the alley behind the clinic.</p>

        </div>
      </section>


      <div className="contact-page-hero-borders mt-5 mb-5">
        <ContactForm></ContactForm>
      </div>


      <PageFooter></PageFooter></>
  );
};

export default ContactMe;
