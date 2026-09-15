export const courses = [
  {
    id: 'ai-webdev',
    title: 'AI WebDev+ Cybersecurity',
    slug: 'ai-webdev-cybersecurity',
    category: 'AI & Tech',
    categoryFilter: 'ai-tech',
    level: 'Beginner-Intermediate',
    duration: '12 weeks',
    cost: 'Free',
    bgPastel: 'bg-[#FFF6DD]',
    heroBg: 'bg-[#FFF6DD]',
    badgeBg: 'bg-[#FFF6DD] text-[#946300]',
    image: '/assets/images/course-ai-webdev.png',
    shortDescription: 'Build modern websites faster with AI-powered tools, learn essential cybersecurity practices, and discover practical strategies for monetising your skills.',
    overview: 'The AI WebDev + Cybersecurity course at MoonTechLife combines modern front-end engineering with AI augmentation and vital security hygiene. Learn how to build production-grade web applications with AI assistance, safeguard them against common vulnerabilities, and deploy them with confidence.',
    whatYoullLearn: [
      'Core fundamentals of modern web development and responsive layout',
      'AI-accelerated coding workflows and prompt engineering for developers',
      'Essential cybersecurity hygiene and application vulnerability prevention',
      'Git, version control, and continuous deployment workflows',
      'Portfolio-ready production web projects',
      'Career guidance, freelancing strategy, and monetisation tactics'
    ],
    modules: [
      {
        title: 'Module 1: Modern Web Foundations & Semantic Architecture',
        description: 'Semantic HTML5, modern CSS layouts (Flexbox & Grid), responsive design systems, and developer tooling setup.'
      },
      {
        title: 'Module 2: AI-Powered Development Workflows',
        description: 'Using modern AI pair programming tools, code generation, debugging, refactoring, and automated testing.'
      },
      {
        title: 'Module 3: Web Security Fundamentals & Threat Mitigation',
        description: 'OWASP Top 10 web vulnerabilities, authentication security, input validation, secure API communication, and HTTPS.'
      },
      {
        title: 'Module 4: Capstone Project & Deployment',
        description: 'Building an end-to-end full-stack AI-enabled web application, hosting, domain setup, and portfolio showcase.'
      }
    ],
    whoIsThisFor: [
      'Complete beginners looking to learn web development rapidly with modern tools',
      'Junior developers wanting to integrate AI workflows and web security into their skill set',
      'Career changers seeking practical, job-ready project experience'
    ],
    requirements: [
      'No prior programming experience required',
      'A computer (Windows, Mac, or Linux) with reliable internet access',
      'Curiosity and willingness to commit 6-8 hours weekly'
    ],
    studentQuote: {
      quote: 'Learning AI WebDev with MoonTechLife helped me build and launch my own website for Digital & AI Automation services.',
      name: 'Musa Nankwat Dashuwang',
      role: 'Web Development Student'
    }
  },
  {
    id: 'product-design',
    title: 'Product Design',
    slug: 'product-design',
    category: 'Design',
    categoryFilter: 'design',
    level: 'Beginner',
    duration: '10 weeks',
    cost: 'Free',
    bgPastel: 'bg-[#DDE2FF]',
    heroBg: 'bg-[#DDE2FF]',
    badgeBg: 'bg-[#DDE2FF] text-[#2353C4]',
    image: '/assets/images/course-product-design.png',
    shortDescription: 'Learn to design intuitive digital experiences using industry-standard tools while building a portfolio of real-world projects.',
    overview: 'Our Product Design course guides you through user research, wireframing, design systems, visual hierarchy, prototyping, and user testing. You will master Figma and develop high-fidelity interfaces that solve real user problems.',
    whatYoullLearn: [
      'User experience (UX) research and empathy mapping',
      'Information architecture, user flows, and wireframing',
      'Mastering Figma: auto-layout, components, variants, and variables',
      'Visual hierarchy, typography, color theory, and modern design systems',
      'Interactive micro-animations and clickable high-fidelity prototypes',
      'Design handoff, developer communication, and case study documentation'
    ],
    modules: [
      {
        title: 'Module 1: UX Fundamentals & User Research',
        description: 'Understanding user personas, conducting interviews, problem statements, and journey mapping.'
      },
      {
        title: 'Module 2: UI Design Principles & Design Systems',
        description: 'Grids, spacing, typography scales, color contrast, Figma auto-layout, and reusable UI component kits.'
      },
      {
        title: 'Module 3: Advanced Prototyping & Interaction Design',
        description: 'Building dynamic interactive prototypes, smart animations, micro-interactions, and usability testing sessions.'
      },
      {
        title: 'Module 4: Portfolio Case Study & Client Handoff',
        description: 'Creating end-to-end design case studies, portfolio presentation, and client presentation skills.'
      }
    ],
    whoIsThisFor: [
      'Creative individuals who want to transition into UX/UI and digital product design',
      'Developers who want to strengthen their design eye and user interface skills',
      'Founders and product thinkers wanting to design their own digital products'
    ],
    requirements: [
      'No previous design background required',
      'A computer with access to Figma (free account)',
      'A passion for problem-solving and visual storytelling'
    ],
    studentQuote: {
      quote: 'The 100 Days Tech Challenge strengthened my skills in UI/UX, from wireframing to prototyping. It gave me the confidence to keep building & improving.',
      name: 'Kemnele Bethel',
      role: 'UI/UX Student'
    }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    category: 'Security',
    categoryFilter: 'security',
    level: 'Beginner-Intermediate',
    duration: '14 weeks',
    cost: 'Free',
    bgPastel: 'bg-[#EADDFF]',
    heroBg: 'bg-[#EADDFF]',
    badgeBg: 'bg-[#EADDFF] text-[#6927B9]',
    image: '/assets/images/course-cybersecurity.png',
    shortDescription: 'Develop the skills to identify, prevent, and respond to cyber threats while learning the foundations of securing modern digital systems.',
    overview: 'The Cybersecurity course prepares learners for foundational roles in information security. Explore network security, ethical hacking fundamentals, digital forensics, incident response, and security auditing with hands-on lab environments.',
    whatYoullLearn: [
      'Computer networking, TCP/IP fundamentals, and packet analysis',
      'Identifying vulnerabilities, threat vectors, and attack mechanisms',
      'Ethical hacking methodologies and reconnaissance',
      'Securing cloud infrastructure, operating systems, and endpoints',
      'Incident response frameworks and digital forensics basics',
      'Industry certifications guidance (CompTIA Security+, CEH roadmap)'
    ],
    modules: [
      {
        title: 'Module 1: Networking & Systems Security Foundations',
        description: 'Network architecture, OSI model, ports, protocols, firewalls, and Linux command-line essentials.'
      },
      {
        title: 'Module 2: Threat Landscapes & Vulnerability Assessment',
        description: 'Malware types, phishing, social engineering, vulnerability scanning, and threat intelligence basics.'
      },
      {
        title: 'Module 3: Defensive Security & Hardening',
        description: 'System hardening, encryption, access controls, SIEM monitoring, and security incident workflows.'
      },
      {
        title: 'Module 4: Security Labs & Capstone Audit',
        description: 'Hands-on virtual lab challenges, conducting a vulnerability assessment report, and presentation.'
      }
    ],
    whoIsThisFor: [
      'Aspiring security analysts and IT professionals',
      'Students looking to build practical defensive cybersecurity capabilities',
      'Tech enthusiasts wanting to understand how modern systems protect against exploits'
    ],
    requirements: [
      'Basic computer literacy and comfort with operating systems',
      'A computer with at least 8GB RAM for virtualization labs',
      'Reliable internet access'
    ],
    studentQuote: {
      quote: 'Being part of MoonTechLife has made my learning experience engaging and meaningful. The community support kept me consistent.',
      name: 'Uchechukwu Daniel',
      role: 'Cybersecurity Student'
    }
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    category: 'Marketing',
    categoryFilter: 'marketing',
    level: 'Beginner',
    duration: '8 weeks',
    cost: 'Free',
    bgPastel: 'bg-[#FFDDEC]',
    heroBg: 'bg-[#FFDDEC]',
    badgeBg: 'bg-[#FFDDEC] text-[#B81D5B]',
    image: '/assets/images/course-digital-marketing.png',
    shortDescription: 'Master the strategies behind social media, content marketing, SEO, paid advertising, and campaign analytics to grow brands online.',
    overview: 'Learn how to generate leads, build engaged audiences, and scale brands using modern digital marketing channels. From search engine optimization (SEO) and paid ads (Meta, Google) to email automation and analytics, gain hands-on campaign execution experience.',
    whatYoullLearn: [
      'Brand positioning, buyer persona development, and marketing funnels',
      'Search Engine Optimization (SEO) & keyword research strategies',
      'Social media marketing strategies across Instagram, LinkedIn, TikTok, and X',
      'Running paid advertising campaigns on Meta Ads and Google Ads',
      'Email marketing, copywriting, and CRM automation',
      'Campaign performance tracking using Google Analytics 4'
    ],
    modules: [
      {
        title: 'Module 1: Fundamentals of Marketing & Audience Strategy',
        description: 'Customer journeys, value propositions, competitive research, and digital branding.'
      },
      {
        title: 'Module 2: Organic Growth, Content & SEO',
        description: 'Content marketing calendars, on-page & technical SEO, and organic social media growth.'
      },
      {
        title: 'Module 3: Paid Advertising & Conversion Optimization',
        description: 'Setting up ad accounts, budget management, creative testing, A/B testing, and landing page optimization.'
      },
      {
        title: 'Module 4: Analytics, Reporting & Client Management',
        description: 'Interpreting CAC, ROAS, conversion rates, client reporting dashboards, and pitching marketing services.'
      }
    ],
    whoIsThisFor: [
      'Aspiring digital marketers, content creators, and social media managers',
      'Entrepreneurs and small business owners looking to scale online revenue',
      'Career switchers wanting high-demand freelance and remote marketing skills'
    ],
    requirements: [
      'No previous marketing experience required',
      'A computer or laptop with internet access',
      'Enthusiasm for creative storytelling and data-driven thinking'
    ],
    studentQuote: {
      quote: 'MoonTech Life didn’t just teach me digital marketing; it taught me how to think like a professional. The community is the real magic.',
      name: 'Bisi Olanrewaju',
      role: 'Digital Marketing Graduate'
    }
  },
  {
    id: 'web-development',
    title: 'Web Development',
    slug: 'web-development',
    category: 'Development',
    categoryFilter: 'development',
    level: 'Beginner-Advanced',
    duration: '16 weeks',
    cost: 'Free',
    bgPastel: 'bg-[#DDF9FF]',
    heroBg: 'bg-[#DDF9FF]',
    badgeBg: 'bg-[#DDF9FF] text-[#0369A1]',
    image: '/assets/images/course-webdev.png',
    shortDescription: 'Learn to build responsive, high-performing websites using modern web technologies and best practices from front-end to deployment.',
    overview: 'A comprehensive curriculum taking learners from zero programming knowledge to building dynamic, interactive web applications. You will learn modern JavaScript (ES6+), component architecture, responsive CSS, REST APIs, Git workflows, and deployment on global cloud platforms.',
    whatYoullLearn: [
      'Semantic HTML5, CSS3, Flexbox, CSS Grid, and responsive design',
      'Modern JavaScript (ES6+): DOM manipulation, async/await, fetch API',
      'Modern front-end tooling and build systems',
      'Working with third-party APIs and managing asynchronous state',
      'Git, GitHub, code reviews, and team collaboration workflows',
      'Building, optimizing, and deploying production applications'
    ],
    modules: [
      {
        title: 'Module 1: The Core Web (HTML & CSS Mastery)',
        description: 'Building responsive, accessible web pages from Figma designs with mobile-first CSS architecture.'
      },
      {
        title: 'Module 2: JavaScript Deep Dive & Interactivity',
        description: 'Data structures, functions, DOM events, API integrations, and modern ES6+ features.'
      },
      {
        title: 'Module 3: Single Page Applications & Component Architecture',
        description: 'Building modular applications, routing, state management, and modern component design.'
      },
      {
        title: 'Module 4: Full Production Capstone & Live Launch',
        description: 'Complete capstone project development, testing, Lighthouse performance optimization, and custom domain deployment.'
      }
    ],
    whoIsThisFor: [
      'Beginners with zero coding experience who want to become web developers',
      'Self-taught learners who want structured mentorship and accountability',
      'Tech enthusiasts aiming for junior software engineering roles'
    ],
    requirements: [
      'A laptop or desktop computer with standard specs',
      'Stable internet connection for live sessions and labs',
      'Commitment to continuous practice'
    ],
    studentQuote: {
      quote: 'Joining the 100 Days Tech Challenge was an opportunity I truly looked forward to. The challenge helped me grow my knowledge, while community support made the learning experience even more valuable.',
      name: 'Esther Oliseh',
      role: 'Web Development Student'
    }
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    slug: 'ai-automation',
    category: 'AI & Tech',
    categoryFilter: 'ai-tech',
    level: 'Intermediate',
    duration: '10 weeks',
    cost: 'Free',
    bgPastel: 'bg-[#FFE3DD]',
    heroBg: 'bg-[#FFE3DD]',
    badgeBg: 'bg-[#FFE3DD] text-[#B34A05]',
    image: '/assets/images/course-ai-automation.png',
    shortDescription: 'Learn how to automate workflows, streamline business processes, and build AI-powered solutions using today\'s leading automation tools and platforms.',
    overview: 'The AI Automation course at MoonTech Life combines live instruction, mentorship, and hands-on projects to give you job-ready skills in AI automation. Every lesson is built around real outcomes.',
    whatYoullLearn: [
      'Core fundamentals of ai automation',
      'Industry tools and workflows',
      'Real-world project experience',
      'Portfolio-ready deliverables',
      'Mentorship and community support',
      'Career guidance and job prep'
    ],
    modules: [
      {
        title: 'Module 1: Foundations',
        description: 'Introduction to automation principles, API fundamentals, webhooks, and understanding LLM integration patterns.'
      },
      {
        title: 'Module 2: Intermediate Skills',
        description: 'Building multi-step automated workflows with Make.com, n8n, Zapier, and connecting AI models to external databases.'
      },
      {
        title: 'Module 3: Advanced Application',
        description: 'Custom AI agents, automated CRM pipelines, customer support triage bots, and document intelligence workflows.'
      },
      {
        title: 'Module 4: Portfolio & Launch',
        description: 'End-to-end client solution build, ROI calculation, client pitching, and portfolio packaging.'
      }
    ],
    whoIsThisFor: [
      'Complete beginners and career changers',
      'Students looking for practical experience',
      'Professionals upskilling in this area'
    ],
    requirements: [
      'No prior experience required',
      'A computer with internet access',
      'Curiosity about AI and modern workflow automation'
    ],
    studentQuote: {
      quote: 'The structured curriculum and community support made all the difference. I learned more in 10 weeks than I had in years of self-studying.',
      name: 'Adeyomi Cynthia',
      role: 'AI Automation Student'
    }
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    slug: 'video-editing',
    category: 'Creative',
    categoryFilter: 'creative',
    level: 'Beginner',
    duration: '8 weeks',
    cost: 'Free',
    bgPastel: 'bg-[#DDFFE2]',
    heroBg: 'bg-[#DDFFE2]',
    badgeBg: 'bg-[#DDFFE2] text-[#067647]',
    image: '/assets/images/course-video-editing.png',
    shortDescription: 'Create professional-quality videos for social media, marketing, and digital content using modern editing techniques, storytelling, motion graphics, and post-production workflows.',
    overview: 'Learn the craft of visual storytelling and high-impact video production. Master timeline editing, color grading, audio synchronization, dynamic captions, and motion graphics to create scroll-stopping content for brands and creators.',
    whatYoullLearn: [
      'Video editing fundamentals, pacing, and storytelling rhythm',
      'Mastering Premiere Pro, CapCut Pro, and DaVinci Resolve',
      'Audio cleanup, sound design, and music synchronization',
      'Color correction, color grading, and cinematic looks',
      'Dynamic typography, viral caption animations, and motion effects',
      'Exporting optimized video formats for YouTube, Reels, TikTok, and web'
    ],
    modules: [
      {
        title: 'Module 1: Timeline Essentials & Video Grammar',
        description: 'Importing footage, organizational workflows, rough cuts, pacing, and basic transitions.'
      },
      {
        title: 'Module 2: Audio Engineering & Sound Design',
        description: 'Voiceover cleanup, EQ, compression, sound effects placement, and mixing background tracks.'
      },
      {
        title: 'Module 3: Color Grading & Visual Effects',
        description: 'LUTs, waveform scopes, skin tone balancing, keyframing, and motion graphics.'
      },
      {
        title: 'Module 4: Commercial Reel & Client Projects',
        description: 'Creating a high-energy showreel, pricing video services, and delivering client revisions.'
      }
    ],
    whoIsThisFor: [
      'Aspiring video editors, content creators, and social media producers',
      'Creative individuals wanting to monetize visual editing skills',
      'Marketers needing in-house video creation capabilities'
    ],
    requirements: [
      'A computer capable of running video editing software (Premiere Pro, DaVinci Resolve, or CapCut)',
      'Headphones for audio mixing',
      'Reliable internet connection'
    ],
    studentQuote: {
      quote: 'MoonTech Life helped me turn my passion for video into client-ready skills. The feedback on my edits was invaluable.',
      name: 'Chukwudi Prosper',
      role: 'Creative Editing Graduate'
    }
  }
];

export function getCourseById(id) {
  if (!id) return courses[5];
  return courses.find(c => c.id === id || c.slug === id) || courses[5];
}
