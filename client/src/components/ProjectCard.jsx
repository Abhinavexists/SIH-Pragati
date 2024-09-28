import React from 'react';

const ProjectCard = ({ project }) => {
    return (
      <div className="bg-white p-6 shadow-lg rounded-xl transition transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-800">
          {project.title}
        </h2>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Department:</span> {project.department}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Lead Researcher:</span> {project.leadResearcher}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-bold">Funding:</span> ${project.funding.toLocaleString()}
        </p>
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
            project.status === 'Ongoing'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          {project.status}
        </span>
      </div>
    );
  };
  
  export default ProjectCard;
  