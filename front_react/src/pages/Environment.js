import React, { useState } from 'react';
import './Environment.css';

const Environment = () => {
  const [nickname, setNickname] = useState('사용자');
  const [isAlarmOn, setIsAlarmOn] = useState(true);
  const [alarmTime, setAlarmTime] = useState('09:00');
  const [language, setLanguage] = useState('ko');
  const [theme, setTheme] = useState('light');
  const [autoSave, setAutoSave] = useState(true);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameSave = () => {
    // 닉네임 저장 로직
    alert('닉네임이 저장되었습니다!');
  };

  const toggleAlarm = () => {
    setIsAlarmOn(!isAlarmOn);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const resetSettings = () => {
    if (window.confirm('모든 설정을 초기화하시겠습니까?')) {
      setNickname('사용자');
      setIsAlarmOn(true);
      setAlarmTime('09:00');
      setLanguage('ko');
      setTheme('light');
      setAutoSave(true);
      alert('설정이 초기화되었습니다.');
    }
  };

  return (
    <div className="environment-page">
      <h1 className="section-title">사용설정 ⚙️</h1>
      <p className="page-description">
        앱 사용 환경을 개인에 맞게 설정하세요.
      </p>

      {/* 기본 설정 */}
      <div className="card basic-settings">
        <h2 className="subtitle">기본 설정</h2>
        
        {/* 닉네임 설정 */}
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-icon">👤</span>
            <span>닉네임</span>
          </div>
          <div className="setting-control">
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="nickname-input"
              placeholder="닉네임을 입력하세요"
              maxLength="15"
            />
            <button 
              onClick={handleNicknameSave}
              className="save-btn"
            >
              저장
            </button>
          </div>
        </div>

        {/* 알람 설정 */}
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-icon">🔔</span>
            <span>알람 기능</span>
          </div>
          <div className="setting-control">
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isAlarmOn}
                onChange={toggleAlarm}
              />
              <span className="toggle-slider"></span>
            </label>
            {isAlarmOn && (
              <input
                type="time"
                value={alarmTime}
                onChange={(e) => setAlarmTime(e.target.value)}
                className="time-input"
              />
            )}
          </div>
        </div>

        {/* 언어 설정 */}
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-icon">🌐</span>
            <span>언어</span>
          </div>
          <div className="setting-control">
            <select 
              value={language} 
              onChange={handleLanguageChange}
              className="language-select"
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>

        {/* 테마 설정 */}
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-icon">🎨</span>
            <span>테마</span>
          </div>
          <div className="setting-control">
            <select 
              value={theme} 
              onChange={handleThemeChange}
              className="theme-select"
            >
              <option value="light">밝은 테마</option>
              <option value="dark">어두운 테마</option>
              <option value="auto">자동</option>
            </select>
          </div>
        </div>
      </div>

      {/* 고급 설정 */}
      <div className="card advanced-settings">
        <div className="settings-header">
          <h2 className="subtitle">고급 설정</h2>
          <button
            className="toggle-advanced-btn"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            {showAdvanced ? '접기' : '펼치기'}
          </button>
        </div>
        
        {showAdvanced && (
          <div className="advanced-content">
            {/* 자동 저장 */}
            <div className="setting-item">
              <div className="setting-label">
                <span className="setting-icon">💾</span>
                <span>자동 저장</span>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={autoSave}
                    onChange={(e) => setAutoSave(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>

            {/* 데이터 내보내기 */}
            <div className="setting-item">
              <div className="setting-label">
                <span className="setting-icon">📤</span>
                <span>데이터 내보내기</span>
              </div>
              <div className="setting-control">
                <button className="export-btn">
                  내보내기
                </button>
              </div>
            </div>

            {/* 데이터 가져오기 */}
            <div className="setting-item">
              <div className="setting-label">
                <span className="setting-icon">📥</span>
                <span>데이터 가져오기</span>
              </div>
              <div className="setting-control">
                <button className="import-btn">
                  가져오기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 계정 관리 */}
      <div className="card account-management">
        <h2 className="subtitle">계정 관리</h2>
        
        <div className="account-actions">
          <button className="account-btn profile">
            <span className="btn-icon">👤</span>
            <span>프로필 수정</span>
          </button>
          <button className="account-btn password">
            <span className="btn-icon">🔒</span>
            <span>비밀번호 변경</span>
          </button>
          <button className="account-btn delete">
            <span className="btn-icon">🗑️</span>
            <span>계정 삭제</span>
          </button>
        </div>
      </div>

      {/* 설정 초기화 */}
      <div className="card reset-settings">
        <h2 className="subtitle">설정 초기화</h2>
        <p className="reset-description">
          모든 설정을 기본값으로 되돌립니다. 이 작업은 되돌릴 수 없습니다.
        </p>
        <button 
          onClick={resetSettings}
          className="reset-btn"
        >
          모든 설정 초기화
        </button>
      </div>

      {/* 설정 정보 */}
      <div className="card settings-info">
        <h2 className="subtitle">설정 정보</h2>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">앱 버전:</span>
            <span className="info-value">1.0.0</span>
          </div>
          <div className="info-item">
            <span className="info-label">마지막 업데이트:</span>
            <span className="info-value">2024-01-15</span>
          </div>
          <div className="info-item">
            <span className="info-label">설정 파일 크기:</span>
            <span className="info-value">2.3 MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
