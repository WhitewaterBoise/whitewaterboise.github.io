import logo from './logo.svg';
import './App.css';
import PageNavBar from "./components/PageNavBar"
import Home from "./components/Home"
import Quiz from './components/Quiz'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GoogleCalender from './components/Calendar';
import Services from "./components/Services"
import ContactMe from './components/ContactMe';
import About from './components/About'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<ContactMe/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router></>
  );
}

export default App;
