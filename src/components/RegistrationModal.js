import { courses } from '../data/courses.js';

export const WEB3FORMS_ACCESS_KEY = 'e56b6db5-a109-4f25-886e-802992a61ac6';
export const TELEGRAM_INVITE_URL = 'https://t.me/+JmmhQa3YglI3NmY8';

export function renderRegistrationModal() {
  const courseOptions = courses.map(c => `<option value="${c.title} (${c.id})">${c.title}</option>`).join('');

  return `
    <div id="registration-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div class="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden border border-gray-100 transform transition-transform scale-95 duration-200" id="modal-container">
        
        <!-- Close Button -->
        <button id="close-modal-btn" type="button" class="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div id="modal-form-view">
          <div class="mb-6">
            <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#FEF3D6] text-[#946300] mb-2">Cohort Registration</span>
            <h3 class="text-2xl font-bold text-[#111624]" id="modal-title">Register for a Course</h3>
            <p class="text-sm text-gray-500 mt-1">Join the next cohort of hands-on, community-led tech training.</p>
          </div>

          <form id="registration-form" action="https://api.web3forms.com/submit" method="POST" class="space-y-4">
            <input type="hidden" name="access_key" value="${WEB3FORMS_ACCESS_KEY}">
            <input type="hidden" name="subject" value="New Course / Cohort Registration - MoonTechLife">
            <input type="hidden" name="from_name" value="MoonTechLife Registration">
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

            <div>
              <label for="reg-name" class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Full Name</label>
              <input type="text" id="reg-name" name="name" required placeholder="e.g. Chukwudi Okafor" 
                     class="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B7641]/40 focus:border-[#9B7641]">
            </div>

            <div>
              <label for="reg-email" class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Email Address</label>
              <input type="email" id="reg-email" name="email" required placeholder="chukwudi@example.com" 
                     class="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B7641]/40 focus:border-[#9B7641]">
            </div>

            <div>
              <label for="reg-phone" class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">WhatsApp / Phone Number</label>
              <input type="tel" id="reg-phone" name="phone" required placeholder="+234 801 234 5678" 
                     class="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B7641]/40 focus:border-[#9B7641]">
            </div>

            <div>
              <label for="reg-course" class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Select Program / Course</label>
              <select id="reg-course" name="program_or_course" required 
                      class="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B7641]/40 focus:border-[#9B7641]">
                <option value="100 Days Tech Challenge (100days)" data-course-id="100days">100 Days Tech Challenge (Community Flagship)</option>
                ${courses.map(c => `<option value="${c.title} (${c.id})" data-course-id="${c.id}">${c.title}</option>`).join('')}
              </select>
            </div>

            <p id="reg-error-msg" class="hidden text-xs text-red-600 text-center font-medium"></p>

            <div class="pt-2">
              <button type="submit" id="reg-submit-btn"
                      class="w-full py-3.5 px-6 rounded-full bg-[#111624] hover:bg-[#232938] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60">
                <span id="reg-submit-text">Complete Registration</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
            <p class="text-[11px] text-center text-gray-400">By registering, you agree to receive community updates and cohort orientation guidelines.</p>
          </form>
        </div>

        <!-- Success View -->
        <div id="modal-success-view" class="hidden py-8 text-center space-y-4">
          <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <h4 class="text-2xl font-bold text-[#111624]">You're Registered!</h4>
          <p class="text-sm text-gray-600 max-w-sm mx-auto">
            Thank you for registering. Check your email and WhatsApp for orientation details and community onboarding.
          </p>
          <div class="pt-4">
            <button id="modal-done-btn" type="button" class="px-6 py-2.5 rounded-full bg-[#111624] text-white text-sm font-medium hover:bg-[#232938]">
              Back to Website
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Telegram Community Email Capture Modal -->
    <div id="telegram-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div class="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden border border-gray-100 transform transition-transform scale-95 duration-200">
        
        <!-- Close Button -->
        <button id="close-telegram-modal-btn" type="button" class="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div id="telegram-form-view">
          <div class="mb-6">
            <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#FEF3D6] text-[#946300] mb-2">MoonTechLife Community</span>
            <h3 class="text-2xl font-bold text-[#111624]">Join Our Telegram Community</h3>
            <p class="text-sm text-gray-500 mt-1 leading-relaxed">
              Enter your email address to receive community updates, learning resources, and instant access to our official Telegram channel.
            </p>
          </div>

          <form id="telegram-community-form" action="https://api.web3forms.com/submit" method="POST" class="space-y-4">
            <input type="hidden" name="access_key" value="${WEB3FORMS_ACCESS_KEY}">
            <input type="hidden" name="subject" value="New Telegram Community Subscriber - MoonTechLife">
            <input type="hidden" name="from_name" value="MoonTechLife Telegram Community">
            <input type="hidden" name="subscription_type" value="Telegram Community & Email Marketing">
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

            <div>
              <label for="telegram-email" class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Email Address</label>
              <input type="email" id="telegram-email" name="email" required placeholder="you@example.com" 
                     class="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B7641]/40 focus:border-[#9B7641]">
            </div>

            <p id="telegram-error-msg" class="hidden text-xs text-red-600 text-center font-medium"></p>

            <div class="pt-2">
              <button type="submit" id="telegram-submit-btn"
                      class="w-full py-3.5 px-6 rounded-full bg-[#111624] hover:bg-[#232938] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60">
                <span id="telegram-submit-text">Continue to Telegram</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
            <p class="text-[11px] text-center text-gray-400">You will be directed straight to our official Telegram community channel.</p>
          </form>
        </div>

        <!-- Telegram Success & Redirect View -->
        <div id="telegram-success-view" class="hidden py-6 text-center space-y-4">
          <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <h4 class="text-2xl font-bold text-[#111624]">You're In!</h4>
          <p class="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
            Thank you for joining! Opening our official Telegram community now. If your browser didn't open the tab automatically, click below:
          </p>
          <div class="pt-3 flex flex-col gap-2.5">
            <a href="https://t.me/+JmmhQa3YglI3NmY8" target="_blank" rel="noopener noreferrer" id="telegram-open-link"
               class="w-full py-3.5 px-6 rounded-full bg-[#111624] hover:bg-[#232938] text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2">
              <span>Join Telegram Channel</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
            <button id="telegram-done-btn" type="button" class="text-xs text-gray-500 hover:text-[#111624] py-1.5 font-medium transition-colors">
              Close window
            </button>
          </div>
        </div>

      </div>
    </div>
  `;
}

export function initRegistrationModal() {
  const modal = document.getElementById('registration-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const doneBtn = document.getElementById('modal-done-btn');
  const form = document.getElementById('registration-form');
  const formView = document.getElementById('modal-form-view');
  const successView = document.getElementById('modal-success-view');
  const courseSelect = document.getElementById('reg-course');
  const modalTitle = document.getElementById('modal-title');
  const regErrorMsg = document.getElementById('reg-error-msg');
  const regSubmitBtn = document.getElementById('reg-submit-btn');
  const regSubmitText = document.getElementById('reg-submit-text');

  if (modal) {
    window.openRegistrationModal = (courseId = null, title = null) => {
      if (courseId && courseSelect) {
        const matchingOption = Array.from(courseSelect.options).find(
          opt => opt.getAttribute('data-course-id') === courseId || opt.value === courseId
        );
        if (matchingOption) {
          courseSelect.value = matchingOption.value;
        }
      }
      if (title && modalTitle) {
        modalTitle.textContent = `Register for ${title}`;
      } else if (modalTitle) {
        modalTitle.textContent = 'Register for a Course';
      }
      if (regErrorMsg) regErrorMsg.classList.add('hidden');
      formView.classList.remove('hidden');
      successView.classList.add('hidden');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (doneBtn) doneBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (regErrorMsg) regErrorMsg.classList.add('hidden');
        if (regSubmitBtn) regSubmitBtn.disabled = true;
        if (regSubmitText) regSubmitText.textContent = 'Submitting...';

        try {
          const formData = new FormData(form);
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
          });
          const result = await response.json();

          if (result.success) {
            formView.classList.add('hidden');
            successView.classList.remove('hidden');
            form.reset();
          } else {
            if (regErrorMsg) {
              regErrorMsg.textContent = result.message || 'Something went wrong. Please try again.';
              regErrorMsg.classList.remove('hidden');
            }
          }
        } catch (err) {
          if (regErrorMsg) {
            regErrorMsg.textContent = 'Network error. Please check your connection and try again.';
            regErrorMsg.classList.remove('hidden');
          }
        } finally {
          if (regSubmitBtn) regSubmitBtn.disabled = false;
          if (regSubmitText) regSubmitText.textContent = 'Complete Registration';
        }
      });
    }
  }

  // Telegram Community Modal Logic
  const tgModal = document.getElementById('telegram-modal');
  const closeTgBtn = document.getElementById('close-telegram-modal-btn');
  const doneTgBtn = document.getElementById('telegram-done-btn');
  const tgForm = document.getElementById('telegram-community-form');
  const tgFormView = document.getElementById('telegram-form-view');
  const tgSuccessView = document.getElementById('telegram-success-view');
  const tgErrorMsg = document.getElementById('telegram-error-msg');
  const tgSubmitBtn = document.getElementById('telegram-submit-btn');
  const tgSubmitText = document.getElementById('telegram-submit-text');

  if (tgModal) {
    window.openTelegramModal = () => {
      if (tgErrorMsg) tgErrorMsg.classList.add('hidden');
      tgFormView.classList.remove('hidden');
      tgSuccessView.classList.add('hidden');
      tgModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const emailInput = document.getElementById('telegram-email');
      if (emailInput) setTimeout(() => emailInput.focus(), 50);
    };

    const closeTgModal = () => {
      tgModal.classList.add('hidden');
      document.body.style.overflow = '';
    };

    if (closeTgBtn) closeTgBtn.addEventListener('click', closeTgModal);
    if (doneTgBtn) doneTgBtn.addEventListener('click', closeTgModal);

    tgModal.addEventListener('click', (e) => {
      if (e.target === tgModal) closeTgModal();
    });

    if (tgForm) {
      tgForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (tgErrorMsg) tgErrorMsg.classList.add('hidden');
        if (tgSubmitBtn) tgSubmitBtn.disabled = true;
        if (tgSubmitText) tgSubmitText.textContent = 'Connecting...';

        const formData = new FormData(tgForm);

        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
            keepalive: true
          });
          const result = await response.json();

          if (result.success) {
            tgFormView.classList.add('hidden');
            tgSuccessView.classList.remove('hidden');
            tgForm.reset();
            window.open(TELEGRAM_INVITE_URL, '_blank', 'noopener,noreferrer');
          } else {
            if (tgErrorMsg) {
              tgErrorMsg.textContent = result.message || 'Unable to submit right now. Please try again.';
              tgErrorMsg.classList.remove('hidden');
            }
          }
        } catch (err) {
          if (tgErrorMsg) {
            tgErrorMsg.textContent = 'Network error. Please check your connection and try again.';
            tgErrorMsg.classList.remove('hidden');
          }
        } finally {
          if (tgSubmitBtn) tgSubmitBtn.disabled = false;
          if (tgSubmitText) tgSubmitText.textContent = 'Continue to Telegram';
        }
      });
    }
  }
}

