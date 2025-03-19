import React from "react";

const About = () => {
  return (
    <div className="text-white font-mono w-full p-4">
      <h1 className="text-xl font-bold mb-4">👨‍💻 About Me</h1>
      <p>
        Hello! I'm <span className="text-green-400 font-bold">Neelesh Maurya</span>, a passionate full-stack developer
        from <span className="text-blue-400">Greater Noida, U.P, India</span>.
      </p>
      <p className="mt-2">
        I specialize in building responsive and interactive web applications using modern technologies.
      </p>

      <h2 className="text-lg font-bold mt-4">🚀 Skills</h2>
      <ul className="list-disc pl-6">
        <li>Languages: C++, C, JavaScript, Java</li>
        <li>Frontend: React.js, HTML5, CSS3, JavaScript, Tailwind CSS</li>
        <li>Backend: Node.js, Express.js, REST APIs, MySQL, MongoDB</li>
        <li>Tools: VS Code, Figma, Git, Postman</li>
      </ul>

      <h2 className="text-lg font-bold mt-4">📩 Contact</h2>
      <p>Email: <a href="mailto:neeleshmaurya2003@gmail.com" className="text-blue-400 hover:underline">neeleshmaurya2003@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/NeeleshMaurya03" className="text-blue-400 hover:underline">github.com/NeeleshMaurya03</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/neeleshmaurya" className="text-blue-400 hover:underline">linkedin.com/in/neeleshmaurya</a></p>
    </div>
  );
};

export default About;
