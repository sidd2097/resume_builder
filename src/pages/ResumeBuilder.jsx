import React, { useContext, useRef } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import PersonalInfoForm from '../components/Form/PersonalInfoForm';
import ProjectsForm from '../components/Form/ProjectsForm';
import SkillsForm from '../components/Form/ProjectsForm';
import WorkExperienceForm from '../components/Form/WorkExperienceForm';
import LayoutOne from '../components/ResumePreview/LayoutOne';
import { useReactToPrint } from 'react-to-print';

const ResumeBuilder = () => {
  const { resumeData } = useContext(ResumeContext);
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      <div>
        <PersonalInfoForm />
        <ProjectsForm/>
        <SkillsForm/>
        <WorkExperienceForm/>
        {/* Include other form components */}
        <button onClick={handlePrint} className="mt-4 px-4 py-2 bg-blue-600 text-white">
          Save as PDF
        </button>
      </div>
      <div ref={printRef}>
        <LayoutOne data={resumeData} />
      </div>
    </div>
  );
};

export default ResumeBuilder;
