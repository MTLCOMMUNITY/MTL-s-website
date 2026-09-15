import { courses } from '../data/courses.js';

export function renderRegistrationModal() {
  const courseOptions = courses.map(c => `<option value="${c.id}">${c.title} (${c.duration})</option>`).join('');

  return `
    <div id="registration-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div class="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden border border-gray-100 transform transition-transform scale-95 duration-200" id="modal-container">
        
        <!-- Close Button -->
        <button id="close-modal-btn" class="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
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

          <form id="registration-form" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Full Name</label>
              <input type="text" id="reg-name" required placeholder="e.g. Chukwudi Okafor" 
                     class="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B7641]/40 focus:border-[#9B7641]">
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Email Address</label>
              <input type="email" id="reg-email" required placeholder="chukwudi@example.com" 
                     class="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B7641]/40 focus:border-[#9B7641]">
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">WhatsApp / Phone Number</label>
              <input type="tel" id="reg-phone" required placeholder="+234 801 234 5678" 
                     class="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B7641]/40 focus:border-[#9B7641]">
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Select Program / Course</label>
              <select id="reg-course" required 
                      class="w-full px-4 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B7641]/40 focus:border-[#9B7641]">
                <option value="100days">100 Days Tech Challenge (Community Flagship)</option>
                ${courseOptions}
              </select>
            </div>

            <div class="pt-2">
              <button type="submit" 
                      class="w-full py-3.5 px-6 rounded-full bg-[#111624] hover:bg-[#232938] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <span>Complete Registration</span>
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
            <button id="modal-done-btn" class="px-6 py-2.5 rounded-full bg-[#111624] text-white text-sm font-medium hover:bg-[#232938]">
              Back to Website
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

  if (!modal) return;

  window.openRegistrationModal = (courseId = null, title = null) => {
    if (courseId && courseSelect) {
      courseSelect.value = courseId;
    }
    if (title && modalTitle) {
      modalTitle.textContent = `Register for ${title}`;
    } else if (modalTitle) {
      modalTitle.textContent = 'Register for a Course';
    }
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
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      formView.classList.add('hidden');
      successView.classList.remove('hidden');
      form.reset();
    });
  }
}
