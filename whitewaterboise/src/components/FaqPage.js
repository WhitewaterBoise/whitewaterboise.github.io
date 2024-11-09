
import React, { useState } from "react";
import PageFooter from "./PageFooter";
import PageNavBar from "./PageNavBar";
import './statics/Faq.css';
// Sample FAQ Data
const faqData = [
  {
    question: "What is TMS?",
    answer: "TMS, or Transcranial Magnetic Stimulation, is a non-invasive procedure that uses magnetic fields to stimulate nerve cells in the brain."
  },
  {
    question: "How does TMS work?",
    answer: "TMS uses electromagnetic pulses to target specific areas of the brain associated with mood regulation, helping improve symptoms of depression."
  },
  {
    question: "Is TMS safe?",
    answer: "Yes, TMS is considered a safe and effective treatment for depression with minimal side effects."
  },
  {
    question: "Hi there",
    answer: "Yes, TMS is considered a safe and effective treatment for depression with minimal side effects."
  }
];

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-700">{question}</h3>
        <span className="text-gray-500">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

// FAQ Page Component
 const FaqPage = () => {
  return (
<>
<PageNavBar></PageNavBar>
<section className="faq-hero">
        <div className="faq-content">
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>
    <div className="max-w-3xl mx-auto p-6">
      
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
    <PageFooter></PageFooter></>
  );
};

export default FaqPage;