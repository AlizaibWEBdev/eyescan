import React, { useState } from 'react';
import { ArrowDown, ArrowUp, ExternalLink, Filter, ChevronDown, ChevronUp, X, Activity } from 'lucide-react';

// Mock data for whale movements
const generateMockChartData = () => {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
};

const Whale = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNetworks, setSelectedNetworks] = useState(['Ethereum', 'BNB', 'Solana', 'Base']);
  const [selectedDirections, setSelectedDirections] = useState(['in', 'out']);

  const [whaleMovements, setWhaleMovements] = useState([
    {
      id: 1,
      token: 'ETH',
      amount: '2,450 ETH',
      value: '$8.2M',
      direction: 'out',
      exchange: 'Binance',
      network: 'Ethereum',
      time: '15 min ago',
      wallet: '0x8f12...3d4f',
      chartData: generateMockChartData(),
      isTracked: false
    },
    {
      id: 2,
      token: 'SOL',
      amount: '18,200 SOL',
      value: '$2.7M',
      direction: 'in',
      exchange: 'OKX',
      network: 'Solana',
      time: '32 min ago',
      wallet: '0x7e23...9g12',
      chartData: generateMockChartData(),
      isTracked: true
    },
    {
      id: 3,
      token: 'BNB',
      amount: '5,400 BNB',
      value: '$1.6M',
      direction: 'out',
      exchange: 'Bybit',
      network: 'BNB',
      time: '47 min ago',
      wallet: '0x3a45...2d89',
      chartData: generateMockChartData(),
      isTracked: false
    },
    {
      id: 4,
      token: 'BTC',
      amount: '42 BTC',
      value: '$2.8M',
      direction: 'in',
      exchange: 'Coinbase',
      network: 'Ethereum',
      time: '1 hour ago',
      wallet: '0x6b78...4c67',
      chartData: generateMockChartData(),
      isTracked: false
    },
    {
      id: 5,
      token: 'ARB',
      amount: '1.2M ARB',
      value: '$1.1M',
      direction: 'out',
      exchange: 'KuCoin',
      network: 'Ethereum',
      time: '2 hours ago',
      wallet: '0x2d9f...7h34',
      chartData: generateMockChartData(),
      isTracked: true
    },
  ]);

  const networks = ['Ethereum', 'BNB', 'Solana', 'Base'];
  const directions = ['in', 'out'];

  // Toggle wallet tracking
  const toggleTracking = (movementId) => {
    setWhaleMovements(whaleMovements.map(movement => 
      movement.id === movementId 
        ? { ...movement, isTracked: !movement.isTracked } 
        : movement
    ));
    // Here you would call your actual API
    // trackWhale(userId, movementId);
  };

  // Toggle network selection
  const toggleNetwork = (network) => {
    setSelectedNetworks(prev =>
      prev.includes(network)
        ? prev.filter(n => n !== network)
        : [...prev, network]
    );
  };

  // Toggle direction selection
  const toggleDirection = (direction) => {
    setSelectedDirections(prev =>
      prev.includes(direction)
        ? prev.filter(d => d !== direction)
        : [...prev, direction]
    );
  };

  // Filter whale movements based on selections
  const filteredMovements = whaleMovements.filter(movement => 
    (activeTab === 'all' || activeTab === movement.direction) &&
    selectedNetworks.includes(movement.network) &&
    selectedDirections.includes(movement.direction)
  );

  return (
    <div className="whale-page">
      <div className="whale-header">
        <h2>Whale Movements Tracker</h2>
        <div className="whale-header-actions">
          <button 
            className="whale-filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            Filters
            {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="whale-filters">
          <div className="whale-filter-group">
            <h4>Networks</h4>
            <div className="whale-filter-options">
              {networks.map(network => (
                <button
                  key={network}
                  className={`whale-filter-option ${selectedNetworks.includes(network) ? 'active' : ''}`}
                  onClick={() => toggleNetwork(network)}
                >
                  {network}
                  {selectedNetworks.includes(network) && <X size={14} />}
                </button>
              ))}
            </div>
          </div>

          <div className="whale-filter-group">
            <h4>Direction</h4>
            <div className="whale-filter-options">
              {directions.map(direction => (
                <button
                  key={direction}
                  className={`whale-filter-option ${selectedDirections.includes(direction) ? 'active' : ''}`}
                  onClick={() => toggleDirection(direction)}
                >
                  {direction === 'in' ? 'CEX Inflow' : 'CEX Outflow'}
                  {selectedDirections.includes(direction) && <X size={14} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="whale-tabs">
        <button
          className={`whale-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Movements
        </button>
        <button
          className={`whale-tab-btn ${activeTab === 'in' ? 'active' : ''}`}
          onClick={() => setActiveTab('in')}
        >
          CEX Inflows
        </button>
        <button
          className={`whale-tab-btn ${activeTab === 'out' ? 'active' : ''}`}
          onClick={() => setActiveTab('out')}
        >
          CEX Outflows
        </button>
      </div>

      <div className="whale-movements-list">
        {filteredMovements.length > 0 ? (
          filteredMovements.map(movement => (
            <div key={movement.id} className="whale-movement-card">
              <div className="whale-movement-main">
                <div className="whale-token-info">
                  <div className="whale-token-symbol">{movement.token}</div>
                  <div className="whale-movement-direction">
                    {movement.direction === 'in' ? (
                      <>
                        <ArrowDown className="whale-direction-icon in" />
                        <span>From {movement.exchange}</span>
                      </>
                    ) : (
                      <>
                        <ArrowUp className="whale-direction-icon out" />
                        <span>To {movement.exchange}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="whale-amount-info">
                  <div className="whale-amount">{movement.amount}</div>
                  <div className="whale-value">{movement.value}</div>
                </div>
              </div>

              <div className="whale-movement-details">
                <div className="whale-detail">
                  <span className="whale-detail-label">Network:</span>
                  <span className="whale-detail-value">{movement.network}</span>
                </div>
                <div className="whale-detail">
                  <span className="whale-detail-label">Wallet:</span>
                  <span className="whale-detail-value">{movement.wallet}</span>
                </div>
                <div className="whale-detail">
                  <span className="whale-detail-label">Time:</span>
                  <span className="whale-detail-value">{movement.time}</span>
                </div>
              </div>

              <div className="whale-chart-container">
                <div className="whale-chart">
                  {movement.chartData.map((value, index) => (
                    <div 
                      key={index}
                      className="whale-chart-bar"
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
                <div className="whale-chart-labels">
                  <span>7d</span>
                  <span>6d</span>
                  <span>5d</span>
                  <span>4d</span>
                  <span>3d</span>
                  <span>2d</span>
                  <span>1d</span>
                </div>
              </div>

              <div className="whale-movement-actions">
                <button
                  className={`whale-track-btn ${movement.isTracked ? 'active' : ''}`}
                  onClick={() => toggleTracking(movement.id)}
                >
                  <Activity size={16} />
                  {movement.isTracked ? 'Tracking' : 'Track Whale'}
                </button>
                <a 
                  href={`https://etherscan.io/address/${movement.wallet}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whale-view-btn"
                >
                  <ExternalLink size={16} />
                  View Wallet
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="whale-no-movements">
            <Activity size={48} className="whale-no-movements-icon" />
            <h3>No whale movements found</h3>
            <p>Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Whale;