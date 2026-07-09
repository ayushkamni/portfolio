export const personalInfo = {
  name: 'Ayush Kamni',
  title: 'MERN Stack Developer | Java Developer | Software Tester',
  subtitle:
    'B.Tech Computer Science Engineering graduate passionate about building scalable web applications, solving real-world problems, and creating user-friendly digital experiences.',
  email: 'ayushkamni@gmail.com',
  phone: '+91 8279440019',
  location: 'India',
  github: 'https://github.com/ayushkamni',
  linkedin: 'https://www.linkedin.com/in/ayushkemni/',
  resumeUrl: '/resume.pdf',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const aboutContent = {
  paragraphs: [
    'I am a B.Tech Computer Science Engineering graduate with hands-on experience in developing full-stack web applications using the MERN Stack.',
    'I have also worked as a Freelance Web Developer where I designed, developed, deployed, and optimized websites for clients.',
  ],
  interests: [
    'MERN Stack',
    'Java Development',
    'SQL',
    'Software Testing',
    'UI/UX',
    'API Development',
    'Firebase',
    'Cloud Deployment',
  ],
}

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'SQL', level: 82 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 92 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Vite', level: 88 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 86 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Firebase Firestore', level: 82 },
    ],
  },
  {
    title: 'Authentication',
    skills: [
      { name: 'JWT', level: 85 },
      { name: 'Firebase Authentication', level: 84 },
    ],
  },
  {
    title: 'Cloud & Deployment',
    skills: [
      { name: 'Render', level: 88 },
      { name: 'Firebase Hosting', level: 80 },
      { name: 'Cloudinary', level: 82 },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Manual Testing', level: 85 },
      { name: 'Test Case Writing', level: 82 },
      { name: 'Bug Reporting', level: 84 },
      { name: 'Postman', level: 86 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

export const experiences = [
  {
    id: 'freelance-princexpert',
    title: 'Freelance Web Developer',
    company: 'Prince Expert',
    clientUrl: 'https://www.princexpert.in/',
    role: 'Full Stack Developer + SEO + Client Handling',
    period: 'Freelance',
    responsibilities: [
      'Built complete business website',
      'Requirement gathering',
      'UI Design',
      'Responsive development',
      'SEO Optimization',
      'Deployment',
      'Client communication',
      'Website maintenance',
    ],
    achievements: [
      'Improved website speed',
      'Better SEO',
      'Mobile Friendly',
      'Increased online visibility',
    ],
    previewImage: '/projects/princexpert.svg',
    liveUrl: 'https://www.princexpert.in/',
    featured: true,
  },
  {
    id: 'admin-task-controller',
    title: 'Admin Task Controller',
    company: 'Personal Project',
    role: 'Frontend + Backend Developer',
    period: 'Full Stack',
    responsibilities: [
      'User Management',
      'Task CRUD',
      'Authentication',
      'Dashboard',
      'Status Management',
      'Responsive Admin Panel',
    ],
    liveUrl: 'https://task-vnk2.onrender.com',
    previewImage: '/projects/task-controller.svg',
    featured: false,
  },
]

export const projects = [
  {
    id: 'lost-found',
    title: 'Lost & Found Management System',
    description:
      'Campus platform where students can report lost and found items.',
    features: [
      'Firebase Authentication',
      'Upload Images',
      'Search Items',
      'Admin Dashboard',
      'Approval System',
    ],
    tech: ['React', 'Firebase', 'Firestore', 'Cloudinary'],
    category: 'Full Stack',
    image: '/projects/lost-found.svg',
    liveUrl: 'https://lost-and-found-report-ewuk.onrender.com/',
    githubUrl: null,
  },
  {
    id: 'password-manager',
    title: 'Password Secret Manager',
    description:
      'Secure password manager to store confidential credentials.',
    features: [
      'Secure storage',
      'CRUD',
      'Copy Password',
      'Responsive UI',
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    image: '/projects/password-manager.svg',
    liveUrl: 'https://password-aj32.onrender.com/',
    githubUrl: null,
  },
  {
    id: 'task-controller',
    title: 'Admin Task Controller',
    description:
      'Task Management Dashboard with Admin functionalities.',
    features: [
      'Authentication',
      'CRUD',
      'Dashboard',
      'Task Tracking',
      'User Roles',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    image: '/projects/task-controller.svg',
    liveUrl: 'https://task-vnk2.onrender.com',
    githubUrl: null,
  },
  {
    id: 'princexpert',
    title: 'Prince Expert Website',
    description:
      'Developed a complete commercial website for a client.',
    features: [
      'Responsive Design',
      'SEO',
      'Fast Loading',
      'Contact Forms',
      'Professional UI',
    ],
    tech: ['React', 'Tailwind CSS', 'SEO', 'Vite'],
    category: 'Client Work',
    image: '/projects/princexpert.svg',
    liveUrl: 'https://www.princexpert.in/',
    githubUrl: null,
  },
]

export const timeline = [
  { year: '2022', title: 'Started B.Tech Computer Science' },
  { year: '2022', title: 'Learned HTML CSS JavaScript' },
  { year: '2023', title: 'Java Programming' },
  { year: '2024', title: 'MERN Stack' },
  { year: '2025', title: 'Freelancing' },
  { year: '2025', title: 'Client Projects' },
  { year: '2026', title: 'Graduated B.Tech in Computer Science' },
  { year: '2026', title: 'Looking for Software Developer Opportunities' },
]

export const education = {
  institution: 'Quantum University',
  degree: 'Bachelor of Technology',
  field: 'Computer Science Engineering',
  cgpa: 7.8,
  period: '2022 — 2026',
  status: 'Graduated',
}

export const achievements = [
  'Built multiple Full Stack projects',
  'Freelance Client Website',
  'Experience handling real clients',
  'Deployed multiple live applications',
  'Knowledge of Manual Testing',
]

export const services = [
  'Web Development',
  'Frontend Development',
  'Backend Development',
  'API Development',
  'Responsive Website Design',
  'Bug Fixing',
  'Website Maintenance',
  'SEO Optimization',
]

export const testimonials = [
  {
    id: 1,
    name: 'Client Review',
    role: 'Business Owner',
    company: 'Prince Expert',
    content:
      'Ayush delivered a professional, fast, and SEO-optimized website that significantly improved our online presence. Highly recommended for client-focused development.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Future Client',
    role: 'Product Manager',
    company: 'Tech Startup',
    content:
      'Placeholder for upcoming testimonials. Ayush combines clean UI design with reliable full-stack delivery — a strong fit for modern product teams.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Collaborator',
    role: 'Developer',
    company: 'Open Source',
    content:
      'Structured code, attention to detail, and smooth deployment workflows. Great collaborator on scalable MERN applications.',
    rating: 5,
  },
]

export const stats = [
  { label: 'Projects Built', value: 10, suffix: '+' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'CGPA', value: 7.8, suffix: '' },
  { label: 'Live Deployments', value: 5, suffix: '+' },
]

export const projectCategories = ['All', 'Full Stack', 'Client Work']
