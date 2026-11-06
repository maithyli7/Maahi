export const PERSONAL_INFO = {
  name: "Maithyli Gajula",
  role: "Aspiring Software Engineer | MCA Student | Developer",
  headline: "Building Ideas Into Digital Experiences.",
  subheadline: "I'm a Computer Science graduate pursuing my Master's in Computer Applications, passionate about software engineering, problem-solving, and building technology-driven solutions.",
  statement: "I enjoy transforming ideas into meaningful digital solutions through technology, logical thinking, and continuous experimentation.",
  location: "Visakhapatnam, India",
  email: "maithyligajula@gmail.com",
  phone: "7898140872",
  github: "https://github.com/maithyligajula", // editable placeholder
  linkedin: "https://linkedin.com/in/maithyligajula", // editable placeholder
  status: "Open to Software Engineering Opportunities",
};

export const HIGHLIGHT_CARDS = [
  {
    title: "Computer Science Graduate",
    subtitle: "B.Sc. Computer Science (2022–2025)",
    description: "Built strong fundamentals in data structures, algorithms, databases, and core software engineering concepts.",
    icon: "GraduationCap"
  },
  {
    title: "MCA Student (2025–2027)",
    subtitle: "Aditya Degree & PG College",
    description: "Deepening theoretical foundations in advanced computing, system architecture, and modern application development.",
    icon: "BookOpen"
  },
  {
    title: "Software Development Enthusiast",
    subtitle: "Full Stack & Cloud",
    description: "Passionate about crafting resilient web platforms with clean architecture and modern developer tooling.",
    icon: "Code"
  },
  {
    title: "Technology Explorer",
    subtitle: "IoT & Emerging Tech",
    description: "Hands-on builder bridging physical sensors with cloud services and intelligent automation.",
    icon: "Cpu"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Programming Languages",
    icon: "Terminal",
    skills: ["Python", "Java", "C", "JavaScript"]
  },
  {
    name: "Core Computer Science",
    icon: "Binary",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Operating Systems"]
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["SQL", "MySQL", "SQLite", "Database Normalization"]
  },
  {
    name: "Web Development",
    icon: "Globe",
    skills: ["HTML", "CSS", "JavaScript", "Django"]
  },
  {
    name: "Cloud Computing",
    icon: "Cloud",
    skills: ["AWS EC2", "AWS S3", "AWS IAM"]
  },
  {
    name: "Internet of Things",
    icon: "Cpu",
    skills: ["Arduino", "ESP32", "Sensor Integration"]
  },
  {
    name: "Cybersecurity",
    icon: "ShieldCheck",
    skills: ["Secure Coding", "Access Control", "Vulnerability Awareness"]
  }
];

export const EXPERIENCES = [
  {
    id: 1,
    role: "AWS Cloud Computing Intern",
    company: "Cloud Technologies Internship",
    period: "Internship Period (Practical Training)",
    responsibilities: [
      "Deployed and managed AWS EC2 instances.",
      "Worked with Amazon S3 storage for cloud data persistence.",
      "Configured IAM access-control policies.",
      "Gained practical exposure to distributed cloud environments and service communication."
    ],
    technologies: ["AWS EC2", "AWS S3", "AWS IAM", "Cloud Architecture"]
  },
  {
    id: 2,
    role: "Full Stack Web Development Intern",
    company: "Web Development Internship",
    period: "Internship Period (Practical Training)",
    responsibilities: [
      "Developed responsive web applications using HTML, CSS, and JavaScript.",
      "Worked on backend integration.",
      "Followed Software Development Life Cycle (SDLC) practices.",
      "Participated in processes from requirements gathering to application deployment."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "SDLC", "Backend Integration"]
  }
];

export const PROJECTS = [
  {
    id: "velocityx",
    title: "VelocityX — Smart Adaptive Speed Governance System",
    category: "SIH 2026",
    badge: "Smart India Hackathon",
    shortDescription: "An innovative GPS and IoT-based speed governance solution designed to detect geographical zones, monitor vehicle speeds, and generate real-time alerts.",
    fullDescription: "VelocityX tackles road safety and urban zone-based speed control. By coupling an ESP32 microcontroller with a precision GPS module, the system continually evaluates geographical geofences (such as school zones, hospitals, or high-risk highways) and regulates speed parameters in real time with audio-visual alerts and telemetry logs.",
    technologies: ["ESP32", "GPS", "IoT", "Embedded Systems", "C++"],
    keyFeatures: [
      "GPS-based real-time geographical zone detection",
      "Dynamic speed monitoring & threshold control",
      "Instantaneous real-time auditory & LED alerts",
      "Fully integrated ESP32 hardware prototype"
    ],
    github: "https://github.com/maithyligajula/velocityx-speed-governance", // editable placeholder
    demo: null, // No fake live deployment
    hasHardware: true,
    accent: "purple"
  },
  {
    id: "campussphere",
    title: "CampusSphere — Campus Management Portal",
    category: "Full Stack Web",
    badge: "Django Portal",
    shortDescription: "A Django-based campus management application featuring backend modules, database models, authentication, and role-based access control.",
    fullDescription: "CampusSphere streamlines student and administrative workflows. The portal is architected using Django's Model-View-Template pattern with a normalized SQLite database backend, handling multi-role access control for faculty, students, and administrators with secure session handling.",
    technologies: ["Python", "Django", "SQLite", "HTML/CSS", "Bootstrap"],
    keyFeatures: [
      "Backend modules structured with Django MVT architecture",
      "Normalized relational database models",
      "Custom authentication & role-based access control (RBAC)",
      "Student & faculty administration workflows"
    ],
    github: "https://github.com/maithyligajula/campussphere-management-portal", // editable placeholder
    demo: null,
    hasHardware: false,
    accent: "cyan"
  },
  {
    id: "vehicle-management",
    title: "Vehicle Management System",
    category: "Desktop & Database",
    badge: "OOP & SQL",
    shortDescription: "A vehicle and user management application featuring SQL-backed CRUD operations and object-oriented programming principles.",
    fullDescription: "Built with rigorous adherence to OOP principles (encapsulation, abstraction, inheritance, polymorphism) and relational database design. It supports robust CRUD lifecycle operations for vehicle inventory, maintenance schedules, and user management with transaction safety.",
    technologies: ["SQL", "OOP", "Database Management", "Python/Java"],
    keyFeatures: [
      "SQL-backed transactional CRUD operations",
      "Modular Object-Oriented software architecture",
      "Relational integrity and normalized database schema",
      "User role validation and inventory tracking"
    ],
    github: "https://github.com/maithyligajula/vehicle-management-system", // editable placeholder
    demo: null,
    hasHardware: false,
    accent: "purple"
  },
  {
    id: "smart-dustbin",
    title: "Smart Dustbin Monitoring System",
    category: "IoT Systems",
    badge: "Smart Waste Solution",
    shortDescription: "An IoT-based waste monitoring solution using ultrasonic sensors to monitor bin-level status and generate threshold alerts.",
    fullDescription: "Designed for smart sanitation management. Uses an ultrasonic transceiver interfaced with an Arduino microcontroller to calculate fill percentages in real-time, triggering automatic alerts whenever the bin approaches capacity to prevent overflow.",
    technologies: ["Arduino", "Ultrasonic Sensors", "IoT", "Embedded C"],
    keyFeatures: [
      "Ultrasonic distance calculation for fill capacity",
      "Real-time threshold alert triggering",
      "Automated servo flap control for touchless hygiene",
      "Low-power embedded micro-controller deployment"
    ],
    github: "https://github.com/maithyligajula/smart-dustbin-monitoring", // editable placeholder
    demo: null,
    hasHardware: true,
    accent: "cyan"
  },
  {
    id: "solar-tracking",
    title: "Automatic Solar Tracking System",
    category: "Renewable IoT",
    badge: "Green Energy Prototype",
    shortDescription: "An automated solar panel alignment system using dual LDR sensors and a servo motor to adjust panel positioning according to light intensity.",
    fullDescription: "An embedded hardware solution maximizing photovoltaic power efficiency. Uses dual Light Dependent Resistors (LDRs) in a differential comparator circuit, continuously driving a high-torque servo motor to keep the solar panel perpendicular to sunlight throughout the day.",
    technologies: ["Arduino", "LDR Sensors", "Servo Motor", "Hardware Prototyping"],
    keyFeatures: [
      "Dual-LDR differential light detection algorithm",
      "Smooth servo motor angle repositioning",
      "Continuous maximum solar radiation alignment",
      "Energy-optimized micro-controller code"
    ],
    github: "https://github.com/maithyligajula/automatic-solar-tracking", // editable placeholder
    demo: null,
    hasHardware: true,
    accent: "purple"
  }
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Aditya Degree & PG College, Gopalapatnam",
    period: "2025 – 2027",
    status: "Currently pursuing",
    score: null,
    highlights: "Focusing on advanced computing, distributed systems, software engineering methodologies, and intelligent systems."
  },
  {
    degree: "Bachelor of Science — Computer Science",
    institution: "Aditya Women's Degree College",
    period: "2022 – 2025",
    status: "Completed",
    score: "GPA: 8.5 / 10",
    highlights: "Comprehensive coursework in Data Structures, Object-Oriented Programming, Database Management, and Cloud fundamentals."
  },
  {
    degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    institution: "Sri Chaitanya Junior College",
    period: "2020 – 2022",
    status: "Completed",
    score: "GPA: 8.0 / 10",
    highlights: "Rigorous analytical, mathematical reasoning and scientific fundamentals."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Bhashyam High School",
    period: "2020",
    status: "Completed",
    score: "GPA: 9.9 / 10",
    highlights: "Top academic standing with exemplary focus on mathematics and science."
  }
];

export const CERTIFICATIONS = [
  { name: "C Programming", code: "CERT-C", category: "Programming" },
  { name: "Java", code: "CERT-JAVA", category: "OOP & Systems" },
  { name: "Python", code: "CERT-PY", category: "Scripting & Backend" },
  { name: "DBMS & SQL", code: "CERT-DB", category: "Data Management" },
  { name: "Cyber Security", code: "CERT-SEC", category: "Information Security" },
  { name: "Data Structures & Algorithms", code: "CERT-DSA", category: "Core CS" }
];

export const BEYOND_CODE = [
  {
    title: "Exploring Emerging Technologies",
    description: "Following breakthrough innovations across generative models, edge AI computing, and cloud virtualization architectures.",
    icon: "Sparkles"
  },
  {
    title: "Learning About Different Cultures",
    description: "Appreciating diverse viewpoints, regional histories, global languages, and multicultural collaboration in distributed teams.",
    icon: "Compass"
  },
  {
    title: "Reading & Technical Writing",
    description: "Distilling complex system engineering papers, technical documentation, and thought pieces to refine clarity of thought.",
    icon: "BookOpen"
  },
  {
    title: "Creative Problem-Solving",
    description: "Approaching logic puzzles, algorithmic challenges, and system bottlenecks with a clean, structured experimental mindset.",
    icon: "Lightbulb"
  },
  {
    title: "Exploring AI & Cybersecurity",
    description: "Investigating defensive security paradigms, ethical access controls, and how machine learning can safeguard modern digital infrastructure.",
    icon: "ShieldAlert"
  }
];

export const LANGUAGES_SPOKEN = [
  { language: "English", proficiency: "Proficient" },
  { language: "Telugu", proficiency: "Native" },
  { language: "Hindi", proficiency: "Advanced" }
];

