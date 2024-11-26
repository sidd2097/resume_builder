import React, { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const ProjectsForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...resumeData.projects];
    updatedProjects[index] = { ...updatedProjects[index], [name]: value };
    setResumeData({ ...resumeData, projects: updatedProjects });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, { title: "", description: "", technologies: "" }],
    });
  };

  const removeProject = (index) => {
    const updatedProjects = resumeData.projects.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, projects: updatedProjects });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="space-y-2 mb-4 border-b pb-4">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={project.title || ""}
            onChange={(e) => handleChange(index, e)}
            className="border w-full p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={project.description || ""}
            onChange={(e) => handleChange(index, e)}
            className="border w-full p-2 rounded"
          ></textarea>
          <input
            type="text"
            name="technologies"
            placeholder="Technologies Used"
            value={project.technologies || ""}
            onChange={(e) => handleChange(index, e)}
            className="border w-full p-2 rounded"
          />
          <button
            onClick={() => removeProject(index)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addProject}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;
