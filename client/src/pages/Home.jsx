import Navbar from "../components/Navbar";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { FaClipboardCheck, FaCalendarAlt } from 'react-icons/fa'; // Importing icons

// Register all necessary components from Chart.js
Chart.register(...registerables);

export default function Home() {
  // Sample data for metrics (replace with actual data as needed)
  const metricsData = {
    publications: [5, 10, 7, 15], // Sample data for last 4 years
    patents: [2, 3, 5, 4], // Sample data for last 4 years
    impactScores: [89.5, 90, 88, 92], // Sample data for last 4 years
    grantsReceived: 200000, // Total grants received
    totalGrants: 300000, // Total potential grants
  };

  // Chart data for publications over the years
  const publicationsChartData = {
    labels: ['2021', '2022', '2023', '2024'], // Years
    datasets: [
      {
        label: 'Publications',
        data: metricsData.publications,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Chart data for patents over the years
  const patentsChartData = {
    labels: ['2021', '2022', '2023', '2024'], // Years
    datasets: [
      {
        label: 'Patents',
        data: metricsData.patents,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  // Chart data for impact scores over the years
  const impactScoresChartData = {
    labels: ['2021', '2022', '2023', '2024'], // Years
    datasets: [
      {
        label: 'Impact Score',
        data: metricsData.impactScores,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  // Calculate grant progress percentage
  const grantProgress = (metricsData.grantsReceived / metricsData.totalGrants) * 100;

  // Recent activities data (example data)
  const recentActivities = [
    { id: 1, activity: "Published paper on AI Ethics", date: "2024-09-15" },
    { id: 2, activity: "Filed patent for a new algorithm", date: "2024-09-10" },
    { id: 3, activity: "Received funding from XYZ grant", date: "2024-08-30" },
  ];

  // Upcoming events data (example data)
  const upcomingEvents = [
    { id: 1, event: "AI Research Conference 2024", date: "2024-10-05" },
    { id: 2, event: "Grant Submission Deadline", date: "2024-11-01" },
    { id: 3, event: "Webinar on Research Impact", date: "2024-11-15" },
  ];

  return (
    <div className="font-nunito md:ml-80 bg-gradient-to-r from-indigo-300 to-indigo-200 min-h-screen">
      <Navbar />
      <section className="py-16">
        <div className="max-w-screen-xl px-8 mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 mb-8">
            <h1 className="text-4xl text-blue-800 font-bold mb-4">
              Welcome,
              <br />
              Ritu Gupta
            </h1>
            <p className="mb-6 text-lg text-gray-800">
              It’s great to have you back! Here’s a quick look at your recent activities and achievements:
            </p>

            {/* Quick Stats */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Your Recent Metrics</h2>
              <ul className="list-disc list-inside text-gray-800 mb-4">
                <li><strong>Publications this year:</strong> {metricsData.publications[2]}</li>
                <li><strong>Patents Filed:</strong> {metricsData.patents[2]}</li>
                <li><strong>Grants Received:</strong> ${metricsData.grantsReceived.toLocaleString()} out of ${metricsData.totalGrants.toLocaleString()}</li>
                <li><strong>Research Impact Score:</strong> {metricsData.impactScores[2]}</li>
              </ul>
              <div>
                <h3 className="font-semibold mb-2">Grant Utilization:</h3>
                <div className="bg-gray-300 rounded-full h-2 mb-1">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${grantProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{grantProgress.toFixed(2)}% utilized</p>
              </div>
            </div>

            {/* Recent Activities Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
              <h2 className="flex items-center text-lg font-semibold mb-4">
                <FaClipboardCheck className="mr-2 text-indigo-600" /> Recent Activities
              </h2>
              <ul className="space-y-2">
                {recentActivities.map(activity => (
                  <li key={activity.id} className="border-b border-gray-300 pb-2">
                    <strong>{activity.activity}</strong> <span className="text-gray-500">on {activity.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upcoming Events Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
              <h2 className="flex items-center text-lg font-semibold mb-4">
                <FaCalendarAlt className="mr-2 text-indigo-600" /> Upcoming Events
              </h2>
              <ul className="space-y-2">
                {upcomingEvents.map(event => (
                  <li key={event.id} className="border-b border-gray-300 pb-2">
                    <strong>{event.event}</strong> <span className="text-gray-500">on {event.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 lg:flex lg:flex-col justify-center">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-lg shadow-lg text-center text-white mb-6">
              <h1 className="text-3xl font-bold">Your Metrics</h1>
              <p className="mt-2">Stay updated with your progress</p>
            </div>

            {/* Metrics Charts */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-md font-bold">Publications</h3>
                <Bar data={publicationsChartData} options={{ responsive: true }} />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-md font-bold">Patents</h3>
                <Bar data={patentsChartData} options={{ responsive: true }} />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-md font-bold">Impact Score</h3>
                <Bar data={impactScoresChartData} options={{ responsive: true }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
