# 빠른 시작 가이드

완성된 프로필 웹사이트를 본인의 정보로 수정하고 배포하는 **5단계 가이드**입니다.

---

## 🎯 현재 상태

✅ **완성된 웹사이트** - 즉시 사용 가능한 반응형 웹 이력서
✅ **샘플 데이터 포함** - "조창완" 개발자 프로필 예시
✅ **모든 기능 작동** - 애니메이션, 반응형, 모바일 메뉴 등

---

## 📁 프로젝트 구조

```
/work_space/
├── index.html              ⭐ 메인 파일 (수정 대상)
├── css/
│   └── style.css          (수정 불필요)
├── js/
│   └── main.js            (수정 불필요)
├── assets/
│   ├── images/            (프로젝트 이미지 추가)
│   └── icons/
├── USER_GUIDE.md          📖 상세 수정 가이드
├── DEPLOYMENT_CHECKLIST.md 📋 배포 체크리스트
├── ROADMAP.md             (개발 계획서)
├── CLAUDE.md              (프로젝트 가이드)
└── README.md              (프로젝트 설명)
```

---

## 🚀 5단계로 시작하기

### STEP 1: 웹사이트 확인하기 (2분)

**방법 1 - 간단 확인**:
```
1. index.html 파일 더블클릭
2. 브라우저에서 자동으로 열림
3. 스크롤하며 현재 상태 확인
```

**방법 2 - Live Server (권장)**:
```
1. VS Code 설치
2. "Live Server" 확장 프로그램 설치
3. index.html 우클릭 → "Open with Live Server"
```

### STEP 2: 기본 정보 수정하기 (10분)

`index.html` 파일을 텍스트 편집기로 열고 다음 항목을 수정하세요:

| 위치 | 줄 번호 | 수정 항목 | 현재 값 |
|-----|--------|---------|--------|
| 메타 태그 | 6-15 | 제목, 설명 | 조창완 - Frontend Developer |
| Hero 섹션 | 114 | 이름 | 조창완 |
| Hero 섹션 | 107 | 직무 | Frontend Developer |
| Contact | 508 | 이메일 | changwan@example.com |
| Contact | 519 | 전화번호 | +82 10-1234-5678 |

**💡 팁**: `Ctrl+F` (또는 `Cmd+F`)로 "조창완"을 검색하여 한 번에 찾을 수 있습니다.

### STEP 3: 상세 콘텐츠 수정하기 (30분)

순서대로 각 섹션을 수정하세요:

1. **About Me** (173-220줄)
   - 자기소개 2-3단락
   - 강점 3가지 (제목 + 설명)

2. **Skills** (244-283줄)
   - Frontend 기술 목록
   - Backend 기술 목록
   - Tools 목록

3. **Experience** (304-369줄)
   - 회사명, 직무, 기간
   - 주요 성과 4-5개

4. **Projects** (390-477줄)
   - 프로젝트 이름, 설명
   - 기술 스택
   - GitHub/Demo 링크

5. **Contact** (528-534줄)
   - GitHub, LinkedIn, Blog URL

**📖 더 자세한 수정 방법**: [USER_GUIDE.md](USER_GUIDE.md) 참고

### STEP 4: 배포 전 확인하기 (15분)

[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)를 열고 다음 항목을 확인:

**필수 체크**:
- [ ] 모든 개인 정보 수정 완료
- [ ] 링크가 실제 URL로 교체됨
- [ ] 모바일/태블릿/데스크톱 테스트
- [ ] Chrome, Firefox, Safari 브라우저 테스트
- [ ] 이미지 최적화 (각 이미지 < 500KB)

**성능 테스트**:
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) 90점 이상
- [ ] 페이지 로딩 속도 3초 이내

### STEP 5: 배포하기 (10분)

#### 옵션 A: GitHub Pages (무료, 추천)

```bash
# 1. Git 초기화
cd /Users/changwanjo/Desktop/Cwys/claude_vibe/work_space
git init
git add .
git commit -m "feat: 웹 이력서 첫 배포"

# 2. GitHub 저장소 생성 후 푸시
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main

# 3. GitHub Settings → Pages → main 브랜치 선택
# 5분 후 https://yourusername.github.io/portfolio/ 접속
```

#### 옵션 B: Vercel (무료, 가장 빠름)

```
1. https://vercel.com 가입 (GitHub 계정 연동)
2. "Import Project" 클릭
3. GitHub 저장소 선택
4. "Deploy" 클릭
5. 완료! (자동으로 URL 생성)
```

#### 옵션 C: Netlify (무료, Drag & Drop)

```
1. https://netlify.com 가입
2. "Sites" → "Add new site" → "Deploy manually"
3. 프로젝트 폴더를 드래그 앤 드롭
4. 완료!
```

---

## 📊 웹사이트 섹션 구조

| 섹션 | 내용 | 샘플 데이터 |
|-----|------|-----------|
| **Navigation** | 상단 메뉴 | 로고 + 6개 링크 |
| **Hero** | 메인 소개 | 이름, 직무, 소개, 통계 (3년+, 50+ 프로젝트) |
| **About Me** | 자기소개 | 2단락 소개 + 3가지 강점 |
| **Skills** | 기술 스택 | Frontend 8개, Backend 6개, Tools 6개 |
| **Experience** | 경력 | 2개 회사 (ABC 테크, XYZ 스타트업) |
| **Projects** | 프로젝트 | 3개 프로젝트 (E-커머스, 날씨앱, TODO) |
| **Contact** | 연락처 | 이메일, 전화, SNS 링크 |
| **Footer** | 하단 | 저작권, 기술 스택 |

---

## 🎨 디자인 특징

- **다크 테마**: 검정 배경 + 오렌지(#FF5722) 포인트
- **반응형**: 모바일/태블릿/데스크톱 완벽 지원
- **애니메이션**: Fade-in, Scale-up, Smooth scroll
- **모바일 메뉴**: 햄버거 버튼 + 자동 닫기
- **폰트**: Inter (본문) + Space Grotesk (헤딩)

---

## 🔧 자주 수정하는 항목

### 이름 변경
```html
<!-- 검색: "조창완" (총 7곳) -->
1. index.html L6 (메타 태그)
2. index.html L8 (author)
3. index.html L11 (og:title)
4. index.html L15 (title)
5. index.html L114 (Hero 섹션)
6. index.html L173 (About 섹션)
7. index.html L551 (Footer)
```

### 직무 변경
```html
<!-- 검색: "Frontend Developer" (총 4곳) -->
1. index.html L6 (메타 태그)
2. index.html L11 (og:title)
3. index.html L15 (title)
4. index.html L107 (Hero 배지)
```

### 색상 테마 변경
```html
<!-- index.html L29-30 -->
orange: '#FF5722',       // 메인 색상
orangeHover: '#FF6B35',  // 호버 색상

<!-- 추천 색상 -->
파란색: #3B82F6, #60A5FA
초록색: #10B981, #34D399
보라색: #8B5CF6, #A78BFA
```

### 프로젝트 이미지 변경
```html
<!-- index.html L392, L422, L452 -->
<!-- 현재 -->
<img src="https://picsum.photos/seed/project1/600/400" alt="프로젝트 1">

<!-- 수정 후 -->
<img src="assets/images/project1.png" alt="프로젝트 1">
```

---

## 💡 유용한 팁

### 텍스트 찾기
- **VS Code**: `Ctrl+F` (Windows) / `Cmd+F` (Mac)
- **특정 줄로 이동**: `Ctrl+G` (Windows) / `Cmd+G` (Mac)

### 브라우저 새로고침
- **일반**: `F5` 또는 `Ctrl+R`
- **캐시 무시**: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)

### 반응형 테스트
- **개발자 도구**: `F12` 키
- **디바이스 모드**: `Ctrl+Shift+M` (Windows) / `Cmd+Shift+M` (Mac)

### 코드 정렬
- **VS Code**: `Shift+Alt+F` (Windows) / `Shift+Option+F` (Mac)

---

## 📚 참고 문서

| 문서 | 설명 | 용도 |
|-----|------|------|
| **USER_GUIDE.md** | 상세 수정 가이드 | 각 섹션별 자세한 수정 방법 |
| **DEPLOYMENT_CHECKLIST.md** | 배포 체크리스트 | 배포 전 필수 확인 사항 |
| **ROADMAP.md** | 개발 로드맵 | 프로젝트 개발 단계 |
| **CLAUDE.md** | 프로젝트 가이드 | 기술 스택 및 개발 규칙 |
| **README.md** | 프로젝트 설명 | 프로젝트 개요 |

---

## ❓ 자주 묻는 질문

### Q: 수정했는데 변경사항이 안 보여요
**A**: 브라우저 캐시 문제입니다. `Ctrl+Shift+R`로 하드 새로고침하세요.

### Q: 섹션을 추가/삭제하고 싶어요
**A**: `<section>` 블록 전체를 복사/붙여넣기 또는 삭제하면 됩니다.

### Q: 영문으로 바꾸고 싶어요
**A**: 한글 텍스트를 모두 영문으로 교체하면 됩니다. 구조는 동일합니다.

### Q: 프로젝트를 4개 이상 추가하려면?
**A**: 프로젝트 카드 블록(390-417줄)을 복사해서 계속 추가하세요.

### Q: 다크모드가 아닌 라이트 테마로 바꾸려면?
**A**: index.html 26-33줄의 색상 값을 밝은 색으로 변경하세요.

---

## 🎯 다음 단계

1. ✅ [USER_GUIDE.md](USER_GUIDE.md) - 상세 수정 가이드
2. ✅ [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - 배포 전 체크
3. ✅ 배포 후 SNS 공유
4. ✅ LinkedIn, GitHub 프로필에 링크 추가

---

## 📞 도움이 필요하신가요?

- **Font Awesome 아이콘**: https://fontawesome.com/icons
- **TailwindCSS 문서**: https://tailwindcss.com
- **Google Fonts**: https://fonts.google.com
- **색상 도구**: https://coolors.co
- **이미지 최적화**: https://tinypng.com

---

## 🎉 완료!

이제 여러분만의 멋진 웹 이력서를 만들 준비가 되었습니다!

**작업 순서**:
1. ⏱️ **10분**: 기본 정보 수정 (이름, 직무, 연락처)
2. ⏱️ **30분**: 상세 콘텐츠 수정 (소개, 기술, 경력, 프로젝트)
3. ⏱️ **15분**: 배포 전 체크리스트 확인
4. ⏱️ **10분**: GitHub Pages/Vercel/Netlify 배포

**총 소요 시간**: 약 1시간

---

**제작자**: 조창완
**최종 수정**: 2024년 1월
**버전**: 1.0.0
**라이선스**: MIT

🚀 **행운을 빕니다!**
