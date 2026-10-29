/**
 * portfolioData.js — Centralized Static Portfolio Data
 *
 * Why this file exists:
 *   - Single source of truth for all content displayed in the portfolio.
 *   - Updating personal details, projects, skills, or achievements requires editing
 *     only this file, without touching UI components.
 *   - Strictly adheres to the rule of using only verified student information.
 */

export const PERSONAL_INFO = {
  name: "Surya Kumar T",
  initials: "SK",
  headline: "Software Developer Intern @ Aerele Technologies & Full-Stack Architect",
  role: "Full Stack Developer | Aerele Technologies | Java | MERN | CSBS",
  shortBio:
    "Software Developer Intern at Aerele Technologies and final-year B.Tech CSBS student at Bannari Amman Institute of Technology (8.3 CGPA). Solved 400+ problems on LeetCode. Skilled in MERN stack, Core Java, and enterprise development with Frappe and ERPNext.",
  photoUrl: "/profile.jpg",
  email: "suryaselvam.219@gmail.com",
  github: "https://github.com/Surya2730",
  linkedin: "https://www.linkedin.com/in/suryakumardev/",
  leetcode: "https://leetcode.com/u/surya_1929/",
  leetcodeSolved: "400+",
  resumeUrl: "/Resume.pdf",
  location: "Tuticorin, Tamil Nadu, India",
  college: "Bannari Amman Institute of Technology",
  degree: "B.Tech Computer Science and Business Systems",
  cgpa: "8.3",
  currentCompany: "Aerele Technologies",
  currentRole: "Software Developer Intern",
  currentPeriod: "July 2026 — Present",
  currentFocus: "Frappe Framework & ERPNext",
  approach:
    "I believe in building software that balances high-performance architecture with intuitive user delight. From architecting normalized schemas in MongoDB to developing enterprise DocTypes in Frappe/ERPNext, and crafting smooth 3D scenes in the browser, I focus on clean code, maintainability, and end-to-end reliability.",
  careerGoal:
    "Aspiring to join an innovative technology team where I can engineer scalable full-stack applications, solve complex distributed systems challenges, and push the envelope of modern web design.",
};

export const SKILL_CATEGORIES = [
  {
    title: "Programming",
    skills: ["Java", "C", "C++", "Python"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "Tools & CS Fundamentals",
    skills: [
      "Git",
      "GitHub",
      "REST APIs",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Data Structures and Algorithms",
    ],
  },
];

export const PROJECTS = [
  {
    id: "smart-infrastructure-audit",
    title: "AI-Enabled Smart Infrastructure Audit System",
    subtitle: "Live Location Verified Inspection Platform",
    description:
      "An enterprise infrastructure inspection management application combining real-time geo-location verification, automated workflow routing, and structured audit reports.",
    problem:
      "Infrastructure auditing often suffers from falsified inspection reports, lack of proof-of-physical-presence, and cumbersome paper-based reporting.",
    features: [
      "Live GPS geo-fencing ensuring inspectors are physically present on-site",
      "Structured mobile-friendly audit checklist submission workflow",
      "Role-based dashboards for inspectors, supervisors, and administrators",
      "Automated compliance report generation with photo proofs",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
    githubUrl: "https://github.com/Surya2730",
    liveUrl: "https://audit-management-system-xi.vercel.app/",
    conferenceNote: "Presented at International Conference (ICET-SEMA-2026)",
  },
  {
    id: "student-dropout-prediction",
    title: "Student Dropout Prediction System",
    subtitle: "ML-Driven Early Intervention Platform",
    description:
      "A predictive analytics system integrating Machine Learning with a full-stack MERN web interface to identify students at risk of academic dropout and trigger timely mentoring.",
    problem:
      "Educational institutions lack automated early-warning tools to spot warning signals (attendance drops, grades, engagement metrics) before students drop out.",
    features: [
      "Supervised ML pipeline with Logistic Regression reaching 84% accuracy",
      "Interactive counselor dashboard visualizing at-risk probability factors",
      "Automated alert generation for academic faculty",
      "Historical student academic trend reports",
    ],
    techStack: ["Machine Learning", "Python", "React.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Surya2730/DropOut_Prediction_System",
    liveUrl: "https://dropout-prediction-phi.vercel.app/login",
    highlight: "84% Reported Model Accuracy",
  },
  {
    id: "know-my-campus",
    title: "KnowMyCampus — Personalized Chatbot",
    subtitle: "Campus Navigation & Event Assistant",
    description:
      "A campus information and query-resolution platform integrating personalized chatbot responses, student profile management, campus news bulletins, and event management.",
    problem:
      "College students often struggle to locate critical academic schedules, campus venues, departmental announcements, and real-time event updates scattered across multiple channels.",
    features: [
      "Personalized query chatbot with conversational context",
      "Firebase Authentication for verified student logins",
      "Dynamic campus news bulletin & live event notifications",
      "Student profile dashboard with saved events and reminders",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    githubUrl: "https://github.com/Surya2730/KnowMyCampusDemo",
    liveUrl: "https://knowmycampus.vercel.app/",
    conferenceNote: "Presented at International Conference (iThink 2025)",
  },
  {
    id: "lab-booking-reward",
    title: "Student Lab Booking & Reward Point System",
    subtitle: "Gamified Resource Scheduling Platform",
    description:
      "A centralized lab resource allocation and reservation system with slot-booking logic, Google Single Sign-On, automated email confirmations, and a student reward leaderboard.",
    problem:
      "Manual lab reservation caused schedule conflicts, double booking of computing labs, and low incentive for students to utilize facilities responsibly.",
    features: [
      "Real-time slot reservation avoiding concurrent double-bookings",
      "Google OAuth Single Sign-On for institutional emails",
      "Automated email notifications for booking confirmation and reminders",
      "Gamified reward points leaderboard for consistent lab usage",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google OAuth"],
    githubUrl: "https://github.com/Surya2730/StudentLabBookingWebApp",
    liveUrl: null,
  },
];

export const TIMELINE = [
  {
    id: "aerele-technologies",
    category: "experience",
    title: "Software Developer Intern",
    institution: "Aerele Technologies",
    period: "July 2026 — Present",
    grade: "Current Role",
    description:
      "Working on enterprise software solutions, currently learning and developing custom applications and workflows using the Frappe framework and ERPNext.",
  },
  {
    id: "college",
    category: "education",
    title: "B.Tech in Computer Science and Business Systems",
    institution: "Bannari Amman Institute of Technology",
    period: "2023 — 2027",
    grade: "CGPA: 8.3",
    description:
      "Rigorous interdisciplinary curriculum combining core Computer Science fundamentals (Data Structures, Algorithms, DBMS, OS, Computer Networks) with modern business analytics and systems architecture.",
  },
  {
    id: "projects-focus",
    category: "experience",
    title: "Full Stack & Machine Learning Project Lead",
    institution: "Academic & Competitive Hackathon Projects",
    period: "2024 — Present",
    grade: "Academic & Competitive",
    description:
      "Architected and deployed full-stack web solutions across multiple hackathons and paper presentations, including the Ideathon 2025 Thematic Award-winning prototype.",
  },
  {
    id: "schooling",
    category: "education",
    title: "Higher Secondary Certificate (HSC)",
    institution: "A.P.C Veerabahu Matriculation Higher Secondary School",
    period: "2020 — 2022",
    grade: "Distinction",
    description:
      "Strong foundational coursework in Mathematics, Physics, Chemistry, and Computer Science.",
  },
];

export const ACHIEVEMENTS = [
  {
    id: "leetcode-400",
    title: "400+ Problems Solved on LeetCode",
    organization: "LeetCode",
    date: "Active",
    description:
      "Consistent problem-solving in Data Structures, Algorithms, Dynamic Programming, and Java on LeetCode with 400+ solutions submitted.",
    type: "Coding",
    link: "https://leetcode.com/u/surya_1929/",
    certificateUrl: null,
  },
  {
    id: "ideathon-2025",
    title: "Ideathon 2025 Thematic Award Winner",
    organization: "National Innovation Challenge",
    date: "2025",
    description:
      "Awarded the Thematic Winner title for innovative problem solving and system design addressing pressing institutional technological challenges.",
    type: "Award",
    certificateUrl: "/Ideathon 2025 Original Acheive.pdf",
  },
  {
    id: "ideathon-2024",
    title: "Ideathon 2024 Participant",
    organization: "National Innovation Challenge",
    date: "2024",
    description:
      "Competed in the 2024 edition of the Ideathon, demonstrating early-stage innovation and team collaboration skills.",
    type: "Award",
    certificateUrl: "/Ideathon 2024.pdf",
  },
  {
    id: "nptel-python",
    title: "NPTEL Joy of Computing Using Python",
    organization: "IIT Madras / NPTEL",
    date: "Certified",
    description:
      "Secured 87% with Silver Medal certification, demonstrating strong command over algorithmic problem solving, data structures, and Python programming.",
    type: "Certification",
    certificateUrl: "/The Joy of Computing using Python.pdf",
  },
  {
    id: "icet-sema-2026",
    title: "Paper Presentation at ICET-SEMA-2026",
    organization: "International Conference (ICET-SEMA-2026)",
    date: "2026",
    description:
      "Authored and presented the research and engineering architecture of 'AN AI-ENABLED SMART AUDIT MANAGEMENT SYSTEM WITH LIVE LOCATION VERIFICATION' to an international audience of researchers and domain experts.",
    type: "Publication",
    certificateUrl: "/International Conference 2026.pdf",
  },
  {
    id: "ithink-2025",
    title: "Paper Presentation at iThink 2025",
    organization: "International Conference (iThink 2025)",
    date: "2025",
    description:
      "Authored and presented the research and engineering architecture of 'KnowMyCampus — Personalized Chatbot' to an international audience of researchers and domain experts.",
    type: "Publication",
    certificateUrl: "/mini_proj paper presentation.pdf",
  },
];
