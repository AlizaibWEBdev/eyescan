import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Alerts from './pages/Alerts';
import Smart from './pages/Smart';
import Whale from './pages/Whale';
import Social from './pages/Social';
import FullScreenLoader from './components/FullScreenLoader';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
      setIsLoading(false);
    }, 800);
  };

  const handleBackClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(-1);
      setIsLoading(false);
    }, 800);
  };

  const getPageTitle = () => {
    const path = location.pathname;
    switch(path) {
      case '/': return 'Home';
      case '/alerts': return 'Liquidity Alerts';
      case '/smart': return 'Smart Tools';
      case '/whale': return 'Whale Tracking';
      case '/social': return 'Social Feed';
      default: return '';
    }
  };

  return (
    <div className="app-container">
      <TopNavbar 
        pageTitle={getPageTitle()} 
        onBackClick={handleBackClick} 
      />
      
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/smart" element={<Smart />} />
            <Route path="/whale" element={<Whale />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </div>
      )}
      
      <BottomNavigation 
        currentPath={location.pathname} 
        onTabClick={handleTabClick} 
      />
    </div>
  );
}

export default App;