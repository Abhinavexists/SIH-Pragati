import React, { useState, useEffect } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaChartLine, FaBookOpen, FaFileAlt, FaMoneyBillWave, FaRocket, FaAward } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // For mobile sidebar
import { GoSidebarCollapse } from "react-icons/go"; // For collapse button

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile screen */}
      <div className="font-nunito flex items-center justify-between p-4 bg-white dark:bg-zinc-900 md:hidden">
        <div className="flex items-center">
          <button
            onClick={toggleMobileSidebar}
            className="text-gray-500 mr-3 text-2xl hover:text-gray-900 dark:hover:text-white"
          >
            {isMobileSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <span className="ml-3 text-2xl dark:text-white text-black">Pragati</span>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isMobileSidebarOpen && (
        <aside
          className="font-nunito fixed inset-0 z-50 flex flex-col w-64 bg-white dark:bg-zinc-900"
          aria-label="Sidebar"
        >
          <div className="flex items-center justify-between px-6 py-6">
            <span className="ml-3 text-2xl dark:text-white text-black">Pragati</span>
            <button
              onClick={toggleMobileSidebar}
              className="ml-4 text-gray-500 text-xl hover:text-gray-900 dark:hover:text-white"
            >
              <FaTimes />
            </button>
          </div>

          <ul className="font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <MdSpaceDashboard className="text-2xl mr-3" />
                <span className="text-lg">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/innovation-metrics"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <FaChartLine className="text-2xl mr-3" />
                <span className="text-lg">Innovation Metrics</span>
              </Link>
            </li>

            <li>
              <Link
                to="/research"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <FaBookOpen className="text-2xl mr-3" />
                <span className="text-lg">Research Projects</span>
              </Link>
            </li>

            <li>
              <Link
                to="/publications"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <FaFileAlt className="text-2xl mr-3" />
                <span className="text-lg">Publications</span>
              </Link>
            </li>

            <li>
              <Link
                to="/grants-funding"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <FaMoneyBillWave className="text-2xl mr-3" />
                <span className="text-lg">Grants & Funding</span>
              </Link>
            </li>

            <li>
              <Link
                to="/startups-incubations"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <FaRocket className="text-2xl mr-3" />
                <span className="text-lg">Startups & Incubations</span>
              </Link>
            </li>

            <li>
              <Link
                to="/recognition-awards"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <FaAward className="text-2xl mr-3" />
                <span className="text-lg">Recognition & Awards</span>
              </Link>
            </li>

            <li>
              <Link
                to="/settings"
                className="flex items-center py-3 px-6 text-gray-500 hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 hover:text-indigo-400"
              >
                <RiSettings4Fill className="text-2xl mr-3" />
                <span className="text-lg">Settings</span>
              </Link>
            </li>
          </ul>
        </aside>
      )}

      {/* Desktop Sidebar */}
      <aside
        id="default-sidebar"
        className={`hidden md:block font-nunito fixed top-0 left-0 z-40 h-screen transition-transform ${
          isOpen ? "w-80" : "w-30"
        } bg-gray-900`}
        aria-label="Sidebar"
      >
        <div className="h-full mt-5 overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="ml-3 text-2xl text-white">Pragati</span>
            <button onClick={toggleSidebar} className="ml-4 text-white text-xl">
              <GoSidebarCollapse />
            </button>
          </div>

          <ul className="font-medium">
            <li>
              <Link
                to="/"
                className={`flex items-center py-3 px-6 text-white hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 ${
                  isActiveLink("/") ? "bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 " : ""
                }`}
              >
                <MdSpaceDashboard className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Dashboard</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/innovation-metrics"
                className={`flex items-center py-3 px-6 text-white hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 ${
                  isActiveLink("/innovation-metrics") ? "bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 " : ""
                }`}
              >
                <FaChartLine className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Innovation Metrics</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/research"
                className={`flex items-center py-3 px-6 text-white hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 ${
                  isActiveLink("/research") ? "bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 " : ""
                }`}
              >
                <FaBookOpen className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Research Projects</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/publications"
                className={`flex items-center py-3 px-6 text-white hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 ${
                  isActiveLink("/publications") ? "bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 " : ""
                }`}
              >
                <FaFileAlt className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Publications</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/grants-funding"
                className={`flex items-center py-3 px-6 text-white hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 ${
                  isActiveLink("/grants-funding") ? "bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 " : ""
                }`}
              >
                <FaMoneyBillWave className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Grants & Funding</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/startups-incubations"
                className={`flex items-center py-3 px-6 text-white hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 ${
                  isActiveLink("/startups-incubations") ? "bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 " : ""
                }`}
              >
                <FaRocket className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Startups & Incubations</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/recognition-awards"
                className={`flex items-center py-3 px-6 text-white hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 ${
                  isActiveLink("/recognition-awards") ? "bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 " : ""
                }`}
              >
                <FaAward className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Recognition & Awards</span>}
              </Link>
            </li>

            <li>
              <Link
                to="/settings"
                className={`flex items-center py-3 px-6 text-white hover:bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 ${
                  isActiveLink("/settings") ? "bg-gradient-to-r from-indigo-300/30 to-indigo-100/0 " : ""
                }`}
              >
                <RiSettings4Fill className="text-2xl mr-3" />
                {isOpen && <span className="text-lg">Settings</span>}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
