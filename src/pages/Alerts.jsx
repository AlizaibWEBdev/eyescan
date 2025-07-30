import React, { useState } from 'react';
import { Bell, BellPlus, Filter, ChevronDown, ChevronUp, X } from 'lucide-react';


const Alerts = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNetworks, setSelectedNetworks] = useState(['Ethereum', 'BNB', 'Solana', 'Base']);
  const [selectedChanges, setSelectedChanges] = useState(['increase', 'decrease']);
  const [alerts, setAlerts] = useState([
    { 
      id: 1, 
      token: 'ETH', 
      pair: 'ETH/USDC', 
      network: 'Ethereum', 
      change: '+42%', 
      direction: 'increase', 
      liquidity: '$12.4M → $17.6M',
      time: '5 min ago',
      isAlertSet: false
    },
    { 
      id: 2, 
      token: 'SOL', 
      pair: 'SOL/USDT', 
      network: 'Solana', 
      change: '-18%', 
      direction: 'decrease', 
      liquidity: '$8.2M → $6.7M',
      time: '12 min ago',
      isAlertSet: true
    },
    { 
      id: 3, 
      token: 'CAKE', 
      pair: 'CAKE/BNB', 
      network: 'BNB', 
      change: '+37%', 
      direction: 'increase', 
      liquidity: '$3.1M → $4.2M',
      time: '23 min ago',
      isAlertSet: false
    },
    { 
      id: 4, 
      token: 'BASE', 
      pair: 'BASE/ETH', 
      network: 'Base', 
      change: '-22%', 
      direction: 'decrease', 
      liquidity: '$1.8M → $1.4M',
      time: '34 min ago',
      isAlertSet: false
    },
    { 
      id: 5, 
      token: 'ARB', 
      pair: 'ARB/USDC', 
      network: 'Ethereum', 
      change: '+29%', 
      direction: 'increase', 
      liquidity: '$5.6M → $7.2M',
      time: '47 min ago',
      isAlertSet: false
    },
  ]);

  const networks = ['Ethereum', 'BNB', 'Solana', 'Base'];
  const changes = ['increase', 'decrease'];

  // Function to toggle alert for a token
  const toggleAlert = (alertId) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId ? { ...alert, isAlertSet: !alert.isAlertSet } : alert
    ));

  };

  // Function to toggle network selection
  const toggleNetwork = (network) => {
    setSelectedNetworks(prev =>
      prev.includes(network)
        ? prev.filter(n => n !== network)
        : [...prev, network]
    );
  };

  // Function to toggle change type selection
  const toggleChange = (change) => {
    setSelectedChanges(prev =>
      prev.includes(change)
        ? prev.filter(c => c !== change)
        : [...prev, change]
    );
  };

  // Filter alerts based on selections
  const filteredAlerts = alerts.filter(alert => 
    (activeTab === 'all' || activeTab === alert.direction) &&
    selectedNetworks.includes(alert.network) &&
    selectedChanges.includes(alert.direction)
  );

  return (
    <div className="liquidity-alerts-page">
      <div className="alerts-header">
        <h2>Liquidity Alerts</h2>
        <div className="header-actions">
          <button 
            className="filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            Filters
            {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="alerts-filters">
          <div className="filter-group">
            <h4>Networks</h4>
            <div className="filter-options">
              {networks.map(network => (
                <button
                  key={network}
                  className={`filter-option ${selectedNetworks.includes(network) ? 'active' : ''}`}
                  onClick={() => toggleNetwork(network)}
                >
                  {network}
                  {selectedNetworks.includes(network) && <X size={14} />}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h4>Change Type</h4>
            <div className="filter-options">
              {changes.map(change => (
                <button
                  key={change}
                  className={`filter-option ${selectedChanges.includes(change) ? 'active' : ''}`}
                  onClick={() => toggleChange(change)}
                >
                  {change}
                  {selectedChanges.includes(change) && <X size={14} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="alerts-tabs">
        <button
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Alerts
        </button>
        <button
          className={`tab-btn ${activeTab === 'increase' ? 'active' : ''}`}
          onClick={() => setActiveTab('increase')}
        >
          Increases
        </button>
        <button
          className={`tab-btn ${activeTab === 'decrease' ? 'active' : ''}`}
          onClick={() => setActiveTab('decrease')}
        >
          Decreases
        </button>
      </div>

      <div className="alerts-list">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map(alert => (
            <div key={alert.id} className="alert-card">
              <div className="alert-main-info">
                <div className="token-info">
                  <span className="token-symbol">{alert.token}</span>
                  <span className="token-pair">{alert.pair}</span>
                  <span className="token-network">{alert.network}</span>
                </div>
                <div className={`change-indicator ${alert.direction}`}>
                  {alert.change}
                </div>
              </div>

              <div className="alert-details">
                <div className="liquidity-change">
                  <span>Liquidity: </span>
                  <span>{alert.liquidity}</span>
                </div>
                <div className="time-ago">{alert.time}</div>
              </div>

              <div className="alert-actions">
                <button
                  className={`set-alert-btn ${alert.isAlertSet ? 'active' : ''}`}
                  onClick={() => toggleAlert(alert.id)}
                >
                  {alert.isAlertSet ? <Bell size={16} /> : <BellPlus size={16} />}
                  {alert.isAlertSet ? 'Alert Set' : 'Set Alert'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-alerts">
            <Bell size={48} className="no-alerts-icon" />
            <h3>No alerts match your filters</h3>
            <p>Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alerts;