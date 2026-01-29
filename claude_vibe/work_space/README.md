# 개발자 웹 이력서 (Developer Portfolio)

> 반응형 디자인을 적용한 프론트엔드 개발자 웹 이력서 프로젝트입니다.

## 📋 프로젝트 개요

HTML5, CSS3, JavaScript(Vanilla), TailwindCSS를 사용하여 제작한 반응형 개발자 웹 이력서입니다.
프레임워크 없이 순수 JavaScript로 구현하여 빠르고 가볍게 동작합니다.

**현재 진행 상태**: Phase 1-2 완료 (프로젝트 초기 설정 + 기본 레이아웃)

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
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 커스텀 CSS 스타일
├── js/
│   └── main.js            # JavaScript 로직 (5가지 기능)
├── assets/
│   ├── images/            # 이미지 파일
│   └── icons/             # 아이콘 파일
├── .gitignore             # Git 제외 파일 목록
├── README.md              # 프로젝트 설명서 (현재 파일)
├── ROADMAP.md             # 개발 로드맵 (8단계)
└── CLAUDE.md              # 프로젝트 가이드라인
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

## 📱 주요 섹션 설명

웹 이력서는 다음 **8개 섹션**으로 구성됩니다:

### 1. **Hero 섹션** (`#home`)
- 프로필 이미지, 이름, 직무
- 간단한 소개 문구
- CTA 버튼 (연락하기, 이력서 다운로드)

### 2. **About Me 섹션** (`#about`)
- 자기소개 텍스트
- 3개 강점 카드 (UI/UX Design, Clean Code, Performance)
- SNS 링크 (GitHub, LinkedIn, Blog)

### 3. **Skills 섹션** (`#skills`)
- 기술 스택을 3개 카테고리로 분류
  - Frontend: HTML5, CSS3, JavaScript, React, Vue.js, TailwindCSS 등
  - Backend: Node.js, Express, MongoDB, MySQL, REST API 등
  - Tools & Others: Git, Webpack, Vite, Figma, Docker 등

### 4. **Experience 섹션** (`#experience`)
- 경력 타임라인 디자인
- 회사명, 직무, 기간, 주요 업무 리스트

### 5. **Projects 섹션** (`#projects`)
- 3열 그리드 레이아웃 (반응형)
- 프로젝트 카드: 썸네일, 제목, 설명, 기술 스택, GitHub/Demo 링크

### 6. **Education 섹션** (`#education`)
- 학력 및 자격증 정보
- 카드 레이아웃

### 7. **Contact 섹션** (`#contact`)
- 연락처 정보 (이메일, 전화번호)
- SNS 아이콘 링크

### 8. **Footer**
- 저작권 표시
- 기술 스택 안내

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

TailwindCSS 커스텀 색상:

| 색상 이름   | Hex 코드   | 용도                        |
|-----------|-----------|---------------------------|
| Primary   | `#3B82F6` | 주요 강조 색상 (Blue)        |
| Secondary | `#10B981` | 보조 강조 색상 (Green)       |
| Accent    | `#F59E0B` | 액센트 색상 (Amber)          |
| BgLight   | `#F9FAFB` | 배경색 (Light Gray)         |
| TextDark  | `#1F2937` | 텍스트 색상 (Dark Gray)      |

---

## ✅ 완료된 기능 (Phase 1-2)

- [x] 프로젝트 폴더 구조 생성
- [x] `.gitignore` 파일 작성
- [x] 네비게이션 바 (데스크톱 + 모바일)
- [x] 8개 섹션 마크업 완료 (샘플 데이터)
- [x] JavaScript 5가지 기능 구현
- [x] 커스텀 CSS 스타일 작성
- [x] 반응형 디자인 적용
- [x] TailwindCSS 색상 테마 설정

---

## 🔮 다음 단계 (ROADMAP.md 참고)

- **Phase 3**: 각 섹션 상세 개발 (실제 콘텐츠로 교체)
- **Phase 4**: 인터랙티브 기능 추가 (Intersection Observer, 타이핑 애니메이션)
- **Phase 5**: 스타일링 및 디자인 개선 (애니메이션, 다크 모드)
- **Phase 6**: 최적화 및 성능 개선 (이미지 최적화, lazy loading)
- **Phase 7**: 배포 및 테스트 (GitHub Pages, Lighthouse)
- **Phase 8**: 유지보수 및 추가 기능

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

## 👤 작성자

**홍길동** - Frontend Developer

- GitHub: [https://github.com](https://github.com)
- LinkedIn: [https://linkedin.com](https://linkedin.com)
- Email: hong@example.com

---

## 📝 커밋 규칙

커밋 메시지는 한국어로 작성하며, 다음 형식을 따릅니다:

```
feat: Hero 섹션 레이아웃 구현
fix: 모바일 메뉴 토글 버그 수정
style: TailwindCSS 색상 팔레트 적용
docs: README.md 업데이트
refactor: JavaScript 코드 모듈화
perf: 이미지 최적화 및 lazy loading 적용
```

---

**Built with ❤️ using HTML, TailwindCSS, and JavaScript**
