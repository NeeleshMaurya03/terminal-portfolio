import React from "react";

const Resume = () => {
  return (
    <div className="text-white font-mono w-full p-4">
      <h1 className="text-xl font-bold mb-4">📄 Resume</h1>
      <p>Click the link below to download my resume:</p>

      <a
        href="https://drive.google.com/file/d/1rYedVpsyV2B8tLvLJW0K_M_8GdbN7fxV/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline font-bold block mt-2"
      >
        📥 Download Resume
      </a>
    </div>
  );
};

export default Resume;
