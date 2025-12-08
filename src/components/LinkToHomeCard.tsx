import React from "react";
import { useNavigate } from "react-router-dom";

const LinkToHomeCard = ({ path = "/" }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <div className="bg-green-100 border-t border-green-300 p-6 flex flex-col items-center justify-center rounded-t-xl shadow-md">
      <h2 className="text-xl font-semibold text-green-900 mb-2">
        Thank you for visiting!
      </h2>
      <p className="text-green-800 mb-4 text-center">
        Explore more healthy and vegan options by visiting the next page.
      </p>
      <button
        onClick={handleNavigate}
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 shadow-sm"
      >
        Go
      </button>
    </div>
  );
};

export default LinkToHomeCard;
