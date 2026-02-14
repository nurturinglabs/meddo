// animations.js — Scroll animations + navbar behavior

// Scroll animation using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in class to sections
  const animatableElements = document.querySelectorAll(
    '.problem-card, .feature-card, .mode-step, .timeline-item, .tech-card, .pricing-card, .trust-item'
  );

  animatableElements.forEach(el => {
    el.classList.add('fade-in');
  });

  // Observe elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animatableElements.forEach(el => observer.observe(el));

  // Stagger animation for grids
  const grids = document.querySelectorAll('.problem-grid, .features-grid, .pricing-grid, .tech-pipeline');
  grids.forEach(grid => {
    const children = grid.children;
    Array.from(children).forEach((child, index) => {
      child.style.transitionDelay = `${index * 100}ms`;
    });
  });

  // Timeline items stagger
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 150}ms`;
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Navbar shadow on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }

  // Hero scene rotation
  const scenes = document.querySelectorAll('.hero-scene');
  const dots = document.querySelectorAll('.hero-dot');
  const modeLabel = document.getElementById('hero-mode-label');
  const modeNames = ['Dictation', 'AI Summary', 'Pattern Alert', 'Voice Booking', 'Follow-up'];

  if (scenes.length > 0) {
    let currentScene = 0;
    let heroInterval;

    function showScene(index) {
      scenes.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      scenes[index].classList.add('active');
      dots[index].classList.add('active');
      if (modeLabel) modeLabel.textContent = modeNames[index] || '';
      currentScene = index;
    }

    function nextScene() {
      showScene((currentScene + 1) % scenes.length);
    }

    heroInterval = setInterval(nextScene, 4000);

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        clearInterval(heroInterval);
        showScene(parseInt(dot.dataset.dot));
        heroInterval = setInterval(nextScene, 4000);
      });
    });
  }
});
