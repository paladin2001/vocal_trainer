import React from 'react';
import './Home.css';

const Home = () => {
  // 샘플 데이터
  const recentActivities = [
    { id: 1, type: '발성연습', duration: '15분', date: '2024-01-15', score: 85 },
    { id: 2, type: '발음연습', duration: '20분', date: '2024-01-14', score: 78 },
    { id: 3, type: '따라읽기', duration: '25분', date: '2024-01-13', score: 92 },
    { id: 4, type: '자유발화', duration: '18분', date: '2024-01-12', score: 80 }
  ];

  const stats = {
    totalPracticeTime: '2시간 18분',
    weeklyGoal: '5시간',
    weeklyProgress: 45,
    totalSessions: 24,
    averageScore: 83
  };

  return (
    <div className="home-page">
      <h1 className="section-title">보컬 트레이너에 오신 것을 환영합니다! 🎤</h1>
      
      {/* 오늘의 목표 */}
      <div className="card today-goal">
        <h2 className="subtitle">오늘의 목표</h2>
        <div className="goal-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${stats.weeklyProgress}%` }}
            ></div>
          </div>
          <p className="goal-text">
            이번 주 목표: {stats.weeklyGoal} 중 {stats.totalPracticeTime} 완료
          </p>
        </div>
      </div>

      {/* 통계 요약 */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-value">{stats.totalPracticeTime}</div>
          <div className="stat-label">총 연습시간</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-value">{stats.averageScore}점</div>
          <div className="stat-label">평균 점수</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-value">{stats.totalSessions}</div>
          <div className="stat-label">총 연습횟수</div>
        </div>
      </div>

      {/* 최근 활동 */}
      <div className="card recent-activities">
        <h2 className="subtitle">최근 활동</h2>
        <div className="activities-list">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-info">
                <div className="activity-type">{activity.type}</div>
                <div className="activity-details">
                  <span className="activity-duration">{activity.duration}</span>
                  <span className="activity-date">{activity.date}</span>
                </div>
              </div>
              <div className="activity-score">
                <span className={`score-badge ${activity.score >= 80 ? 'high' : 'medium'}`}>
                  {activity.score}점
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 빠른 시작 */}
      <div className="card quick-start">
        <h2 className="subtitle">빠른 시작</h2>
        <div className="quick-start-buttons">
          <button className="quick-start-btn basic">
            <span className="btn-icon">🎵</span>
            <span className="btn-text">기본연습</span>
          </button>
          <button className="quick-start-btn advanced">
            <span className="btn-icon">⭐</span>
            <span className="btn-text">심화연습</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
