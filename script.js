/* ══════════════════════════════════════════════
   DANIEL KANG / 2026 ARCHIVE — script.js
══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── MORE dropdown ────────────────────── */
  const btn      = document.getElementById('dropdownBtn');
  const menu     = document.getElementById('dropdownMenu');
  const dropdown = document.getElementById('moreDropdown');

  if (btn && menu) {

    // Toggle open/close
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('open');
      closeDropdown();
      if (!isOpen) openDropdown();
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) closeDropdown();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDropdown();
    });

    // "CONTACT" item → smooth scroll + close
    const contactLink = document.getElementById('contactLink');
    if (contactLink) {
      contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeDropdown();
        const target = document.getElementById('contact');
        if (target) {
          const offset = parseInt(
            getComputedStyle(document.documentElement)
              .getPropertyValue('--nav-h') || '36'
          );
          const top = target.getBoundingClientRect().top + window.scrollY - offset - 10;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    }
  }

  function openDropdown() {
    menu.classList.add('open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
  }

  function closeDropdown() {
    menu.classList.remove('open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  }


  /* ─── Active nav highlight on scroll ────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link[href^="#"], .nav-link[href^="index"]');
  const navH      = 40;

  function updateActiveLink() {
    let current = '';
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      if (top <= navH + 20) current = sec.id;
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      if (href.includes(current)) link.classList.add('active');
      if (current === '' && (href.includes('home') || href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();


  /* ─── Reveal on scroll (portfolio items) ── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity  = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  document.querySelectorAll('.project-item').forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.45s ease ${i * 0.07}s, transform 0.45s ease ${i * 0.07}s`;
    observer.observe(el);
  });

});
