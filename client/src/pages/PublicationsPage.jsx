import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { FaFileDownload } from "react-icons/fa";
import AddPublicationForm from "../components/AddPublicationForm";

// Sample publications data
const publicationsData = [
  {
    id: 1,
    title: "Understanding Quantum Computing",
    authors: "Alice Smith, Bob Johnson",
    publicationDate: "2023-06-15",
    journal: "International Journal of Quantum Research",
    citations: 120,
    isPatent: false,
  },
  {
    id: 2,
    title: "Machine Learning in Healthcare",
    authors: "Charlie Brown",
    publicationDate: "2022-01-22",
    journal: "Healthcare AI Conference",
    citations: 85,
    isPatent: false,
  },
  {
    id: 3,
    title: "Innovations in Renewable Energy",
    authors: "David White, Eve Davis",
    publicationDate: "2023-09-05",
    journal: "Journal of Energy Innovations",
    citations: 90,
    isPatent: true,
  },
  // Add more publications as needed
];

const PublicationsPage = () => {
  const [filter, setFilter] = useState({
    author: "",
    year: "",
    type: "all",
  });

  const filteredPublications = publicationsData.filter((pub) => {
    const matchesAuthor = filter.author
      ? pub.authors.toLowerCase().includes(filter.author.toLowerCase())
      : true;
    const matchesYear = filter.year
      ? new Date(pub.publicationDate).getFullYear() === parseInt(filter.year)
      : true;
    const matchesType =
      filter.type === "all" || (filter.type === "patent" && pub.isPatent);

    return matchesAuthor && matchesYear && matchesType;
  });

  const publicationYears = publicationsData.map((pub) =>
    new Date(pub.publicationDate).getFullYear()
  );

  const yearCounts = publicationYears.reduce((acc, year) => {
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const lineChartData = {
    labels: Object.keys(yearCounts),
    datasets: [
      {
        label: "Number of Publications",
        data: Object.values(yearCounts),
        borderColor: "#3b82f6", // Blue color
        borderWidth: 2,
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.2)", // Light blue background
      },
    ],
  };

  const topResearchers = {}; // Populate this with actual data for bar chart
  const barChartData = {
    labels: Object.keys(topResearchers),
    datasets: [
      {
        label: "Top Researchers",
        data: Object.values(topResearchers),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-r md:ml-80 from-indigo-50 via-gray-100 to-indigo-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-700 mb-6">
        Publications
      </h1>

      <div className="border border-gray-500 mb-6"></div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-lg p-4 mb-6 rounded-lg">
        <input
          type="text"
          placeholder="Filter by Author"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mr-4"
          value={filter.author}
          onChange={(e) => setFilter({ ...filter, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by Year"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mr-4"
          value={filter.year}
          onChange={(e) => setFilter({ ...filter, year: e.target.value })}
        />
        <select
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          value={filter.type}
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
        >
          <option value="all">All Types</option>
          <option value="patent">Patents</option>
          <option value="paper">Research Papers</option>
        </select>
      </div>

      {/* Publications List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((pub) => (
            <div key={pub.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-bold">{pub.title}</h2>
              <p className="text-gray-700">{pub.authors}</p>
              <p className="text-gray-500">{pub.publicationDate}</p>
              <p className="text-gray-500">{pub.journal}</p>
              <p className="text-gray-500">Citations: {pub.citations}</p>
              <a href={`download/${pub.id}`} className="text-indigo-600 hover:underline mt-4 flex items-center">
                <FaFileDownload className="mr-1" /> Download
              </a>
            </div>
          ))
        ) : (
          <p className="text-xl font-medium text-gray-500">No publications found.</p>
        )}
      </div>

      {/* Charts */}
      <div className="mt-6">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Publications Over the Years</h2>
        <Line data={lineChartData} options={{ responsive: true }} />

        <h2 className="text-3xl font-semibold mb-4 mt-6 text-gray-800">Top Performing Researchers</h2>
        <Bar data={barChartData} options={{ responsive: true }} />
      </div>

      <AddPublicationForm />
    </div>
  );
};

export default PublicationsPage;
