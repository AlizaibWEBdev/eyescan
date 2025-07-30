import React, { useState } from 'react';
import { Wallet, ArrowUpRight, TrendingUp, Filter, ChevronDown, ChevronUp, X, Copy } from 'lucide-react';

const Smart = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNetworks, setSelectedNetworks] = useState(['Ethereum', 'BNB', 'Solana', 'Base']);
  const [selectedTimeframes, setSelectedTimeframes] = useState(['1h', '24h', '7d']);

  const [smartBuys, setSmartBuys] = useState([
    { 
      id: 1,
      wallet: '0x8f12...3d4f',
      token: 'PEPE',
      amount: '$142,850',
      performance: '+1243%',
      network: 'Ethereum',
      timeframe: '24h',
      txHash: '0x4a5b...7c2d',
      isTracked: true
    },
    { 
      id: 2,
      wallet: '0x7e23...9g12',
      token: 'WIF',
      amount: '$87,420',
      performance: '+876%',
      network: 'Solana',
      timeframe: '1h',
      txHash: '5Qx8...9pZ3',
      isTracked: false
    },
    { 
      id: 3,
      wallet: '0x3a45...2d89',
      token: 'SHIB',
      amount: '$256,100',
      performance: '+542%',
      network: 'Ethereum',
      timeframe: '7d',
      txHash: '0x9d3f...1k5m',
      isTracked: false
    },
    { 
      id: 4,
      wallet: '0x6b78...4c67',
      token: 'BONK',
      amount: '$68,950',
      performance: '+320%',
      network: 'Solana',
      timeframe: '24h',
      txHash: '3Rt9...2qW4',
      isTracked: true
    },
    { 
      id: 5,
      wallet: '0x2d9f...7h34',
      token: 'LDO',
      amount: '$189,300',
      performance: '+765%',
      network: 'Ethereum',
      timeframe: '7d',
      txHash: '0x5k9d...3pQ7',
      isTracked: false
    },
  ]);

  const networks = ['Ethereum', 'BNB', 'Solana', 'Base'];
  const timeframes = ['1h', '24h', '7d'];

  // Toggle wallet tracking
  const toggleTracking = (buyId) => {
    setSmartBuys(smartBuys.map(buy => 
      buy.id === buyId 
        ? { ...buy, isTracked: !buy.isTracked } 
        : buy
    ));
    // Here you would call your actual API
    // trackWallet(userId, buyId);
  };

  // Toggle network selection
  const toggleNetwork = (network) => {
    setSelectedNetworks(prev =>
      prev.includes(network)
        ? prev.filter(n => n !== network)
        : [...prev, network]
    );
  };

  // Toggle timeframe selection
  const toggleTimeframe = (timeframe) => {
    setSelectedTimeframes(prev =>
      prev.includes(timeframe)
        ? prev.filter(t => t !== timeframe)
        : [...prev, timeframe]
    );
  };

  // Copy wallet address to clipboard
  const copyAddress = (address) => {
    navigator.clipboard.writeText(address);
    // You might want to show a toast notification here
  };

  // Filter smart buys based on selections
  const filteredBuys = smartBuys.filter(buy => 
    (activeTab === 'all' || activeTab === buy.timeframe) &&
    selectedNetworks.includes(buy.network) &&
    selectedTimeframes.includes(buy.timeframe)
  );

  return (
    <div className="smart-money-page">
      <div className="smart-header">
        <h2>Smart Money Tracker</h2>
        <div className="header-actions">
          <button 
            className="smart-filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            Filters
            {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="smart-filters">
          <div className="smart-filter-group">
            <h4>Networks</h4>
            <div className="smart-filter-options">
              {networks.map(network => (
                <button
                  key={network}
                  className={`smart-filter-option ${selectedNetworks.includes(network) ? 'active' : ''}`}
                  onClick={() => toggleNetwork(network)}
                >
                  {network}
                  {selectedNetworks.includes(network) && <X size={14} />}
                </button>
              ))}
            </div>
          </div>

          <div className="smart-filter-group">
            <h4>Timeframe</h4>
            <div className="smart-filter-options">
              {timeframes.map(timeframe => (
                <button
                  key={timeframe}
                  className={`smart-filter-option ${selectedTimeframes.includes(timeframe) ? 'active' : ''}`}
                  onClick={() => toggleTimeframe(timeframe)}
                >
                  {timeframe}
                  {selectedTimeframes.includes(timeframe) && <X size={14} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="smart-tabs">
        <button
          className={`smart-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Activity
        </button>
        <button
          className={`smart-tab-btn ${activeTab === '1h' ? 'active' : ''}`}
          onClick={() => setActiveTab('1h')}
        >
          Last Hour
        </button>
        <button
          className={`smart-tab-btn ${activeTab === '24h' ? 'active' : ''}`}
          onClick={() => setActiveTab('24h')}
        >
          Last 24h
        </button>
        <button
          className={`smart-tab-btn ${activeTab === '7d' ? 'active' : ''}`}
          onClick={() => setActiveTab('7d')}
        >
          Last 7 Days
        </button>
      </div>

      <div className="smart-money-list">
        {filteredBuys.length > 0 ? (
          filteredBuys.map(buy => (
            <div key={buy.id} className="smart-money-card">
              <div className="smart-money-main">
                <div className="wallet-info">
                  <Wallet size={20} className="wallet-icon" />
                  <div>
                    <div className="wallet-address">
                      {buy.wallet}
                      <button 
                        className="copy-btn"
                        onClick={() => copyAddress(buy.wallet)}
                        title="Copy address"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                    <div className="tx-hash">
                      <a 
                        href={`https://etherscan.io/tx/${buy.txHash}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View transaction <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="token-details">
                  <span className="token-name">{buy.token}</span>
                  <span className="token-amount">{buy.amount}</span>
                </div>
              </div>

              <div className="smart-money-stats">
                <div className="network-badge">{buy.network}</div>
                <div className="timeframe-badge">{buy.timeframe}</div>
                <div className="performance-badge">
                  <TrendingUp size={14} />
                  {buy.performance}
                </div>
              </div>

              <div className="smart-money-actions">
                <button
                  className={`track-btn ${buy.isTracked ? 'active' : ''}`}
                  onClick={() => toggleTracking(buy.id)}
                >
                  {buy.isTracked ? 'Tracking' : 'Track Wallet'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-smart-money">
            <Wallet size={48} className="no-smart-money-icon" />
            <h3>No smart money activity found</h3>
            <p>Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Smart;