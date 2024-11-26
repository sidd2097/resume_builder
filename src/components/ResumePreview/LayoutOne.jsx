import React from 'react';

const LayoutOne = ({ data }) => {
  const { personalInfo, education, workExperience, skills, projects } = data;

  return (
    <div className="p-6 bg-white rounded shadow bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="text-xl font-bold">{personalInfo.name}</h1>
      <p>{personalInfo.email} | {personalInfo.phone}</p>

      <section className="mt-4">
        <h2 className="font-bold">Education</h2>
        {education.map((edu, idx) => (
          <div key={idx}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree} ({edu.year})</p>
          </div>
        ))}
      </section>
      {/* Add similar sections for workExperience, skills, and projects */}
    </div>
  );
};

export default LayoutOne;
