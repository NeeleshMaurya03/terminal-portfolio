import React from "react";

const Education = () => {
  return (
    <div className="text-white font-mono w-full p-4">
      <h1 className="text-xl font-bold mb-4">🎓 Education</h1>

      <div className="mb-4">
        <h2 className="text-lg font-bold text-green-400">B.Tech in Computer Science</h2>
        <p className="text-blue-400">Gautam Buddha University, Greater Noida</p>
        <p>📅 2021 - 2025</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold text-green-400">Senior Secondary (12th)</h2>
        <p className="text-blue-400">Saraswati Vidya Mandir, Gorakhpur</p>
        <p>📅 2019 - 2021</p>
      </div>

      <div>
        <h2 className="text-lg font-bold text-green-400">Secondary (10th)</h2>
        <p className="text-blue-400">Saraswati Vidya Mandir, Gorakhpur</p>
        <p>📅 2018 - 2019</p>
      </div>
    </div>
  );
};

export default Education;
