/* ============================================================
   PLATINUM — Main JavaScript
   Handles: scroll reveal, navbar, accordions, FAQs,
            email form, Telegram animation, mobile menu
   ============================================================ */

'use strict';

/* ── Scroll Reveal ─────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stagger children if data-stagger is set
        const children = entry.target.querySelectorAll('[data-stagger]');
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('visible'), i * 80);
        });
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ── Navbar: shrink on scroll + mobile toggle ──────────────── */
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('mobile-open');
  });

  // Close on nav link click
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('mobile-open');
    });
  });
}

/* ── Accordion (Curriculum / Modules) ─────────────────────── */
document.querySelectorAll('.accordion-header').forEach((header) => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    const isOpen = item.classList.contains('open');

    // Optionally close siblings (comment out for multi-open)
    // item.closest('.accordion-list')?.querySelectorAll('.accordion-item.open')
    //   .forEach(sib => sib !== item && sib.classList.remove('open'));

    item.classList.toggle('open', !isOpen);
  });
});

/* ── FAQ accordion ─────────────────────────────────────────── */
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    item.classList.toggle('open');
  });
});

/* ── Email Form ────────────────────────────────────────────── */
const emailForms = document.querySelectorAll('.email-form');
emailForms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const input = form.querySelector('input[type="email"]');

    if (!btn || !input) return;

    const original = btn.textContent;
    btn.textContent = '✓ Sent! Check your inbox.';
    btn.style.background = '#6dc87a';
    btn.style.color = '#0a0a0a';
    btn.disabled = true;
    input.value = '';

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
    }, 4000);
  });
});

/* ── Telegram Message Animation ───────────────────────────── */
function animateTelegramMessages() {
  const messages = document.querySelectorAll('.tg-msg');
  if (!messages.length) return;

  const telegramObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          messages.forEach((msg, i) => {
            setTimeout(() => msg.classList.add('visible'), i * 400);
          });
          telegramObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  const mockup = document.querySelector('.tg-mockup');
  if (mockup) telegramObserver.observe(mockup);
}
animateTelegramMessages();

/* ── Smooth anchor scroll ──────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = navbar ? navbar.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Active nav link highlight ─────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

if (sections.length && navAnchors.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((a) => a.classList.remove('active'));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach((s) => sectionObserver.observe(s));
}

/* ── Copy to clipboard (social content page) ──────────────── */
window.copyPost = function (btn) {
  const content = btn.previousElementSibling;
  if (!content) return;

  navigator.clipboard.writeText(content.textContent.trim()).then(() => {
    const original = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    // Fallback for browsers without clipboard API
    const textarea = document.createElement('textarea');
    textarea.value = content.textContent.trim();
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    btn.textContent = '✓ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 2000);
  });
};

/* ── Platform tab switcher (social content page) ──────────── */
window.showPlatform = function (id, btn) {
  document.querySelectorAll('.platform').forEach((p) => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
  const target = document.getElementById('p-' + id);
  if (target) target.classList.add('active');
  if (btn) btn.classList.add('active');
};

/* ── Post toggle (social content page) ────────────────────── */
window.togglePost = function (el) {
  el.closest('.post-card')?.classList.toggle('open');
};

/* ── Counter animation for hero stats ─────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;
  const duration = 1500;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(eased * target) + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.hero-stats').forEach((el) => counterObserver.observe(el));

/* ── Pillar card hover glow cursor ────────────────────────── */
document.querySelectorAll('.pillar-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
});
