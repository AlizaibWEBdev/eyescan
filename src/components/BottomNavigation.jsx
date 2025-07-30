import { Home, Bell, Brain, FishSymbol , Users } from 'lucide-react';


const BottomNavigation = ({ currentPath, onTabClick }) => {
  return (
    <nav className="bottom-nav">
      <button 
        className={`nav-item ${currentPath === '/' ? 'active' : ''}`}
        onClick={() => onTabClick('/')}
      >
        <Home className="nav-icon" />
        <span className="nav-label">Home</span>
      </button>
      
      <button 
        className={`nav-item ${currentPath === '/alerts' ? 'active' : ''}`}
        onClick={() => onTabClick('/alerts')}
      >
        <Bell className="nav-icon" />
        <span className="nav-label">Liquidity Alerts</span>
      </button>
      
      <button 
        className={`nav-item ${currentPath === '/smart' ? 'active' : ''}`}
        onClick={() => onTabClick('/smart')}
      >
        <Brain className="nav-icon" />
        <span className="nav-label">Smart</span>
      </button>
      
      <button 
        className={`nav-item ${currentPath === '/whale' ? 'active' : ''}`}
        onClick={() => onTabClick('/whale')}
      >
        <FishSymbol className="nav-icon" />
        <span className="nav-label">Whale</span>
      </button>
      
      <button 
        className={`nav-item ${currentPath === '/social' ? 'active' : ''}`}
        onClick={() => onTabClick('/social')}
      >
        <Users className="nav-icon" />
        <span className="nav-label">Social</span>
      </button>
    </nav>
  );
};

export default BottomNavigation;