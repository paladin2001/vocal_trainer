# 보컬 트레이너 (Vocal Trainer)

모바일 위주 웹프로그래밍용 React 기반 보컬 트레이닝 애플리케이션입니다.

## 🎯 주요 기능

### 📱 메인 메뉴
- **홈 (Home)**: 사용내역 및 통계 요약
- **기본연습 (Basic)**: 발성연습, 발음연습, 속도연습, 억양연습
- **심화연습 (Advanced)**: 따라읽기, 자유발화
- **분석 (Analysis)**: 연습 결과 분석 및 피드백
- **사용설정 (Environment)**: 닉네임, 알람, 언어, 테마 설정
- **정보 (Info)**: 사용법, 개인정보처리방침, 이용약관

### 🎨 디자인 특징
- 연한 파란색, 하늘색, 회색, 흰색 위주의 색상 구성
- 모바일 최적화된 반응형 디자인
- 직관적인 아이콘 기반 네비게이션
- 부드러운 애니메이션과 호버 효과

## 🚀 시작하기

### 필수 요구사항
- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm start
   ```

3. **브라우저에서 확인**
   - http://localhost:3000 으로 접속

### 빌드
```bash
npm run build
```

## 📁 프로젝트 구조

```
front_react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # 상단 헤더 (닉네임, 알람)
│   │   ├── Header.css
│   │   ├── BottomNavigation.js # 하단 네비게이션
│   │   └── BottomNavigation.css
│   ├── pages/
│   │   ├── Home/              # 홈 페이지
│   │   │   ├── index.js       # 컴포넌트 export
│   │   │   ├── Home.js        # 홈 페이지 컴포넌트
│   │   │   └── Home.css       # 홈 페이지 스타일
│   │   ├── Basic/             # 기본연습 페이지
│   │   │   ├── index.js       # 컴포넌트 export
│   │   │   ├── Basic.js       # 기본연습 컴포넌트
│   │   │   └── Basic.css      # 기본연습 스타일
│   │   ├── Advanced/          # 심화연습 페이지
│   │   │   ├── index.js       # 컴포넌트 export
│   │   │   ├── Advanced.js    # 심화연습 컴포넌트
│   │   │   └── Advanced.css   # 심화연습 스타일
│   │   ├── Analysis/          # 분석 페이지
│   │   │   ├── index.js       # 컴포넌트 export
│   │   │   ├── Analysis.js    # 분석 컴포넌트
│   │   │   └── Analysis.css   # 분석 스타일
│   │   ├── Environment/       # 사용설정 페이지
│   │   │   ├── index.js       # 컴포넌트 export
│   │   │   ├── Environment.js # 사용설정 컴포넌트
│   │   │   └── Environment.css # 사용설정 스타일
│   │   └── Info/              # 정보 페이지
│   │       ├── index.js       # 컴포넌트 export
│   │       ├── Info.js        # 정보 컴포넌트
│   │       └── Info.css       # 정보 스타일
│   ├── App.js                 # 메인 앱 컴포넌트
│   ├── App.css                # 메인 스타일
│   ├── index.js               # 앱 진입점
│   └── index.css              # 전역 스타일
├── package.json
└── README.md
```

## 🛠️ 기술 스택

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.3.0
- **Styling**: CSS3 (모바일 우선 반응형)
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📱 반응형 디자인

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 480px 이하

## 🎨 색상 팔레트

- **Primary**: #87CEEB (연한 파란색)
- **Secondary**: #B0E0E6 (하늘색)
- **Accent**: #FFB6C1 (연한 분홍색)
- **Background**: #f8f9fa (연한 회색)
- **Text**: #2c3e50 (진한 회색)
- **Muted**: #7f8c8d (중간 회색)

## 🔧 주요 컴포넌트

### Header
- 닉네임 설정 (클릭하여 편집)
- 알람 상태 표시 (켜짐/꺼짐)

### BottomNavigation
- 6개 메인 메뉴를 아이콘과 라벨로 표시
- 현재 활성 페이지 하이라이트

### Pages
- 각 페이지는 독립적인 컴포넌트로 구성
- 모바일 우선 반응형 레이아웃
- 일관된 디자인 시스템 적용

## 📊 기능 상세

### 홈 페이지
- 오늘의 목표 및 진행률
- 통계 요약 (총 연습시간, 평균 점수, 연습 횟수)
- 최근 활동 내역
- 빠른 시작 버튼

### 기본연습
- 4가지 연습 유형 제공
- 각 연습별 상세 정보 및 난이도
- 연습 시작 및 미리보기 기능

### 심화연습
- 2가지 고급 연습 유형
- 주요 기능 설명
- 연습 가이드 및 팁

### 분석
- 기간별 분석 (주/월)
- 카테고리별 성과 분석
- 개선 제안 및 권장사항
- 진행 그래프 (플레이스홀더)

### 사용설정
- 기본 설정 (닉네임, 알람, 언어, 테마)
- 고급 설정 (자동 저장, 데이터 내보내기/가져오기)
- 계정 관리
- 설정 초기화

### 정보
- 탭 기반 정보 제공
- 사용법 가이드
- 개인정보처리방침
- 이용약관
- 앱 정보 및 지원

## 🚀 향후 개발 계획

- [ ] 실제 음성 녹음 및 분석 기능
- [ ] Chart.js를 활용한 동적 차트 구현
- [ ] 사용자 인증 시스템
- [ ] 데이터베이스 연동
- [ ] PWA (Progressive Web App) 지원
- [ ] 다국어 지원 확장

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

- **개발팀**: Voice Training Studio
- **이메일**: dev@vocaltrainer.com
- **프로젝트**: [GitHub Repository](https://github.com/your-username/vocal-trainer)

---

**보컬 트레이너**와 함께 효과적인 음성 연습을 시작하세요! 🎤✨
