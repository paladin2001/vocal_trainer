import React, { useState } from 'react';
import './Info.css';

const Info = () => {
  const [activeTab, setActiveTab] = useState('usage');

  const tabs = [
    { id: 'usage', label: '사용법', icon: '📖' },
    { id: 'privacy', label: '개인정보', icon: '🔒' },
    { id: 'terms', label: '약관', icon: '📋' },
    { id: 'about', label: '정보', icon: 'ℹ️' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'usage':
        return (
          <div className="tab-content">
            <h3>보컬 트레이너 사용법</h3>
            
            <div className="usage-section">
              <h4>🎯 시작하기</h4>
              <ol>
                <li>앱을 실행하고 닉네임을 설정하세요</li>
                <li>하단 메뉴에서 원하는 연습을 선택하세요</li>
                <li>기본연습부터 차근차근 시작하는 것을 권장합니다</li>
              </ol>
            </div>

            <div className="usage-section">
              <h4>🎵 기본연습</h4>
              <ul>
                <li><strong>발성연습:</strong> 호흡법과 기본 발성법을 연습합니다</li>
                <li><strong>발음연습:</strong> 정확한 발음과 조음법을 연습합니다</li>
                <li><strong>속도연습:</strong> 말하기 속도 조절을 연습합니다</li>
                <li><strong>억양연습:</strong> 자연스러운 억양을 연습합니다</li>
              </ul>
            </div>

            <div className="usage-section">
              <h4>⭐ 심화연습</h4>
              <ul>
                <li><strong>따라읽기:</strong> 모범 발음을 따라하며 연습합니다</li>
                <li><strong>자유발화:</strong> 주제별로 자유롭게 말하며 연습합니다</li>
              </ul>
            </div>

            <div className="usage-section">
              <h4>📊 분석 및 피드백</h4>
              <ul>
                <li>연습 결과를 분석하여 개선점을 파악하세요</li>
                <li>정기적으로 진행 상황을 확인하세요</li>
                <li>약점을 보완하여 균형 잡힌 실력을 기르세요</li>
              </ul>
            </div>

            <div className="usage-tips">
              <h4>💡 연습 팁</h4>
              <div className="tips-grid">
                <div className="tip-item">
                  <span className="tip-icon">⏰</span>
                  <span>매일 일정한 시간에 연습하세요</span>
                </div>
                <div className="tip-item">
                  <span className="tip-icon">🎧</span>
                  <span>조용한 환경에서 연습하세요</span>
                </div>
                <div className="tip-item">
                  <span className="tip-icon">📝</span>
                  <span>연습 내용을 기록하세요</span>
                </div>
                <div className="tip-item">
                  <span className="tip-icon">🔄</span>
                  <span>반복 연습을 통해 익숙해지세요</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="tab-content">
            <h3>개인정보 처리방침</h3>
            
            <div className="privacy-section">
              <h4>📋 수집하는 개인정보</h4>
              <ul>
                <li>닉네임 및 사용자 설정 정보</li>
                <li>연습 기록 및 성과 데이터</li>
                <li>앱 사용 통계 및 분석 데이터</li>
                <li>기기 정보 및 앱 버전 정보</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h4>🔒 개인정보 보호</h4>
              <ul>
                <li>모든 개인정보는 암호화하여 저장됩니다</li>
                <li>외부 서버로 전송되지 않습니다</li>
                <li>사용자 동의 없이 제3자에게 제공되지 않습니다</li>
                <li>정기적인 보안 점검을 실시합니다</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h4>📱 데이터 사용 목적</h4>
              <ul>
                <li>개인 맞춤형 연습 프로그램 제공</li>
                <li>연습 진행 상황 및 성과 분석</li>
                <li>앱 기능 개선 및 사용자 경험 향상</li>
                <li>고객 지원 및 문의 응대</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h4>🗑️ 개인정보 삭제</h4>
              <p>사용자가 앱을 삭제하거나 계정을 삭제하면 모든 개인정보가 즉시 삭제됩니다.</p>
            </div>

            <div className="privacy-contact">
              <h4>📞 문의처</h4>
              <p>개인정보 처리방침에 대한 문의사항이 있으시면 아래로 연락해 주세요.</p>
              <div className="contact-info">
                <p><strong>이메일:</strong> privacy@vocaltrainer.com</p>
                <p><strong>전화:</strong> 02-1234-5678</p>
              </div>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="tab-content">
            <h3>이용약관</h3>
            
            <div className="terms-section">
              <h4>📋 제1조 (목적)</h4>
              <p>본 약관은 보컬 트레이너 앱의 이용과 관련하여 사용자와 제공자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
            </div>

            <div className="terms-section">
              <h4>📱 제2조 (서비스 내용)</h4>
              <ul>
                <li>음성 연습 및 발화 훈련 서비스</li>
                <li>연습 결과 분석 및 피드백 제공</li>
                <li>개인 맞춤형 연습 프로그램 제공</li>
                <li>연습 기록 및 통계 관리</li>
              </ul>
            </div>

            <div className="terms-section">
              <h4>⚠️ 제3조 (사용자 의무)</h4>
              <ul>
                <li>본 앱을 불법적인 목적으로 사용하지 않을 것</li>
                <li>타인의 권리를 침해하지 않을 것</li>
                <li>앱의 정상적인 운영을 방해하지 않을 것</li>
                <li>적절한 연습 환경에서 사용할 것</li>
              </ul>
            </div>

            <div className="terms-section">
              <h4>🚫 제4조 (금지사항)</h4>
              <ul>
                <li>저작권을 침해하는 콘텐츠 사용</li>
                <li>타인을 기만하거나 피해를 주는 행위</li>
                <li>앱의 보안을 위협하는 행위</li>
                <li>상업적 목적의 무단 사용</li>
              </ul>
            </div>

            <div className="terms-section">
              <h4>📅 제5조 (약관 변경)</h4>
              <p>본 약관은 사전 공지 후 변경될 수 있으며, 변경된 약관은 앱 내 공지사항에 게시됩니다.</p>
            </div>

            <div className="terms-section">
              <h4>📞 제6조 (문의 및 분쟁해결)</h4>
              <p>약관에 대한 문의사항이나 분쟁이 발생할 경우, 상호 협의를 통해 해결하며, 협의가 이루어지지 않을 경우 관련 법령에 따라 처리합니다.</p>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="tab-content">
            <h3>앱 정보</h3>
            
            <div className="about-section">
              <h4>📱 앱 정보</h4>
              <div className="app-info">
                <div className="info-row">
                  <span className="info-label">앱 이름:</span>
                  <span className="info-value">보컬 트레이너</span>
                </div>
                <div className="info-row">
                  <span className="info-label">버전:</span>
                  <span className="info-value">1.0.0</span>
                </div>
                <div className="info-row">
                  <span className="info-label">개발사:</span>
                  <span className="info-value">Voice Training Studio</span>
                </div>
                <div className="info-row">
                  <span className="info-label">지원 플랫폼:</span>
                  <span className="info-value">Web (모바일 최적화)</span>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h4>🎯 주요 기능</h4>
              <ul>
                <li>체계적인 음성 연습 프로그램</li>
                <li>실시간 피드백 및 분석</li>
                <li>개인 맞춤형 연습 계획</li>
                <li>진행 상황 추적 및 통계</li>
                <li>다양한 연습 모드</li>
              </ul>
            </div>

            <div className="about-section">
              <h4>🆕 업데이트 내역</h4>
              <div className="update-history">
                <div className="update-item">
                  <span className="update-version">v1.0.0</span>
                  <span className="update-date">2024-01-15</span>
                  <span className="update-content">초기 버전 출시</span>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h4>📞 지원 및 문의</h4>
              <div className="support-info">
                <p><strong>고객 지원:</strong> support@vocaltrainer.com</p>
                <p><strong>기술 문의:</strong> tech@vocaltrainer.com</p>
                <p><strong>제휴 문의:</strong> business@vocaltrainer.com</p>
              </div>
            </div>

            <div className="about-section">
              <h4>🌟 개발팀</h4>
              <p>보컬 트레이너는 음성 훈련 전문가들과 개발자들이 함께 만든 앱입니다. 사용자들이 효과적으로 음성 연습을 할 수 있도록 최선을 다하고 있습니다.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="info-page">
      <h1 className="section-title">정보 ℹ️</h1>
      <p className="page-description">
        보컬 트레이너에 대한 모든 정보를 확인하세요.
      </p>

      {/* 탭 네비게이션 */}
      <div className="card tab-navigation">
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 탭 콘텐츠 */}
      <div className="card tab-content-card">
        {renderContent()}
      </div>
    </div>
  );
};

export default Info;
