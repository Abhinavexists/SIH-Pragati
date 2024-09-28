import React from 'react';
import AddProjectForm from '../components/AddProjectForm';
import { useNavigate } from 'react-router-dom';

const AddProjectPage = ({ onAddProject }) => {
  const navigate = useNavigate();

  const handleAddProject = (newProject) => {
    onAddProject(newProject); // Add project to the parent state
    navigate('/research-projects'); // Navigate back to the research projects page
  };

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-50 via-gray-100 to-indigo-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">
        Add New Research Project
      </h1>
      <AddProjectForm onAddProject={handleAddProject} />
    </div>
  );
};

export default AddProjectPage;
