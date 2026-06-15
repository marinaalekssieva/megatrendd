gsap.registerPlugin(ScrollTrigger);

const translations = {
  bg: {
    menu: 'МЕНЮ',
    close: 'ЗАТВОРИ',
    navHome: 'НАЧАЛО',
    navWorks: 'ПРОЕКТИ',
    navServices: 'КАКВО ПРАВИМ',
    navAbout: 'КОИ СМЕ НИЕ',
    navContact: 'КОНТАКТИ',
    heroSubtitle: 'ПЕРФОРМЪНС МАРКЕТИНГ АГЕНЦИЯ',
    heroLine1: 'ОНЛАЙН РЕКЛАМИ,',
    heroLine2: 'MEGATREND.',
    heroLine3: 'КОИТО ПРАВЯТ',
    heroLine4: 'МЕГА МНОГО ПРОДАЖБИ.',
    heroDesc: 'Изграждаме дигитални кампании, базирани на реални данни, мащабираме реклами в Meta, Google и TikTok и помагаме на брандовете да изпреварят трендовете.',
    heroCta: 'СВЪРЖИ СЕ',
    caseCta: 'КЪМ КЕЙС СТЪДИТО',
    servicesTitle1: 'КАКВО',
    servicesTitle2: 'ПРАВИМ',
    servicesSub: 'Твоят път от идея до мащабируем растеж.',
    pathStep1: 'Одит до 24 часа',
    pathStep2: 'Прогнози и цели до 48',
    pathStep3: 'Маркетинг план до 72',
    pathStep4: 'Старт на първите реклами 92 часа',
    pathStep5: 'Първи резултати от нашата работа до 168 часа',
    stat1: 'ROAS · СРЕДНО ЗА ВСИЧКИ АКАУНТИ',
    stat2: 'УСПЕВАЕМОСТ',
    stat3: 'ПРИХОДИ ОТ НАЧАЛОТО',
    stat4: 'ОНЛАЙН МАГАЗИНА',
    testTitle1: 'КАКВО',
    testTitle2: 'КАЗВАТ',
    testSub: 'Реални резултати от реални партньори.',
    test1text: 'Megatrend ни изведоха от платото на 12K евро до 28K за 4 месеца. Проактивни, директни и винаги на линия.',
    test1name: 'Иван Петров',
    test1role: 'CEO, Fashion Trend',
    test2text: 'Най-накрая агенция, която не просто пуска реклами, а мисли като собственик на бизнеса. ROAS 5.2x за Q1.',
    test2name: 'Мария Георгиева',
    test2role: 'Founder, Home & Style',
    test3text: 'От първата седмица видяхме разлика. Стратегия, криейтив и постоянна оптимизация — точно това ни трябваше.',
    test3name: 'Димитър Стоянов',
    test3role: 'Marketing Director, TechStore BG',
    aboutTitle1: 'КОИ',
    aboutTitle2: 'СМЕ НИЕ',
    aboutText: 'Performance екип за онлайн магазини, заседнали на плато. Извеждаме бизнеси от 10–20K евро оборот с проактивна ежедневна работа, не outsourced ads, а система за растеж. 150+ магазина. 40M+ приходи. Без компромис с резултатите.',
    contactHeading: 'СВЪРЖИ СЕ С НАС',
    contactDesc: 'Не работим с всеки. Работим само с брандове, които са готови да инвестират, да тестват агресивно и да скалират сериозно. Ако това си ти – свържи се с нас.',
    contactEmailLabel: 'ПИШИ НИ',
    contactPhoneLabel: 'ОБАДИ СЕ',
    formName: 'Име',
    formEmail: 'Имейл',
    formWebsite: 'Уебсайт',
    formOptional: '(опционално)',
    formMsg: 'Съобщение',
    formBudget: 'Желан рекламен бюджет (€)',
    formService: 'Избери услуга',
    formSubmit: 'ИЗПРАТИ ЗАПИТВАНЕ',
    footerCopy: '© 2026 Megatrend Digital. Всички права запазени.\n100% независима перформънс маркетинг агенция.',
    toastSuccess: 'БЛАГОДАРИМ ВИ! ЗАПИТВАНЕТО Е ИЗПРАТЕНО УСПЕШНО.'
  },
  en: {
    menu: 'MENU',
    close: 'ZATVORI',
    navHome: 'NACHALO',
    navWorks: 'PROEKTI',
    navServices: 'KAKVO PRAVIM',
    navAbout: 'KOI SME NIE',
    navContact: 'KONTAKTI',
    heroSubtitle: 'PERFORMANS MARKETING AGENCIYA',
    heroLine1: 'ONLAYN REKLAMI,',
    heroLine2: 'MEGATREND.',
    heroLine3: 'KOITO PRAVYAT',
    heroLine4: 'MEGA MNOGO PRODAZHBI.',
    heroDesc: 'Izgrazhdame digitalni kampanii, bazirani na realni danni, mashtabirame reklami v Meta, Google i TikTok i pomagame na brandovete da izprevaryat trendovete.',
    heroCta: 'SVRZETE SE',
    caseCta: 'KYM KEYS STUDITO',
    servicesTitle1: 'KAKVO',
    servicesTitle2: 'PRAVIM',
    servicesSub: 'Vashiyat pat ot ideya do mashtabiruem rastezh.',
    pathStep1: 'Odit do 24 chasa',
    pathStep2: 'Prognozi i tseli do 48',
    pathStep3: 'Marketing plan do 72',
    pathStep4: 'Start na parvite reklami 92 chasa',
    pathStep5: 'Parvi rezultati ot nashata rabota do 168 chasa',
    stat1: 'ROAS · SREDNO ZA VSICHKI AKAUNTI',
    stat2: 'USPEVAEMOST',
    stat3: 'PRIHODI OT NACHALOTO',
    stat4: 'ONLAIN MAGAZINA',
    testTitle1: 'KAKVO',
    testTitle2: 'KAZVAT',
    testSub: 'Realni rezultati ot realni partnyori.',
    test1text: 'Megatrend ni izvedoha ot plato na 12K evro do 28K za 4 meseca. Proaktivni, direktni i vinagi na liniya.',
    test1name: 'Ivan Petrov',
    test1role: 'CEO, Fashion Trend',
    test2text: 'Nay-nakraya agentsiya, koyato ne prosto pushva reklami, a misli kato sobstvenik na biznesa. ROAS 5.2x za Q1.',
    test2name: 'Maria Georgieva',
    test2role: 'Founder, Home & Style',
    test3text: 'Ot parvata sedmitsa vidyahme razlika. Strategiya, kreativ i postoyanna optimizatsiya — tochno tova ni tryabvashe.',
    test3name: 'Dimitar Stoyanov',
    test3role: 'Marketing Director, TechStore BG',
    aboutTitle1: 'KOI',
    aboutTitle2: 'SME NIE',
    aboutText: 'Performance ekip za onlain magazini, zasednali na plato. Izvezhdame biznesi ot 10–20K evro oborot s proaktivna ezhednevena rabota, ne outsourced ads, a sistema za rastezh. 150+ magazina. 40M+ prihodi. Bez kompromis s rezultatite.',
    contactHeading: 'SVRZETE SE S NAS',
    contactDesc: 'Ne rabotim s vseki. Rabotim samo s brandove, koito sa gotovi da investirat, da testvat agresivno i da skalirat seriozno. Ako tova si ti – svurzhi se s nas.',
    contactEmailLabel: 'PISHETE NI',
    contactPhoneLabel: 'OBADETE SE',
    formName: 'Ime',
    formEmail: 'Imeyl',
    formWebsite: 'Uebsayt',
    formOptional: '(optsionalno)',
    formMsg: 'Saobshtenie',
    formBudget: 'Zhelan reklamen byudzhet (€)',
    formService: 'Izberi usluga',
    formSubmit: 'IZPRATI ZAPITYVANE',
    footerCopy: '© 2026 Megatrend Digital. Vsichki prava zapazeni.\n100% nezavisima performans marketing agentsiya.',
    toastSuccess: 'BLAGODARIM VI! ZAPITYVANETO E IZPRATENO USPESHNO.'
  }
};

let currentLang = 'bg';

document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initStickyHeader();
  initCustomCursor();
  initMagneticElements();
  initNavDrawer();
  initLanguageToggle();
  initHorizontalScroll();
  initCaseStudyAnimations();
  initPathScroll();
  initStatsCounters();
  initRevealAnimations();
  initTestimonials();
  initAboutHighlight();
  initChalkTransition();
  initContactForm();
});

function initStreetSubtitle() {
  const container = document.querySelector('.street-text');
  const tag = document.querySelector('.street-tag');
  const underline = document.querySelector('.street-underline-path');
  if (!container) return;

  const text = container.textContent.trim();
  container.textContent = '';

  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.className = 'street-char';
    span.textContent = char === ' ' ? '\u00A0' : char;
    container.appendChild(span);
  });

  const tl = gsap.timeline({ delay: 0.2 });

  tl.from(tag, {
    scale: 0.6,
    opacity: 0,
    rotation: -8,
    duration: 0.5,
    ease: 'back.out(2)'
  })
  .to('.street-char', {
    opacity: 1,
    y: 0,
    skewX: 0,
    duration: 0.45,
    stagger: 0.035,
    ease: 'power4.out'
  }, '-=0.2');

  if (underline) {
    const len = underline.getTotalLength();
    gsap.set(underline, { strokeDasharray: len, strokeDashoffset: len });
    tl.to(underline, { strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut' }, '-=0.3');
  }

  if (tag) {
    tag.classList.remove('street-shine');
    tl.add(() => tag.classList.add('street-shine'), '-=0.2');
    tl.to(tag, {
      keyframes: [
        { x: -2, duration: 0.04 },
        { x: 2, duration: 0.04 },
        { x: 0, duration: 0.04 }
      ],
      ease: 'none'
    }, '-=0.1');
  }
}

function initStickyHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  let lastScroll = 0;
  let ticking = false;

  const updateHeader = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);

    if (y > lastScroll && y > 140) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    lastScroll = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  updateHeader();
}

function initLanguageToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'bg' ? 'en' : 'bg';
    btn.textContent = currentLang === 'bg' ? 'GEN Z' : 'BG';
    btn.classList.toggle('active', currentLang === 'en');
    applyTranslations();
    initAboutHighlight(true);
  });
}

function applyTranslations() {
  const t = translations[currentLang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;

    if (el.id === 'aboutText') {
      el.textContent = t[key];
    } else if (key === 'footerCopy') {
      el.innerHTML = t[key].replace('\n', '<br>');
    } else {
      el.textContent = t[key];
    }
  });
}

function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) {
    document.getElementById('customCursor')?.remove();
    document.getElementById('customCursorDot')?.remove();
    return;
  }

  const cursor = document.getElementById('customCursor');
  const cursorDot = document.getElementById('customCursorDot');
  if (!cursor || !cursorDot) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.set(cursorDot, { x: mouseX, y: mouseY });
  });

  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());
    cursorX += (mouseX - cursorX) * dt;
    cursorY += (mouseY - cursorY) * dt;
    gsap.set(cursor, { x: cursorX, y: cursorY });
  });

  const hoverables = document.querySelectorAll('a, button, .process-step, .slide-media, .testimonial-card');
  hoverables.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered');
      const cursorText = cursor.querySelector('.custom-cursor-text');

      if (el.classList.contains('slide-media') || el.closest('.horizontal-slide')) {
        cursorText.textContent = 'ВИЖ';
        gsap.set(cursor, { css: { backgroundColor: '#fafafa', mixBlendMode: 'normal' } });
        cursorText.style.color = '#000';
      } else if (el.classList.contains('process-step')) {
        cursorText.textContent = 'СТЪПКА';
        gsap.set(cursor, { css: { backgroundColor: '#fd8400', border: 'none', mixBlendMode: 'normal' } });
        cursorText.style.color = '#000';
      } else if (el.classList.contains('testimonial-card')) {
        cursorText.textContent = 'ОТЗИВ';
        gsap.set(cursor, { css: { backgroundColor: '#fd8400', border: 'none', mixBlendMode: 'normal' } });
        cursorText.style.color = '#000';
      } else {
        cursorText.textContent = '';
        gsap.set(cursor, { css: { backgroundColor: '#fafafa', mixBlendMode: 'difference' } });
      }
    });

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
      const cursorText = cursor.querySelector('.custom-cursor-text');
      cursorText.textContent = '';
      gsap.set(cursor, { css: { backgroundColor: 'transparent', border: '1px solid #fafafa', mixBlendMode: 'difference' } });
    });
  });

  document.addEventListener('mouseleave', () => {
    gsap.to([cursor, cursorDot], { opacity: 0, duration: 0.3 });
  });
  document.addEventListener('mouseenter', () => {
    gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.3 });
  });
}

function initMagneticElements() {
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: 'power2.out' });

      const inner = el.querySelector('span, svg, img');
      if (inner) {
        gsap.to(inner, { x: x * 0.15, y: y * 0.15, duration: 0.3, ease: 'power2.out' });
      }
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1.1, 0.4)' });
      const inner = el.querySelector('span, svg, img');
      if (inner) {
        gsap.to(inner, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1.1, 0.4)' });
      }
    });
  });
}

function initNavDrawer() {
  const menuBtn = document.getElementById('menuBtn');
  const drawerClose = document.getElementById('drawerClose');
  const navDrawer = document.getElementById('navDrawer');
  const navOverlay = document.getElementById('navOverlay');
  const drawerLinks = document.querySelectorAll('.nav-link');

  if (!menuBtn || !drawerClose || !navDrawer) return;

  const openDrawer = () => {
    navDrawer.classList.add('open');
    navOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    navDrawer.classList.remove('open');
    navOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  navOverlay?.addEventListener('click', closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      closeDrawer();
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

function initHeroAnimations() {
  const heroTitleSpans = document.querySelectorAll('.hero-title .hero-line > span');
  const heroCta = document.querySelector('.hero-cta-btn');

  gsap.set(heroTitleSpans, { yPercent: 110 });
  gsap.set(heroCta, { opacity: 0, y: 20 });

  const tl = gsap.timeline({ delay: 0.15 });
  tl.to(heroTitleSpans, {
    yPercent: 0,
    duration: 1.1,
    stagger: 0.13,
    ease: 'expo.out'
  })
  .to(heroCta, {
    opacity: 1,
    y: 0,
    duration: 0.65,
    ease: 'power3.out'
  }, '-=0.55');
}

function initHorizontalScroll() {
  const wrapper = document.getElementById('scrollWrapper');
  const worksSection = document.getElementById('works');
  const progressBar = document.getElementById('worksProgress');
  const counterEl = document.getElementById('slideCounterNum');

  if (!wrapper || !worksSection) return;

  const totalSlides = 4;

  if (window.innerWidth > 992) {
    gsap.to(wrapper, {
      x: () => -(wrapper.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: worksSection,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => '+=' + (wrapper.scrollWidth - window.innerWidth),
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressBar) progressBar.style.width = (self.progress * 100) + '%';
          if (counterEl) {
            const currentSlide = Math.min(Math.floor(self.progress * totalSlides) + 1, totalSlides);
            counterEl.textContent = String(currentSlide).padStart(2, '0');
          }
          animateCaseSlide(self.progress);
        }
      }
    });
  }
}

function initCaseStudyAnimations() {
  const slides = document.querySelectorAll('.case-slide');
  const isMobile = window.innerWidth <= 992;

  slides.forEach((slide, i) => {
    const info = slide.querySelector('.slide-info');
    const media = slide.querySelector('.slide-media');
    const title = slide.querySelector('.slide-info h3');
    const tag = slide.querySelector('.slide-tag');

    if (title) {
      const titleText = title.textContent;
      title.textContent = '';
    
      const words = titleText.split(' ');
    
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'case-word';
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';
    
        word.split('').forEach((char) => {
          const charSpan = document.createElement('span');
          charSpan.className = 'case-char';
          charSpan.textContent = char;
          charSpan.style.display = 'inline-block';
          wordSpan.appendChild(charSpan);
        });
    
        title.appendChild(wordSpan);
    
        if (index < words.length - 1) {
          title.appendChild(document.createTextNode(' '));
        }
      });
    }

    if (isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: slide, start: 'top 82%', once: true }
      });
      tl.from(slide, { opacity: 0, y: 60, duration: 0.8, ease: 'power3.out' })
        .from(slide.querySelectorAll('.case-char'), {
          opacity: 0, y: 30, rotateX: -40, stagger: 0.02, duration: 0.6, ease: 'power3.out'
        }, '-=0.4')
        .from(media, { scale: 0.85, opacity: 0, duration: 0.7, ease: 'back.out(1.4)' }, '-=0.5')
        .from(tag, { scale: 0, duration: 0.4, ease: 'back.out(2)' }, '-=0.6');
    } else {
      gsap.from(slide.querySelectorAll('.case-char'), {
        opacity: 0,
        y: 40,
        stagger: 0.015,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: slide, start: 'top 75%', toggleActions: 'play none none none' }
      });

      gsap.to(media, {
        y: -30,
        ease: 'none',
        scrollTrigger: { trigger: slide, start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
    }
  });
}

function animateCaseSlide(progress) {
  const slides = document.querySelectorAll('.case-slide');
  const activeIndex = Math.min(Math.floor(progress * slides.length), slides.length - 1);

  slides.forEach((slide, i) => {
    const info = slide.querySelector('.slide-info');
    const media = slide.querySelector('.slide-media');
    const isActive = i === activeIndex;

    slide.classList.toggle('is-active', isActive);

    gsap.to(info, {
      x: isActive ? 0 : (i < activeIndex ? -40 : 40),
      opacity: isActive ? 1 : 0.25,
      duration: 0.7,
      ease: 'power3.out'
    });
    gsap.to(media, {
      x: isActive ? 0 : (i < activeIndex ? 40 : -40),
      scale: isActive ? 1 : 0.88,
      rotate: isActive ? 0 : (i % 2 === 0 ? -2 : 2),
      duration: 0.7,
      ease: 'power3.out'
    });

    if (isActive) {
      gsap.fromTo(slide.querySelectorAll('.case-char'),
        { opacity: 0.3 },
        { opacity: 1, stagger: 0.01, duration: 0.4, ease: 'power2.out' }
      );
    }
  });
}

function initPathScroll() {
  const pathGlow = document.getElementById('processPathGlow');
  const pathBg   = document.getElementById('processPathBg');
  const section  = document.querySelector('.path-section');
  const timeline = document.getElementById('processTimeline');
  const steps    = document.querySelectorAll('.process-step');

  if (!section || steps.length === 0) return;

  const isMobile = window.innerWidth <= 768;

  /* ── Set initial state for all steps via GSAP (no CSS transition interference) ── */
  steps.forEach(step => {
    const circle = step.querySelector('.process-step-circle');
    const num    = step.querySelector('.process-step-num');
    const p      = step.querySelector('.process-step-card p');
    gsap.set(step,   { opacity: 0, x: step.classList.contains('process-step--right') && !isMobile ? 20 : -20 });
    gsap.set(circle, { borderColor: 'rgba(255,255,255,0.15)', boxShadow: 'none' });
    gsap.set(num,    { color: 'rgba(255,255,255,0.4)', textShadow: 'none' });
    gsap.set(p,      { color: 'rgba(255,255,255,0.25)', textShadow: 'none' });
  });

  /* ─────────────────────────────────────────────
     DESKTOP: S-curve SVG path
  ───────────────────────────────────────────── */
  if (!isMobile && pathGlow) {
    const glowLen = pathGlow.getTotalLength();
    const bgLen   = pathBg ? pathBg.getTotalLength() : 0;

    gsap.set(pathGlow, { strokeDasharray: glowLen, strokeDashoffset: glowLen });
    if (pathBg) gsap.set(pathBg, { strokeDasharray: bgLen, strokeDashoffset: bgLen, opacity: 0 });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 20%',
      end: 'bottom 90%',
      scrub: 0.2,                        // very low scrub = near-instant response
      onUpdate(self) {
        const p = self.progress;

        // Draw glow path
        gsap.set(pathGlow, { strokeDashoffset: glowLen * (1 - p) });

        // Draw faint bg path slightly ahead
        if (pathBg) {
          gsap.set(pathBg, {
            strokeDashoffset: bgLen * (1 - Math.min(p + 0.08, 1)),
            opacity: p > 0 ? 0.12 : 0
          });
        }

        // Activate steps at evenly-spaced thresholds for 5 steps: 0.1, 0.28, 0.46, 0.64, 0.82
        const thresholds = [0.1, 0.28, 0.46, 0.64, 0.82];
        steps.forEach((step, i) => {
          const active = p >= thresholds[i];
          const circle = step.querySelector('.process-step-circle');
          const num    = step.querySelector('.process-step-num');
          const label  = step.querySelector('.process-step-card p');
          const isRight = step.classList.contains('process-step--right');

          if (active) {
            gsap.to(step,   { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
            gsap.to(circle, { borderColor: 'rgba(255,255,255,0.9)',
                               boxShadow: '0 0 12px rgba(255,255,255,0.55), 0 0 28px rgba(255,255,255,0.25)',
                               duration: 0.3, overwrite: 'auto' });
            gsap.to(num,    { color: '#ffffff',
                               textShadow: '0 0 10px rgba(255,255,255,0.9), 0 0 24px rgba(255,255,255,0.4)',
                               duration: 0.3, overwrite: 'auto' });
            gsap.to(label,  { color: '#ffffff',
                               textShadow: '0 0 18px rgba(255,255,255,0.65), 0 0 40px rgba(255,255,255,0.2)',
                               duration: 0.3, overwrite: 'auto' });
          } else {
            gsap.to(step,   { opacity: 0, x: isRight ? 20 : -20, duration: 0.2, overwrite: 'auto' });
            gsap.to(circle, { borderColor: 'rgba(255,255,255,0.15)', boxShadow: 'none', duration: 0.2, overwrite: 'auto' });
            gsap.to(num,    { color: 'rgba(255,255,255,0.4)', textShadow: 'none', duration: 0.2, overwrite: 'auto' });
            gsap.to(label,  { color: 'rgba(255,255,255,0.25)', textShadow: 'none', duration: 0.2, overwrite: 'auto' });
          }
        });
      }
    });

  /* ─────────────────────────────────────────────
     MOBILE: vertical line via ::after pseudo-element
     — animated using a CSS custom property
  ───────────────────────────────────────────── */
  } else if (isMobile && timeline) {
    // Reset x offsets on mobile (all come from left)
    steps.forEach(step => gsap.set(step, { x: -10 }));

    ScrollTrigger.create({
      trigger: section,
      pin: true,
      pinSpacing: true,
      start: 'top top+=64',
      end: '+=' + (window.innerHeight * 1.5),
      scrub: 0.6,
      onUpdate(self) {
        const p = self.progress;

        // Animate the ::after line height via a custom property
        timeline.style.setProperty('--line-progress', (p * 100) + '%');

        // Thresholds evenly spaced for 5 steps
        const thresholds = [0.1, 0.28, 0.46, 0.64, 0.82];
        steps.forEach((step, i) => {
          const active = p >= thresholds[i];
          const circle = step.querySelector('.process-step-circle');
          const num    = step.querySelector('.process-step-num');
          const label  = step.querySelector('.process-step-card p');

          if (active) {
            gsap.to(step,   { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
            gsap.to(circle, { borderColor: 'rgba(255,255,255,0.9)',
                               boxShadow: '0 0 12px rgba(255,255,255,0.55), 0 0 28px rgba(255,255,255,0.25)',
                               duration: 0.3, overwrite: 'auto' });
            gsap.to(num,    { color: '#ffffff',
                               textShadow: '0 0 10px rgba(255,255,255,0.9)',
                               duration: 0.3, overwrite: 'auto' });
            gsap.to(label,  { color: '#ffffff',
                               textShadow: '0 0 14px rgba(255,255,255,0.55)',
                               duration: 0.3, overwrite: 'auto' });
          } else {
            gsap.to(step,   { opacity: 0, x: -10, duration: 0.2, overwrite: 'auto' });
            gsap.to(circle, { borderColor: 'rgba(255,255,255,0.15)', boxShadow: 'none', duration: 0.2, overwrite: 'auto' });
            gsap.to(num,    { color: 'rgba(255,255,255,0.4)', textShadow: 'none', duration: 0.2, overwrite: 'auto' });
            gsap.to(label,  { color: 'rgba(255,255,255,0.25)', textShadow: 'none', duration: 0.2, overwrite: 'auto' });
          }
        });
      }
    });
  }
}

function initStatsCounters() {
  const stats = [
    { id: 'stat1', target: 4.7, prefix: '~', suffix: '+', decimals: 1 },
    { id: 'stat2', target: 87, prefix: '', suffix: '%' },
    { id: 'stat3', target: 40, prefix: '', suffix: 'М+' },
    { id: 'stat4', target: 200, prefix: '', suffix: '+' }
  ];

  stats.forEach((stat) => {
    const el = document.getElementById(stat.id);
    if (!el) return;

    ScrollTrigger.create({
      trigger: el.closest('.stats-section'),
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const obj = { value: 0 };
        gsap.to(obj, {
          value: stat.target,
          duration: 2,
          ease: 'power3.out',
          onUpdate: () => {
            let val = obj.value;
            if (stat.decimals) {
              val = val.toFixed(stat.decimals).replace('.', ',');
            } else {
              val = Math.floor(val);
            }
            el.innerHTML = `${stat.prefix ? `<span class="stat-prefix">${stat.prefix}</span>` : ''}${val}<span>${stat.suffix}</span>`;
          }
        });
      }
    });
  });
}

function initRevealAnimations() {
  document.querySelectorAll('.reveal-target').forEach((target) => {
    gsap.from(target, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: target, start: 'top 85%', toggleActions: 'play none none none' }
    });
  });
}

function initTestimonials() {
  const cards = document.querySelectorAll('.testimonial-card');

  cards.forEach((card, i) => {
    const inner = card.querySelector('.testimonial-inner');
    const quote = card.querySelector('.testimonial-quote');
    const text = card.querySelector('.testimonial-text');
    const author = card.querySelector('.testimonial-author');
    const stars = card.querySelector('.testimonial-stars');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(card,
      {
        opacity: 0,
        y: 100,
        rotate: i === 0 ? -8 : i === 1 ? 6 : -4,
        scale: 0.85
      },
      {
        opacity: 1,
        y: 0,
        rotate: i === 0 ? -2 : i === 1 ? 1.5 : -1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.4)'
      }
    )
    .from(quote, { scale: 0, rotation: -180, duration: 0.6, ease: 'back.out(2)' }, '-=0.5')
    .from(stars, { opacity: 0, letterSpacing: '20px', duration: 0.5 }, '-=0.3')
    .from(text, { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
    .from(author, { opacity: 0, x: -20, duration: 0.5 }, '-=0.2');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(inner, {
        rotateY: x * 12,
        rotateX: -y * 12,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(inner, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    });
  });
}

function initChalkTransition() {
  const bridge = document.getElementById('chalkBridge');
  const path1 = document.getElementById('chalkPath1');
  const path2 = document.getElementById('chalkPath2');
  const contactCard = document.getElementById('contactCard');
  const overlapZone = document.getElementById('contactOverlapZone');

  if (!bridge || !path1 || !contactCard) return;

  const len1 = path1.getTotalLength();
  const len2 = path2?.getTotalLength() || 0;

  gsap.set(path1, { strokeDasharray: len1, strokeDashoffset: len1 });
  if (path2) gsap.set(path2, { strokeDasharray: len2, strokeDashoffset: len2 });

  gsap.timeline({
    scrollTrigger: {
      trigger: bridge,
      start: 'top 85%',
      end: 'bottom 10%',
      scrub: 1
    }
  })
  .to(path1, { strokeDashoffset: 0, ease: 'none', duration: 1 })
  .to(path2, { strokeDashoffset: 0, ease: 'none', duration: 0.8 }, '-=0.5');

  ScrollTrigger.create({
    trigger: overlapZone || contactCard,
    start: 'top 80%',
    end: 'top 20%',
    scrub: 0.8,
    onUpdate: (self) => {
      const p = self.progress;
      gsap.set(contactCard, {
        opacity: Math.min(1, p * 1.2),
        y: 100 * (1 - p),
        scale: 0.92 + (p * 0.08),
        rotateX: 10 * (1 - p),
        transformPerspective: 1000
      });
    }
  });
}

let aboutScrollTrigger = null;

function initAboutHighlight(rebuildOnly = false) {
  const container = document.getElementById('aboutText');
  if (!container) return;

  if (aboutScrollTrigger) {
    aboutScrollTrigger.kill();
    aboutScrollTrigger = null;
  }

  const text = translations[currentLang].aboutText;
  container.textContent = '';

  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.className = 'about-char';
    span.textContent = char;
    container.appendChild(span);
  });

  const chars = container.querySelectorAll('.about-char');
  const total = chars.length;

  aboutScrollTrigger = ScrollTrigger.create({
    trigger: container,
    start: 'top 70%',
    end: 'bottom 50%',
    scrub: 0.5,
    onUpdate: (self) => {
      const litCount = Math.floor(self.progress * total);
      chars.forEach((char, i) => {
        char.classList.toggle('lit', i < litCount);
      });
    }
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // ── Budget Slider ──
  const slider = document.getElementById('budgetSlider');
  const display = document.getElementById('budgetDisplay');
  const fill = document.getElementById('sliderFill');

  function updateSlider() {
    if (!slider || !display || !fill) return;
    const min = +slider.min;
    const max = +slider.max;
    const val = +slider.value;
    const pct = ((val - min) / (max - min)) * 100;
    fill.style.width = pct + '%';
    let displayVal;
    if (val >= 1000) {
      displayVal = (val / 1000).toLocaleString('bg-BG', { maximumFractionDigits: 1 }) + 'K';
      if (val >= max) displayVal += '+';
    } else {
      displayVal = val;
    }
    display.textContent = displayVal + ' €';
  }

  if (slider) {
    let rafId = null;
    slider.addEventListener('input', () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateSlider();
        rafId = null;
      });
    }, { passive: true });
    updateSlider();
  }

  // ── Service chips ──
  const chips = document.querySelectorAll('#serviceChips .chip');
  const serviceInput = document.getElementById('serviceInput');
  const activeServices = new Set();

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.dataset.value;
      if (activeServices.has(val)) {
        activeServices.delete(val);
        chip.classList.remove('active');
      } else {
        activeServices.add(val);
        chip.classList.add('active');
      }
      if (serviceInput) serviceInput.value = [...activeServices].join(', ');
    });
  });

  // ── Submit ──
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const toast = document.createElement('div');
    toast.className = 'form-toast';
    toast.textContent = translations[currentLang].toastSuccess;
    document.body.appendChild(toast);

    gsap.fromTo(toast,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        onComplete: () => {
          form.reset();
          // Reset slider
          if (slider) { slider.value = 1000; updateSlider(); }
          // Reset chips
          chips.forEach(c => c.classList.remove('active'));
          activeServices.clear();
          if (serviceInput) serviceInput.value = '';

          form.querySelectorAll('.form-input').forEach((input) => input.dispatchEvent(new Event('blur')));

          gsap.to(toast, {
            y: 100,
            opacity: 0,
            duration: 0.6,
            delay: 3.5,
            ease: 'power3.in',
            onComplete: () => toast.remove()
          });
        }
      }
    );
  });
}
