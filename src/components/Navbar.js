export function renderNavbar(activePage = 'home') {
  const isHome = activePage === 'home';
  const isPrograms = activePage === 'programs';
  const isCourses = activePage === 'courses';
  const isAbout = activePage === 'about';
  const isContact = activePage === 'contact';

  const linkClass = (isActive) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-[#9B7641] font-semibold'
        : 'text-[#374151] hover:text-[#111624]'
    }`;

  return `
    <header class="w-full bg-[#FAFAFA]/90 backdrop-blur-md sticky top-0 z-40 border-b border-[#EAE8E3]/60 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <!-- Brand Logo (Actual Figma Asset) -->
        <a href="index.html" class="flex items-center gap-2 group">
          <img src="/assets/images/logo-header.png" alt="MoonTech Life" class="h-8 sm:h-9 w-auto object-contain" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="programs.html" class="${linkClass(isPrograms)}">Programs</a>
          <a href="courses.html" class="${linkClass(isCourses)}">Courses</a>
          <a href="about.html" class="${linkClass(isAbout)}">About us</a>
          <a href="contact.html" class="${linkClass(isContact)}">Contact</a>
        </nav>

        <!-- Header CTA & Mobile Menu Toggle -->
        <div class="flex items-center gap-3">
          <a href="program-detail.html?id=100days" 
             class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#141722] hover:bg-[#232938] text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow transition-all">
            100 days tech challenge
          </a>
          
          <button id="mobile-menu-btn" 
                  aria-label="Toggle Menu"
                  class="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Drawer -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-[#EAE8E3] bg-[#FAFAFA] px-4 pt-3 pb-6 space-y-3">
        <a href="programs.html" class="block py-2 px-3 rounded-lg text-base font-medium ${isPrograms ? 'bg-amber-50 text-[#9B7641]' : 'text-gray-700 hover:bg-gray-50'}">Programs</a>
        <a href="courses.html" class="block py-2 px-3 rounded-lg text-base font-medium ${isCourses ? 'bg-amber-50 text-[#9B7641]' : 'text-gray-700 hover:bg-gray-50'}">Courses</a>
        <a href="about.html" class="block py-2 px-3 rounded-lg text-base font-medium ${isAbout ? 'bg-amber-50 text-[#9B7641]' : 'text-gray-700 hover:bg-gray-50'}">About us</a>
        <a href="contact.html" class="block py-2 px-3 rounded-lg text-base font-medium ${isContact ? 'bg-amber-50 text-[#9B7641]' : 'text-gray-700 hover:bg-gray-50'}">Contact</a>
        <div class="pt-2">
          <a href="program-detail.html?id=100days" class="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#141722] text-white text-sm font-medium">
            100 days tech challenge
          </a>
        </div>
      </div>
    </header>
  `;
}
