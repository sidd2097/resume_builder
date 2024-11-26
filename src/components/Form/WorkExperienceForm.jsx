import React, { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const WorkExperienceForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...resumeData.workExperience];
    updatedWorkExperience[index] = { ...updatedWorkExperience[index], [name]: value };
    setResumeData({ ...resumeData, workExperience: updatedWorkExperience });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData.workExperience,
        { company: "", role: "", duration: "", achievements: "" },
      ],
    });
  };

  const removeExperience = (index) => {
    const updatedWorkExperience = resumeData.workExperience.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, workExperience: updatedWorkExperience });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      {resumeData.workExperience.map((exp, index) => (
        <div key={index} className="space-y-2 mb-4 border-b pb-4">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={exp.company || ""}
            onChange={(e) => handleChange(index, e)}
            className="border w-full p-2 rounded"
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={exp.role || ""}
            onChange={(e) => handleChange(index, e)}
            className="border w-full p-2 rounded"
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={exp.duration || ""}
            onChange={(e) => handleChange(index, e)}
            className="border w-full p-2 rounded"
          />
          <textarea
            name="achievements"
            placeholder="Achievements"
            value={exp.achievements || ""}
            onChange={(e) => handleChange(index, e)}
            className="border w-full p-2 rounded"
          ></textarea>
          <button
            onClick={() => removeExperience(index)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addExperience}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Experience
      </button>
    </div>
  );
};

export default WorkExperienceForm;
