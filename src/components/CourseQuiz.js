import { courses } from '../data/courses.js';

export const quizQuestions = [
  {
    id: 1,
    question: "What is your main goal in tech right now?",
    subtitle: "Select the outcome that best describes where you want to be.",
    options: [
      {
        label: "Build websites & web applications from scratch",
        desc: "Learn to code clean, responsive websites with HTML, CSS, and modern JavaScript.",
        scores: { 'web-development': 4, 'ai-webdev': 3 }
      },
      {
        label: "Design intuitive digital products & user interfaces",
        desc: "Master UX research, wireframing, and Figma prototyping to design modern apps.",
        scores: { 'product-design': 5 }
      },
      {
        label: "Automate workflows & leverage AI tools for productivity",
        desc: "Connect apps, build AI agents, and eliminate repetitive tasks with smart automation.",
        scores: { 'ai-automation': 5, 'ai-webdev': 2 }
      },
      {
        label: "Protect digital systems & defend against cyber attacks",
        desc: "Understand networks, discover vulnerabilities, and safeguard platforms from threats.",
        scores: { 'cybersecurity': 5, 'ai-webdev': 2 }
      },
      {
        label: "Create compelling digital marketing or video content",
        desc: "Grow audiences, run campaigns, or produce high-impact viral videos.",
        scores: { 'digital-marketing': 3, 'video-editing': 3 }
      }
    ]
  },
  {
    id: 2,
    question: "What is your current experience level in tech?",
    subtitle: "This helps us recommend a course with the right learning pace for you.",
    options: [
      {
        label: "Complete beginner (Zero tech or coding experience)",
        desc: "I want step-by-step guidance from the absolute ground up.",
        scores: { 'product-design': 2, 'web-development': 2, 'digital-marketing': 2, 'video-editing': 2 }
      },
      {
        label: "Self-taught explorer (Familiar with basics or no-code tools)",
        desc: "I've tried tutorials or tools like Canva, WordPress, or basic HTML.",
        scores: { 'web-development': 2, 'ai-webdev': 3, 'ai-automation': 3, 'product-design': 1 }
      },
      {
        label: "Tech enthusiast looking to specialize in modern AI & tech",
        desc: "I have foundational comfort and want high-demand, cutting-edge skillsets.",
        scores: { 'ai-automation': 3, 'ai-webdev': 3, 'cybersecurity': 3 }
      }
    ]
  },
  {
    id: 3,
    question: "Which type of daily activity sounds most exciting to you?",
    subtitle: "Think about the kind of work you'd enjoy doing day in, day out.",
    options: [
      {
        label: "Visual creativity, user empathy & interface layout",
        desc: "Choosing fonts, crafting design systems, and building interactive mockups.",
        scores: { 'product-design': 4 }
      },
      {
        label: "Solving logic puzzles, writing code & deploying live apps",
        desc: "Turning concepts into functional, interactive websites in the browser.",
        scores: { 'web-development': 4, 'ai-webdev': 3 }
      },
      {
        label: "Building smart automated workflows & connecting APIs",
        desc: "Connecting services like Zapier, Make, and LLMs to create autonomous solutions.",
        scores: { 'ai-automation': 4 }
      },
      {
        label: "Analyzing network traffic, threat hunting & auditing security",
        desc: "Investigating how systems work under the hood and testing defensive measures.",
        scores: { 'cybersecurity': 4 }
      },
      {
        label: "Storytelling, motion graphics, video editing & campaign strategy",
        desc: "Editing footage, crafting hooks, and creating marketing funnels that convert.",
        scores: { 'video-editing': 4, 'digital-marketing': 3 }
      }
    ]
  },
  {
    id: 4,
    question: "How do you plan to use the skills you learn?",
    subtitle: "Your career and project trajectory helps us tailor your match.",
    options: [
      {
        label: "Get hired as a Junior Developer or Web Engineer",
        desc: "Build a strong portfolio of live, deployed full-stack web applications.",
        scores: { 'web-development': 4, 'ai-webdev': 3 }
      },
      {
        label: "Work as a UI/UX Designer or Product Designer",
        desc: "Create comprehensive Figma case studies and land design roles.",
        scores: { 'product-design': 4 }
      },
      {
        label: "Freelance or provide automation & AI services to clients",
        desc: "Help businesses save hundreds of hours with bespoke AI automation pipelines.",
        scores: { 'ai-automation': 4, 'ai-webdev': 2 }
      },
      {
        label: "Launch a career in Cybersecurity & Information Protection",
        desc: "Prepare for security analyst roles and industry certification paths.",
        scores: { 'cybersecurity': 4 }
      },
      {
        label: "Grow my brand, freelance in media, or manage marketing",
        desc: "Offer video production or performance marketing services to businesses.",
        scores: { 'digital-marketing': 3, 'video-editing': 3 }
      }
    ]
  },
  {
    id: 5,
    question: "What kind of capstone project would you be most proud to show?",
    subtitle: "Imagine completing your MoonTechLife journey—what did you create?",
    options: [
      {
        label: "A full-featured web app enhanced with AI assistance",
        desc: "A production-grade web project built fast and securely using modern tools.",
        scores: { 'ai-webdev': 4, 'web-development': 3 }
      },
      {
        label: "A complete mobile or web app Figma design case study",
        desc: "A polished UX research document and clickable high-fidelity prototype.",
        scores: { 'product-design': 4 }
      },
      {
        label: "An autonomous multi-step AI automation pipeline for a business",
        desc: "A working AI agent integration that saves real time and money.",
        scores: { 'ai-automation': 4 }
      },
      {
        label: "A comprehensive vulnerability audit report & defense lab",
        desc: "A documented security audit demonstrating threat mitigation skills.",
        scores: { 'cybersecurity': 4 }
      },
      {
        label: "A high-retention video showreel or viral marketing campaign",
        desc: "A portfolio of edited videos or an executed high-conversion ad campaign.",
        scores: { 'video-editing': 4, 'digital-marketing': 3 }
      }
    ]
  }
];

export function initCourseQuiz(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let currentStep = 0;
  const userAnswers = [];

  function calculateResults() {
    const scoreTotals = {
      'ai-webdev': 0,
      'product-design': 0,
      'cybersecurity': 0,
      'digital-marketing': 0,
      'web-development': 0,
      'ai-automation': 0,
      'video-editing': 0
    };

    userAnswers.forEach((ansIndex, qIndex) => {
      const q = quizQuestions[qIndex];
      const selectedOption = q.options[ansIndex];
      if (selectedOption && selectedOption.scores) {
        Object.entries(selectedOption.scores).forEach(([courseId, points]) => {
          scoreTotals[courseId] = (scoreTotals[courseId] || 0) + points;
        });
      }
    });

    let bestMatchId = 'web-development';
    let maxPoints = -1;

    Object.entries(scoreTotals).forEach(([cId, pts]) => {
      if (pts > maxPoints) {
        maxPoints = pts;
        bestMatchId = cId;
      }
    });

    const matchedCourse = courses.find(c => c.id === bestMatchId) || courses[0];
    return { matchedCourse, scoreTotals };
  }

  function render() {
    if (currentStep >= quizQuestions.length) {
      const { matchedCourse } = calculateResults();
      container.innerHTML = `
        <div class="bg-white rounded-3xl border border-[#EAE8E3] shadow-card p-6 sm:p-10 lg:p-12 text-left max-w-4xl mx-auto transition-all">
          
          <!-- Header Badge -->
          <div class="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-gray-100">
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FEF3D6] text-[#9B7641]">
                <span>✨</span> Best Match For You
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                ${matchedCourse.category}
              </span>
            </div>

            <button id="quiz-retake-btn" class="text-xs font-semibold text-gray-500 hover:text-[#111624] underline transition-colors flex items-center gap-1 cursor-pointer">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              <span>Retake Quiz</span>
            </button>
          </div>

          <!-- Matched Course Showcase -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            
            <!-- Course Image & Pastel Box -->
            <div class="lg:col-span-5 flex justify-center">
              <div class="${matchedCourse.bgPastel} rounded-2xl p-6 w-full max-w-sm flex items-center justify-center aspect-square shadow-sm">
                <img src="${matchedCourse.image}" alt="${matchedCourse.title}" class="max-h-56 max-w-full object-contain" />
              </div>
            </div>

            <!-- Course Details -->
            <div class="lg:col-span-7 space-y-4">
              <div class="space-y-2">
                <span class="text-xs font-bold uppercase tracking-wider text-[#9B7641]">${matchedCourse.level} Level</span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-[#111624] tracking-tight">
                  ${matchedCourse.title}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  ${matchedCourse.shortDescription}
                </p>
              </div>

              <!-- Why this course matches you -->
              <div class="p-4 rounded-2xl bg-[#FAFAFA] border border-gray-100 space-y-2">
                <h4 class="text-xs font-bold uppercase tracking-wider text-[#111624]">Why this course matches your profile:</h4>
                <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Based on your goals and preferred activities, this course provides the exact hands-on projects, mentorship, and community accountability you need to succeed.
                </p>
              </div>

              <!-- Key Takeaways Preview -->
              <div class="space-y-2 pt-1">
                <span class="text-xs font-semibold text-gray-500 block">Key skills you'll gain:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  ${matchedCourse.whatYoullLearn.slice(0, 4).map(item => `
                    <div class="flex items-start gap-2">
                      <span class="text-[#9B7641] font-bold">✓</span>
                      <span>${item}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- CTAs -->
              <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a href="course-detail.html?id=${matchedCourse.id}" 
                   class="px-8 py-3.5 rounded-full bg-[#111624] hover:bg-[#232938] text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2">
                  <span>View Course Details & Register</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>

                <button id="quiz-retake-btn-2" class="px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold border border-gray-200 transition-all text-center cursor-pointer">
                  Try Again
                </button>
              </div>

            </div>

          </div>

        </div>
      `;

      document.getElementById('quiz-retake-btn')?.addEventListener('click', () => {
        currentStep = 0;
        userAnswers.length = 0;
        render();
      });

      document.getElementById('quiz-retake-btn-2')?.addEventListener('click', () => {
        currentStep = 0;
        userAnswers.length = 0;
        render();
      });

      return;
    }

    const q = quizQuestions[currentStep];
    const progressPercent = Math.round(((currentStep + 1) / quizQuestions.length) * 100);

    container.innerHTML = `
      <div class="bg-white rounded-3xl border border-[#EAE8E3] shadow-card p-6 sm:p-10 lg:p-12 text-left max-w-3xl mx-auto transition-all">
        
        <!-- Progress Bar & Step Indicator -->
        <div class="space-y-3 mb-8">
          <div class="flex items-center justify-between text-xs font-semibold text-gray-500">
            <span class="text-[#9B7641] uppercase tracking-wider font-bold">Course Finder Quiz</span>
            <span>Question ${currentStep + 1} of ${quizQuestions.length}</span>
          </div>

          <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div class="h-full bg-[#9B7641] rounded-full transition-all duration-300 ease-out" style="width: ${progressPercent}%;"></div>
          </div>
        </div>

        <!-- Question Title & Subtitle -->
        <div class="space-y-2 mb-8">
          <h3 class="text-2xl sm:text-3xl font-extrabold text-[#111624] tracking-tight leading-snug">
            ${q.question}
          </h3>
          <p class="text-xs sm:text-sm text-gray-500 leading-relaxed">
            ${q.subtitle}
          </p>
        </div>

        <!-- Options Grid -->
        <div class="space-y-3 mb-8" id="quiz-options-list">
          ${q.options.map((opt, idx) => `
            <button data-option-index="${idx}" class="quiz-option-btn w-full text-left p-4 sm:p-5 rounded-2xl border ${userAnswers[currentStep] === idx ? 'border-[#9B7641] bg-[#FEF3D6]/40 shadow-sm ring-1 ring-[#9B7641]' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/80'} transition-all flex items-start gap-4 group cursor-pointer">
              <div class="w-6 h-6 rounded-full border-2 ${userAnswers[currentStep] === idx ? 'border-[#9B7641] bg-[#9B7641] text-white' : 'border-gray-300 group-hover:border-gray-400 bg-white'} flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold transition-colors">
                ${userAnswers[currentStep] === idx ? '✓' : String.fromCharCode(65 + idx)}
              </div>
              <div class="space-y-1 flex-1">
                <div class="text-sm sm:text-base font-bold text-[#111624]">${opt.label}</div>
                <div class="text-xs text-gray-500 leading-relaxed font-normal">${opt.desc}</div>
              </div>
            </button>
          `).join('')}
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <button id="quiz-prev-btn" class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#111624] hover:bg-gray-100 transition-all cursor-pointer ${currentStep === 0 ? 'invisible' : ''}">
            ← Previous
          </button>

          <span class="text-xs text-gray-400 font-medium hidden sm:inline">
            Click an option to proceed
          </span>
        </div>

      </div>
    `;

    const optionBtns = container.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const optIdx = parseInt(btn.getAttribute('data-option-index'), 10);
        userAnswers[currentStep] = optIdx;
        currentStep++;
        render();
      });
    });

    const prevBtn = document.getElementById('quiz-prev-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
          currentStep--;
          render();
        }
      });
    }
  }

  render();
}
