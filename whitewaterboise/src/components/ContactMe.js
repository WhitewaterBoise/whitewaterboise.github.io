import React, { useState } from 'react';
import './ContactMe.css'; // Importing the CSS file
import { ClipLoader } from 'react-spinners'; // Importing the spinner from react-spinners
import PageNavBar from './PageNavBar';
import PageFooter from './PageFooter';
const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
  const handleSubmit = (e) => {
    setLoading(true); // Show loading spinner immediately on submit
  };

  return (
    <><PageNavBar></PageNavBar>
      <div className='flex flex-row-reverse mt-4  '>
        <a href="#" class=" w-full block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact us:</h5>

          <p class="font-normal text-gray-700 dark:text-gray-400"> (###)-###-####</p>
          <p class="font-normal text-gray-700 dark:text-gray-400"> 908 N Whitewater Park Blvd </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.9369209997717!2d-116.23205403613879!3d43.63393518296199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef8cc34d7537f%3A0x47448f4ebf5eff8c!2s908%20N%20Whitewater%20Park%20Blvd%2C%20Boise%2C%20ID%2083703!5e0!3m2!1sen!2sus!4v1728517906415!5m2!1sen!2sus"
            width="auto"
            height="350"
            style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </a>

        <div className="w-full contact-container ">
          <h2>Contact Me</h2>
          {loading ? (
            <div className="loading-screen">
              <ClipLoader color="#007BFF" size={50} />
              <p>Sending your message...</p>
            </div>
          ) : (
            <form className="contact-form" action="https://formsubmit.co/whitewaterboise@gmail.com" method="POST">
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
              <input type="hidden" name="_next" value="http://localhost:3000/" />
              <a > <button className="submit-btn" type="submit">Send</button></a>
            </form>
          )}
        </div></div>
        <PageFooter></PageFooter></>
  );
};

export default ContactMe;
