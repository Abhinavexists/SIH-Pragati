import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { CSVLink } from 'react-csv'; // Add a CSS file for custom styles

// Register all necessary components from Chart.js
Chart.register(...registerables);

// Sample data for metrics (replace with actual data as needed)
const innovationData = [
  { department: 'Computer Science', publications: 12, patents: 5, impactScore: 85 },
  { department: 'Physics', publications: 19, patents: 7, impactScore: 90 },
  { department: 'Chemistry', publications: 3, patents: 2, impactScore: 70 },
];

const InnovationMetrics = () => {
  const [department, setDepartment] = useState('');
  const [timeRange, setTimeRange] = useState('6 months');
  const [projectType, setProjectType] = useState('');
  const [filteredData, setFilteredData] = useState(innovationData);

  // Function to handle filter application
  const applyFilters = () => {
    let filtered = innovationData;

    if (department) {
      filtered = filtered.filter(item => item.department === department);
    }

    // Placeholder for time range filtering
    if (timeRange) {
      // Implement time range filtering logic if applicable
    }

    // Placeholder for project type filtering
    if (projectType) {
      // Implement project type filtering logic if applicable
    }

    setFilteredData(filtered);
  };

  // Prepare CSV data
  const csvData = [
    { Department: 'Department', Publications: 'Number of Publications', Patents: 'Number of Patents', ImpactScore: 'Impact Score' },
    ...filteredData.map(item => ({
      Department: item.department,
      Publications: item.publications,
      Patents: item.patents,
      ImpactScore: item.impactScore
    })),
  ];

  // Sample chart data based on filtered data
  const publicationsData = {
    labels: filteredData.map(item => item.department),
    datasets: [
      {
        label: 'Publications',
        data: filteredData.map(item => item.publications),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const patentsData = {
    labels: filteredData.map(item => item.department),
    datasets: [
      {
        label: 'Patents',
        data: filteredData.map(item => item.patents),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  const impactScoreData = {
    labels: filteredData.map(item => item.department),
    datasets: [
      {
        label: 'Impact Score',
        data: filteredData.map(item => item.impactScore),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="p-8 md:ml-80 bg-gradient-to-r from-indigo-50 via-gray-100 to-indigo-50 min-h-screen">

      <h1 className="text-4xl font-extrabold text-center text-gray-700 mb-6">
      Innovation Metrics
      </h1>

      <div className='border border-gray-500 mb-6'></div>

      {/* Filters */}
      <div className="mb-6 flex items-center">
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded p-2 mr-4"
        >
          <option value="">Select Department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select>

        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="border rounded p-2 mr-4"
        >
          <option value="6 months">Last 6 Months</option>
          <option value="1 year">Last Year</option>
          <option value="2 years">Last 2 Years</option>
        </select>

        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="border rounded p-2 mr-4"
        >
          <option value="">Select Project Type</option>
          <option value="Research">Research</option>
          <option value="Development">Development</option>
        </select>

        <button 
          onClick={applyFilters} 
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Apply Filters
        </button>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Publications per Department</h2>
          <Bar data={publicationsData} options={{ responsive: true }} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Patents per Department</h2>
          <Bar data={patentsData} options={{ responsive: true }} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Impact Scores</h2>
          <Line data={impactScoreData} options={{ responsive: true }} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Fund Distribution</h2>
          <Pie data={publicationsData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Data Export */}
      <div className="mt-6">
        <h2 className="text-xl mb-5 font-bold">Export Data</h2>

        <CSVLink 
          data={csvData} 
          filename={"innovation_metrics.csv"} 
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Export as CSV
        </CSVLink>
      </div>
    </div>
  );
};

export default InnovationMetrics;
