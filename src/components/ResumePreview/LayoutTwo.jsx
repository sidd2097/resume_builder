import React from "react";

const LayoutTwo = ({ personalInfo, education, experience, skills, projects }) => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded shadow-lg space-y-6">
      {/* Personal Information Section */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
        <p>{personalInfo.email} | {personalInfo.phone}</p>
        <p>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-500">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-500">
            GitHub
          </a>
        </p>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2">
          Education
        </h2>
        <ul className="space-y-2">
          {education.map((edu, index) => (
            <li key={index}>
              <p className="font-bold">{edu.institution}</p>
              <p>{edu.degree} ({edu.year})</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2">
          Work Experience
        </h2>
        <ul className="space-y-4">
          {experience.map((exp, index) => (
            <li key={index}>
              <p className="font-bold">{exp.company}</p>
              <p>{exp.role} ({exp.duration})</p>
              <p className="italic text-sm">{exp.achievements}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-sm rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2">
          Projects
        </h2>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index}>
              <p className="font-bold">{project.title}</p>
              <p>{project.description}</p>
              <p className="italic text-sm">Technologies: {project.technologies}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LayoutTwo;
