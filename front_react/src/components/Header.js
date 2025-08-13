import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [nickname, setNickname] = useState('사용자');
  const [isAlarmOn, setIsAlarmOn] = useState(true);
  const [showNicknameInput, setShowNicknameInput] = useState(false);
  const [tempNickname, setTempNickname] = useState(nickname);

  const handleNicknameSubmit = () => {
    if (tempNickname.trim()) {
      setNickname(tempNickname.trim());
      setShowNicknameInput(false);
    }
  };

  const toggleAlarm = () => {
    setIsAlarmOn(!isAlarmOn);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          {showNicknameInput ? (
            <div className="nickname-input-container">
              <input
                type="text"
                value={tempNickname}
                onChange={(e) => setTempNickname(e.target.value)}
                className="nickname-input"
                placeholder="닉네임 입력"
                maxLength="10"
              />
              <button 
                onClick={handleNicknameSubmit}
                className="nickname-save-btn"
              >
                ✓
              </button>
              <button 
                onClick={() => setShowNicknameInput(false)}
                className="nickname-cancel-btn"
              >
                ✕
              </button>
            </div>
          ) : (
            <div 
              className="nickname-display"
              onClick={() => setShowNicknameInput(true)}
            >
              <span className="nickname-text">{nickname}</span>
              <span className="nickname-edit-icon">✏️</span>
            </div>
          )}
        </div>
        
        <div className="header-right">
          <button 
            className={`alarm-button ${isAlarmOn ? 'alarm-on' : 'alarm-off'}`}
            onClick={toggleAlarm}
            title={isAlarmOn ? '알람 켜짐' : '알람 꺼짐'}
          >
            {isAlarmOn ? '🔔' : '🔕'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
