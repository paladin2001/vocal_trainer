import React from 'react';
import './Advanced.css';

const Advanced = () => {
  const advancedExercises = [
    {
      id: 1,
      title: '따라읽기',
      description: '모범 발음과 억양을 따라하며 자연스러운 말하기를 연습합니다',
      icon: '📖',
      duration: '30-40분',
      difficulty: '고급',
      color: '#FFB6C1',
      features: ['실시간 피드백', '속도 조절', '반복 연습', '점수 기록']
    },
    {
      id: 2,
      title: '자유발화',
      description: '주어진 주제로 자유롭게 말하며 창의적 표현력을 기릅니다',
      icon: '💭',
      duration: '25-35분',
      difficulty: '고급',
      color: '#FFC0CB',
      features: ['주제별 연습', '녹음 기능', '자기 평가', '진행도 추적']
    }
  ];

  const handleExerciseClick = (exercise) => {
    console.log(`${exercise.title} 연습을 시작합니다.`);
    alert(`${exercise.title} 연습을 시작합니다!`);
  };

  return (
    <div className="advanced-page">
      <h1 className="section-title">심화연습 ⭐</h1>
      <p className="page-description">
        기본기를 바탕으로 더욱 고급스러운 발화 기술을 연마하는 단계입니다.
      </p>

      <div className="exercises-container">
        {advancedExercises.map((exercise) => (
          <div 
            key={exercise.id} 
            className="exercise-card advanced"
            onClick={() => handleExerciseClick(exercise)}
            style={{ '--exercise-color': exercise.color }}
          >
            <div className="exercise-header">
              <div className="exercise-icon" style={{ backgroundColor: exercise.color }}>
                {exercise.icon}
              </div>
              <div className="exercise-info">
                <h3 className="exercise-title">{exercise.title}</h3>
                <p className="exercise-description">{exercise.description}</p>
                <div className="difficulty-badge advanced">
                  {exercise.difficulty}
                </div>
              </div>
            </div>
            
            <div className="exercise-features">
              <h4 className="features-title">주요 기능</h4>
              <div className="features-grid">
                {exercise.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✨</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="exercise-details">
              <div className="detail-item">
                <span className="detail-label">소요시간</span>
                <span className="detail-value">{exercise.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">난이도</span>
                <span className="detail-value">{exercise.difficulty}</span>
              </div>
            </div>

            <div className="exercise-actions">
              <button className="start-exercise-btn advanced">
                연습 시작
              </button>
              <button className="preview-exercise-btn">
                미리보기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 심화 연습 가이드 */}
      <div className="card advanced-guide">
        <h2 className="subtitle">🚀 심화 연습 가이드</h2>
        <div className="guide-content">
          <div className="guide-section">
            <h3>따라읽기 연습법</h3>
            <ul>
              <li>모범 발음을 여러 번 듣고 패턴을 파악하세요</li>
              <li>자연스러운 억양과 리듬감에 집중하세요</li>
              <li>점진적으로 속도를 높여가며 연습하세요</li>
            </ul>
          </div>
          <div className="guide-section">
            <h3>자유발화 연습법</h3>
            <ul>
              <li>주제에 대한 생각을 먼저 정리하세요</li>
              <li>녹음 후 자신의 발화를 분석해보세요</li>
              <li>다양한 표현과 어휘를 활용해보세요</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 연습 통계 */}
      <div className="card practice-stats">
        <h2 className="subtitle">📈 심화 연습 통계</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">총 연습 횟수</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8.5</div>
            <div className="stat-label">평균 점수</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">6시간</div>
            <div className="stat-label">총 연습 시간</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
