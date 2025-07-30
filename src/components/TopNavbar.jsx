
import { ArrowLeft, User, Bell, Settings } from 'lucide-react';

const TopNavbar = ({ pageTitle, onBackClick }) => {
  return (
 <>
    <header className="top-navbar">
      <div className="navbar-left">
        <button className="nav-button" onClick={onBackClick}>
          <ArrowLeft className="nav-icon" />
        </button>
        <h1 className="page-title">{pageTitle}</h1>
      </div>
      
      <div className="navbar-right">
        <button className="nav-button">
          <Bell className="nav-icon" />
        </button>
        <button className="nav-button">
          <Settings className="nav-icon" />
        </button>
        <button className="nav-button user-profile">
          <User className="nav-icon" />
        </button>
      </div>
    </header>
    <br />
    <br />
    <br />
 </>
  );
};

export default TopNavbar;