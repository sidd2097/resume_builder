import React from "react";

const LayoutOne = ({ data }) => {
  const { personalInfo, education, workExperience, skills, projects } = data;

  return (
    <div className="p-6 bg-white rounded shadow text-black dark:bg-gray-900 dark:text-white">
      {/* Personal Information Section */}
      <div>
        <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
        <p>
          {personalInfo.email} | {personalInfo.phone}
        </p>
      </div>

      {/* Education Section */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2">
          Education
        </h2>
        {education.map((edu, idx) => (
          <div key={idx} className="mt-3">
            <h3 className="font-bold">{edu.institution}</h3>
            <p>
              {edu.degree} ({edu.year})
            </p>
          </div>
        ))}
      </section>

      {/* Work Experience Section */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2">
          Work Experience
        </h2>
        {workExperience.map((work, idx) => (
          <div key={idx} className="mt-3">
            <h3 className="font-bold">{work.company}</h3>
            <p>{work.role}</p>
            <p className="italic text-sm">{work.duration}</p>
            <p>{work.achievements}</p>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-600 pb-2">
          Projects
        </h2>
        {projects.map((project, idx) => (
          <div key={idx} className="mt-3">
            <h3 className="font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <p className="italic text-sm">
              Technologies: {project.technologies}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LayoutOne;
