
import React, { useState } from "react";
import PageFooter from "./PageFooter";
import PageNavBar from "./PageNavBar";
import InsuranceAccepted from "./InsuranceAccepted";
import './statics/Faq.css';
// Sample FAQ Data
const faqData = [
  {
    question: "What is TMS?",
    answer: "TMS, or Transcranial Magnetic Stimulation, is a non-drug, noninvasive treatment that uses magnetic fields to stimulate specific brain regions to improve symptoms of depression. It is often used in cases where patients have treatment-resistant depression that have not found success with traditional methods such as antidepressant drugs or psychotherapies.  "
  },
  {
    question: "How does TMS work?",
    answer: "TMS uses focused electromagnetic pulses to target specific underactive areas of the brain associated with mood regulation. By stimulating these underactive brain regions, patients can have a lasting relief from symptoms of depression."
  },
  {
    question: "Is TMS safe?",
    answer: "Yes, TMS is considered a very safe and effective treatment. NeuroStar TMS was FDA approved in 2008 for adults with Major Depressive Disorder (MDD) and has since then been approved for the adjunct treatment for Obsessive-Compulsive Disorder (OCD) and MDD with comorbid anxiety. NeuroStar TMS is also the first and only FDA approved TMS therapy for the adjunct treatment of MDD in adolescent patients (15-21)."
  },
  {
    question: "Does the treatment hurt?",
    answer: "Most patients do not feel any pain during treatments. Patients may feel the magnet pulsing which is often described as a firm tapping sensation on the head or scalp. The most commonly reported side effect is mild pain or discomfort at or near the treatment site, usually only during the first week of treatment."
  },
  {
   question: "How long is a TMS treatment?",
    answer: "A typical standard TMS treatment plan will have 36 sessions lasting 19-37 minutes each."
  },
  {
    question: "Is TMS therapy covered by insurance?",
     answer: "TMS therapy is covered by most major insurance plans."
   },
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

<InsuranceAccepted></InsuranceAccepted>
    <PageFooter></PageFooter></>
  );
};

export default FaqPage;