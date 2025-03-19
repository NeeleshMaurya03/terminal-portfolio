import React, { useState, useEffect, useRef } from "react";
import UserInput from "./UserInput";
import Help from "./Help";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import Resume from "./Resume";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const terminalRef = useRef(null);

  // ✅ Run 'init' once on startup
  useEffect(() => {
    handleCommand("init");
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  const handleCommand = (command) => {
    let response;

    switch (command) {
      case "help":
        response = (
          <div>
            <p className="text-yellow-400 font-bold">=== Terminal Help ===</p>
            <p>Terminal Features</p>
            <ul className="list-disc pl-6 text-white">
              <li><span className="text-green-400">Tab Completion:</span> Use Tab to autocomplete commands.</li>
              <li><span className="text-green-400">Command History:</span> Use Up/Down arrows to navigate commands.</li>
              <li><span className="text-green-400">Clear Screen:</span> Type 'clear' to reset the terminal.</li>
              <li><span className="text-green-400">Help:</span> Type 'help' to display available commands.</li>
            </ul>
            <Help />
          </div>
        );
        break;
      case "aboutme":
        response = <About />;
        break;
      case "education":
        response = <Education />;
        break;
      case "experience":
        response = <Experience />;
        break;
      case "resume":
        response = <Resume />;
        break;
      case "contactme":
        response = <Contact />;
        break;
      case "clear":
        // ✅ Clear only user-entered commands, keep 'init' visible
        setHistory((prevHistory) => prevHistory.filter((item) => item.command === "init"));
        return;
      case "init":
        // ✅ Clear previous output before displaying init message
        setHistory([{ command: "init", response: (
          <div>
            <pre className="text-green-400">
              {`
███╗   ██╗███████╗███████╗██╗     ███████╗███████╗██╗  ██╗    ███╗   ███╗ █████╗ ██╗   ██╗██████╗ ██╗   ██╗ █████╗ 
████╗  ██║██╔════╝██╔════╝██║     ██╔════╝██╔════╝██║  ██║    ████╗ ████║██╔══██╗██║   ██║██╔══██╗╚██╗ ██╔╝██╔══██╗
██╔██╗ ██║█████╗  █████╗  ██║     █████╗  ███████╗███████║    ██╔████╔██║███████║██║   ██║██████╔╝ ╚████╔╝ ███████║
██║╚██╗██║██╔══╝  ██╔══╝  ██║     ██╔══╝  ╚════██║██╔══██║    ██║╚██╔╝██║██╔══██║██║   ██║██╔══██╗  ╚██╔╝  ██╔══██║
██║ ╚████║███████╗███████╗███████╗███████╗███████║██║  ██║    ██║ ╚═╝ ██║██║  ██║╚██████╔╝██║  ██║   ██║   ██║  ██║
╚═╝  ╚═══╝╚══════╝╚══════╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
                                                                                                                    
Welcome to my interactive terminal portfolio.

For a list of commands, type "help" and press enter.
`}
            </pre>
          </div>
        ) }]);
        return;
      default:
        response = <p className="text-red-400">Command not found: {command}. Type 'help' for a list of commands.</p>;
    }

    setHistory((prevHistory) => [...prevHistory, { command, response }]);
  };

  return (
    <div className="w-full h-screen bg-black text-green-400 font-mono p-4">
      <div ref={terminalRef} className="h-[85vh] w-full overflow-y-auto p-4 terminal-window">

        {history.map((entry, index) => (
          <div key={index}>
            <p className="text-blue-400">&gt; {entry.command}</p>
            <div>{entry.response}</div>
          </div>
        ))}
      </div>
      <UserInput onCommandSubmit={handleCommand} />
    </div>
  );
};

export default Terminal;
