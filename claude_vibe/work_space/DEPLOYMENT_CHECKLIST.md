# 배포 체크리스트

이 체크리스트는 웹사이트를 배포하기 전에 확인해야 할 사항들을 정리한 문서입니다.

---

## 📋 배포 전 필수 체크리스트

### 1단계: 콘텐츠 검증 ✅

#### 개인 정보
- [ ] 모든 "조창완"을 본인 이름으로 변경
- [ ] 직업/직무가 정확한지 확인
- [ ] 이메일 주소가 정확한지 확인
- [ ] 전화번호가 정확한지 확인 (국가 코드 포함)
- [ ] 모든 개인 정보가 최신 상태인지 확인

#### 링크 확인
- [ ] 모든 GitHub 링크가 실제 저장소를 가리키는지 확인
- [ ] 프로젝트 데모 링크가 작동하는지 확인
- [ ] SNS 링크 (GitHub, LinkedIn, Blog)가 올바른지 확인
- [ ] 이메일 링크(`mailto:`)가 정확한지 확인
- [ ] 전화번호 링크(`tel:`)가 정확한지 확인
- [ ] 깨진 링크(404 에러)가 없는지 확인

#### 콘텐츠 품질
- [ ] 모든 텍스트에 맞춤법/문법 오류가 없는지 확인
- [ ] 자기소개가 명확하고 전문적인지 확인
- [ ] 프로젝트 설명이 이해하기 쉬운지 확인
- [ ] 경력 사항의 날짜가 정확한지 확인
- [ ] 기술 스택이 최신 상태로 업데이트되었는지 확인

### 2단계: 이미지 최적화 🖼️

#### 이미지 파일 확인
- [ ] 모든 이미지가 실제 파일로 교체되었는지 확인 (placeholder 제거)
- [ ] 이미지 파일 크기가 적절한지 확인 (각 이미지 < 500KB 권장)
- [ ] 이미지 형식이 최적화되었는지 확인 (WebP 또는 최적화된 JPG/PNG)
- [ ] 모든 이미지에 적절한 `alt` 속성이 있는지 확인 (접근성)
- [ ] 프로젝트 스크린샷이 선명하고 전문적인지 확인

#### 이미지 최적화 도구
- **온라인 도구**:
  - [TinyPNG](https://tinypng.com/) - PNG/JPG 압축
  - [Squoosh](https://squoosh.app/) - 다양한 형식 지원
  - [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG 최적화

- **추천 이미지 크기**:
  - 프로젝트 썸네일: 600 × 400px
  - 프로필 사진 (선택): 400 × 400px
  - 최대 파일 크기: 500KB 이하

### 3단계: 반응형 테스트 📱

#### 모바일 테스트 (< 768px)
- [ ] 텍스트가 읽기 쉬운지 확인
- [ ] 버튼/링크가 터치하기 쉬운 크기인지 확인
- [ ] 이미지가 화면에 맞게 조정되는지 확인
- [ ] 햄버거 메뉴가 정상 작동하는지 확인
- [ ] 스크롤이 부드럽게 작동하는지 확인
- [ ] 가로 스크롤이 발생하지 않는지 확인

**테스트 디바이스**:
- [ ] iPhone SE (375px × 667px)
- [ ] iPhone 12/13 (390px × 844px)
- [ ] Samsung Galaxy S20 (360px × 800px)

#### 태블릿 테스트 (768px - 1024px)
- [ ] 레이아웃이 2열 그리드로 잘 표시되는지 확인
- [ ] 네비게이션 메뉴가 정상 표시되는지 확인
- [ ] 카드/섹션 간격이 적절한지 확인

**테스트 디바이스**:
- [ ] iPad (768px × 1024px)
- [ ] iPad Pro (1024px × 1366px)

#### 데스크톱 테스트 (> 1024px)
- [ ] 레이아웃이 3열 그리드로 잘 표시되는지 확인
- [ ] 최대 너비가 적절하게 제한되는지 확인
- [ ] 와이드 스크린(1920px+)에서도 잘 보이는지 확인

**테스트 해상도**:
- [ ] 1366 × 768 (일반 노트북)
- [ ] 1920 × 1080 (Full HD)
- [ ] 2560 × 1440 (QHD)

#### 브라우저 호환성
- [ ] Chrome (최신 버전)
- [ ] Firefox (최신 버전)
- [ ] Safari (최신 버전)
- [ ] Edge (최신 버전)

### 4단계: 기능 테스트 ⚙️

#### 네비게이션
- [ ] 모든 네비게이션 링크가 올바른 섹션으로 이동하는지 확인
- [ ] 부드러운 스크롤이 작동하는지 확인
- [ ] 현재 섹션 하이라이트가 정확한지 확인
- [ ] 스크롤 시 네비게이션 바 배경이 변경되는지 확인

#### 모바일 메뉴
- [ ] 햄버거 버튼 클릭 시 메뉴가 열리는지 확인
- [ ] 메뉴 링크 클릭 시 메뉴가 자동으로 닫히는지 확인
- [ ] 메뉴 외부 클릭 시 메뉴가 닫히는지 확인

#### 인터랙션
- [ ] 버튼 호버 효과가 작동하는지 확인
- [ ] 카드 호버 효과가 작동하는지 확인
- [ ] 스킬 태그 호버 효과가 작동하는지 확인
- [ ] 프로젝트 이미지 호버 시 오버레이가 표시되는지 확인

#### 애니메이션
- [ ] 섹션 진입 시 fade-in 애니메이션이 작동하는지 확인
- [ ] 스크롤 다운 힌트 애니메이션이 작동하는지 확인
- [ ] 모든 애니메이션이 부드럽게 작동하는지 확인

### 5단계: SEO 최적화 🔍

#### 메타 태그 확인
- [ ] `<title>` 태그가 적절한지 확인 (50-60자 권장)
- [ ] `<meta name="description">` 태그가 있는지 확인 (150-160자 권장)
- [ ] `<meta name="keywords">` 태그가 관련 키워드를 포함하는지 확인
- [ ] `<meta name="author">` 태그가 정확한지 확인

#### Open Graph 태그 (SNS 공유 시)
- [ ] `og:title` - 제목이 정확한지 확인
- [ ] `og:description` - 설명이 매력적인지 확인
- [ ] `og:image` - 대표 이미지 URL 추가 (1200 × 630px 권장)
- [ ] `og:url` - 배포된 사이트 URL 추가
- [ ] `og:type` - "website"로 설정되었는지 확인

#### 추가할 Open Graph 태그 (선택)
```html
<!-- index.html의 11-13줄 수정 -->
<meta property="og:title" content="[본인 이름] - [직무]">
<meta property="og:description" content="[매력적인 한 줄 소개]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:image" content="https://yourdomain.com/assets/images/og-image.jpg">
```

#### Twitter Card 태그 (선택)
```html
<!-- index.html의 14줄 아래에 추가 -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[본인 이름] - [직무]">
<meta name="twitter:description" content="[한 줄 소개]">
<meta name="twitter:image" content="https://yourdomain.com/assets/images/og-image.jpg">
```

### 6단계: 성능 최적화 ⚡

#### 파일 크기 확인
- [ ] 전체 페이지 크기가 3MB 이하인지 확인
- [ ] 이미지 파일들이 적절히 압축되었는지 확인
- [ ] 불필요한 주석이나 코드가 제거되었는지 확인

#### 로딩 속도 테스트
**도구**:
- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/) - 90점 이상 목표
- [ ] [GTmetrix](https://gtmetrix.com/) - Grade A 목표
- [ ] [WebPageTest](https://www.webpagetest.org/)

**목표 지표**:
- [ ] First Contentful Paint (FCP) < 1.8초
- [ ] Largest Contentful Paint (LCP) < 2.5초
- [ ] Total Blocking Time (TBT) < 200ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

#### 추가 최적화 (선택)
- [ ] 이미지에 lazy loading 속성 추가: `loading="lazy"`
- [ ] 폰트 로딩 최적화: `font-display: swap`
- [ ] CDN 링크가 올바르게 로드되는지 확인

### 7단계: 접근성 테스트 ♿

#### 시맨틱 HTML
- [ ] 헤딩 태그(`<h1>`, `<h2>` 등)가 올바른 순서로 사용되었는지 확인
- [ ] 모든 이미지에 `alt` 속성이 있는지 확인
- [ ] 링크에 명확한 텍스트가 있는지 확인 ("여기 클릭" 대신 "프로젝트 보기")

#### 키보드 네비게이션
- [ ] `Tab` 키로 모든 인터랙티브 요소에 접근 가능한지 확인
- [ ] 포커스 표시가 명확한지 확인
- [ ] `Enter` 키로 링크/버튼 실행이 가능한지 확인

#### 색상 대비
- [ ] 텍스트와 배경의 색상 대비가 충분한지 확인 (WCAG AA 기준: 4.5:1)
- [ ] [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) 사용

#### 접근성 테스트 도구
- [ ] [WAVE](https://wave.webaim.org/) - 접근성 평가
- [ ] Chrome Lighthouse (Accessibility 점수 90점 이상 목표)

### 8단계: 보안 체크 🔒

#### HTTPS 사용
- [ ] 배포 후 HTTPS로 접근 가능한지 확인
- [ ] HTTP에서 HTTPS로 자동 리디렉션되는지 확인

#### 민감 정보
- [ ] API 키, 비밀번호 등이 코드에 노출되지 않았는지 확인
- [ ] `.env` 파일이 `.gitignore`에 포함되었는지 확인 (해당 시)
- [ ] 개인정보가 과도하게 노출되지 않았는지 확인

### 9단계: 파일 정리 📁

#### 불필요한 파일 제거
- [ ] 개발 중 생성된 테스트 파일 삭제
- [ ] 사용하지 않는 이미지 파일 삭제
- [ ] 주석으로 남은 샘플 코드 제거
- [ ] 로그 파일이나 임시 파일 삭제

#### Git 관리 (GitHub 배포 시)
- [ ] `.gitignore` 파일이 올바르게 설정되었는지 확인
- [ ] 불필요한 파일이 커밋되지 않았는지 확인
- [ ] README.md가 프로젝트를 명확히 설명하는지 확인

### 10단계: 최종 확인 ✨

#### 전체 사이트 점검
- [ ] 모든 섹션을 위에서 아래로 스크롤하며 확인
- [ ] 모든 링크를 클릭해서 작동 확인
- [ ] 다양한 디바이스에서 최종 테스트
- [ ] 친구나 동료에게 피드백 요청

#### 배포 전 마지막 체크
- [ ] 모든 변경사항이 저장되었는지 확인
- [ ] Git 커밋 및 푸시 완료 (GitHub 배포 시)
- [ ] 도메인 네임이 준비되었는지 확인 (커스텀 도메인 사용 시)

---

## 🚀 배포 방법

체크리스트를 모두 완료했다면, 이제 배포할 준비가 되었습니다!

### 옵션 1: GitHub Pages (무료, 가장 쉬움)

**단계**:

1. **GitHub 저장소 생성**:
   ```bash
   git init
   git add .
   git commit -m "feat: 첫 배포 - 웹 이력서 완성"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **GitHub Pages 활성화**:
   - GitHub 저장소 페이지로 이동
   - `Settings` → `Pages`
   - Source: `main` 브랜치 선택
   - 저장 후 5분 대기

3. **접속**:
   - `https://yourusername.github.io/portfolio/`

### 옵션 2: Vercel (무료, 자동 배포)

**단계**:

1. [Vercel](https://vercel.com/) 가입 (GitHub 계정 연동)
2. "Import Project" 클릭
3. GitHub 저장소 선택
4. "Deploy" 클릭
5. 완료! 자동으로 `https://yourproject.vercel.app` 생성

**장점**:
- Git push 시 자동 배포
- 무료 SSL 인증서
- 빠른 CDN

### 옵션 3: Netlify (무료, Drag & Drop 지원)

**방법 1: Drag & Drop**:
1. [Netlify](https://www.netlify.com/) 가입
2. "Sites" → "Add new site" → "Deploy manually"
3. 프로젝트 폴더를 드래그 앤 드롭
4. 완료!

**방법 2: Git 연동**:
1. "Import from Git" 선택
2. GitHub 저장소 연결
3. "Deploy site" 클릭

### 커스텀 도메인 연결 (선택)

**도메인 구매**:
- [Namecheap](https://www.namecheap.com/)
- [GoDaddy](https://www.godaddy.com/)
- [Google Domains](https://domains.google/)

**연결 방법**:
- **GitHub Pages**: 저장소에 `CNAME` 파일 추가
- **Vercel/Netlify**: 대시보드에서 "Add custom domain" 클릭

---

## 📊 배포 후 체크리스트

배포가 완료되었다면:

- [ ] 배포된 URL에서 웹사이트가 정상 작동하는지 확인
- [ ] HTTPS가 적용되었는지 확인
- [ ] 모바일에서 접속해서 테스트
- [ ] Google Analytics 또는 Vercel Analytics 설정 (선택)
- [ ] Google Search Console에 사이트 등록 (선택)
- [ ] SNS에 공유 및 og:image 확인

---

## 🎯 성능 목표

배포 후 다음 지표를 달성했는지 확인하세요:

### Google Lighthouse 점수

- **Performance**: 90점 이상
- **Accessibility**: 90점 이상
- **Best Practices**: 90점 이상
- **SEO**: 90점 이상

### 로딩 속도

- **First Contentful Paint**: 1.8초 이하
- **Speed Index**: 3.4초 이하
- **Time to Interactive**: 3.8초 이하
- **Total Page Size**: 3MB 이하

---

## 🔧 문제 해결

### 배포했는데 스타일이 깨짐
- **원인**: 경로 문제
- **해결**: 모든 경로를 상대 경로로 변경 (`/css/style.css` → `css/style.css`)

### 이미지가 안 보임
- **원인**: 이미지 경로 또는 대소문자 문제
- **해결**: 파일명과 경로의 대소문자 일치 확인

### HTTPS 연결이 안 됨
- **원인**: SSL 인증서 생성 중
- **해결**: 배포 후 5-10분 대기

### 모바일에서 레이아웃 깨짐
- **원인**: `viewport` 메타 태그 누락
- **해결**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` 확인

---

## 📝 유지보수 가이드

배포 후에도 주기적으로:

- [ ] **월 1회**: 기술 스택 업데이트
- [ ] **프로젝트 완료 시**: Projects 섹션에 새 프로젝트 추가
- [ ] **이직 시**: Experience 섹션 업데이트
- [ ] **분기 1회**: 링크 확인 및 깨진 링크 수정
- [ ] **반기 1회**: 디자인 개선 및 최신 트렌드 반영

---

## 🎉 완료!

모든 체크리스트를 완료했다면, 이제 여러분의 멋진 웹 이력서를 세상에 공유할 준비가 되었습니다!

**다음 단계**:
1. SNS에 공유하기
2. LinkedIn 프로필에 링크 추가
3. GitHub 프로필 README에 포트폴리오 링크 추가
4. 이력서에 웹사이트 URL 추가

---

**제작자**: 조창완
**최종 수정**: 2024년 1월
**버전**: 1.0.0
