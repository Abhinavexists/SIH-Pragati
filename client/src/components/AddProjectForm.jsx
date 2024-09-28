import React, { useState } from 'react';

const departments = [
  "Computer Science",
  "Physics",
  "Biology",
  "Mathematics",
  "Engineering",
  "Chemistry",
  "Arts",
];

const AddProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [leadResearcher, setLeadResearcher] = useState('');
  const [funding, setFunding] = useState('');
  const [status, setStatus] = useState('Ongoing');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title,
      department,
      leadResearcher,
      funding: Number(funding),
      status,
    };
    onAddProject(newProject);
    // Clear form fields
    setTitle('');
    setDepartment('');
    setLeadResearcher('');
    setFunding('');
    setStatus('Ongoing');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Research Project</h2>
      <div className="mb-4">
        <label className="block mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Department</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
          className="w-full border rounded p-2"
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Lead Researcher</label>
        <input
          type="text"
          value={leadResearcher}
          onChange={(e) => setLeadResearcher(e.target.value)}
          required
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Funding ($)</label>
        <input
          type="number"
          value={funding}
          onChange={(e) => setFunding(e.target.value)}
          required
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded">
        Add Project
      </button>
    </form>
  );
};

export default AddProjectForm;
