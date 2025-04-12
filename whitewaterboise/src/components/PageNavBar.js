import { Navbar } from "flowbite-react";
import logo from "./logo192.png"
import neurostar from "./statics/neurostar.png"
export default function PageNavBar() {
  return (
    <Navbar fluid rounded style={{ borderWidth: "0 0 2px 0", borderImage: 'linear-gradient(to right,  #243b61,  #9cddec ) 2 ' }}>
      <Navbar.Brand href="/" >
        <img src={logo} className="mr-1 sm:mr-3 h-9" alt="Whitewater TMS logo" />

        <span className=" self-center whitespace-nowrap text-xl font-semibold dark:text-white " style={{ fontFamily: "Poiret One", letterSpacing: -1 }}>WHITEWATER TMS</span>
        <img src={neurostar} className="ml-2 h-6 sm:ml-5 " alt="Neurostar logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link style={{marginTop:"-8px"}} href="ourteam">Our Team</Navbar.Link>
        <Navbar.Link  style={{marginTop:"-8px"}} href="contact">Contact</Navbar.Link>
        <Navbar.Link style={{marginTop:"-8px"}} href="faq">FAQ</Navbar.Link>
        <Navbar.Link style={{marginTop:"-8px"}} href="https://neurostar.com/">NeuroStar</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

