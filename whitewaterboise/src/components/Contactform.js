import './statics/ContactMe.css'; // Importing the CSS file
import React from 'react';
// import { ClipLoader } from 'react-spinners'; // Importing the spinner from react-spinners

const ContactForm = () =>{ 
//  const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   // const [loading, setLoading] = useState(false); // Track loading state

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };


    return (

        <section className="contact4-hero ">
        <div className="contact4-content mt-2">
          <h2>Connect with us: </h2>
  
                 <form className="contact-form" action="https://formsubmit.co/chang.owen.zhang@gmail.com" method="POST">
                  {/* <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className='mx-4'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="text"
                      id="phone"
                      className='mx-4'
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                    className='mx-4'
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
                    className='mx-4'
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div> */}
                  {/* <input type="hidden" name="_captcha" value="false" /> */}
                  {/* <input type="hidden" name="_subject" value="New website contact submission!"></input>
                  <input type="text" name="_honey" style={{ display: 'none' }}></input>
                  <input type="hidden" name="_autoresponse" value="Thank you for your submission!"></input>
                  <input type="hidden" name="_url" value="https:/whitewatertms.com/contact"></input>
                  <input type="hidden" name="_next" value="https://whitewatertms.com" />
                  <div onClick={() => setLoading(true)}> <button className="submit-btn" type="submit" >Send</button></div>
                  <div className='flex'>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
                      style={{ fill: "#f02233", width: "19px", height: "19px" }}>
                      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                    </svg>
                    </span>
                    <span>
                      <h2 style={{ fontSize: "12px", alignItems: "center" }}> &nbsp; We use third-party service to deliver emails but information will not be collected by third-party.</h2>
                    </span>
                  </div> */}
                  <a  className="submit-btn mx-10" href="https://formsubmit.co/el/huyavo" target="_blank" rel="noreferrer">Email us</a>
                  <div className='flex'>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
                      style={{ fill: "#f02233", width: "19px", height: "19px" }}>
                      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                    </svg>
                    </span>
                    <span>
                      <h2 style={{ fontSize: "12px", alignItems: "center" }}> &nbsp; We use third-party service to deliver emails but information will not be collected by third-party.</h2>
                    </span>
                  </div>
                </form>
                   
               

        </div>
      </section> 
    )
}

export default ContactForm;