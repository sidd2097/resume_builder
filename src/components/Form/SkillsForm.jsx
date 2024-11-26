import React, { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const SkillsForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleSkillChange = (e) => {
    setResumeData({ ...resumeData, skills: e.target.value.split(",") });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <input
        type="text"
        placeholder="Enter skills separated by commas"
        value={resumeData.skills.join(", ")}
        onChange={handleSkillChange}
        className="border w-full p-2 rounded"
      />
    </div>
  );
};

export default SkillsForm;
