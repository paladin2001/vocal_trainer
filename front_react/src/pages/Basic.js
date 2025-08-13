import React from 'react';
import './Basic.css';

const Basic = () => {
  const basicExercises = [
    {
      id: 1,
      title: '발성연습',
      description: '기본적인 발성법과 호흡법을 연습합니다',
      icon: '🎤',
      duration: '15-20분',
      difficulty: '초급',
      color: '#87CEEB'
    },
    {
      id: 2,
      title: '발음연습',
      description: '정확한 발음과 조음법을 연습합니다',
      icon: '🗣️',
      duration: '20-25분',
      difficulty: '초급',
      color: '#B0E0E6'
    },
    {
      id: 3,
      title: '속도연습',
      description: '말하기 속도 조절과 리듬감을 연습합니다',
      icon: '⏱️',
      duration: '15-20분',
      difficulty: '중급',
      color: '#98D8C8'
    },
    {
      id: 4,
      title: '억양연습',
      description: '자연스러운 억양과 톤을 연습합니다',
      icon: '🎵',
      duration: '25-30분',
      difficulty: '중급',
      color: '#A8E6CF'
    }
  ];

  const handleExerciseClick = (exercise) => {
    // 연습 시작 로직
    console.log(`${exercise.title} 연습을 시작합니다.`);
    alert(`${exercise.title} 연습을 시작합니다!`);
  };

  return (
    <div className="basic-page">
      <h1 className="section-title">기본연습 🎵</h1>
      <p className="page-description">
        보컬 트레이닝의 기초를 다지는 단계입니다. 체계적으로 단계별로 연습해보세요.
      </p>

      <div className="exercises-container">
        {basicExercises.map((exercise) => (
          <div 
            key={exercise.id} 
            className="exercise-card"
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
              </div>
            </div>
            
            <div className="exercise-details">
              <div className="detail-item">
                <span className="detail-label">소요시간:</span>
                <span className="detail-value">{exercise.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">난이도:</span>
                <span className={`difficulty-badge ${exercise.difficulty === '초급' ? 'beginner' : 'intermediate'}`}>
                  {exercise.difficulty}
                </span>
              </div>
            </div>

            <div className="exercise-actions">
              <button className="start-exercise-btn">
                연습 시작
              </button>
              <button className="preview-exercise-btn">
                미리보기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 연습 팁 */}
      <div className="card practice-tips">
        <h2 className="subtitle">💡 연습 팁</h2>
        <ul className="tips-list">
          <li>매일 일정한 시간에 연습하는 것이 효과적입니다</li>
          <li>연습 전 충분한 스트레칭과 워밍업을 하세요</li>
          <li>자신의 목소리를 녹음해서 들어보세요</li>
          <li>무리하지 말고 천천히 단계별로 진행하세요</li>
        </ul>
      </div>
    </div>
  );
};

export default Basic;
