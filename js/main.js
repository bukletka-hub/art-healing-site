// ===== MOBILE NAVIGATION =====
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });
}

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileToggle.classList.remove('active');
  });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 1px 10px rgba(0,0,0,0.05)';
  }
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });

    // Open clicked (if it was closed)
    if (!isActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  });
});

// ===== LEAD FORM HANDLING =====
const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
      // Show success message
      const formParent = this.parentElement;
      this.innerHTML = '<p style="color: #fff; font-size: 1.2rem; padding: 14px;">Thank you! Check your inbox for your free guide.</p>';
      // In production, this would send to an email service
      console.log('Lead captured:', email);
    }
  });
}

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    // Show success
    this.innerHTML = '<div style="text-align: center; padding: 40px 0;"><p style="font-size: 1.2rem; font-weight: 600; color: var(--primary); margin-bottom: 8px;">Message Sent!</p><p style="color: var(--text-light);">We\'ll get back to you within 24 hours.</p></div>';
    console.log('Contact form submitted');
  });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in animation to cards
document.addEventListener('DOMContentLoaded', () => {
  const animElements = document.querySelectorAll('.service-card, .benefit-item, .testimonial-card, .blog-card');
  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
