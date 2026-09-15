import { initRegistrationModal } from '../components/RegistrationModal.js';

export function initGlobal() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Init Modal
  initRegistrationModal();

  // Attach all CTA buttons with data-action="register"
  document.querySelectorAll('[data-action="register"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseId = btn.getAttribute('data-course-id') || null;
      const courseTitle = btn.getAttribute('data-course-title') || null;
      if (window.openRegistrationModal) {
        window.openRegistrationModal(courseId, courseTitle);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initGlobal);
