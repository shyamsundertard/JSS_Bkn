import React, { useState } from 'react';

const Card = () => {
  // State to toggle the visibility of the names
  const [showNames, setShowNames] = useState(false);

  // Names to display when the button is clicked
  const names = [
    "SH. OM PRAKASH SUTHAR - DIRECTOR IN CHARGE",
    "SH. MAHESH UPADHYAY - PROGRAME OFFICER",
    "SH. LAXMINARAYAN CHURA - ACCOUNTANT",
    "SH. TALAT RIYAZ - ASSISTANT PRO. OFFICER",
    "SH. UMASHANKAR ACHARYA - ASSISTANT PRO. OFFICER",
    "SH. VISHNUDUTT MARU - DRIVER",
    "SH. SHRIMOHAN ACHARYA - ASSISTANT"
  ];

  // Function to handle button click
  const handleClick = () => {
    setShowNames(!showNames);
  };

  return (
    <div className="max-w-xl bg-[#FFF0B1] border border-orange-400 rounded-lg shadow-lg p-6 m-10 mx-auto transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-bold mb-4 text-center text-orange-600">Staff of JSS</h2>
      {showNames && (
        <ol className="list-decimal pl-5 mb-4 space-y-2">
          {names.map((name, index) => (
            <li key={index} className="text-gray-800">
              {name.split(' - ').map((part, idx) => (
                <span key={idx} className={idx === 1 ? "text-orange-500 font-semibold" : "font-medium"}>
                  {part}
                  {idx === 0 ? ' - ' : ''}
                </span>
              ))}
            </li>
          ))}
        </ol>
      )}
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-[#FFA500] to-[#FFCC80] bg-right bg-no-repeat bg-cover text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out block mx-auto mt-4"
      >
        {showNames ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

export default Card;
