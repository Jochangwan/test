# 개발자 웹 이력서 프로젝트

> 완성된 반응형 웹 이력서 - 즉시 사용 가능한 샘플 데이터 포함

## 📋 프로젝트 개요

HTML5, CSS3, JavaScript(Vanilla), TailwindCSS를 사용하여 제작한 **완성된 개발자 웹 이력서**입니다.
프레임워크 없이 순수 JavaScript로 구현하여 빠르고 가볍게 동작하며, 다크 테마의 모던한 디자인을 적용했습니다.

**현재 상태**: ✅ 완성 - 샘플 데이터로 즉시 사용 가능
**디자인 컨셉**: 다크 테마 + 오렌지 포인트 컬러
**반응형**: 모바일/태블릿/데스크톱 완벽 지원

---

## 🚀 빠른 시작

### 1단계: 웹사이트 확인 (2분)
```bash
# index.html 파일 더블클릭
# 또는 VS Code에서 Live Server로 실행
```

### 2단계: 본인 정보로 수정 (1시간)
📖 **[QUICK_START.md](QUICK_START.md)** - 5단계 빠른 시작 가이드
📖 **[USER_GUIDE.md](USER_GUIDE.md)** - 상세 수정 가이드

### 3단계: 배포 전 확인
📋 **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - 배포 체크리스트

### 4단계: 배포 (10분)
- GitHub Pages / Vercel / Netlify 중 선택

---

## ✨ 주요 특징

### 완성된 웹사이트
- ✅ **7개 섹션 완성**: Hero, About, Skills, Experience, Projects, Contact, Footer
- ✅ **샘플 데이터 포함**: "조창완" 개발자 이력서 예시
- ✅ **즉시 사용 가능**: 브라우저에서 바로 확인 가능

### 디자인 & 기능
- 🎨 **다크 테마**: 검정 배경 + 오렌지(#FF5722) 포인트 컬러
- 📱 **완전 반응형**: 모바일/태블릿/데스크톱 최적화
- ✨ **부드러운 애니메이션**: Fade-in, Scale-up, Smooth scroll
- 🍔 **모바일 메뉴**: 햄버거 버튼 + 자동 닫기
- 🎯 **섹션 하이라이트**: 스크롤 위치에 따른 네비게이션 강조

### 기술 스택
- **순수 Vanilla JS**: 프레임워크 없이 가볍고 빠름
- **TailwindCSS**: 유틸리티 클래스 기반 스타일링
- **Font Awesome**: 풍부한 아이콘 지원
- **Google Fonts**: Inter + Space Grotesk 조합

---

## 📝 사용 가이드 문서

| 문서 | 설명 | 대상 |
|-----|------|------|
| **[QUICK_START.md](QUICK_START.md)** | 5단계로 시작하는 빠른 가이드 | 처음 사용자 |
| **[USER_GUIDE.md](USER_GUIDE.md)** | 각 섹션별 상세 수정 방법 | 콘텐츠 수정 시 |
| **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** | 배포 전 필수 확인 사항 | 배포 준비 중 |
| **[ROADMAP.md](ROADMAP.md)** | 프로젝트 개발 단계 | 개발 참고용 |
| **[CLAUDE.md](CLAUDE.md)** | 개발 가이드라인 및 규칙 | 개발자용 |

---

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업 적용
- **CSS3**: Flexbox, Grid 레이아웃
- **JavaScript (Vanilla JS)**: ES6+ 문법, 프레임워크 없음
- **TailwindCSS**: 유틸리티 클래스 기반 스타일링 (CDN)

### 도구
- **Font Awesome**: 아이콘
- **Google Fonts**: Noto Sans KR 폰트

---

## 📂 프로젝트 구조

```
work_space/
├── index.html                    ⭐ 메인 HTML 파일 (수정 대상)
├── css/
│   └── style.css                (수정 불필요)
├── js/
│   └── main.js                  (수정 불필요)
├── assets/
│   ├── images/                  프로젝트 이미지 추가
│   └── icons/
│
├── QUICK_START.md               🚀 5단계 빠른 시작 가이드
├── USER_GUIDE.md                📖 상세 수정 가이드
├── DEPLOYMENT_CHECKLIST.md      📋 배포 전 체크리스트
│
├── README.md                    📄 프로젝트 개요 (현재 파일)
├── ROADMAP.md                   🗺️ 개발 로드맵
├── CLAUDE.md                    📝 개발 가이드라인
└── .gitignore
```

---

## 🚀 로컬 실행 방법

프로젝트를 실행하는 방법은 매우 간단합니다:

### 방법 1: 브라우저에서 직접 열기
1. 프로젝트 폴더에서 `index.html` 파일을 찾습니다.
2. 더블 클릭하여 기본 브라우저에서 엽니다.

### 방법 2: Live Server 사용 (권장)
1. VS Code에서 Live Server 익스텐션 설치
2. `index.html` 파일을 우클릭 → "Open with Live Server" 선택
3. 자동으로 브라우저가 열리며 실시간 새로고침 지원

### 방법 3: 간단한 HTTP 서버
```bash
# Python 3 사용 시
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

---

## 📱 웹사이트 섹션 구성

웹 이력서는 다음 **7개 섹션**으로 구성됩니다:

| 섹션 | 내용 | 샘플 데이터 |
|-----|------|-----------|
| **Hero** | 메인 소개 | 이름, 직무, 소개, 통계 (3년+, 50+ 프로젝트) |
| **About Me** | 자기소개 | 2단락 소개 + 3가지 강점 (UI/UX, Clean Code, Performance) |
| **Skills** | 기술 스택 | Frontend 8개, Backend 6개, Tools 6개 |
| **Experience** | 경력 사항 | 2개 회사 (ABC 테크, XYZ 스타트업) |
| **Projects** | 프로젝트 | 3개 프로젝트 (E-커머스, 날씨앱, TODO) |
| **Contact** | 연락처 | 이메일, 전화, SNS 링크 (GitHub, LinkedIn, Blog) |
| **Footer** | 하단 정보 | 저작권, 기술 스택 |

### 샘플 데이터 상세

**현재 프로필**: 조창완 (Frontend Developer)
- **경력**: 3년 (2020.06 - 현재)
- **프로젝트**: E-커머스 플랫폼, 날씨 대시보드, TODO 앱
- **기술 스택**: React, Vue.js, TypeScript, Node.js, TailwindCSS 등
- **연락처**: changwan@example.com, +82 10-1234-5678

> 💡 **모든 샘플 데이터는 본인의 정보로 쉽게 수정 가능합니다!**
>
> 📖 자세한 수정 방법은 [USER_GUIDE.md](USER_GUIDE.md)를 참고하세요.

---

## ⚙️ JavaScript 기능 (5가지)

`js/main.js` 파일에 구현된 핵심 기능:

1. **모바일 메뉴 토글**
   - 햄버거 버튼 클릭 시 메뉴 표시/숨김
   - 아이콘 변경 (바 ↔ X)

2. **모바일 메뉴 자동 닫기**
   - 모바일 메뉴 링크 클릭 시 메뉴 자동 닫힘

3. **스크롤 시 네비게이션 바 스타일 변경**
   - 100px 이상 스크롤 시 그림자 효과 추가

4. **부드러운 스크롤 (Smooth Scroll)**
   - 앵커 링크 클릭 시 부드럽게 섹션으로 이동
   - 네비게이션 바 높이를 고려한 offset 계산

5. **현재 섹션 네비게이션 하이라이트**
   - 스크롤 위치에 따라 현재 섹션에 해당하는 nav-link 강조 표시

---

## 📐 반응형 디자인

**모바일 우선(Mobile-First)** 접근 방식을 사용합니다.

### 브레이크포인트
- **모바일**: `< 768px`
  - 1열 레이아웃
  - 햄버거 메뉴

- **태블릿**: `768px - 1024px`
  - 2열 그리드 레이아웃
  - 데스크톱 네비게이션 표시

- **데스크톱**: `> 1024px`
  - 3열 그리드 레이아웃
  - 최대 콘텐츠 너비 적용

---

## 🎨 색상 팔레트

TailwindCSS 커스텀 색상 - 다크 테마 + 오렌지 포인트:

| 색상 이름   | Hex 코드   | 용도                        |
|-----------|-----------|---------------------------|
| Dark      | `#000000` | 메인 배경                    |
| DarkGray  | `#0a0a0a` | 섹션 배경                    |
| CardDark  | `#111111` | 카드 배경                    |
| Orange    | `#FF5722` | 메인 오렌지 (포인트 컬러)      |
| OrangeHover | `#FF6B35` | 오렌지 호버                  |
| TextWhite | `#FFFFFF` | 메인 텍스트                  |
| TextGray  | `#9CA3AF` | 서브 텍스트                  |
| BorderDark | `#1f1f1f` | 테두리                      |

**색상 변경 방법**: index.html 29-30줄에서 `orange` 값을 원하는 색상으로 변경

---

## ✅ 완료된 기능

- [x] 7개 섹션 완성 (Hero, About, Skills, Experience, Projects, Contact, Footer)
- [x] 샘플 데이터 포함 (조창완 개발자 프로필)
- [x] 완전 반응형 디자인 (모바일/태블릿/데스크톱)
- [x] JavaScript 인터랙션 (메뉴, 스크롤, 애니메이션)
- [x] 다크 테마 스타일링
- [x] 모바일 햄버거 메뉴
- [x] 부드러운 스크롤 애니메이션
- [x] 섹션 하이라이트
- [x] 호버 효과 및 트랜지션

---

## 🎯 사용자 작업 단계

### 1. 정보 수정 (1시간)
- index.html에서 샘플 데이터를 본인 정보로 교체
- [USER_GUIDE.md](USER_GUIDE.md) 참고

### 2. 배포 전 확인 (15분)
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) 체크리스트 완료
- 모든 링크, 이미지, 연락처 확인

### 3. 배포 (10분)
- GitHub Pages / Vercel / Netlify 중 선택
- 커스텀 도메인 연결 (선택)

### 4. 공유
- SNS에 공유
- LinkedIn, GitHub 프로필에 링크 추가

---

## 🧪 테스트 방법

### 기능 테스트
1. 모바일 메뉴 토글 작동 확인
2. 네비게이션 링크 클릭 시 부드러운 스크롤 확인
3. 스크롤 시 네비게이션 하이라이트 확인
4. 앵커 링크로 모든 섹션 이동 확인

### 반응형 테스트
- Chrome DevTools → Device Toolbar 사용
- iPhone SE (375px), iPad (768px), Desktop (1920px) 시뮬레이션

### 크로스 브라우저 테스트
- Chrome (최신 버전) ✅
- Firefox (최신 버전) ✅
- Safari (최신 버전) ✅
- Edge (최신 버전) ✅

---

## 📄 라이선스

이 프로젝트는 개인 포트폴리오용으로 제작되었습니다.
자유롭게 참고하실 수 있으나, 상업적 사용 시 출처를 명시해 주세요.

---

## 🔧 추가 개선 아이디어 (선택)

원한다면 다음 기능을 추가할 수 있습니다:

- **프로필 이미지 추가**: Hero 섹션에 프로필 사진 표시
- **Contact Form**: EmailJS 또는 Formspree 연동
- **다크/라이트 모드 토글**: 테마 전환 기능
- **프로젝트 필터링**: 기술 스택별 필터
- **타이핑 애니메이션**: Typed.js 라이브러리 사용
- **카운터 애니메이션**: 통계 숫자 카운팅 효과

---

## 📊 성능 목표

배포 후 다음 지표를 달성하세요:

**Google Lighthouse 점수**:
- Performance: 90+ 점
- Accessibility: 90+ 점
- Best Practices: 90+ 점
- SEO: 90+ 점

**로딩 속도**:
- First Contentful Paint: < 1.8초
- Speed Index: < 3.4초
- Time to Interactive: < 3.8초

---

## 👤 제작자

**조창완 (Changwan Jo)** - Frontend Developer

- GitHub: [https://github.com](https://github.com)
- LinkedIn: [https://linkedin.com](https://linkedin.com)
- Email: changwan@example.com

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
개인 포트폴리오용으로 자유롭게 사용 가능합니다.

---

## 🙏 도움이 필요하신가요?

- **Font Awesome 아이콘**: https://fontawesome.com/icons
- **TailwindCSS 문서**: https://tailwindcss.com
- **Google Fonts**: https://fonts.google.com
- **색상 도구**: https://coolors.co
- **이미지 최적화**: https://tinypng.com

---

**Built with ❤️ using HTML, TailwindCSS, and JavaScript**

**버전**: 1.0.0 (완성)
**최종 수정**: 2024년 1월
