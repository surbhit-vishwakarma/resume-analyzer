import React, { useState, useEffect } from "react";

const Loading = () => {
  const [message, setMessage] = useState("Please wait while we are working on your resume...");

  useEffect(() => {
    // Set up timeouts to change the message dynamically
    const timer1 = setTimeout(() => {
      setMessage("This may take a few moments...");
    }, 3000); // After 3 seconds

    const timer2 = setTimeout(() => {
      setMessage("We appreciate your patience. Almost there...");
    }, 6000); // After 6 seconds

    // Clean up the timers on component unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
      <svg
        className="animate-spin h-16 w-16 text-[#000000]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M12 2a10 10 0 0 0-1 19.95A10 10 0 0 0 12 2z"
        ></path>
      </svg>
      <p className="text-[#130f16] text-2xl font-bold">{message}</p>
    </div>
  );
};

export default Loading;
