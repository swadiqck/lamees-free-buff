export const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '✨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '🌊' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'Vite', icon: '⚡' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Python', icon: '🐍' },
      { name: 'Django', icon: '🎸' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'REST APIs', icon: '🔌' },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'SQLite', icon: '💎' },
    ],
  },
  {
    category: 'Tools & Infrastructure',
    icon: '🛠️',
    items: [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Linux', icon: '🐧' },
      { name: 'cPanel', icon: '🖥️' },
      { name: 'Nginx', icon: '🔄' },
      { name: 'Apache', icon: '🪶' },
      { name: 'Cloud Deployment', icon: '☁️' },
    ],
  },
]

export const projects = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    category: 'E-Commerce',
    featured: true,
    description:
      'A full-featured e-commerce platform with real-time inventory, secure payments, admin dashboard, and responsive storefront built for scalability.',
    longDescription:
      'A comprehensive e-commerce solution featuring product management, shopping cart, secure checkout with multiple payment gateways, order tracking, inventory management, and an advanced admin dashboard with analytics.',
    problem:
      'Building a scalable, secure e-commerce platform that handles complex product catalogs, real-time inventory, and high traffic while maintaining excellent user experience.',
    solution:
      'Developed a full-stack application with a React frontend, Node.js/Express backend, PostgreSQL database, and Redis caching. Implemented RESTful APIs, JWT authentication, and Stripe payment integration.',
    architecture: 'React + Node.js + PostgreSQL + Redis + Stripe + Docker',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Docker'],
    features: [
      'Real-time inventory management',
      'Secure payment processing',
      'Admin dashboard with analytics',
      'Responsive design',
      'Product search & filtering',
      'Order tracking system',
    ],
    role: 'Full-Stack Developer',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    icon: '🛍️',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'lms',
    name: 'Learning Management System',
    category: 'EdTech',
    featured: true,
    description:
      'A modern LMS with course management, video streaming, progress tracking, assessments, and certificate generation for online education.',
    longDescription:
      'A complete learning management system supporting video courses, quizzes, assignments, progress tracking, and automated certificate generation. Built for institutions and independent educators.',
    problem:
      'Creating an engaging online learning experience that supports diverse content types, tracks learner progress, and provides meaningful assessments.',
    solution:
      'Built a Django backend with React frontend, integrating video streaming, real-time progress updates via WebSockets, and a comprehensive assessment engine.',
    architecture: 'React + Django + PostgreSQL + WebSockets + S3',
    stack: ['React', 'Django', 'PostgreSQL', 'WebSockets', 'AWS S3', 'Nginx'],
    features: [
      'Video course streaming',
      'Interactive assessments',
      'Progress tracking',
      'Certificate generation',
      'Instructor dashboard',
      'Real-time notifications',
    ],
    role: 'Full-Stack Developer',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    icon: '📚',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'dashboard',
    name: 'Admin Dashboard',
    category: 'Dashboard',
    featured: false,
    description:
      'A data-driven admin dashboard with real-time analytics, user management, and interactive charts for business intelligence.',
    longDescription:
      'A comprehensive admin dashboard featuring real-time data visualization, user management, role-based access control, and automated reporting.',
    problem:
      'Building an intuitive admin interface that transforms complex data into actionable insights while maintaining security and performance.',
    solution:
      'Created a React-based dashboard with Chart.js for visualizations, a Node.js API layer, and role-based access control with JWT authentication.',
    architecture: 'React + Chart.js + Node.js + MongoDB',
    stack: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'JWT', 'Tailwind CSS'],
    features: [
      'Real-time analytics',
      'Interactive charts',
      'User management',
      'Role-based access',
      'Export reports',
      'Dark/Light mode',
    ],
    role: 'Full-Stack Developer',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    icon: '📊',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'business',
    name: 'Business Website',
    category: 'Web Development',
    featured: false,
    description:
      'A professional business website with dynamic content management, contact forms, SEO optimization, and performance-first architecture.',
    longDescription:
      'A high-performance business website featuring a custom CMS, contact form integration, blog system, and comprehensive SEO optimization.',
    problem:
      'Creating a professional, fast, and SEO-friendly website that effectively communicates brand identity and converts visitors into customers.',
    solution:
      'Developed a static-first React site with server-side rendering, optimized images, structured data, and a headless CMS for content management.',
    architecture: 'React + Vite + Headless CMS + Contact API',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB', 'SEO'],
    features: [
      'SEO optimized',
      'Fast loading times',
      'Contact form integration',
      'Content management',
      'Responsive design',
      'Analytics dashboard',
    ],
    role: 'Full-Stack Developer',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    icon: '🏢',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'automation',
    name: 'AI Automation Platform',
    category: 'AI / Automation',
    featured: false,
    description:
      'An AI-powered automation platform that streamlines workflows, automates repetitive tasks, and provides intelligent data processing.',
    longDescription:
      'A platform leveraging AI/ML models to automate business workflows, process data intelligently, and provide actionable insights through natural language processing.',
    problem:
      'Reducing manual work through intelligent automation while maintaining accuracy and providing transparent decision-making.',
    solution:
      'Built a Python/Django backend with ML model integration, a React frontend for workflow visualization, and API integrations for third-party services.',
    architecture: 'React + Django + Python ML + PostgreSQL + Docker',
    stack: ['React', 'Django', 'Python', 'PostgreSQL', 'Docker', 'ML APIs'],
    features: [
      'Workflow automation',
      'Natural language processing',
      'Data visualization',
      'API integrations',
      'Task scheduling',
      'Performance monitoring',
    ],
    role: 'Full-Stack Developer',
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
    icon: '🤖',
    liveUrl: '#',
    githubUrl: '#',
  },
]

export const experience = [
  {
    role: 'Full-Stack Software Developer',
    company: 'Freelance / Independent',
    period: '2023 — Present',
    description:
      'Building end-to-end digital products including e-commerce platforms, learning management systems, business websites, and custom web applications for diverse clients.',
    tech: ['React', 'Django', 'Node.js', 'PostgreSQL', 'Docker', 'REST APIs'],
  },
  {
    role: 'Frontend Developer',
    company: 'Web Development Agency',
    period: '2022 — 2023',
    description:
      'Developed responsive, high-performance web interfaces for clients across industries. Focused on modern UI/UX, performance optimization, and cross-browser compatibility.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'CSS'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Tech Startup',
    period: '2021 — 2022',
    description:
      'Contributed to full-stack development of SaaS products. Built RESTful APIs, managed databases, deployed applications, and collaborated in agile teams.',
    tech: ['Python', 'Django', 'MySQL', 'Git', 'Linux', 'Nginx'],
  },
]

export const services = [
  {
    title: 'Web Development',
    description: 'Modern responsive websites and web applications built with cutting-edge technologies for performance and visual excellence.',
    icon: '🌐',
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end development covering frontend, backend, APIs, databases, authentication, and system architecture.',
    icon: '🔄',
  },
  {
    title: 'E-Commerce Development',
    description: 'Scalable online stores with secure payment processing, inventory management, and modern user experiences.',
    icon: '🛒',
  },
  {
    title: 'Admin Dashboards',
    description: 'Data-driven dashboards with interactive charts, user management, and real-time analytics for business intelligence.',
    icon: '📊',
  },
  {
    title: 'API Development',
    description: 'Secure, well-documented, and scalable REST APIs built with modern frameworks and best practices.',
    icon: '🔌',
  },
  {
    title: 'Deployment & Server Setup',
    description: 'Production deployment, domain configuration, DNS management, hosting optimization, and server configuration.',
    icon: '🚀',
  },
]

export const process = [
  { number: '01', title: 'Discover', description: 'Understand the business, users, and requirements.' },
  { number: '02', title: 'Design', description: 'Create a clean and intuitive product experience.' },
  { number: '03', title: 'Develop', description: 'Build scalable frontend, backend, APIs, and databases.' },
  { number: '04', title: 'Test', description: 'Improve performance, reliability, and usability.' },
  { number: '05', title: 'Deploy', description: 'Deploy and maintain the production system.' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
