// src/pages/Research.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import FilterBar from '../components/FilterBar'; // Make sure this path is correct
import AddProjectForm from '../components/AddProjectForm';

// Sample project data (this should be fetched from an API)
const projectData = [
  {
    title: "AI in Healthcare",
    department: "Computer Science",
    leadResearcher: "Dr. John Smith",
    funding: 50000,
    status: "Ongoing",
  },
  {
    title: "Quantum Computing",
    department: "Physics",
    leadResearcher: "Dr. Jane Doe",
    funding: 120000,
    status: "Completed",
  },
  // More projects here
];

const ResearchProjects = () => {
  const [projects, setProjects] = useState(projectData);
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  // Handle filtering
  const handleFilter = ({ searchTerm, department, status, funding }) => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (department) {
      filtered = filtered.filter((project) => project.department === department);
    }

    if (status && status !== 'All') {
      filtered = filtered.filter((project) => project.status === status);
    }

    if (funding) {
      filtered = filtered.filter((project) => {
        if (funding === 'Funded') return project.funding > 0;
        return project.funding === 0;
      });
    }

    setFilteredProjects(filtered);
  };

  // Handle adding a new project
  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
    setFilteredProjects([...projects, newProject]); // Update filtered projects as well
  };

  return (
    <div className="md:ml-80 p-6 bg-gradient-to-r from-indigo-50 via-gray-100 to-indigo-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-700 mb-6">
        Research Projects
      </h1>

      <div className='border border-gray-500 mb-6'></div>
      

      {/* FilterBar */}
      <div className="sticky top-0 z-10 bg-white shadow-lg p-4 mb-6 rounded-lg">
        <FilterBar handleFilter={handleFilter} />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <p className="text-xl font-medium text-gray-500">No projects found.</p>
        )}
      </div>

      <AddProjectForm onAddProject={handleAddProject} />
    </div>
  );
};

export default ResearchProjects;
