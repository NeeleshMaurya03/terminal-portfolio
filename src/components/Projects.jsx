import React from "react";

const projects = [
  {
    id: 1,
    name: "AI Resume Analyzer",
    technologies: [
      "React", "Tailwind CSS", "Node.js", "Express.js", "NLP", "MySQL",
    ],
    year: "2025",
    description: [
      "Developed an AI-powered resume analysis tool using NLP to extract and structure key resume information.",
      "Implemented skill clustering, job role prediction, and resume feedback to enhance applicant resumes.",
      "Designed an interactive admin dashboard with data visualization (Pie Charts) for resume analytics.",
      "Integrated JWT authentication, PDF parsing, and feedback collection to refine recommendations.",
      "Built using React (Tailwind CSS, Chart.js), Node.js (Express.js, Multer), and MySQL.",
    ],
    github: "YOUR_GITHUB_LINK_HERE",
  },
  {
    id: 2,
    name: "Terminal-Based Portfolio",
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    year: "2024",
    description: [
      "Built a unique terminal-style portfolio website for an interactive developer experience.",
      "Designed custom commands to navigate and display information dynamically.",
      "Implemented keyboard shortcuts, command history, and auto-suggestions for enhanced usability.",
      "Styled using Tailwind CSS for a modern yet minimal aesthetic.",
    ],
    github: "YOUR_GITHUB_LINK_HERE",
  },
  {
    id: 3,
    name: "Password Generator",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2024",
    description: [
      "Created a secure password generator with custom length, symbols, and character selection options.",
      "Implemented clipboard copy functionality for user convenience.",
      "Designed an intuitive UI with real-time password strength indicators.",
      "Fully responsive and lightweight, ensuring cross-browser compatibility.",
    ],
    github: "YOUR_GITHUB_LINK_HERE",
  },
];

const Projects = () => {
  return (
    <div className="text-white font-mono w-full p-4">
      <h1 className="text-xl font-bold mb-4">📂 Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="mb-6">
          <h2 className="text-lg text-green-400 font-bold">
            {project.id}. {project.name} ({project.year})
          </h2>
          <ul className="list-disc pl-6 text-gray-300">
            {project.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <p className="mt-2 text-blue-400">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              🔗 GitHub Repo
            </a>
          </p>
          <hr className="border-gray-600 mt-4" />
        </div>
      ))}
    </div>
  );
};

export default Projects;
