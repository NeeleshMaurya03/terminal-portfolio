import React from "react";

const Contact = () => {
  return (
    <div className="text-white font-mono w-full p-4">
      <h1 className="text-xl font-bold mb-4">📞 Contact Me</h1>

      <p>
        📧 Email:{" "}
        <a href="mailto:neeleshmaurya2003@gmail.com" className="text-blue-400 hover:underline">
          neeleshmaurya2003@gmail.com
        </a>
      </p>

      <p>
        🔗 LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/neeleshmaurya" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          linkedin.com/in/neeleshmaurya
        </a>
      </p>

      <p>
        🐙 GitHub:{" "}
        <a href="https://github.com/NeeleshMaurya03" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          github.com/NeeleshMaurya03
        </a>
      </p>

      <p>
        📞 Phone:{" "}
        <span className="text-blue-400">+91-7417996642</span>
      </p>
    </div>
  );
};

export default Contact;
