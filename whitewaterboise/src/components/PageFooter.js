import React from 'react';
import "./statics/footer.css"
import { Footer } from 'flowbite-react';
import logo from "./logo192.png"
const PageFooter = () => {
    return (
        <>
        

      
      <div className="contact-info-bar" style={{ backgroundColor: "#243b61", color: "white", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px", flexDirection: "column", textAlign: "center" }}>
        <div style={{ backgroundColor: "white", borderRadius: "48px", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px" }}>
          <img src={logo} style={{ height: "34px" }} alt="Whitewater TMS logo" />
        </div>
        <ul className='ml-0 mt-0 items-center justify-center flex flex-column' style={{ margin: 0, padding: 0, listStyle: "none" }}>
          <li style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "10px" }}>
            <img data-at="image" alt="address" src="//v.fastcdn.co/u/89b2219b/62086539-0-bx-map-pin.png" data-src="//v.fastcdn.co/u/89b2219b/62086539-0-bx-map-pin.png" data-retina-src="//v.fastcdn.co/u/89b2219b/62086539-0-bx-map-pin.png" srcSet="//v.fastcdn.co/u/89b2219b/62086539-0-bx-map-pin.png 2x" style={{ marginRight: "5px", height: "20px" }} />
            <span>908 N Whitewater Park Blvd, Boise, ID 83703</span>
          </li>
          <li style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "10px" }}>
            <img data-at="image" alt="phone number" src="//v.fastcdn.co/u/89b2219b/62104854-0-Group.png" data-src="//v.fastcdn.co/u/89b2219b/62104854-0-Group.png" data-retina-src="//v.fastcdn.co/u/89b2219b/62104854-0-Group.png" srcSet="//v.fastcdn.co/u/89b2219b/62104854-0-Group.png 2x" style={{ marginRight: "5px", height: "20px" }} />
            <span>(208) 350-6690</span>
          </li>
          <li  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <img  data-at="image" alt="" src="//v.fastcdn.co/u/89b2219b/62104846-0-Vector.png" data-src="//v.fastcdn.co/u/89b2219b/62104846-0-Vector.png" data-retina-src="//v.fastcdn.co/u/89b2219b/62104846-0-Vector.png" srcSet="//v.fastcdn.co/u/89b2219b/62104846-0-Vector.png 2x" style={{ marginRight: "5px", height: "20px" }} />
            <span> info@whitewatertms.com</span>
          </li>
        </ul>
      </div>
  
            <Footer container className="mt-auto bg-gray-900 py-8 rounded-none">
                <div className="w-full text-center text-white">
                    < Footer.Copyright href="#" by="Whitewater TMS" year={2025} style={{marginTop:"10px"}} />
                    <Footer.LinkGroup >
                        <Footer.Link href="about" className="text-white hover:text-cyan-300">
                            About Us
                        </Footer.Link>
                        <Footer.Link href="privacy" className="text-white hover:text-cyan-300">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="termsofservice" className="text-white hover:text-cyan-300">
                            Terms of Service
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
            </Footer></>
    );
};

export default PageFooter;
