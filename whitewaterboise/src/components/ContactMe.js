import React, { useState } from 'react';
import './statics/ContactMe.css'; // Importing the CSS file
import ROOM from "./statics/office.jpg"
import { ClipLoader } from 'react-spinners'; // Importing the spinner from react-spinners
import PageNavBar from './PageNavBar';
import PageFooter from './PageFooter';


const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // Track loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <><PageNavBar></PageNavBar>

      <section className="contact1-hero">
        <div className="contact1-content">
          <h2>Contact</h2>
          <p>Phone:<span style={{ marginLeft: "5px" }}>(208) 350-6690</span></p>
          <p>Fax:<span style={{ marginLeft: "5px" }}>(208) 350-6656</span></p>
          <br></br>
          <img src={ROOM} alt="office room" style={{width:"350px",height:"220px"}}></img>
        </div>
      </section>
      <section className="contact2-hero">
        <div className="contact2-content">
          <h2>Location: </h2>
          <p>908 N Whitewater Park Blvd, Boise, ID 83703</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.9369209997717!2d-116.23205403613879!3d43.63393518296199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef8cc34d7537f%3A0x47448f4ebf5eff8c!2s908%20N%20Whitewater%20Park%20Blvd%2C%20Boise%2C%20ID%2083703!5e0!3m2!1sen!2sus!4v1728517906415!5m2!1sen!2sus"
            width="360px"
            height="400px"
            title='map'
            style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <section className="contact3-hero">
        <div className="contact3-content">
          <h2>Parking Instruction</h2>
          <p>Parking is located in the alley behind the house.</p>

        </div>
      </section>


      <section className="contact4-hero">
        <div className="contact4-content">
          <h2>Connect with us: </h2>
        {loading ? (
                  <div className="loading-screen">
                    <ClipLoader color="#007BFF" size={50} />
                    <p>Sending your message...</p>
                  </div>
                ) : (<></>)}
                <form className="contact-form" action="https://formsubmit.co/info@whitewatertms.com" method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  {/* <input type="hidden" name="_captcha" value="false" /> */}
                  <input type="text" name="_honey" style={{ display: 'none' }}></input>
                  <input type="hidden" name="_url" value="https:/whitewatertms.com/contact.html"></input>
                  <input type="hidden" name="_next" value="https://whitewatertms.com" />
                  <div onClick={() => setLoading(true)}> <button className="submit-btn" type="submit" >Send</button></div>
                  <div className='flex'>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
                      style={{ fill: "#f02233", width: "19px", height: "19px" }}>
                      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                    </svg>
                    </span>
                    <span>
                      <h2 style={{ fontSize: "12px", alignItems: "center" }}> &nbsp; Information will be stored in our official email inbox. Information will not be shared with third-party services.</h2>
                    </span>
                  </div>
                </form>

        </div>
      </section>
      

      <PageFooter></PageFooter></>
  );
};

export default ContactMe;
