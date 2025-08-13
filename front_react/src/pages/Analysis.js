import React, { useState } from 'react';
import './Analysis.css';

const Analysis = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 샘플 데이터
  const analysisData = {
    week: {
      totalTime: '8시간 30분',
      sessions: 12,
      averageScore: 82,
      improvement: '+5%',
      topExercise: '발성연습',
      weakArea: '억양연습'
    },
    month: {
      totalTime: '32시간 15분',
      sessions: 48,
      averageScore: 79,
      improvement: '+12%',
      topExercise: '따라읽기',
      weakArea: '속도연습'
    }
  };

  const categoryData = {
    all: [
      { name: '발성연습', score: 85, time: '2시간 30분', sessions: 8 },
      { name: '발음연습', score: 78, time: '2시간 15분', sessions: 7 },
      { name: '속도연습', score: 72, time: '1시간 45분', sessions: 6 },
      { name: '억양연습', score: 68, time: '1시간 20분', sessions: 5 },
      { name: '따라읽기', score: 88, time: '3시간 10분', sessions: 10 },
      { name: '자유발화', score: 75, time: '2시간 20분', sessions: 8 }
    ],
    basic: [
      { name: '발성연습', score: 85, time: '2시간 30분', sessions: 8 },
      { name: '발음연습', score: 78, time: '2시간 15분', sessions: 7 },
      { name: '속도연습', score: 72, time: '1시간 45분', sessions: 6 },
      { name: '억양연습', score: 68, time: '1시간 20분', sessions: 5 }
    ],
    advanced: [
      { name: '따라읽기', score: 88, time: '3시간 10분', sessions: 10 },
      { name: '자유발화', score: 75, time: '2시간 20분', sessions: 8 }
    ]
  };

  const currentData = analysisData[selectedPeriod];
  const currentCategoryData = categoryData[selectedCategory];

  const getScoreColor = (score) => {
    if (score >= 80) return '#27ae60';
    if (score >= 70) return '#f39c12';
    return '#e74c3c';
  };

  const getScoreLevel = (score) => {
    if (score >= 80) return '우수';
    if (score >= 70) return '양호';
    return '개선필요';
  };

  return (
    <div className="analysis-page">
      <h1 className="section-title">분석 📊</h1>
      <p className="page-description">
        연습 결과를 분석하고 개선점을 파악해보세요.
      </p>

      {/* 기간 선택 */}
      <div className="card period-selector">
        <h2 className="subtitle">분석 기간</h2>
        <div className="period-buttons">
          <button
            className={`period-btn ${selectedPeriod === 'week' ? 'active' : ''}`}
            onClick={() => setSelectedPeriod('week')}
          >
            이번 주
          </button>
          <button
            className={`period-btn ${selectedPeriod === 'month' ? 'active' : ''}`}
            onClick={() => setSelectedPeriod('month')}
          >
            이번 달
          </button>
        </div>
      </div>

      {/* 전체 요약 */}
      <div className="card summary-overview">
        <h2 className="subtitle">전체 요약</h2>
        <div className="summary-grid">
          <div className="summary-item">
            <div className="summary-icon">⏱️</div>
            <div className="summary-content">
              <div className="summary-value">{currentData.totalTime}</div>
              <div className="summary-label">총 연습시간</div>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-icon">🎯</div>
            <div className="summary-content">
              <div className="summary-value">{currentData.sessions}</div>
              <div className="summary-label">연습 횟수</div>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-icon">📈</div>
            <div className="summary-content">
              <div className="summary-value">{currentData.averageScore}점</div>
              <div className="summary-label">평균 점수</div>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-icon">🚀</div>
            <div className="summary-content">
              <div className="summary-value">{currentData.improvement}</div>
              <div className="summary-label">개선도</div>
            </div>
          </div>
        </div>
      </div>

      {/* 카테고리별 분석 */}
      <div className="card category-analysis">
        <h2 className="subtitle">카테고리별 분석</h2>
        <div className="category-tabs">
          <button
            className={`category-tab ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            전체
          </button>
          <button
            className={`category-tab ${selectedCategory === 'basic' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('basic')}
          >
            기본연습
          </button>
          <button
            className={`category-tab ${selectedCategory === 'advanced' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('advanced')}
          >
            심화연습
          </button>
        </div>
        
        <div className="analysis-table">
          <div className="table-header">
            <div className="header-cell">연습 종류</div>
            <div className="header-cell">점수</div>
            <div className="header-cell">연습시간</div>
            <div className="header-cell">횟수</div>
          </div>
          {currentCategoryData.map((item, index) => (
            <div key={index} className="table-row">
              <div className="table-cell exercise-name">{item.name}</div>
              <div className="table-cell">
                <div className="score-display">
                  <span 
                    className="score-value"
                    style={{ color: getScoreColor(item.score) }}
                  >
                    {item.score}점
                  </span>
                  <span className="score-level">{getScoreLevel(item.score)}</span>
                </div>
              </div>
              <div className="table-cell">{item.time}</div>
              <div className="table-cell">{item.sessions}회</div>
            </div>
          ))}
        </div>
      </div>

      {/* 개선 제안 */}
      <div className="card improvement-suggestions">
        <h2 className="subtitle">💡 개선 제안</h2>
        <div className="suggestions-content">
          <div className="suggestion-item">
            <div className="suggestion-icon">🏆</div>
            <div className="suggestion-text">
              <strong>가장 잘하는 연습:</strong> {currentData.topExercise}
            </div>
          </div>
          <div className="suggestion-item">
            <div className="suggestion-icon">📚</div>
            <div className="suggestion-text">
              <strong>개선이 필요한 연습:</strong> {currentData.weakArea}
            </div>
          </div>
          <div className="suggestion-item">
            <div className="suggestion-icon">🎯</div>
            <div className="suggestion-text">
              <strong>권장사항:</strong> {currentData.weakArea} 연습을 더 자주 해보세요
            </div>
          </div>
        </div>
      </div>

      {/* 진행 그래프 */}
      <div className="card progress-chart">
        <h2 className="subtitle">📊 진행 그래프</h2>
        <div className="chart-placeholder">
          <div className="chart-info">
            <p>점수 변화 추이를 시각화한 그래프가 여기에 표시됩니다.</p>
            <p className="chart-note">실제 구현 시 Chart.js나 D3.js 등을 활용하여 동적 차트를 생성할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
