import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ResearchPage from './pages/Research';
import Sidebar from './components/Sidebar';
import InnovationMetrics from './pages/InnovationMetrics';
import PublicationsPage from './pages/PublicationsPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/innovation-metrics" element={<InnovationMetrics />} />
          <Route path="/publications" element={<PublicationsPage />} />
        </Routes>
    </>
  );
}

export default App;
