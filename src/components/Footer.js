export function renderFooter() {
  return `
    <footer class="bg-[#111624] text-white pt-16 pb-12 border-t border-[#1C2234]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E2538]">
          <!-- Left Col: Brand & Info -->
          <div class="md:col-span-5 space-y-4">
            <a href="index.html" class="flex items-center gap-2">
              <img src="/assets/images/logo-footer.png" alt="MoonTech Life" class="h-7 w-auto object-contain" />
            </a>
            <p class="text-sm text-gray-400 max-w-sm leading-relaxed">
              Empowering the next generation of tech professionals through free, comprehensive training and community support.
            </p>
            <div class="pt-2 text-sm text-gray-300">
              <span class="text-gray-400">Email:</span> 
              <a href="mailto:Team@moontechlife.com" class="hover:text-white transition-colors underline-offset-4 hover:underline">
                Team@moontechlife.com
              </a>
            </div>
            <!-- Social Buttons -->
            <div class="flex items-center gap-3 pt-2">
              <a href="https://x.com/mtl_community?s=11" target="_blank" rel="noopener noreferrer" 
                 class="w-8 h-8 rounded-full bg-[#1C2335] hover:bg-[#9B7641] text-gray-300 hover:text-white flex items-center justify-center text-xs transition-colors" title="X (Twitter)">
                𝕏
              </a>
              <a href="https://www.linkedin.com/company/moontechlife-communiy/" target="_blank" rel="noopener noreferrer" 
                 class="w-8 h-8 rounded-full bg-[#1C2335] hover:bg-[#9B7641] text-gray-300 hover:text-white flex items-center justify-center text-xs font-bold transition-colors" title="LinkedIn">
                in
              </a>
              <a href="https://www.facebook.com/share/1CQSCHZtmh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" 
                 class="w-8 h-8 rounded-full bg-[#1C2335] hover:bg-[#9B7641] text-gray-300 hover:text-white flex items-center justify-center text-xs font-bold transition-colors" title="Facebook">
                fb
              </a>
              <a href="https://www.tiktok.com/@mtl_community?_r=1&_t=ZS-99mFLy0IYFd" target="_blank" rel="noopener noreferrer" 
                 class="w-8 h-8 rounded-full bg-[#1C2335] hover:bg-[#9B7641] text-gray-300 hover:text-white flex items-center justify-center text-xs font-bold transition-colors" title="TikTok">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.86 4.43V12a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.43 4.83 4.83 0 01-2-3z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Middle Col: Programs -->
          <div class="md:col-span-3 space-y-4">
            <h3 class="text-sm font-semibold text-white tracking-wider">Programs</h3>
            <ul class="space-y-2.5 text-sm text-gray-400">
              <li><a href="program-detail.html?id=100days" class="hover:text-white transition-colors">100 Days Tech Challenge</a></li>
              <li><a href="program-detail.html?id=gaming" class="hover:text-white transition-colors">Virtual Gaming Challenge</a></li>
              <li><a href="program-detail.html?id=competition" class="hover:text-white transition-colors">Community Competition</a></li>
              <li><a href="program-detail.html?id=hackathon" class="hover:text-white transition-colors">Hackathons</a></li>
            </ul>
          </div>

          <!-- Right Col: Community -->
          <div class="md:col-span-4 space-y-4">
            <h3 class="text-sm font-semibold text-white tracking-wider">Community</h3>
            <ul class="space-y-2.5 text-sm text-gray-400">
              <li><a href="courses.html" class="hover:text-white transition-colors">Courses</a></li>
              <li><a href="about.html" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="about.html#mission" class="hover:text-white transition-colors">Mission</a></li>
              <li><a href="index.html#testimonials" class="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="contact.html" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Legal / Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2025 MoonTech Life Community. All rights reserved. Building futures, one student at a time.</p>
          <div class="flex items-center gap-6">
            <a href="privacy.html" class="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="terms.html" class="hover:text-gray-300 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
