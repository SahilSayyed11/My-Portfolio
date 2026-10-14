/**
 * Centralized Portfolio Configuration for Sahil Sayyed
 * 
 * Update links, profile data, projects, or certifications here.
 * Changes here automatically propagate throughout the entire portfolio website.
 */

export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Academic';
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  liveDemoUrl?: string; // Configurable link placeholder
  githubUrl?: string;   // Configurable link placeholder
  badge?: string;
  architectureNotes?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialUrl?: string; // Configurable URL placeholder
  field: 'Cloud' | 'Frontend' | 'Data & AI' | 'Cybersecurity';
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  boardOrUniversity: string;
  period: string;
  scoreOrStatus: string;
  entranceExam?: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
    note?: string;
  }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    initials: string;
    title: string;
    subtitle: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    statusText: string;
    links: {
      github: string;
      linkedin: string;
      portfolio: string;
      resumeUrl: string;
    };
    introLead: string;
    aboutSummary: string;
    professionalGoal: string;
  };
  highlights: {
    metric: string;
    unit?: string;
    label: string;
    detail: string;
  }[];
  skillCategories: SkillCategory[];
  projects: Project[];
  internshipExperience: {
    roleTitle: string;
    tagline: string;
    note: string;
    responsibilities: string[];
    skillsUtilized: string[];
  };
  education: EducationItem[];
  certifications: Certification[];
  achievements: {
    title: string;
    category: string;
    description: string;
  }[];
  softSkills: {
    name: string;
    desc: string;
  }[];
  languages: {
    language: string;
    proficiency: string;
    desc: string;
  }[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Sahil Sayyed",
    initials: "SS",
    title: "Full Stack Developer",
    subtitle: "Cybersecurity & AI/ML Enthusiast",
    headline: "Full Stack Developer | Cybersecurity & AI/ML Enthusiast",
    location: "Latur, Maharashtra, India",
    email: "sahilsayyed2090@gmail.com",
    phone: "+91 7892791178",
    statusText: "Open to Internships & Opportunities",
    
    // Configurable URLs: Update these with your real URLs whenever available
    links: {
      github: "https://github.com/sahilsayyed", // Placeholder: update with your GitHub profile
      linkedin: "https://linkedin.com/in/sahilsayyed", // Placeholder: update with your LinkedIn profile
      portfolio: "https://sahilsayyed.dev", // Placeholder: update with your custom domain or live portfolio
      resumeUrl: "", // Provide your resume PDF path (e.g. '/resume.pdf') when ready
    },

    introLead: "I'm a BCA student and aspiring developer passionate about building responsive web applications, solving practical problems through technology, and exploring cybersecurity and artificial intelligence.",
    
    aboutSummary: "I'm currently pursuing a Bachelor of Computer Applications at the College of Computer Science & Information Technology, Latur, affiliated with SRTMU, Nanded. I have practical experience developing responsive web pages using HTML, CSS, and JavaScript, and I work with technologies such as React.js and Node.js. I also have experience with programming fundamentals, version control, and translating design mockups into functional interfaces. Alongside development, I'm expanding my knowledge of networking, Linux, cybersecurity concepts, and AI-powered tools.",

    professionalGoal: "Present myself as a motivated developer who builds responsive web applications and continues learning about cybersecurity, cloud technologies, and artificial intelligence."
  },

  // Highlight Cards for About Section
  highlights: [
    {
      metric: "2024–2027",
      label: "BCA Student",
      detail: "College of Computer Science & IT, Latur (SRTMU, Nanded)"
    },
    {
      metric: "72.09",
      unit: "Percentile",
      label: "MHT BCA CET",
      detail: "Entrance examination score listed in education record"
    },
    {
      metric: "4+",
      label: "Industry Certifications",
      detail: "AWS, Microsoft Azure, Deloitte, Tata / Forage & Simplilearn"
    },
    {
      metric: "Full Stack",
      label: "Systems & Security Focus",
      detail: "React, Node.js, Linux CLI, Networking & Security Concepts"
    }
  ],

  // Technical Skills organized by category
  skillCategories: [
    {
      title: "Programming Languages",
      subtitle: "Core algorithmic foundations",
      skills: [
        { name: "Python", note: "Scripting & AI/ML Exploration" },
        { name: "Java", note: "Object-Oriented Programming" },
        { name: "C", note: "Data Structures & Low-Level Foundations" }
      ]
    },
    {
      title: "Frontend Development",
      subtitle: "Modern, responsive client interfaces",
      skills: [
        { name: "React.js", note: "Component Architecture & Hooks" },
        { name: "JavaScript", note: "ES6+, DOM Manipulation, Async/Await" },
        { name: "HTML5", note: "Semantic Structure & Accessibility" },
        { name: "CSS3", note: "Flexbox, Grid & Keyframe Animations" },
        { name: "Responsive Web Design", note: "Mobile-First Adaptive Layouts" },
        { name: "Bootstrap", note: "Rapid Layouts & Grid Systems" }
      ]
    },
    {
      title: "Backend Development",
      subtitle: "Server logic and communication",
      skills: [
        { name: "Node.js", note: "Event-Driven JavaScript Runtime" },
        { name: "Express.js", note: "Middleware & Routing Architecture" },
        { name: "REST APIs", note: "Endpoints, Status Codes & JSON Payload Design" },
        { name: "Basic Server-Side Logic", note: "Data validation & Controller Flow" }
      ]
    },
    {
      title: "Databases",
      subtitle: "Relational data management",
      skills: [
        { name: "MySQL", note: "Relational Schemas, Queries & CRUD Operations" }
      ]
    },
    {
      title: "Cybersecurity & Systems",
      subtitle: "Network infrastructure and security",
      skills: [
        { name: "Networking Fundamentals", note: "Protocols, Subnetting, Routing" },
        { name: "TCP/IP", note: "Transport & Internet Protocol Suite" },
        { name: "Linux Basics", note: "File Hierarchies & Process Management" },
        { name: "Linux Command-Line Interface", note: "Shell commands, Permissions, SSH" },
        { name: "Security Concepts", note: "Threat vectors, Authentication, Defense" }
      ]
    },
    {
      title: "Developer Tools",
      subtitle: "Productivity and deployment tools",
      skills: [
        { name: "Git", note: "Branching, Merges & Version Control" },
        { name: "GitHub", note: "Repositories, Code Reviews & Remote Collaboration" },
        { name: "Visual Studio Code", note: "Workspace Configuration & Extensions" },
        { name: "Netlify", note: "Continuous Deployment & Hosting" }
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "project-portfolio",
      title: "Portfolio Website",
      category: "Frontend",
      subtitle: "Responsive Developer Showcase",
      description: "A responsive personal portfolio featuring a project gallery, technical skills, certifications, and a contact section.",
      longDescription: "Engineered a high-performance, responsive personal developer portfolio engineered to present academic projects, industry certifications, technical skill proficiencies, and contact avenues to recruiters, internship panels, and collaborators.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Curated interactive project gallery with deep architectural breakdown",
        "Categorized technical skill matrix with verified academic competencies",
        "Dedicated credential showcase with issuer verification links",
        "Fully accessible contact interface with interactive mailto fallback",
        "Mobile-first responsive layout with clean visual hierarchy"
      ],
      highlights: [
        "Clean semantic HTML structure",
        "Responsive across smartphones, tablets, and desktop viewports",
        "Accessible focus states and contrast compliance"
      ],
      liveDemoUrl: "#", // Configurable link placeholder
      githubUrl: "https://github.com/sahilsayyed/portfolio", // Configurable link placeholder
      badge: "Featured Portfolio",
      architectureNotes: "Pure client-side responsive layout with decoupled data configuration for rapid updates."
    },
    {
      id: "project-task-management",
      title: "Task Management System",
      category: "Full Stack",
      subtitle: "Workflow & Progress Tracking Engine",
      description: "Developed a user-friendly task management system to organize tasks, deadlines, and work progress. Implemented CRUD operations and PDF and Excel report generation.",
      longDescription: "A comprehensive web-based task management application developed to streamline operational workflows. The platform allows users to structure individual tasks, track completion milestones against deadlines, and export detailed operational reports for team reviews.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MySQL"],
      features: [
        "Task creation, updating, viewing, and deletion (Full CRUD life-cycle)",
        "Deadline monitoring and dynamic progress status tracking",
        "Automated PDF report generation for executive summaries",
        "Structured Excel (.xlsx) spreadsheet export for tabular data analysis",
        "Relational MySQL database schema modeling tasks and statuses"
      ],
      highlights: [
        "CRUD operations on MySQL database",
        "PDF generation engine for task audits",
        "Excel report export capability",
        "Server-side route controllers via Express.js"
      ],
      liveDemoUrl: "", // Configurable placeholder
      githubUrl: "https://github.com/sahilsayyed/task-management-system", // Configurable placeholder
      badge: "Academic Project",
      architectureNotes: "Express.js backend serving REST endpoints connected to a relational MySQL database with server-side document rendering utilities."
    },
    {
      id: "project-catering-management",
      title: "Catering Management System",
      category: "Full Stack",
      subtitle: "Event & Food Service Coordination System",
      description: "Developed a user-friendly catering management system designed to manage catering services, orders, customers, and event-related activities efficiently.",
      longDescription: "An end-to-end management solution tailored for catering vendors and event organizers. Enables end-to-end administration of customer accounts, custom menu selections, booked dates, order totals, and fulfillment schedules.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MySQL"],
      features: [
        "Catering service catalog and menu offering configuration",
        "Customer profile records and historical order tracking",
        "Event scheduling, date reservation, and activity organization",
        "Structured order pipeline from initial booking through event completion",
        "Relational database design connecting customers, events, and food orders"
      ],
      highlights: [
        "Multi-table relational schema in MySQL",
        "Customer & booking lifecycle management",
        "Event-specific scheduling dashboard",
        "Clean responsive UI built with Bootstrap"
      ],
      liveDemoUrl: "", // Configurable placeholder
      githubUrl: "https://github.com/sahilsayyed/catering-management-system", // Configurable placeholder
      badge: "Academic Project",
      architectureNotes: "Full-stack MVC architecture utilizing Node.js/Express controllers and MySQL foreign-key relationships."
    }
  ],

  // Internship Experience (from resume, without inventing employer or dates)
  internshipExperience: {
    roleTitle: "Web Development Intern",
    tagline: "Frontend Development & Responsive Web Implementation",
    note: "Responsibilities detailed in professional resume; organization and timeline placeholders are configurable.",
    responsibilities: [
      "Developed responsive web pages using HTML, CSS, and JavaScript.",
      "Improved layout consistency and user interface quality across multiple pages.",
      "Used Git for version control and followed structured commit workflows.",
      "Participated in team code review sessions to maintain code quality.",
      "Converted design mockups into functional, pixel-accurate web pages.",
      "Tested pages across different browsers and screen sizes for cross-platform compatibility."
    ],
    skillsUtilized: ["HTML5", "CSS3", "JavaScript", "Git", "Cross-Browser Testing", "UI/UX Implementation"]
  },

  // Education Timeline
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "College of Computer Science & Information Technology, Latur",
      boardOrUniversity: "Swami Ramanand Teerth Marathwada University (SRTMU), Nanded",
      period: "2024 – 2027",
      scoreOrStatus: "Pursuing",
      entranceExam: "MHT BCA CET — 72.09 Percentile",
      highlights: [
        "Core coursework in Web Technologies, Software Engineering, and Database Systems",
        "Practical laboratory implementations in Python, Java, C, and MySQL",
        "Entrance examination percentile: 72.09 in MHT BCA CET"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shanti Vardak PU College, Kamalnagar",
      boardOrUniversity: "Karnataka School Examination Board",
      period: "2024",
      scoreOrStatus: "Score: 76.33%",
      highlights: [
        "Pre-University academic curriculum in Science and Mathematics fundamentals",
        "Academic standing: 76.33% aggregate"
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sharanabasappa Highschool, Kamalnagar",
      boardOrUniversity: "Karnataka Secondary Education Examination Board",
      period: "2022",
      scoreOrStatus: "Score: 86.72%",
      highlights: [
        "Secondary education completion with distinction",
        "Academic standing: 86.72% aggregate"
      ]
    }
  ],

  // Certifications
  certifications: [
    {
      id: "cert-aws",
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      field: "Cloud",
      credentialUrl: "", // Configurable link placeholder
      description: "Cloud infrastructure design, high availability architecture, storage, and AWS core compute services."
    },
    {
      id: "cert-azure",
      title: "Microsoft Azure Fundamentals",
      issuer: "Simplilearn / SkillUp",
      field: "Cloud",
      credentialUrl: "", // Configurable link placeholder
      description: "Foundational understanding of cloud concepts, Azure architectural components, security, and governance."
    },
    {
      id: "cert-frontend",
      title: "Frontend Development",
      issuer: "Simplilearn",
      field: "Frontend",
      credentialUrl: "", // Configurable link placeholder
      description: "Modern frontend techniques, responsive layout design, JavaScript programming, and DOM interaction."
    },
    {
      id: "cert-deloitte",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      field: "Data & AI",
      credentialUrl: "", // Configurable link placeholder
      description: "Practical simulation tackling business data analytics, data preparation, synthesis, and client reporting."
    },
    {
      id: "cert-tata",
      title: "Data Visualization Job Simulation",
      issuer: "Tata / Forage",
      field: "Data & AI",
      credentialUrl: "", // Configurable link placeholder
      description: "Framing business scenarios, visual analytics presentation, chart selection, and executive storytelling."
    }
  ],

  // Achievements
  achievements: [
    {
      title: "72.09 Percentile in MHT BCA CET",
      category: "Academic Entrance",
      description: "Achieved a 72.09 percentile in the Maharashtra Common Entrance Test for Bachelor of Computer Applications admission."
    },
    {
      title: "4+ Industry Certifications",
      category: "Professional Growth",
      description: "Earned recognized industry credentials spanning Cloud Computing (AWS, Azure), Data Analytics (Deloitte), and Frontend Development."
    },
    {
      title: "AI Tools Workshop",
      category: "Technical Upskilling",
      description: "Completed intensive AI Tools Workshop covering AI-powered productivity, data analysis workflows, content creation, and code debugging methodologies."
    },
    {
      title: "College-Level Hackathons",
      category: "Collaborative Engineering",
      description: "Participated in competitive collegiate hackathons, designing, building, and pitching functional software prototypes under strict time constraints."
    }
  ],

  // Soft Skills
  softSkills: [
    { name: "Problem Solving", desc: "Deconstructing complex logical hurdles and finding methodical solutions" },
    { name: "Communication", desc: "Articulating technical concepts clearly across engineering and business teams" },
    { name: "Teamwork", desc: "Collaborating seamlessly in pair programming and team code reviews" },
    { name: "Time Management", desc: "Balancing academic requirements, practical projects, and skill acquisition" },
    { name: "Quick Learning", desc: "Swiftly mastering new frameworks, Linux utilities, and development toolsets" }
  ],

  // Languages
  languages: [
    { language: "English", proficiency: "Professional", desc: "Fluent technical documentation, writing, and professional discussions" },
    { language: "Hindi", proficiency: "Native", desc: "Native fluency in verbal and written communication" },
    { language: "Marathi", proficiency: "Native", desc: "Native regional language fluency" },
    { language: "Kannada", proficiency: "Conversational", desc: "Conversational fluency for regional communication" }
  ]
};
