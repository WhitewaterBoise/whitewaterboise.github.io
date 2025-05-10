import { Navbar } from "flowbite-react";
import logo from "./logo192.png"
import neurostar from "./statics/neurostar.png"
export default function PageNavBar() {
  return (
    <Navbar fluid rounded style={{ borderWidth: "0 0 2px 0", borderImage: 'linear-gradient(to right,rgb(21, 77, 167),  #9cddec ) 2 ' }}>
      <Navbar.Brand href="/" >
        <img style={{filter: " saturate(1.2)"}} src={logo} className="mr-1 sm:mr-3 h-9" alt="Whitewater TMS logo" />

        <span className=" self-center whitespace-nowrap text-xl font-semibold poiret-one-regular" style={{letterSpacing: -1 }}>WHITEWATER TMS</span>
        <img style={{filter: " saturate(1.5)"}} src={neurostar} className="ml-2 h-6 sm:ml-5 " alt="Neurostar logo" />
      </Navbar.Brand>
      <div className="flex md:order-2"> 
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* <Navbar.Link href="/" active>
          Home
        </Navbar.Link> */}
        <Navbar.Link  className=" text-center" style={{marginTop:"-8px"}} href="ourteam">Our Team</Navbar.Link>
        <Navbar.Link   className="w-20 text-center" style={{marginTop:"-8px"}} href="contact">Contact</Navbar.Link>
        <Navbar.Link  className="w-20 text-center" style={{marginTop:"-8px"}} href="faq">FAQ</Navbar.Link>
        <Navbar.Link  className="w-20 text-center" style={{marginTop:"-8px"}} href="https://neurostar.com/">NeuroStar</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

