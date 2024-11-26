const isEmpty = (value) => value === undefined || value === null || value.trim() === "";

// Validate personal information form
export const validatePersonalInfo = (data) => {
  const errors = {};
  
  if (isEmpty(data.name)) errors.name = "Name is required.";
  if (isEmpty(data.email) || !/\S+@\S+\.\S+/.test(data.email))
    errors.email = "A valid email address is required.";
  if (isEmpty(data.phone) || !/^\d{10}$/.test(data.phone))
    errors.phone = "A valid 10-digit phone number is required.";
  if (isEmpty(data.linkedin)) errors.linkedin = "LinkedIn profile link is required.";
  if (isEmpty(data.github)) errors.github = "GitHub profile link is required.";
  
  return errors;
};

// Validate education form
export const validateEducation = (education) => {
  const errors = [];
  
  education.forEach((edu, index) => {
    const eduErrors = {};
    if (isEmpty(edu.institution)) eduErrors.institution = "Institution name is required.";
    if (isEmpty(edu.degree)) eduErrors.degree = "Degree is required.";
    if (isEmpty(edu.year) || !/^\d{4}$/.test(edu.year))
      eduErrors.year = "A valid passing year is required.";
    
    if (Object.keys(eduErrors).length > 0) {
      errors[index] = eduErrors;
    }
  });
  
  return errors;
};

// Validate work experience form
export const validateExperience = (experience) => {
  const errors = [];
  
  experience.forEach((exp, index) => {
    const expErrors = {};
    if (isEmpty(exp.company)) expErrors.company = "Company name is required.";
    if (isEmpty(exp.role)) expErrors.role = "Role is required.";
    if (isEmpty(exp.duration)) expErrors.duration = "Duration is required.";
    if (isEmpty(exp.achievements)) expErrors.achievements = "Achievements are required.";
    
    if (Object.keys(expErrors).length > 0) {
      errors[index] = expErrors;
    }
  });
  
  return errors;
};

// Validate skills form
export const validateSkills = (skills) => {
  if (skills.length === 0) return "At least one skill is required.";
  return null;
};

// Validate projects form
export const validateProjects = (projects) => {
  const errors = [];
  
  projects.forEach((project, index) => {
    const projectErrors = {};
    if (isEmpty(project.title)) projectErrors.title = "Project title is required.";
    if (isEmpty(project.description)) projectErrors.description = "Project description is required.";
    if (isEmpty(project.technologies)) projectErrors.technologies = "Technologies used are required.";
    
    if (Object.keys(projectErrors).length > 0) {
      errors[index] = projectErrors;
    }
  });
  
  return errors;
};

// General function to validate the entire form
export const validateForm = (data) => {
  const personalInfoErrors = validatePersonalInfo(data.personalInfo);
  const educationErrors = validateEducation(data.education);
  const experienceErrors = validateExperience(data.experience);
  const skillsErrors = validateSkills(data.skills);
  const projectsErrors = validateProjects(data.projects);
  
  return {
    personalInfo: personalInfoErrors,
    education: educationErrors,
    experience: experienceErrors,
    skills: skillsErrors,
    projects: projectsErrors,
  };
};

// Check if there are any validation errors
export const hasErrors = (errors) => {
  return Object.values(errors).some(
    (fieldErrors) =>
      Array.isArray(fieldErrors)
        ? fieldErrors.some((err) => Object.keys(err).length > 0)
        : Object.keys(fieldErrors).length > 0
  );
};
