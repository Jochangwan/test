# 사용자 수정 가이드

이 가이드는 현재 완성된 웹 이력서의 **샘플 데이터를 본인의 정보로 수정**하는 방법을 안내합니다.

---

## 📋 목차

1. [시작하기 전에](#시작하기-전에)
2. [수정할 정보 준비](#수정할-정보-준비)
3. [단계별 수정 가이드](#단계별-수정-가이드)
4. [파일별 수정 위치](#파일별-수정-위치)
5. [이미지 추가 방법](#이미지-추가-방법)
6. [웹사이트 확인 방법](#웹사이트-확인-방법)
7. [자주 묻는 질문](#자주-묻는-질문)

---

## 시작하기 전에

### 현재 웹사이트 상태

✅ **완성된 기능**
- 7개 섹션: Hero, About Me, Skills, Experience, Projects, Contact, Footer
- 반응형 디자인 (모바일/태블릿/데스크톱)
- 부드러운 스크롤 애니메이션
- 모바일 햄버거 메뉴
- 다크 테마 + 오렌지 포인트 컬러

📝 **현재 샘플 데이터**
- 이름: 조창완
- 직업: Frontend Developer
- 경력: 3년 (샘플 회사 2곳)
- 프로젝트: 3개 샘플 프로젝트

### 필요한 도구

- 텍스트 편집기 (VS Code 권장, 메모장도 가능)
- 웹 브라우저 (Chrome, Firefox, Safari, Edge 등)

---

## 수정할 정보 준비

수정을 시작하기 전에 다음 정보를 미리 준비해두세요:

### 1. 기본 정보
- [ ] 본인 이름
- [ ] 직업/역할 (예: 프론트엔드 개발자, 백엔드 개발자, 풀스택 개발자, 학생 등)
- [ ] 짧은 소개 문구 (2-3줄)
- [ ] 이메일 주소
- [ ] 전화번호

### 2. 자기소개 (About Me)
- [ ] 상세 자기소개 (2-3단락)
- [ ] 주요 강점 3가지
  - 각 강점의 제목
  - 각 강점의 설명 (1-2문장)

### 3. 기술 스택 (Skills)
- [ ] Frontend 기술 목록
- [ ] Backend 기술 목록
- [ ] 사용하는 도구/툴 목록

### 4. 경력 사항 (Experience)
각 경력마다:
- [ ] 회사명
- [ ] 직무/포지션
- [ ] 근무 기간 (예: 2020.03 - 2022.12)
- [ ] 주요 성과 또는 담당 업무 (3-5개)

### 5. 프로젝트 (Projects)
각 프로젝트마다:
- [ ] 프로젝트 이름
- [ ] 프로젝트 설명 (1-2문장)
- [ ] 사용 기술 스택
- [ ] GitHub 링크 (선택)
- [ ] 데모/배포 링크 (선택)
- [ ] 프로젝트 스크린샷 (선택)

### 6. SNS 링크
- [ ] GitHub 프로필 URL
- [ ] LinkedIn 프로필 URL
- [ ] 기술 블로그 URL (선택)

---

## 단계별 수정 가이드

### STEP 1: index.html 파일 열기

1. 파일 탐색기에서 다음 경로로 이동:
   ```
   /Users/changwanjo/Desktop/Cwys/claude_vibe/work_space/index.html
   ```

2. 파일을 텍스트 편집기로 열기:
   - **VS Code 사용 시**: 우클릭 → "Open with Code"
   - **메모장 사용 시**: 우클릭 → "연결 프로그램" → "메모장"

### STEP 2: 기본 정보 수정 (5분 소요)

#### 2-1. 페이지 제목 및 메타 태그 (6-15줄)
```html
<!-- 수정 전 -->
<meta name="description" content="조창완 - Frontend Developer 웹 이력서">
<meta name="author" content="조창완">
<meta property="og:title" content="조창완 - Frontend Developer">
<title>조창완 - Frontend Developer</title>

<!-- 수정 후 (예시) -->
<meta name="description" content="홍길동 - Backend Developer 웹 이력서">
<meta name="author" content="홍길동">
<meta property="og:title" content="홍길동 - Backend Developer">
<title>홍길동 - Backend Developer</title>
```

#### 2-2. 네비게이션 로고 (63줄)
```html
<!-- 수정 전 -->
CWJ<span class="text-orange">.</span>

<!-- 수정 후 (예시 - 본인 이니셜로) -->
HGD<span class="text-orange">.</span>
```

### STEP 3: Hero 섹션 수정 (10분 소요)

#### 3-1. 직무 배지 (107줄)
```html
<!-- 수정 전 -->
Frontend Developer

<!-- 수정 후 (본인 직무로) -->
Backend Developer
```

#### 3-2. 메인 이름 (114줄)
```html
<!-- 수정 전 -->
<span class="text-orange">조창완</span>입니다.

<!-- 수정 후 -->
<span class="text-orange">홍길동</span>입니다.
```

#### 3-3. 소개 문구 (119-120줄)
```html
<!-- 수정 전 -->
사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성합니다.<br class="hidden md:block">
최신 기술을 활용하여 인터랙티브하고 반응형인 웹 애플리케이션을 만듭니다.

<!-- 수정 후 (예시) -->
확장 가능하고 안정적인 서버 아키텍처를 설계하고 구축합니다.<br class="hidden md:block">
데이터베이스 최적화와 API 설계에 열정을 가지고 있습니다.
```

#### 3-4. 통계 정보 (138, 142, 146줄)
```html
<!-- 경력 년수 (138줄) -->
<h3 class="text-4xl md:text-5xl font-bold text-orange mb-2">3+</h3>

<!-- 프로젝트 수 (142줄) -->
<h3 class="text-4xl md:text-5xl font-bold text-orange mb-2">50+</h3>

<!-- 기술 스택 수 (146줄) -->
<h3 class="text-4xl md:text-5xl font-bold text-orange mb-2">10+</h3>

<!-- 본인의 실제 수치로 변경하세요 -->
```

### STEP 4: About Me 섹션 수정 (15분 소요)

#### 4-1. 자기소개 내용 (173-180줄)
```html
<!-- 173-180줄 전체를 본인의 소개로 교체 -->
<p class="text-xl md:text-2xl text-textGray leading-relaxed mb-8 font-light">
    [본인의 자기소개 1단락]
</p>
<p class="text-lg md:text-xl text-textGray leading-relaxed font-light">
    [본인의 자기소개 2단락]
</p>
```

#### 4-2. 강점 카드 1 (190-194줄)
```html
<h3 class="text-2xl font-bold mb-4 text-textWhite">UI/UX Design</h3>
<p class="text-textGray font-light leading-relaxed">
    사용자 중심의 직관적이고 아름다운 인터페이스를 디자인하고 구현합니다.
</p>

<!-- 아이콘 변경을 원하면 187줄의 fa-palette를 다른 아이콘으로 변경 -->
<!-- Font Awesome 아이콘: https://fontawesome.com/icons -->
```

#### 4-3. 강점 카드 2, 3 (202-206줄, 214-218줄)
- 카드 2: 202-206줄
- 카드 3: 214-218줄
- 같은 방식으로 제목과 설명을 수정하세요

### STEP 5: Skills 섹션 수정 (10분 소요)

#### 5-1. Frontend 기술 (244-251줄)
```html
<!-- 기존 스킬 태그 -->
<span class="px-6 py-3 bg-cardDark border border-borderDark text-textGray font-medium rounded-lg hover:border-orange hover:text-textWhite transition-all duration-300 cursor-pointer">HTML5</span>

<!-- 스킬 추가/삭제/수정 -->
<!-- 태그 전체를 복사해서 새로운 기술 추가 가능 -->
<!-- 필요없는 태그는 삭제 -->
```

#### 5-2. Backend 기술 (262-267줄)
- Frontend와 동일한 방식으로 수정

#### 5-3. Tools & Others (278-283줄)
- Frontend와 동일한 방식으로 수정

### STEP 6: Experience 섹션 수정 (20분 소요)

#### 6-1. 경력 1 (304-334줄)
```html
<!-- 회사명 (307줄) -->
<h3 class="text-2xl md:text-3xl font-bold text-textWhite mb-2">ABC 테크 주식회사</h3>

<!-- 직무 (308줄) -->
<h4 class="text-lg text-orange font-semibold">Frontend Developer</h4>

<!-- 근무 기간 (312줄) -->
<span class="inline-block px-4 py-2 bg-orange/10 text-orange text-sm font-medium rounded-lg border border-orange/20">
    2022.03 - 현재
</span>

<!-- 주요 성과 (318-333줄) -->
<li class="flex items-start gap-3">
    <i class="fas fa-check text-orange mt-1 flex-shrink-0"></i>
    <span>[성과 내용]</span>
</li>
<!-- 이 블록을 복사해서 성과를 추가하거나 삭제 가능 -->
```

#### 6-2. 경력 2 (338-369줄)
- 경력 1과 동일한 방식으로 수정
- 경력이 더 있다면 전체 블록(338-369줄)을 복사해서 아래에 추가
- 경력이 1개만 있다면 338-369줄을 삭제

### STEP 7: Projects 섹션 수정 (30분 소요)

#### 7-1. 프로젝트 카드 1 (390-417줄)
```html
<!-- 프로젝트 이미지 (392줄) -->
<img src="https://picsum.photos/seed/project1/600/400" alt="프로젝트 1">
<!-- 본인의 이미지로 교체: src="assets/images/project1.png" -->

<!-- GitHub 링크 (395줄) -->
<a href="https://github.com" target="_blank">
<!-- 실제 GitHub 저장소 URL로 변경 -->

<!-- 데모 링크 (398줄) -->
<a href="#" target="_blank">
<!-- 실제 배포된 사이트 URL로 변경 -->

<!-- 프로젝트 제목 (406줄) -->
<h3 class="text-xl font-bold text-textWhite mb-3">E-커머스 플랫폼</h3>

<!-- 프로젝트 설명 (407-409줄) -->
<p class="text-textGray mb-6 leading-relaxed text-sm">
    React와 TypeScript로 구축한 전자상거래 웹 애플리케이션입니다.
</p>

<!-- 기술 스택 태그 (412-414줄) -->
<span class="px-3 py-1.5 bg-dark border border-borderDark text-textGray text-xs font-medium rounded-lg">React</span>
<!-- 사용한 기술로 변경하고, 필요에 따라 추가/삭제 -->
```

#### 7-2. 프로젝트 카드 2, 3 수정
- 프로젝트 2: 420-446줄
- 프로젝트 3: 450-477줄
- 같은 방식으로 수정

#### 7-3. 프로젝트 추가/삭제
```html
<!-- 프로젝트 추가: 390-417줄 전체 블록을 복사해서 477줄 아래에 붙여넣기 -->
<!-- 프로젝트 삭제: 해당 카드 블록(예: 450-477줄) 전체 삭제 -->
```

### STEP 8: Contact 섹션 수정 (5분 소요)

#### 8-1. 이메일 (508줄)
```html
<!-- 수정 전 -->
<a href="mailto:changwan@example.com" class="...">
    changwan@example.com
</a>

<!-- 수정 후 -->
<a href="mailto:hong@example.com" class="...">
    hong@example.com
</a>
```

#### 8-2. 전화번호 (519줄)
```html
<!-- 수정 전 -->
<a href="tel:+821012345678" class="...">
    +82 10-1234-5678
</a>

<!-- 수정 후 -->
<a href="tel:+821098765432" class="...">
    +82 10-9876-5432
</a>
```

#### 8-3. SNS 링크 (528, 531, 534줄)
```html
<!-- GitHub (528줄) -->
<a href="https://github.com/yourusername" target="_blank">

<!-- LinkedIn (531줄) -->
<a href="https://linkedin.com/in/yourprofile" target="_blank">

<!-- Blog (534줄) -->
<a href="https://yourblog.com" target="_blank">
```

### STEP 9: Footer 수정 (2분 소요)

#### 9-1. 로고/이름 (548줄)
```html
<!-- 수정 전 -->
CWJ<span class="text-orange">.</span>

<!-- 수정 후 (본인 이니셜로) -->
HGD<span class="text-orange">.</span>
```

#### 9-2. 저작권 표시 (551줄)
```html
<!-- 수정 전 -->
&copy; 2024 조창완. All Rights Reserved.

<!-- 수정 후 -->
&copy; 2024 홍길동. All Rights Reserved.
```

### STEP 10: 저장 및 확인

1. **파일 저장**: `Ctrl+S` (Windows/Linux) 또는 `Cmd+S` (Mac)
2. **브라우저에서 열기**:
   - `index.html` 파일을 더블클릭
   - 또는 브라우저에 파일을 드래그 앤 드롭
3. **수정 사항 확인**: 각 섹션을 스크롤하며 변경 내용 확인
4. **모바일 확인**: 브라우저 개발자 도구(F12)에서 반응형 테스트

---

## 파일별 수정 위치

### index.html (주요 수정 대상)

| 섹션 | 줄 번호 | 수정 항목 |
|-----|--------|---------|
| **메타 태그** | 6-15 | 제목, 설명, Open Graph |
| **네비게이션** | 63 | 로고/이니셜 |
| **Hero** | 107-148 | 직무, 이름, 소개, 통계 |
| **About Me** | 173-220 | 자기소개, 강점 3가지 |
| **Skills** | 244-283 | Frontend/Backend/Tools 기술 목록 |
| **Experience** | 304-369 | 경력 정보 (2개) |
| **Projects** | 390-477 | 프로젝트 정보 (3개) |
| **Contact** | 508-534 | 이메일, 전화, SNS 링크 |
| **Footer** | 548-551 | 로고, 저작권 |

### css/style.css (선택적 수정)

색상 변경을 원할 경우에만 수정:

```css
/* 메인 오렌지 색상 변경 */
--color-orange: #FF5722;  /* 원하는 색상 코드로 변경 */
```

### js/main.js (수정 불필요)

JavaScript 파일은 수정할 필요가 없습니다. 모든 기능이 자동으로 작동합니다.

---

## 이미지 추가 방법

### 프로젝트 이미지 추가

1. **이미지 파일 준비**:
   - 권장 크기: 600px × 400px
   - 형식: JPG 또는 PNG (WebP 권장)
   - 파일명: `project1.png`, `project2.png` 등

2. **이미지 저장 위치**:
   ```
   /assets/images/
   ├── project1.png
   ├── project2.png
   └── project3.png
   ```

3. **HTML 수정**:
   ```html
   <!-- 수정 전 (392줄) -->
   <img src="https://picsum.photos/seed/project1/600/400" alt="프로젝트 1">

   <!-- 수정 후 -->
   <img src="assets/images/project1.png" alt="프로젝트 1">
   ```

### 프로필 이미지 추가 (선택)

Hero 섹션에 프로필 사진을 추가하려면:

```html
<!-- 113줄 위에 추가 -->
<img src="assets/images/profile.jpg" alt="프로필 사진"
     class="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-orange/20">
```

---

## 웹사이트 확인 방법

### 방법 1: 브라우저에서 직접 열기 (가장 간단)

1. 파일 탐색기에서 `index.html` 찾기
2. 파일을 더블클릭
3. 기본 브라우저에서 자동으로 열림

### 방법 2: VS Code Live Server 사용 (권장)

1. VS Code 확장 프로그램 설치:
   - 좌측 확장 아이콘 클릭
   - "Live Server" 검색 및 설치

2. index.html 파일에서:
   - 우클릭 → "Open with Live Server"
   - 또는 하단 "Go Live" 버튼 클릭

3. 자동으로 `http://localhost:5500`에서 열림

### 방법 3: Python 간단 서버

터미널에서:
```bash
cd /Users/changwanjo/Desktop/Cwys/claude_vibe/work_space
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속

### 반응형 테스트

1. 브라우저에서 `F12` 키 누르기 (개발자 도구)
2. 상단의 디바이스 아이콘 클릭
3. 다양한 디바이스 크기로 테스트:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

---

## 자주 묻는 질문

### Q1: 섹션 순서를 바꾸고 싶어요

**A**: HTML에서 `<section>` 블록 전체를 잘라내기(`Ctrl+X`)하고 원하는 위치에 붙여넣기(`Ctrl+V`)하세요.

예: Projects를 Experience 위로 이동하려면:
1. 375-481줄(Projects 섹션) 잘라내기
2. 290줄(Experience 시작 전)에 붙여넣기

### Q2: 섹션을 완전히 삭제하고 싶어요

**A**: 해당 섹션의 `<section>` 태그부터 `</section>`까지 전체 삭제하세요.

예: Experience 섹션 삭제 → 290-372줄 전체 삭제

### Q3: 색상 테마를 바꾸고 싶어요

**A**: index.html의 21-42줄(TailwindCSS 설정)에서 색상 변경:

```javascript
colors: {
    orange: '#FF5722',       // 메인 색상 변경
    orangeHover: '#FF6B35',  // 호버 색상 변경
}
```

추천 색상 조합:
- 파란색 테마: `#3B82F6`, `#60A5FA`
- 초록색 테마: `#10B981`, `#34D399`
- 보라색 테마: `#8B5CF6`, `#A78BFA`

### Q4: 프로젝트를 4개 이상 추가하고 싶어요

**A**: 프로젝트 카드 1개 블록(390-417줄)을 복사해서 477줄 아래에 계속 붙여넣으세요.

그리드는 자동으로 3열씩 배치됩니다.

### Q5: 영문 이름으로 바꾸고 싶어요

**A**: 한글로 된 모든 텍스트를 영문으로 교체하면 됩니다.

예:
```html
<!-- 한글 -->
안녕하세요, 저는 <span class="text-orange">조창완</span>입니다.

<!-- 영문 -->
Hello, I'm <span class="text-orange">Changwan Jo</span>.
```

### Q6: 폰트를 변경하고 싶어요

**A**: Google Fonts에서 원하는 폰트를 선택하고:

1. 50줄의 Google Fonts 링크 변경
2. 36-37줄의 폰트 패밀리 이름 변경

### Q7: 다크모드가 아닌 라이트 테마로 바꾸고 싶어요

**A**: index.html의 26-33줄 색상 설정 변경:

```javascript
colors: {
    dark: '#FFFFFF',         // 배경을 흰색으로
    darkGray: '#F9FAFB',     // 밝은 회색
    cardDark: '#FFFFFF',     // 카드도 흰색
    textWhite: '#1F2937',    // 텍스트를 어두운 회색으로
    textGray: '#6B7280',     // 회색 텍스트
}
```

### Q8: 애니메이션을 끄고 싶어요

**A**: css/style.css 파일에서 애니메이션 관련 코드를 주석 처리하거나 삭제하세요.

### Q9: 이력서 다운로드 버튼을 작동시키고 싶어요

**A**: 129줄의 링크를 PDF 파일 경로로 변경:

```html
<!-- 수정 전 -->
<a href="#" class="...">

<!-- 수정 후 -->
<a href="assets/resume.pdf" download class="...">
```

그리고 `assets/` 폴더에 `resume.pdf` 파일을 추가하세요.

### Q10: 수정했는데 변경사항이 안 보여요

**A**: 브라우저 캐시 문제일 수 있습니다:

1. **하드 새로고침**: `Ctrl+Shift+R` (Windows) 또는 `Cmd+Shift+R` (Mac)
2. **캐시 삭제**: `Ctrl+Shift+Delete` → 캐시 지우기
3. **시크릿 모드**: 새 시크릿 창에서 열어보기

---

## 다음 단계

수정을 완료했다면:

1. ✅ [배포 체크리스트](DEPLOYMENT_CHECKLIST.md) 확인
2. ✅ 모든 디바이스에서 테스트
3. ✅ GitHub Pages, Vercel, Netlify 중 하나로 배포

---

**도움이 필요하신가요?**

- 프로젝트 이슈: [GitHub Issues](https://github.com/yourusername/yourrepo/issues)
- 웹 개발 질문: [Stack Overflow](https://stackoverflow.com/)
- TailwindCSS 문서: [tailwindcss.com](https://tailwindcss.com/)
- Font Awesome 아이콘: [fontawesome.com](https://fontawesome.com/)

---

**제작자**: 조창완
**최종 수정**: 2024년 1월
**버전**: 1.0.0
