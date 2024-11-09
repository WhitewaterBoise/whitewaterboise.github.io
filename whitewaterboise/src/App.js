
import './App.css';
import Home from "./components/Home"
import Quiz from './components/Quiz'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from "./components/Services"
import ContactMe from './components/ContactMe';
import About from './components/About'
import FaqPage from './components/FaqPage';
import Forms from './components/Forms';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
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
          <Route path= '/faq' element={<FaqPage></FaqPage>}/>
          <Route path= '/forms' element={<Forms></Forms>}/>
          <Route path='/privacy' element={<PrivacyPolicy></PrivacyPolicy>}/>
          <Route path='/termsofservice' element={<TermsOfService></TermsOfService>}/>
        </Routes>
      </Router></>
  );
}

export default App;
