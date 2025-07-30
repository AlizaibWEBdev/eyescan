import { useState } from 'react';
import { Activity, AlertCircle, ArrowUpRight, BarChart2, Diamond, TrendingUp, Users,FishSymbol  } from 'lucide-react';

const Home = () => {
  const [activeNetwork, setActiveNetwork] = useState('all');

  // Placeholder data - replace with API calls later
  const liquidityAlerts = [
    { token: 'ETH', network: 'Ethereum', change: '+42%', direction: 'up', time: '5 min ago' },
    { token: 'SOL', network: 'Solana', change: '-18%', direction: 'down', time: '12 min ago' },
    { token: 'CAKE', network: 'BNB', change: '+37%', direction: 'up', time: '23 min ago' },
    { token: 'BASE', network: 'Base', change: '-22%', direction: 'down', time: '34 min ago' },
  ];

  const smartMoneyBuys = [
    { wallet: '0x8f12...3d4f', token: 'PEPE', amount: '$142K', performance: '+1243%', network: 'Ethereum' },
    { wallet: '0x7e23...9g12', token: 'WIF', amount: '$87K', performance: '+876%', network: 'Solana' },
    { wallet: '0x3a45...2d89', token: 'SHIB', amount: '$256K', performance: '+542%', network: 'Ethereum' },
  ];

  const whaleMovements = [
    { token: 'ETH', amount: '2,450 ETH', direction: 'to CEX', exchange: 'Binance', network: 'Ethereum' },
    { token: 'SOL', amount: '18,200 SOL', direction: 'from CEX', exchange: 'OKX', network: 'Solana' },
    { token: 'BNB', amount: '5,400 BNB', direction: 'to CEX', exchange: 'Bybit', network: 'BNB' },
  ];

  const hiddenGems = [
    { token: 'TIA', volumeChange: '+320%', priceChange: '+4%', mentions: '42', network: 'Ethereum' },
    { token: 'JUP', volumeChange: '+180%', priceChange: '-2%', mentions: '28', network: 'Solana' },
    { token: 'MANTA', volumeChange: '+420%', priceChange: '+8%', mentions: '15', network: 'BNB' },
  ];

  const socialAnalysis = [
    { token: 'BTC', sentiment: 'bullish', mentions: '1.2K', topInfluencer: '@CryptoGuru', network: 'all' },
    { token: 'ETH', sentiment: 'neutral', mentions: '856', topInfluencer: '@EtherMaster', network: 'Ethereum' },
    { token: 'SOL', sentiment: 'bullish', mentions: '723', topInfluencer: '@SolanaKing', network: 'Solana' },
  ];

  const networks = ['all', 'Ethereum', 'BNB', 'Solana', 'Base'];

  return (
    <div className="home-page">
      <div className="network-selector">
        {networks.map(network => (
          <button
            key={network}
            className={`network-btn ${activeNetwork === network ? 'active' : ''}`}
            onClick={() => setActiveNetwork(network)}
          >
            {network}
          </button>
        ))}
      </div>

      <div className="dashboard-grid">
        {/* Liquidity Alerts */}
        <div className="dashboard-card">
          <div className="card-header">
            <AlertCircle className="card-icon" />
            <h3>Liquidity Alerts</h3>
          </div>
          <div className="card-content">
            {liquidityAlerts
              .filter(alert => activeNetwork === 'all' || alert.network === activeNetwork)
              .map((alert, index) => (
                <div key={index} className="alert-item">
                  <div className="token-info">
                    <span className="token">{alert.token}</span>
                    <span className="network">{alert.network}</span>
                  </div>

                  <div className="time-and-change">
                    <div className={`change ${alert.direction}`}>
                    {alert.change}
                  </div>
                  <div className="time">{alert.time}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Smart Money Buys */}
        <div className="dashboard-card">
          <div className="card-header">
            <TrendingUp className="card-icon" />
            <h3>Smart Money Buys</h3>
          </div>
          <div className="card-content">
            {smartMoneyBuys
              .filter(buy => activeNetwork === 'all' || buy.network === activeNetwork)
              .map((buy, index) => (
                <div key={index} className="smart-money-item">
                  <div className="wallet-info">
                    <span className="wallet">{buy.wallet}</span>
                    <span className="token">{buy.token}</span>
                  </div>
                  <div className="amount">{buy.amount}</div>
                  <div className="performance">{buy.performance}</div>
                </div>
              ))}
          </div>
        </div>

        {/* Whale Movements */}
        <div className="dashboard-card">
          <div className="card-header">
            <FishSymbol className="card-icon" />
            <h3>Whale Movements</h3>
          </div>
          <div className="card-content">
            {whaleMovements
              .filter(move => activeNetwork === 'all' || move.network === activeNetwork)
              .map((move, index) => (
                <div key={index} className="whale-item">
                  <div className="move-info">
                    <span className="token">{move.token}</span>
                    <span className="amount">{move.amount}</span>
                  </div>
                  <div className={`direction ${move.direction.replace(' ', '-')}`}>
                    {move.direction} ({move.exchange})
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Hidden Gems */}
        <div className="dashboard-card">
          <div className="card-header">
            <Diamond className="card-icon" />
            <h3>Hidden Gems</h3>
          </div>
          <div className="card-content">
            {hiddenGems
              .filter(gem => activeNetwork === 'all' || gem.network === activeNetwork)
              .map((gem, index) => (
                <div key={index} className="gem-item">
                  <div className="gem-info">
                    <span className="token">{gem.token}</span>
                    <span className="volume">Volume: {gem.volumeChange}</span>
                  </div>
                  <div className="price">Price: {gem.priceChange}</div>
                  <div className="mentions">Mentions: {gem.mentions}</div>
                </div>
              ))}
          </div>
        </div>

        {/* Social Analysis */}
        <div className="dashboard-card wide-card">
          <div className="card-header">
            <Users className="card-icon" />
            <h3>Social Analysis</h3>
          </div>
          <div className="card-content">
            {socialAnalysis
              .filter(item => activeNetwork === 'all' || item.network === activeNetwork)
              .map((item, index) => (
                <div key={index} className="social-item">
                  <div className="token">{item.token}</div>
                  <div className={`sentiment ${item.sentiment}`}>
                    {item.sentiment}
                  </div>
                  <div className="mentions">Mentions: {item.mentions}</div>
                  <div className="influencer">
                    Top: {item.topInfluencer}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Market Overview */}
        <div className="dashboard-card wide-card">
          <div className="card-header">
            <BarChart2 className="card-icon" />
            <h3>Market Overview</h3>
          </div>
          <div className="card-content">
            <div className="market-metrics">
              <div className="metric">
                <span className="label">BTC Dominance</span>
                <span className="value">42.3%</span>
              </div>
              <div className="metric">
                <span className="label">Total Volume (24h)</span>
                <span className="value">$142B</span>
              </div>
              <div className="metric">
                <span className="label">Fear & Greed</span>
                <span className="value">68 (Greed)</span>
              </div>
            </div>
            <div className="network-distribution">
              <h4>Volume by Network</h4>
              <div className="distribution-bars">
                <div className="bar" style={{ '--width': '58%' }}>
                  <span>Ethereum</span>
                  <span>58%</span>
                </div>
                <div className="bar" style={{ '--width': '22%' }}>
                  <span>Solana</span>
                  <span>22%</span>
                </div>
                <div className="bar" style={{ '--width': '12%' }}>
                  <span>BNB</span>
                  <span>12%</span>
                </div>
                <div className="bar" style={{ '--width': '8%' }}>
                  <span>Base</span>
                  <span>8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;