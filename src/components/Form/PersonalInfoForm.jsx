import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const PersonalInfoForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      personalInfo: { ...resumeData.personalInfo, [name]: value },
    });
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm">Name</label>
        <input
          type="text"
          name="name"
          value={resumeData.personalInfo.name || ''}
          onChange={handleChange}
          className="border w-full p-2"
        />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input
          type="email"
          name="email"
          value={resumeData.personalInfo.email || ''}
          onChange={handleChange}
          className="border w-full p-2"
        />
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input
          type="text"
          name="phone"
          value={resumeData.personalInfo.phone || ''}
          onChange={handleChange}
          className="border w-full p-2"
        />
      </div>
    </form>
  );
};

export default PersonalInfoForm;
