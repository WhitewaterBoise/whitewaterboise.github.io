import React from "react";
import PageFooter from "./PageFooter";
import PageNavBar from "./PageNavBar";

import './statics/Forms.css';
import { useNavigate } from "react-router-dom"; // Or whichever router you're using

const Forms = () => {
  const navigate = useNavigate();

  const handleSelection = (path) => {
    navigate(path);
  };

  return (
    <>
    <PageNavBar></PageNavBar>

    <section className="form1-hero">
        <div className="hero-content">
          <h1>PYCHE TMS Referral Form</h1>
          <p>        <button
          onClick={() => handleSelection("/form1")}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Go to
        </button></p>
        </div>
      </section>

      <section className="form2-hero">
        <div className="hero-content">
          <h1>Patient Consent Form</h1>
          <p>        <button
          onClick={() => handleSelection("/form2")}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Go to
        </button></p>
        </div>
      </section>
   

    <PageFooter></PageFooter>
    </>
  );
};

export default Forms;