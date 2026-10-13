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

  // Delegate clicks for all CTA buttons/links with data-action="register" or data-action="join-telegram"
  document.addEventListener('click', (e) => {
    const registerBtn = e.target.closest('[data-action="register"]');
    if (registerBtn) {
      e.preventDefault();
      const courseId = registerBtn.getAttribute('data-course-id') || null;
      const courseTitle = registerBtn.getAttribute('data-course-title') || null;
      if (window.openRegistrationModal) {
        window.openRegistrationModal(courseId, courseTitle);
      }
      return;
    }

    const telegramBtn = e.target.closest('[data-action="join-telegram"]');
    if (telegramBtn) {
      e.preventDefault();
      if (window.openTelegramModal) {
        window.openTelegramModal();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initGlobal);
