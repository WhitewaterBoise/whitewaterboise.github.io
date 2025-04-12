
import './App.css';
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactMe from './components/ContactMe';
import OurTeam from './components/OurTeam'
import FaqPage from './components/FaqPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactMe/>} />
          <Route path="/ourteam" element={<OurTeam/>} />
          <Route path= '/faq' element={<FaqPage></FaqPage>}/>
          <Route path='/privacy' element={<PrivacyPolicy></PrivacyPolicy>}/>
          <Route path='/termsofservice' element={<TermsOfService></TermsOfService>}/>
        </Routes>
      </Router></>
  );
}

export default App;
