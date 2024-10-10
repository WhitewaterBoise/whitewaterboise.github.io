import { Button, Navbar } from "flowbite-react";
import logo from "./logo192.png"
export default function PageNavBar() {
  return (
    <Navbar fluid rounded>
<Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-9 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">White Water TMS - Boise</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="quiz">Test </Navbar.Link>
        <Navbar.Link href="contact">Contact</Navbar.Link>
        <Navbar.Link href="https://neurostar.com/">NeuroStar</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

