import React, { useEffect, useRef, useState } from "react";
import CommandPrompt from "./CommandPrompt";

const validCommands = ["help", "aboutme", "education", "experience", "resume", "contactme", "clear", "init"]; // ✅ List of valid commands

const UserInput = ({ onCommandSubmit }) => {
  const [userCommand, setUserCommand] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCommand = userCommand.trim().toLowerCase();
    if (!trimmedCommand) return;

    if (trimmedCommand === "clear") {
      onCommandSubmit(trimmedCommand);
      setUserCommand("");
      return;
    }

    onCommandSubmit(trimmedCommand);
    setUserCommand("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const match = validCommands.find((cmd) =>
        cmd.startsWith(userCommand.trim().toLowerCase())
      );
      if (match) {
        setUserCommand(match);
      }
    }
  };

  const isValid = validCommands.includes(userCommand.trim().toLowerCase());

  return (
    <form onSubmit={handleSubmit} className="mb-3 flex w-full">
      <label className="flex gap-3 flex-grow items-center">
        <CommandPrompt />
        <input
          type="text"
          className={`bg-transparent leading-3 outline-none flex-grow w-full font-mono placeholder-gray-500 ${
            userCommand.trim() === "" ? "text-white" : isValid ? "text-green-400" : "text-red-400"
          }`}
          placeholder="Type a command..."
          value={userCommand}
          ref={inputRef}
          autoFocus
          autoComplete="off"
          spellCheck="false"
          onKeyDown={handleKeyDown}
          onChange={(e) => setUserCommand(e.target.value)}
        />
      </label>
    </form>
  );
};

export default UserInput;
