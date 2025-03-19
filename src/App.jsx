import React from "react";
import Terminal from "./components/Terminal"; // ✅ Importing Terminal Component

const App = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center">
      <Terminal />
    </div>
  );
};

export default App;
