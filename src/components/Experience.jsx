import React from "react";

const Experience = () => {
  return (
    <div className="text-white font-mono w-full p-4">
      <h1 className="text-xl font-bold mb-4">💼 Work Experience</h1>

      <div className="mb-4">
        <h2 className="text-lg font-bold text-green-400">Software Developer Intern</h2>
        <p className="text-blue-400">XYZ Tech Solutions</p>
        <p>📅 June 2024 - Present</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Developed and maintained web applications using React.js and Node.js.</li>
          <li>Implemented RESTful APIs and optimized backend performance.</li>
          <li>Worked on debugging and improving UI/UX for better user experience.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold text-green-400">Frontend Developer Intern</h2>
        <p className="text-blue-400">ABC Web Services</p>
        <p>📅 Jan 2024 - May 2024</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Developed responsive front-end components using React and Tailwind CSS.</li>
          <li>Collaborated with UI/UX designers to improve website aesthetics.</li>
          <li>Ensured cross-browser compatibility and accessibility standards.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
