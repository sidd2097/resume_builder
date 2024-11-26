import React, { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const EducationForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { institution: "", degree: "", year: "" }],
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = resumeData.education.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="space-y-2 mb-4 border-b pb-4">
          <input
            type="text"
            name="institution"
            placeholder="Institution"
            value={edu.institution || ""}
            onChange={(e) => handleChange(index, e)}
            className="border w-full p-2 rounded"
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={edu.degree || ""}
            onChange={(e) => handleChange(index, e)}
            className="border w-full p-2 rounded"
          />
          <input
            type="text"
            name="year"
            placeholder="Year of Passing"
            value={edu.year || ""}
            onChange={(e) => handleChange(index, e)}
            className="border w-full p-2 rounded"
          />
          <button
            onClick={() => removeEducation(index)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addEducation}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;
