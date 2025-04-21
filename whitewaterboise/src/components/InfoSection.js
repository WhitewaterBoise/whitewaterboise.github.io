import React from "react";

const InfoSection = () => {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto my-16 px-4">
      {/* Block 1 */}
      <div className="flex items-start gap-6">
        <div className="shrink-0">
          <img
            src="https://v.fastcdn.co/u/89b2219b/60950206-0-Part-1.png"
            alt="Descriptive Alt 1"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">Non Invasive Procedure</h3>
          <p className="text-gray-700 mt-1 text-lg">
          The NeuroStar Advanced Therapy TMS device is a completely painless and non-surgical procedure. No anesthesia is required.
          </p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="flex items-start gap-6">
        <div className="shrink-0">
          <img
            src="https://v.fastcdn.co/u/89b2219b/60950211-0-Part-2.png"
            alt="Descriptive Alt 2"
            className="w-24 h-24 rounded-full  object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">No Negative Side Effects</h3>
          <p className="text-gray-700 mt-1 text-lg">
          After your session is over, you can confidently return to any regularly scheduled activities such as work or school. Your sleep will not be affected at all either.
          </p>
        </div>
      </div>

      {/* Block 3 */}
      <div className="flex items-start gap-6">
        <div className="shrink-0">
          <img
            src="https://v.fastcdn.co/u/89b2219b/60950216-0-Part3.png"
            alt="Descriptive Alt 3"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">Covered By Insurance</h3>
          <p className="text-gray-700 mt-1 text-lg">
          Most insurance companies will help cover the cost of your NeuroStar Advanced Therapy TMS consultation. Find out more by contacting us today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
