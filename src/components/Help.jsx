import React from "react";

const Help = () => {
  return (
    <div className="text-white font-mono w-full p-4">
      <h1 className="text-xl font-bold mb-4">🛠️ Available Commands</h1>
      <ul className="list-none">
        <li>
          <span className="text-green-400 font-bold">help</span> - Show available commands
        </li>
        <li>
          <span className="text-green-400 font-bold">aboutme</span> - Display personal information
        </li>
        <li>
          <span className="text-green-400 font-bold">education</span> - Show educational background
        </li>
        <li>
          <span className="text-green-400 font-bold">experience</span> - Display work experience
        </li>
        <li>
          <span className="text-green-400 font-bold">resume</span> - Get resume download link
        </li>
        <li>
          <span className="text-green-400 font-bold">contactme</span> - Show contact information
        </li>
        <li>
          <span className="text-green-400 font-bold">init</span> - Reset the terminal
        </li>
        <li>
          <span className="text-green-400 font-bold">clear</span> - Clears up the terminal
        </li>
      </ul>
    </div>
  );
};

export default Help;
