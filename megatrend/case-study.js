gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initCustomCursor();
  initMagneticElements();
  initCsHeroAnimation();
  initCsResultCounters();
  initCsTimelineReveal();
  initCsReveal();
});

function initStickyHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;
  let lastScroll = 0;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    if (y > lastScroll && y > 140) header.classList.add('header-hidden');
    else header.classList.remove('header-hidden');
    lastScroll = y;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) {
    document.getElementById('customCursor')?.remove();
    document.getElementById('customCursorDot')?.remove();
    return;
  }
  const cursor = document.getElementById('customCursor');
  const dot = document.getElementById('customCursorDot');
  if (!cursor || !dot) return;
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    gsap.set(dot, { x: mx, y: my });
  });
  gsap.ticker.add(() => {
    const dt = 1 - Math.pow(1 - 0.15, gsap.ticker.deltaRatio());
    cx += (mx - cx) * dt;
    cy += (my - cy) * dt;
    gsap.set(cursor, { x: cx, y: cy });
  });
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered');
      gsap.set(cursor, { css: { backgroundColor: '#fafafa', mixBlendMode: 'difference' } });
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
      gsap.set(cursor, { css: { backgroundColor: 'transparent', border: '1px solid #fafafa', mixBlendMode: 'difference' } });
    });
  });
}

function initMagneticElements() {
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1.1, 0.4)' });
    });
  });
}

function initCsHeroAnimation() {
  const spans = document.querySelectorAll('.cs-hero-title .hero-line > span');
  const desc = document.querySelector('.cs-hero-desc');
  const kpis = document.querySelector('.cs-hero-kpis');
  const breadcrumb = document.querySelector('.cs-breadcrumb');
  const tagRow = document.querySelector('.cs-tag-row');

  gsap.set(spans, { yPercent: 110 });
  gsap.set([desc, kpis, breadcrumb, tagRow], { opacity: 0, y: 20 });

  gsap.timeline({ delay: 0.1 })
    .to(breadcrumb, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
    .to(tagRow, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
    .to(spans, { yPercent: 0, duration: 1, stagger: 0.1, ease: 'expo.out' }, '-=0.2')
    .to(desc, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .to(kpis, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5');
}

function initCsResultCounters() {
  document.querySelectorAll('.cs-result-num[data-target]').forEach(el => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0');
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power3.out',
          onUpdate: () => {
            const v = decimals ? obj.val.toFixed(decimals).replace('.', ',') : Math.floor(obj.val);
            el.innerHTML = `${prefix}${v}<span>${suffix}</span>`;
          }
        });
      }
    });
  });
}

function initCsTimelineReveal() {
  document.querySelectorAll('.cs-tl-item').forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.08,
          ease: 'power3.out',
          onStart: () => item.classList.add('visible')
        });
      }
    });
  });
}

function initCsReveal() {
  document.querySelectorAll('.cs-strategy-card, .cs-more-card, .cs-fact').forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: (i % 3) * 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  const testimonialCard = document.querySelector('.cs-testimonial-card');
  if (testimonialCard) {
    gsap.from(testimonialCard, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: testimonialCard, start: 'top 80%', once: true }
    });
  }
}
