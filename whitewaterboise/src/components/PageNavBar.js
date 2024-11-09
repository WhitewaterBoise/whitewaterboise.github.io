import { Button, Navbar } from "flowbite-react";
import logo from "./logo192.png"
export default function PageNavBar() {
  return (
    <Navbar fluid rounded style={{ borderWidth:"0 0 2px 0",borderImage: 'linear-gradient(to right,  #50eb7c, #ebbd50, #f52f7b) 2 '}}>
<Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-9 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Whitewater TMS - Boise</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="about">About</Navbar.Link>
        <Navbar.Link href="services">Services</Navbar.Link>

        <Navbar.Link href="contact">Contact</Navbar.Link>
        <Navbar.Link href="faq">FAQ</Navbar.Link>
        <Navbar.Link href="forms">Forms</Navbar.Link>
        <Navbar.Link href="https://neurostar.com/">NeuroStar</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

