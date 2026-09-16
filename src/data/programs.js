export const programs = [
  {
    id: '100days',
    title: '100 Days Tech Challenge',
    badge: 'Challenge',
    badgeClass: 'bg-[#FEF3D6] text-[#9B7641]',
    image: '/assets/images/program-100days.png',
    cardBg: 'bg-[#FEF3D6]',
    heroBg: 'bg-[#FEF3D6]',
    isFeaturedCard: true,
    status: 'Waitlist Open',
    isActive: false,
    ctaText: 'Join the Waitlist',
    description: 'Commit to 100 consecutive days of learning and building. A structured daily challenge spanning coding, design, cybersecurity, and more with community accountability built in.',
    about: 'The 100 Days Tech Challenge is MoonTechLife flagship community initiative. Designed to help aspiring and transitioning tech professionals build unbroken consistency, practical skills, and portfolio projects through 100 consecutive days of focused building and community accountability.',
    whatToExpect: [
      'Daily structured learning prompts and building tasks',
      'Accountability check-ins with fellow challengers and mentors',
      'Milestone project submissions with actionable feedback',
      'Community study groups and collaborative sprint sessions',
      'Graduation showcase and recognition for completion'
    ],
    whoIsThisFor: [
      'Beginners wanting to build a consistent daily learning habit in tech',
      'Self-taught learners who need structure and community accountability',
      'Students and career changers creating real portfolio pieces'
    ],
    whatYouWillLearn: [
      'Consistent project planning and execution habits',
      'Core technical workflows in your chosen track (Coding, Design, or Security)',
      'Public sharing, documentation, and portfolio curation',
      'Peer collaboration and code / design review skills'
    ],
    details: {
      duration: '100 Days',
      format: 'Online & Self-Paced with Daily Check-ins',
      activities: 'Daily building tasks, weekly reviews, community standups',
      participation: 'Individual challenger with community cohort support',
      eligibility: 'Open to all registered MoonTechLife community members'
    }
  },
  {
    id: 'virtual-gaming',
    title: 'Virtual Gaming Challenge',
    badge: 'Competition',
    badgeClass: 'bg-[#E0E9FE] text-[#2353C4]',
    image: '/assets/images/program-gaming.png',
    cardBg: 'bg-white',
    heroBg: 'bg-[#E0E9FE]',
    isFeaturedCard: false,
    status: 'Upcoming',
    isActive: false,
    ctaText: 'Join Waitlist',
    description: 'Put your problem-solving skills to the test in a tech-driven gaming competition. Teams compete across rounds of logic, strategy, and creative thinking challenges.',
    about: 'The Virtual Gaming Challenge brings together logic, strategy, and collaborative problem-solving in a high-energy competition format. Participants form teams to tackle algorithmic puzzles, interactive scenarios, and creative tech challenges.',
    whatToExpect: [
      'Timed logic and problem-solving tournament rounds',
      'Team-based strategy missions and technical puzzles',
      'Live leaderboards and interactive challenge stages',
      'Mentorship guidance from experienced problem solvers',
      'Prizes and certificates for top-performing teams'
    ],
    whoIsThisFor: [
      'Tech enthusiasts who enjoy logic puzzles, gaming, and strategy',
      'Students wanting to practice analytical thinking under tournament conditions',
      'Teams looking to collaborate in competitive problem-solving scenarios'
    ],
    whatYouWillLearn: [
      'Algorithmic and logical problem decomposition',
      'Rapid decision-making in collaborative team settings',
      'Strategic thinking applied to computational challenges'
    ],
    details: {
      duration: '4 Weeks',
      format: 'Virtual Tournament Rounds',
      activities: 'Weekly tournament matches, puzzle sprints, finals showcase',
      participation: 'Teams of 2 to 5 participants',
      eligibility: 'Open to all MoonTechLife community members'
    }
  },
  {
    id: 'community-competition',
    title: 'Community Competition',
    badge: 'Competition',
    badgeClass: 'bg-[#E0E9FE] text-[#2353C4]',
    image: '/assets/images/program-competition.png',
    cardBg: 'bg-white',
    heroBg: 'bg-[#E0E9FE]',
    isFeaturedCard: false,
    status: 'Upcoming',
    isActive: false,
    ctaText: 'Join Waitlist',
    description: 'Open competitions across tech disciplines: UI design, coding sprints, data challenges, and more. Open to all MoonTech Life community members.',
    about: 'Community Competitions are recurring challenges across diverse tech disciplines including UI/UX design, frontend development sprints, data visualization, and cybersecurity challenges. Designed to give learners a platform to showcase their growth.',
    whatToExpect: [
      'Discipline-specific challenge prompts released periodically',
      'Submission reviews by community mentors and industry judges',
      'Constructive feedback and public recognition for standout submissions',
      'Featured spotlights on the MoonTechLife community channels'
    ],
    whoIsThisFor: [
      'Learners looking to test their skills against real-world challenge briefs',
      'Designers, developers, and security learners seeking portfolio highlights',
      'Community members seeking friendly peer competition and feedback'
    ],
    whatYouWillLearn: [
      'Interpreting and delivering on realistic design and development briefs',
      'Working within tight sprint constraints and requirements',
      'Presenting work effectively for evaluation and review'
    ],
    details: {
      duration: 'Ongoing Seasonal Rounds',
      format: 'Online Challenge Briefs',
      activities: 'Brief release, sprint submissions, peer voting, judge reviews',
      participation: 'Individual and team entries depending on category',
      eligibility: 'Open to all community members'
    }
  },
  {
    id: 'hackathon',
    title: 'MoonTech Hackathon',
    badge: 'Hackathon',
    badgeClass: 'bg-[#FCE4EC] text-[#B81D5B]',
    image: '/assets/images/program-hackathon.png',
    cardBg: 'bg-white',
    heroBg: 'bg-[#FCE4EC]',
    isFeaturedCard: false,
    status: 'Upcoming',
    isActive: false,
    ctaText: 'Join Waitlist',
    description: '48-hour build-a-thon where teams tackle real-world problems using technology. Prizes, mentorship, and exposure to industry professionals await.',
    about: 'The MoonTech Hackathon is an intensive 48-hour collaborative build event. Multidisciplinary teams of developers, designers, and problem solvers come together to prototype functional solutions for real community and business challenges.',
    whatToExpect: [
      'Curated challenge tracks with real problem statements',
      'Dedicated mentor office hours and technical support during the sprint',
      'Live pitch sessions and product demo evaluations',
      'Prizes, certificates, and opportunities for project continuation'
    ],
    whoIsThisFor: [
      'Developers, designers, and project leads ready for an intensive build sprint',
      'Students wanting high-intensity team product development experience',
      'Innovators aiming to build MVP prototypes with community impact'
    ],
    whatYouWillLearn: [
      'Rapid prototype development and agile MVP scoping',
      'Cross-functional team collaboration between design and engineering',
      'Product pitching, live demos, and technical presentations'
    ],
    details: {
      duration: '48 Hours',
      format: 'Virtual Hackathon Sprint',
      activities: 'Team formation, sprint building, mentor sessions, demo day',
      participation: 'Teams of 3 to 6 participants',
      eligibility: 'Open to registered participants globally'
    }
  },
  {
    id: 'mentorship',
    title: 'Peer Mentorship Programme',
    badge: 'Community',
    badgeClass: 'bg-[#E3F8EB] text-[#067647]',
    image: '/assets/images/program-mentorship.png',
    cardBg: 'bg-white',
    heroBg: 'bg-[#E3F8EB]',
    isFeaturedCard: false,
    status: 'Upcoming',
    isActive: false,
    ctaText: 'Join Waitlist',
    description: 'Connect with experienced community members who guide you through your learning journey, help with projects, and share real industry insights.',
    about: 'The Peer Mentorship Programme pairs learners with experienced community alumni and industry practitioners. Mentees receive 1-on-1 guidance, portfolio reviews, career pathway support, and continuous encouragement throughout their journey.',
    whatToExpect: [
      'Structured 1-on-1 mentorship matching based on learning goals',
      'Bi-weekly mentor check-ins and progress milestones',
      'Portfolio, resume, and project review sessions',
      'Direct guidance on breaking into the tech industry'
    ],
    whoIsThisFor: [
      'Learners seeking personal guidance and accountability in their track',
      'Career changers needing roadmap clarity and industry insights',
      'Advanced learners and alumni looking to give back as mentors'
    ],
    whatYouWillLearn: [
      'Career roadmap planning and skill prioritization',
      'Professional communication and portfolio positioning',
      'Navigating job applications, interviews, and freelancing opportunities'
    ],
    details: {
      duration: 'Ongoing Cohorts (12 Weeks per Cycle)',
      format: '1-on-1 Virtual Sessions & Asynchronous Check-ins',
      activities: 'Goal setting, bi-weekly 1-on-1 calls, project feedback',
      participation: 'Mentee and Mentor pairings',
      eligibility: 'Active MoonTechLife community members'
    }
  },
  {
    id: 'showcase',
    title: 'Project Showcase',
    badge: 'Community',
    badgeClass: 'bg-[#E3F8EB] text-[#067647]',
    image: '/assets/images/program-showcase.png',
    cardBg: 'bg-white',
    heroBg: 'bg-[#E3F8EB]',
    isFeaturedCard: false,
    status: 'Upcoming',
    isActive: false,
    ctaText: 'Join Waitlist',
    description: 'Monthly community event where students and alumni demo their work, receive feedback, and celebrate progress. Open to all MoonTech Life learners.',
    about: 'Project Showcase is a monthly community event celebrating the projects built by MoonTechLife learners. Participants present live demos of their websites, apps, designs, and security audits, receiving constructive feedback from peers and mentors.',
    whatToExpect: [
      'Live virtual demo sessions and product walkthroughs',
      'Constructive critique and praise from peers and mentors',
      'Networking opportunities across all learning tracks',
      'Recorded showcases featured on community media'
    ],
    whoIsThisFor: [
      'Learners who have completed a project and want to demo it publicly',
      'Community members seeking inspiration and feedback on their creations',
      'Recruiters and partners looking to discover emerging talent'
    ],
    whatYouWillLearn: [
      'Public speaking and technical demo presentation skills',
      'Receiving, evaluating, and applying constructive user feedback',
      'Communicating technical architecture and design decisions clearly'
    ],
    details: {
      duration: 'Monthly Event Sessions',
      format: 'Live Virtual Community Stage',
      activities: '5-minute live demos, Q&A, mentor feedback, community voting',
      participation: 'Open to presenters and audience members',
      eligibility: 'All MoonTechLife community members welcome'
    }
  }
];

export function getProgramById(id) {
  return programs.find(p => p.id === id) || programs[0];
}
