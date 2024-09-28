// src/components/FilterBar.jsx
import React, { useState } from 'react';

const FilterBar = ({ handleFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('All');
  const [funding, setFunding] = useState('');

  const departments = [
    "Computer Science",
    "Physics",
    "Biology",
    "Mathematics",
    "Engineering",
    "Chemistry",
    "Arts",
  ];
   // Update with actual departments
  const statuses = ['All', 'Ongoing', 'Completed', 'Pending']; // Add more statuses as needed
  const fundingOptions = ['All', 'Funded', 'Not Funded'];

  const handleApplyFilter = () => {
    handleFilter({ searchTerm, department, status: status === 'All' ? '' : status, funding });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded-lg mb-2 sm:mb-0"
      />
      
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="p-2 border rounded-lg mb-2 sm:mb-0"
      >
        <option value="">Select Department</option>
        {departments.map((dept) => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border rounded-lg mb-2 sm:mb-0"
      >
        {statuses.map((stat) => (
          <option key={stat} value={stat}>{stat}</option>
        ))}
      </select>

      <select
        value={funding}
        onChange={(e) => setFunding(e.target.value)}
        className="p-2 border rounded-lg mb-2 sm:mb-0"
      >
        <option value="">Select Funding Status</option>
        {fundingOptions.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      <button 
        onClick={handleApplyFilter} 
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-2 sm:mt-0"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBar; // Ensure you have this default export
