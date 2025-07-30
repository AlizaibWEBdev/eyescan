import React, { useState } from 'react';
import { Users, MessageSquare, Activity, TrendingUp, AlertCircle } from 'lucide-react';

const Social = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');

  // Placeholder data - replace with API calls later
  const socialMentions = [
    { 
      token: 'BTC', 
      sentiment: 'bullish', 
      mentions: '1.2K', 
      change: '+42%', 
      topInfluencer: '@CryptoGuru', 
      network: 'all',
      recentPost: 'Bitcoin ETF inflows continue to break records'
    },
    { 
      token: 'ETH', 
      sentiment: 'neutral', 
      mentions: '856', 
      change: '+18%', 
      topInfluencer: '@EtherMaster', 
      network: 'Ethereum',
      recentPost: 'Ethereum L2 scaling solutions gaining traction'
    },
    { 
      token: 'SOL', 
      sentiment: 'bullish', 
      mentions: '723', 
      change: '+65%', 
      topInfluencer: '@SolanaKing', 
      network: 'Solana',
      recentPost: 'Solana network performance improves significantly'
    },
    { 
      token: 'XRP', 
      sentiment: 'bearish', 
      mentions: '512', 
      change: '-12%', 
      topInfluencer: '@RippleX', 
      network: 'all',
      recentPost: 'SEC case continues to weigh on XRP sentiment'
    },
    { 
      token: 'ADA', 
      sentiment: 'neutral', 
      mentions: '489', 
      change: '+5%', 
      topInfluencer: '@CardanoChat', 
      network: 'all',
      recentPost: 'Cardano development updates expected next week'
    },
  ];

  const influencers = [
    {
      username: '@CryptoGuru',
      followers: '1.2M',
      engagement: '8.7%',
      sentiment: 'bullish',
      recentActivity: 'Posted about BTC ETF inflows'
    },
    {
      username: '@EtherMaster',
      followers: '856K',
      engagement: '7.2%',
      sentiment: 'neutral',
      recentActivity: 'Analyzed Ethereum L2 solutions'
    },
    {
      username: '@SolanaKing',
      followers: '723K',
      engagement: '9.1%',
      sentiment: 'bullish',
      recentActivity: 'Highlighted Solana network improvements'
    }
  ];

  const trendingTopics = [
    {
      topic: '#BitcoinETF',
      mentions: '42K',
      change: '+320%',
      sentiment: 'bullish'
    },
    {
      topic: '#EthereumScaling',
      mentions: '28K',
      change: '+180%',
      sentiment: 'neutral'
    },
    {
      topic: '#SolanaSpeed',
      mentions: '15K',
      change: '+420%',
      sentiment: 'bullish'
    }
  ];

  const networks = ['all', 'Ethereum', 'Solana', 'BNB', 'Base'];

  return (
    <div className="social-page">
      <div className="social-header">
        <h2>Social Analysis</h2>
        <div className="social-header-actions">
          <button className="social-filter-btn">
            <MessageSquare size={16} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="social-filters">
        <div className="social-filter-group">
          <h4>Networks</h4>
          <div className="social-filter-options">
            {networks.map(network => (
              <button
                key={network}
                className={`social-filter-option ${activeFilter === network ? 'active' : ''}`}
                onClick={() => setActiveFilter(network)}
              >
                {network}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="social-tabs">
        <button 
          className={`social-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Activity
        </button>
        <button 
          className={`social-tab-btn ${activeTab === 'mentions' ? 'active' : ''}`}
          onClick={() => setActiveTab('mentions')}
        >
          Token Mentions
        </button>
        <button 
          className={`social-tab-btn ${activeTab === 'influencers' ? 'active' : ''}`}
          onClick={() => setActiveTab('influencers')}
        >
          Influencers
        </button>
        <button 
          className={`social-tab-btn ${activeTab === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveTab('trending')}
        >
          Trending Topics
        </button>
      </div>

      {(activeTab === 'all' || activeTab === 'mentions') && (
        <div className="social-list">
          <h3 className="social-section-title">
            <Users size={18} />
            <span>Token Mentions</span>
          </h3>
          {socialMentions
            .filter(item => activeFilter === 'all' || item.network === activeFilter)
            .map((item, index) => (
              <div key={index} className="social-card">
                <div className="social-main-info">
                  <div className="social-token-info">
                    <span className="social-token-symbol">{item.token}</span>
                    <span className={`social-sentiment ${item.sentiment}`}>
                      {item.sentiment}
                    </span>
                  </div>
                  <div className="social-mentions">
                    <span className="social-mentions-count">{item.mentions}</span>
                    <span className={`social-change ${item.change.startsWith('+') ? 'up' : 'down'}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
                <div className="social-details">
                  <div className="social-influencer">
                    <span className="social-label">Top Influencer:</span>
                    <span>{item.topInfluencer}</span>
                  </div>
                  <div className="social-post">
                    <span className="social-label">Recent Post:</span>
                    <span>{item.recentPost}</span>
                  </div>
                </div>
                <div className="social-actions">
                  <button className="social-track-btn">
                    Track Mentions
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {(activeTab === 'all' || activeTab === 'influencers') && (
        <div className="social-list">
          <h3 className="social-section-title">
            <Activity size={18} />
            <span>Influencer Activity</span>
          </h3>
          {influencers
            .filter(influencer => activeFilter === 'all' || influencer.sentiment === activeFilter)
            .map((influencer, index) => (
              <div key={index} className="social-card">
                <div className="social-main-info">
                  <div className="social-influencer-info">
                    <span className="social-influencer-username">{influencer.username}</span>
                    <span className={`social-sentiment ${influencer.sentiment}`}>
                      {influencer.sentiment}
                    </span>
                  </div>
                  <div className="social-stats">
                    <span className="social-followers">{influencer.followers} followers</span>
                    <span className="social-engagement">Engagement: {influencer.engagement}</span>
                  </div>
                </div>
                <div className="social-details">
                  <div className="social-activity">
                    <span className="social-label">Recent Activity:</span>
                    <span>{influencer.recentActivity}</span>
                  </div>
                </div>
                <div className="social-actions">
                  <button className="social-track-btn">
                    Track Influencer
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {(activeTab === 'all' || activeTab === 'trending') && (
        <div className="social-list">
          <h3 className="social-section-title">
            <TrendingUp size={18} />
            <span>Trending Topics</span>
          </h3>
          {trendingTopics
            .filter(topic => activeFilter === 'all' || topic.sentiment === activeFilter)
            .map((topic, index) => (
              <div key={index} className="social-card">
                <div className="social-main-info">
                  <div className="social-topic-info">
                    <span className="social-topic">{topic.topic}</span>
                    <span className={`social-sentiment ${topic.sentiment}`}>
                      {topic.sentiment}
                    </span>
                  </div>
                  <div className="social-mentions">
                    <span className="social-mentions-count">{topic.mentions}</span>
                    <span className="social-change up">{topic.change}</span>
                  </div>
                </div>
                <div className="social-actions">
                  <button className="social-track-btn">
                    Track Topic
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {socialMentions.filter(item => activeFilter === 'all' || item.network === activeFilter).length === 0 && (
        <div className="social-no-data">
          <AlertCircle size={48} className="social-no-data-icon" />
          <h3>No social data found</h3>
          <p>Try adjusting your filters or check back later</p>
        </div>
      )}
    </div>
  );
};

export default Social;