# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

이 저장소는 **HTML, CSS, JavaScript, TailwindCSS**를 사용하여 제작하는 **반응형 개발자 웹 이력서** 프로젝트입니다.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS - 프레임워크 없음)
- **Styling**: TailwindCSS
- **배포**: GitHub Pages / Vercel / Netlify

## 프로젝트 구조

```
portfolio/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 커스텀 CSS 스타일
├── js/
│   └── main.js            # JavaScript 로직
├── assets/
│   ├── images/            # 이미지 파일
│   └── icons/             # 아이콘 파일
├── ROADMAP.md             # 개발 로드맵
└── README.md              # 프로젝트 설명서
```

## 주요 섹션 구조

웹 이력서는 다음 섹션들로 구성됩니다:

1. **Hero 섹션**: 프로필 이미지, 이름, 직무, 소개 문구, CTA 버튼
2. **About Me**: 자기소개, 강점, SNS 링크
3. **Skills**: 기술 스택 카테고리별 분류 및 숙련도 표시
4. **Experience**: 경력 타임라인 (회사명, 직무, 기간, 주요 성과)
5. **Projects**: 프로젝트 카드 그리드 (썸네일, 설명, 기술 스택, 링크)
6. **Education**: 학력 및 자격증
7. **Contact**: 연락처 정보 및 SNS 링크

## 개발 가이드라인

### TailwindCSS 사용

- TailwindCSS는 CDN 또는 빌드 시스템으로 설정
- 유틸리티 클래스 우선 사용
- 커스텀 스타일은 `css/style.css`에 작성
- 프로덕션 빌드 시 Purge 설정으로 미사용 스타일 제거

### JavaScript 구현 패턴

- **Vanilla JavaScript** 사용 (프레임워크 없음)
- Intersection Observer API를 활용한 스크롤 애니메이션
- 주요 기능:
  - 네비게이션 스크롤 연동
  - 부드러운 스크롤 (Smooth Scroll)
  - 모바일 햄버거 메뉴 토글
  - 섹션 진입 시 애니메이션 트리거
  - 현재 섹션 하이라이트

### 반응형 디자인

- **모바일 우선(Mobile-first)** 접근 방식
- 브레이크포인트:
  - 모바일: `< 768px`
  - 태블릿: `768px - 1024px`
  - 데스크톱: `> 1024px`

### 색상 테마

기본 색상 팔레트 (커스터마이징 가능):
- Primary: `#3B82F6` (Blue)
- Secondary: `#10B981` (Green)
- Accent: `#F59E0B` (Amber)
- Background: `#F9FAFB` (Light Gray)
- Text: `#1F2937` (Dark Gray)

## 개발 워크플로우

### 로드맵 참조

모든 개발은 `ROADMAP.md`의 8단계 계획을 따릅니다:

1. Phase 1: 프로젝트 초기 설정
2. Phase 2: 레이아웃 및 기본 구조
3. Phase 3: 각 섹션 상세 개발
4. Phase 4: 인터랙티브 기능
5. Phase 5: 스타일링 및 디자인 개선
6. Phase 6: 최적화 및 성능 개선
7. Phase 7: 배포 및 테스트
8. Phase 8: 유지보수 및 추가 기능

### 성능 최적화

- 이미지 최적화: WebP 포맷 사용, 압축
- Lazy loading 적용
- CSS/JS 파일 minify
- Lighthouse 성능 점수 90점 이상 목표

### 접근성 (Accessibility)

- 시맨틱 HTML 사용
- ARIA 속성 적절히 추가
- 키보드 네비게이션 지원
- 충분한 색상 대비

## 배포

- **GitHub Pages**: 정적 호스팅
- **Vercel/Netlify**: 자동 배포 지원
- SEO를 위한 메타 태그 필수 포함
- Open Graph 및 Twitter Card 메타 태그 설정

## Git 커밋 규칙

커밋 메시지는 한국어로 작성하며, 다음 형식을 권장합니다:

```
feat: Hero 섹션 레이아웃 구현
fix: 모바일 메뉴 토글 버그 수정
style: TailwindCSS 색상 팔레트 적용
docs: README.md 업데이트
refactor: JavaScript 코드 모듈화
perf: 이미지 최적화 및 lazy loading 적용
```

## 주의사항

- 프레임워크(React, Vue 등) 사용하지 않음 - Vanilla JS만 사용
- TailwindCSS 외 다른 CSS 프레임워크 사용하지 않음
- 브라우저 호환성: Chrome, Firefox, Safari, Edge 최신 버전 지원
- 반응형 디자인 필수 - 모든 디바이스에서 정상 작동해야 함
