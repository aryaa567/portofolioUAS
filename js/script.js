const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const scrollTopBtn = document.getElementById('scroll-top');
const links = document.querySelectorAll('a[href^="#"]');
const animatedItems = document.querySelectorAll('[data-animate]');
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.hash && document.querySelector(link.hash)) {
      event.preventDefault();
      document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
      navMenu.classList.remove('open');
    }
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.classList.remove('visible');
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

if (animatedItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedItems.forEach((item) => observer.observe(item));
}

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.textContent = 'Terima kasih! Pesan Anda sudah terkirim.';
  contactForm.reset();
});
