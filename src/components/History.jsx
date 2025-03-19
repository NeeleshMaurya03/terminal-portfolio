import React, { useEffect, useRef } from "react";
import CommandPrompt from "./CommandPrompt";

const validCommands = ["help", "aboutme", "education", "experience", "resume", "contactme", "clear", "init"]; // ✅ List of valid commands

const History = ({ history }) => {
  const historyRef = useRef(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <div className="w-full">
      {history.map((entry, index) => {
        const isValidCommand = validCommands.includes(entry.command.trim().toLowerCase());

        return (
          <div key={index} className="flex flex-col">
            {/* ✅ Keep existing prompt format */}
            <div className="flex items-center">
              <CommandPrompt />
              <p className={`${isValidCommand ? "text-green-400" : "text-red-400"} font-bold pl-2`}>
                {entry.command}
              </p>
            </div>
            {/* ✅ Keep previous response display */}
            <div className="pl-6">{entry.response}</div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
