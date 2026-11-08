export const PERSONAL_INFO = {
  name: "Maithyli Gajula",
  shortName: "MAITHYLI",
  roleTitle: "SOFTWARE ENGINEER / MCA",
  heroSubtitle: "HELLO, I'M MAITHYLI.",
  heroHeadline: "Technology, creativity & the art of building.",
  heroDescription: "I'm a Computer Science graduate pursuing my Master's in Computer Applications, interested in software engineering, intelligent systems, and creating meaningful digital experiences.",
  editorialCaption: "Curious mind. Creative thinker. Technology enthusiast.",
  location: "Visakhapatnam, India",
  email: "maithyligajula@gmail.com",
  phone: "7898140872",
  github: "https://github.com/maithyli7",
  linkedin: "https://linkedin.com/in/maithyligajula",
  status: "Open to Software Engineering Opportunities",
  educationDegree: "MCA (2025–2027)",
  undergradDegree: "B.Sc. Computer Science (2022–2025, GPA: 8.5/10)",
  focus: "Software Engineering",
  interests: "AI/ML, Cybersecurity, Cloud Computing, IoT"
};

export const ABOUT_CONTENT = {
  sectionNum: "01 / ABOUT",
  heading: "A little about the person behind the code.",
  paragraphs: [
    "I'm Maithyli, a Computer Science graduate currently pursuing my Master of Computer Applications.",
    "My interest in technology comes from curiosity and the satisfaction of turning ideas into practical solutions.",
    "From developing Django applications and exploring AWS cloud infrastructure to experimenting with IoT-based systems, I enjoy learning how different technologies work together.",
    "Beyond development, I appreciate creativity, writing, reading, and exploring different cultures.",
    "I believe that good technology is built through curiosity, thoughtful problem-solving, and continuous learning."
  ],
  panel: {
    location: "Visakhapatnam, India",
    education: "MCA (2025–2027)",
    focus: "Software Engineering",
    interests: "AI/ML, Cybersecurity, Cloud Computing"
  }
};

export const SKILLS_DATA = [
  {
    category: "PROGRAMMING",
    skills: ["Python", "Java", "C", "JavaScript"]
  },
  {
    category: "CORE COMPUTER SCIENCE",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"]
  },
  {
    category: "WEB DEVELOPMENT",
    skills: ["HTML", "CSS", "JavaScript", "Django"]
  },
  {
    category: "DATABASES",
    skills: ["SQL", "MySQL", "SQLite", "Database Normalization"]
  },
  {
    category: "CLOUD",
    skills: ["AWS EC2", "AWS S3", "AWS IAM"]
  },
  {
    category: "INTERNET OF THINGS",
    skills: ["Arduino", "ESP32", "Sensor Integration"]
  },
  {
    category: "CYBERSECURITY",
    skills: ["Secure Coding", "Access Control", "Vulnerability Awareness"]
  }
];

export const EXPERIENCE_DATA = [
  {
    id: "aws-cloud",
    number: "01",
    role: "AWS CLOUD COMPUTING INTERN",
    responsibilities: [
      "Deployed and managed AWS EC2 instances.",
      "Worked with Amazon S3 storage.",
      "Configured IAM access-control policies.",
      "Explored distributed cloud environments and service communication."
    ],
    technologies: ["AWS EC2", "Amazon S3", "AWS IAM", "Cloud Architecture"]
  },
  {
    id: "full-stack",
    number: "02",
    role: "FULL STACK WEB DEVELOPMENT INTERN",
    responsibilities: [
      "Developed responsive applications using HTML, CSS and JavaScript.",
      "Worked on backend integration.",
      "Followed Software Development Life Cycle practices.",
      "Participated in requirements gathering through application deployment."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Backend Integration", "SDLC"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "velocityx",
    number: "01",
    title: "VELOCITYX",
    subtitle: "Smart Adaptive Speed Governance System",
    category: "SIH 2026 / IoT / Embedded Systems",
    description: "A GPS and IoT-based speed governance solution designed to identify geographical zones, monitor vehicle speeds and generate real-time alerts.",
    fullDetails: "VelocityX addresses roadway transit safety by combining microcontroller computation with precision geofencing. Interfacing an ESP32 microcontroller with a high-accuracy GPS module, the system continually evaluates geographical zones (such as school districts and hospitals), dynamically monitoring velocity thresholds and triggering instant alerts.",
    technologies: ["ESP32", "GPS", "IoT", "Embedded Systems"],
    github: "https://github.com/maithyli7/velocityx-speed-governance",
    demo: null,
    illustration: "iot-speed"
  },
  {
    id: "campussphere",
    number: "02",
    title: "CAMPUSSPHERE",
    subtitle: "Campus Management Portal",
    category: "Full Stack Web / Django",
    description: "A Django-based campus management application featuring backend modules, database models, authentication and role-based access control.",
    fullDetails: "CampusSphere streamlines student administrative interactions and faculty administration workflows through an organized Django Model-View-Template architecture. Features relational models in SQLite, secure session management, and fine-grained role-based permissions.",
    technologies: ["Python", "Django", "SQLite"],
    github: "https://github.com/maithyli7/campussphere-management-portal",
    demo: null,
    illustration: "django-portal"
  },
  {
    id: "vehicle-management",
    number: "03",
    title: "VEHICLE MANAGEMENT SYSTEM",
    subtitle: "Relational Vehicle Administration",
    category: "Software Engineering / OOP",
    description: "A vehicle and user management application implementing SQL-backed CRUD operations and object-oriented programming principles.",
    fullDetails: "Built around core object-oriented principles—encapsulation, modular inheritance, and robust data abstraction. Integrates with relational SQL schemas ensuring complete transactional consistency for vehicle tracking, user maintenance, and inventory auditing.",
    technologies: ["SQL", "OOP"],
    github: "https://github.com/maithyli7/vehicle-management-system",
    demo: null,
    illustration: "database-oop"
  },
  {
    id: "smart-dustbin",
    number: "04",
    title: "SMART DUSTBIN MONITORING SYSTEM",
    subtitle: "IoT Sanitation Alert Platform",
    category: "IoT / Automation",
    description: "An IoT-based waste monitoring solution using ultrasonic sensors to monitor bin levels and generate threshold alerts.",
    fullDetails: "An automated hygiene and sanitation prototype engineered with an Arduino microcontroller. An ultrasonic transceiver measures container distance and volume metrics in real-time, raising threshold notifications to prevent urban waste overflow.",
    technologies: ["Arduino", "Ultrasonic Sensors", "IoT"],
    github: "https://github.com/maithyli7/smart-dustbin-monitoring",
    demo: null,
    illustration: "ultrasonic-iot"
  },
  {
    id: "solar-tracking",
    number: "05",
    title: "AUTOMATIC SOLAR TRACKING SYSTEM",
    subtitle: "Renewable Hardware Prototype",
    category: "Renewable Energy / Embedded",
    description: "An automated solar panel alignment system using dual LDR sensors and a servo motor.",
    fullDetails: "Maximizes photovoltaic capture throughout varying daylight cycles. Dual Light Dependent Resistors operate across a differential bridge, feeding real-time light intensity values into an Arduino controller that drives a positional servo motor to maintain perpendicular solar alignment.",
    technologies: ["Arduino", "LDR Sensors", "Servo Motor"],
    github: "https://github.com/maithyli7/automatic-solar-tracking",
    demo: null,
    illustration: "solar-tracker"
  }
];

export const EDUCATION_DATA = [
  {
    institution: "Aditya Degree & PG College, Gopalapatnam",
    degree: "MASTER OF COMPUTER APPLICATIONS",
    period: "2025–2027",
    status: "Currently pursuing",
    details: "Advanced computing, distributed systems, software engineering methodologies, and intelligent architectures."
  },
  {
    institution: "Aditya Women's Degree College",
    degree: "B.SC. COMPUTER SCIENCE",
    period: "2022–2025",
    status: "Completed",
    gpa: "GPA: 8.5/10",
    details: "Foundational depth across algorithms, data structures, database normalization, and web technologies."
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "INTERMEDIATE — MPC",
    period: "2020–2022",
    status: "Completed",
    gpa: "GPA: 8.0/10",
    details: "Mathematics, Physics, Chemistry curriculum emphasizing rigorous analytical and logical derivation."
  },
  {
    institution: "Bhashyam High School",
    degree: "SSC",
    period: "2020",
    status: "Completed",
    gpa: "GPA: 9.9/10",
    details: "Secondary School Certificate with exemplary academic distinction across mathematics and scientific studies."
  }
];

export const CERTIFICATIONS_DATA = [
  { name: "C Programming", code: "CERT-C" },
  { name: "Java", code: "CERT-JAVA" },
  { name: "Python", code: "CERT-PY" },
  { name: "DBMS & SQL", code: "CERT-DB" },
  { name: "Cyber Security", code: "CERT-SEC" },
  { name: "Data Structures & Algorithms", code: "CERT-DSA" }
];

export const BEYOND_CODE_DATA = [
  {
    title: "Writing and Reading",
    description: "Appreciating literature, thoughtful essays, and clear technical documentation that articulates complex ideas simply."
  },
  {
    title: "Creative Exploration",
    description: "Observing design, minimalist typography, visual arts, and the quiet harmony between form and functional utility."
  },
  {
    title: "Exploring Different Cultures",
    description: "Understanding diverse worldviews, regional traditions, and communicative nuances that enrich international collaboration."
  },
  {
    title: "Learning Emerging Technologies",
    description: "Continually staying curious about breakthroughs in intelligent systems, machine learning architectures, and edge computing."
  },
  {
    title: "Creative Problem-Solving",
    description: "Approaching engineering obstacles not as rigid roadblocks, but as thoughtful puzzles requiring patience and structured intuition."
  }
];
