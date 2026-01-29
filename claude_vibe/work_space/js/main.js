// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // 1. 모바일 메뉴 토글
    // ========================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');

            // 햄버거 아이콘 변경 (바 <-> X)
            const icon = this.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });
    }


    // ========================================
    // 2. 모바일 메뉴 링크 클릭 시 자동 닫기
    // ========================================
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }

            // 햄버거 아이콘을 바로 원래대로
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });


    // ========================================
    // 3. 스크롤 시 네비게이션 바 스타일 변경
    // ========================================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });


    // ========================================
    // 4. 부드러운 스크롤 (Smooth Scroll)
    // ========================================
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // 앵커 링크인지 확인
            const href = this.getAttribute('href');

            if (href && href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // 네비게이션 바 높이 계산 (offset)
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;

                    // 부드럽게 스크롤
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // ========================================
    // 5. 현재 섹션 네비게이션 하이라이트
    // ========================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.scrollY;

        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
            const sectionId = section.getAttribute('id');

            // 현재 스크롤 위치가 섹션 범위 내에 있는지 확인
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // 해당 섹션의 네비게이션 링크에 active 스타일 추가
                const activeNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                // 모든 nav-link에서 active 스타일 제거
                document.querySelectorAll('.nav-link').forEach(function(link) {
                    link.classList.remove('text-primary', 'font-bold');
                });

                // 현재 섹션에 해당하는 링크에 active 스타일 추가
                if (activeNavLink) {
                    activeNavLink.classList.add('text-primary', 'font-bold');
                }
            }
        });
    }

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', highlightNavLink);

    // 페이지 로드 시 초기 하이라이트 설정
    highlightNavLink();

});
