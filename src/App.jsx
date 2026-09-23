import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  DownloadIcon,
  MenuIcon,
  CloseIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  SearchIcon,
  SendIcon,
  CopyIcon,
  EyeIcon,
  MaximizeIcon,
  SparklesIcon,
  ZapIcon,
  CodeIcon,
  Code2Icon,
  LayersIcon,
  PaletteIcon,
  CpuIcon,
  BrainIcon,
  HeartPulseIcon,
  CompassIcon,
  BookOpenIcon,
  BriefcaseIcon,
  WrenchIcon,
  GlobeIcon,
  UtensilsIcon,
  ShoppingBagIcon,
  GraduationCapIcon,
  AwardIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  ClockIcon,
  MessageCircleIcon,
  MessageSquareIcon,
  TagIcon,
  TrendingUpIcon,
  UserIcon,
  HeadphonesIcon,
  LightbulbIcon,
  RocketIcon,
  Share2Icon,
  CameraIcon,
  TerminalIcon,
  QuoteIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  TelegramIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  TechIcon
} from "./icons";


// Personal Info
const profile = {
  name: "Setelign",
  firstName: "Setelign",
  lastName: "Melese",
  role: "Full-Stack Engineer | Machine Learning Enthusiast",
  roles: ["Software Engineer", "Full-Stack Developer", "ML Enthusiast"],
  tagline: "Building the next generation of intelligent web systems.",
  taglineHighlight: "intelligent web systems.",
  shortBio: "I'm a 4th year Software Engineering student at Wachemo University. I build modern, responsive and user-friendly web applications, and integrate machine learning models into production environments.",
  bio: "My journey in tech began with a deep curiosity about how scalable distributed systems and intelligent algorithms power modern software. Today, I specialize in building full-stack web platforms and production-ready machine learning solutions that solve real-world problems.",
  education: "Wachemo University — College of Engineering & Technology, Department of Software Engineering (4th Year)",
  educationShort: "4th Year Software Engineering Student at Wachemo University",
  location: "Durame, Ethiopia",
  university: "Wachemo University",
  email: "setemelese91@gmail.com",
  phone: "+251 942 358 217",
  clientSupport: "+251 942 358 217",
  github: "https://github.com/zjesiut",
  linkedin: "https://linkedin.com/in/setelign-melese",
  facebook: "https://www.facebook.com/profile.php?id=100030820490907",
  telegram: "https://t.me/Ma_mi777",
  twitter: "https://x.com/zjesiut",
  cvUrl: "/resume.html",
  portraitUrl: "/profile.jpg",
  photoCaption: "Always learning, always building."
};

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Services", id: "services" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" }
];

const socialLinks = [
  { name: "GitHub", url: profile.github, icon: "github" },
  { name: "LinkedIn", url: profile.linkedin, icon: "linkedin" },
  { name: "Facebook", url: profile.facebook, icon: "facebook" },
  { name: "Telegram", url: profile.telegram, icon: "telegram" },
  { name: "Twitter", url: profile.twitter, icon: "twitter" },
  { name: "Email", url: `mailto:${profile.email}`, icon: "mail" }
];

const projectsData = [
  {
    id: "online-learning-system",
    title: "Online Learning ",
    titleHighlight: "System",
    type: "Full Stack Platform",
    description: "A comprehensive platform for course management, student progress tracking, and interactive learning modules built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop",
    category: "fullstack",
    features: [
      "Course Management & Enrollment Tracking",
      "Interactive Learning & Quiz Modules",
      "Role-Based Access (Student / Instructor)",
      "RESTful API Architecture with Express & Mongo"
    ],
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/zjesiut/smart-school-",
    demo: "https://github.com/zjesiut/smart-school-",
    liveUrl: "https://github.com/zjesiut/smart-school-",
    isLive: true,
    statusBadge: "Active Repo",
    featured: true
  },
  {
    id: "movie-streaming",
    title: "Movie Streaming ",
    titleHighlight: "Platform",
    type: "Full Stack Streaming App",
    description: "Full-stack movie platform with premium subscription features, Chapa payment integration, and seamless video playback.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop",
    category: "fullstack",
    features: [
      "Chapa Payment Gateway Integration",
      "Premium Subscription & Membership Tiers",
      "High-Definition Video Playback",
      "Relational Database with PostgreSQL"
    ],
    tags: ["React", "Express", "Chapa API", "PostgreSQL"],
    github: "https://github.com/zjesiut/moviestream",
    demo: "https://github.com/zjesiut/moviestream",
    liveUrl: "https://github.com/zjesiut/moviestream",
    isLive: true,
    statusBadge: "Active Repo",
    featured: true
  },
  {
    id: "course-registration",
    title: "Course Registration ",
    titleHighlight: "System",
    type: "Institutional Web App",
    description: "Institutional application for managing course enrollments, student records, and academic schedules with automated validation.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1170&auto=format&fit=crop",
    category: "web-app",
    features: [
      "Student Course Registration & Validation",
      "Automated Credit Limit & Prerequisite Checks",
      "Realtime State Synchronization with Firebase",
      "Responsive Tailwind CSS User Interface"
    ],
    tags: ["React", "Firebase", "TailwindCSS"],
    github: "https://github.com/zjesiut/smart-school-",
    demo: "https://github.com/zjesiut/smart-school-",
    liveUrl: "https://github.com/zjesiut/smart-school-",
    isLive: true,
    statusBadge: "Active Repo",
    featured: true
  }
];

const whyWorkWithMe = [
  {
    id: "clean-modern",
    title: "Clean & Modern",
    description: "I craft pixel-perfect, responsive interfaces with clean code and modern design principles that deliver exceptional user experiences.",
    icon: LayersIcon
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    description: "I break down complex challenges into manageable solutions, combining analytical thinking with creative approaches to deliver results.",
    icon: LightbulbIcon
  },
  {
    id: "continuous-growth",
    title: "Continuous Growth",
    description: "I'm always learning new technologies and improving my skills to stay ahead in the fast-evolving world of web development.",
    icon: TrendingUpIcon
  }
];

const currentlyBuilding = [
  {
    id: "online-learning",
    title: "Online Learning System",
    description: "Interactive course platform with real-time student analytics and automated quizzes.",
    icon: GlobeIcon,
    link: "https://github.com/zjesiut/smart-school-",
    statusBadge: "Live"
  },
  {
    id: "movie-streaming-live",
    title: "Movie Streaming SaaS",
    description: "Full-stack streaming platform with Chapa payment processing and user auth.",
    icon: UtensilsIcon,
    link: "https://github.com/zjesiut/moviestream",
    statusBadge: "Live"
  },
  {
    id: "course-registration-live",
    title: "Course Registration App",
    description: "Academic enrollment and record portal built with React and Firebase.",
    icon: ShoppingBagIcon,
    link: "https://github.com/zjesiut/smart-school-",
    statusBadge: "Live"
  },
  {
    id: "ml-research",
    title: "ML Classification API",
    description: "Predictive model inference pipeline deployed as scalable microservices.",
    icon: BriefcaseIcon,
    link: "https://github.com/zjesiut",
    statusBadge: "Live"
  }
];

const myInterests = [
  { label: "Coding & Development", icon: Code2Icon, color: "text-emerald-400" },
  { label: "AI & Machine Learning", icon: CpuIcon, color: "text-cyan-400" },
  { label: "Full-Stack Systems", icon: LayersIcon, color: "text-pink-400" },
  { label: "Algorithms & Logic", icon: BrainIcon, color: "text-amber-400" },
  { label: "Fitness & Health", icon: HeartPulseIcon, color: "text-red-400" },
  { label: "Reading & Research", icon: BookOpenIcon, color: "text-violet-400" }
];

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Vite" }
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Python" },
      { name: "MySQL" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Figma" }
    ]
  }
];

const engineeringPrinciples = [
  {
    icon: ZapIcon,
    tag: "< 1s FCP",
    title: "Performance-Driven UI",
    description: "Engineered for sub-second load times using code splitting, modern bundlers (Vite), asset caching, and fluid 60fps micro-animations."
  },
  {
    icon: LayersIcon,
    tag: "Modular & DRY",
    title: "Clean Component Architecture",
    description: "Strict typing, reusable UI primitives, scalable file hierarchies, and predictable state patterns that make codebases enjoyable to scale."
  },
  {
    icon: SmartphoneIcon,
    tag: "Fluid & WCAG",
    title: "Responsive & Accessible",
    description: "Crafted mobile-first for flawless experiences from small smartphones to wide 4K displays, adhering to accessible contrast and keyboard navigation."
  },
  {
    icon: CpuIcon,
    tag: "Modern Tooling",
    title: "Full-Cycle Dev Workflow",
    description: "Translating Figma design systems into pixel-perfect code, leveraging Git branching, automated linting, and continuous delivery pipelines."
  }
];

const educationExperience = [
  {
    period: "2023 – Present",
    title: "Wachemo University",
    subtitle: "BSc in Software Engineering",
    description: "Currently in my 4th year, building a strong theoretical and practical foundation in software engineering, algorithms, and distributed systems.",
    icon: GraduationCapIcon
  },
  {
    period: "Jun 2025 – Aug 2025",
    title: "Software Engineering Intern — Acme Corp",
    subtitle: "Frontend & API Optimization",
    description: "Worked on React and Node.js features, optimizing onboarding flows, improving web accessibility, and implementing telemetry analytics.",
    icon: BriefcaseIcon
  },
  {
    period: "Jan 2024 – May 2024",
    title: "Machine Learning Research Intern — Uni Lab",
    subtitle: "Document Classification & Pipelines",
    description: "Designed, trained, and deployed predictive classification models, exposing inference endpoints via high-throughput REST APIs.",
    icon: Code2Icon
  },
  {
    title: "Personal & Academic Open Source",
    subtitle: "Independent Engineering",
    description: "Designing end-to-end full-stack applications, contributing to community tools, and mastering new paradigms in AI and web development.",
    icon: CodeIcon
  }
];

const certificatesData = [
  {
    id: "prompt-engineering-ibm",
    title: "Prompt Engineering & Generative AI",
    issuer: "Cognitive Class",
    partner: "Powered by IBM Developer Skills Network",
    courseCode: "AI0117EN",
    program: "GenAI & LLM Architecture",
    issueDate: "July 2025",
    verificationUrl: "https://courses.cognitiveclass.ai/",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    description: "Comprehensive certification covering modern generative AI prompt patterns, zero-shot and few-shot learning, chain-of-thought logic, and production prompt optimization with IBM Developer Skills Network.",
    skills: ["Prompt Engineering", "Generative AI", "LLMs", "AI Workflows", "IBM Skills Network"]
  },
  {
    id: "programming-fundamentals-udacity",
    title: "Programming Fundamentals & Algorithms",
    issuer: "Udacity",
    partner: "Part of Accenture Program",
    credentialId: "KNQFWK3V",
    program: "Verified Nanodegree Program Completion",
    issueDate: "October 2024",
    verificationUrl: "https://confirm.udacity.com/",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    description: "Rigorous Nanodegree program covering core computer science principles, modular programming architecture, algorithm design, data structures, and production-ready problem-solving.",
    skills: ["Computer Science", "Algorithms", "Data Structures", "Problem Solving", "Software Design"]
  }
];

const servicesData = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Custom responsive websites and web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance.",
    icon: CodeIcon
  },
  {
    id: "fullstack-eng",
    title: "Full-Stack Architecture",
    description: "Complete end-to-end applications with secure authentication, scalable databases, clean REST/GraphQL APIs, and responsive UIs.",
    icon: LayersIcon
  },
  {
    id: "ml-integration",
    title: "Machine Learning Solutions",
    description: "Developing predictive models, data analysis pipelines, and integrating intelligent ML inference services into client applications.",
    icon: BrainIcon
  },
  {
    id: "api-dev",
    title: "API & Backend Engineering",
    description: "High-throughput RESTful services with Express and Node.js, complete with database indexing, caching, and payment gateway integrations.",
    icon: CpuIcon
  },
  {
    id: "maintenance",
    title: "Maintenance & Optimization",
    description: "Ongoing web performance auditing, Lighthouse optimizations, accessibility compliance, and reliable code refactoring.",
    icon: WrenchIcon
  },
  {
    id: "consultation",
    title: "Technical Consultation",
    description: "Guidance on technical architecture, database schemas, tech stack selection, and software engineering best practices.",
    icon: MessageCircleIcon
  }
];

const devProcessSteps = [
  {
    step: "01",
    icon: LightbulbIcon,
    title: "Plan & Research",
    description: "Define the problem, research users, and outline the full feature scope before writing a single line of code.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20"
  },
  {
    step: "02",
    icon: PaletteIcon,
    title: "Design & Wireframe",
    description: "Sketch UI flows, create wireframes, and finalize a design system with colors, typography, and components.",
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20"
  },
  {
    step: "03",
    icon: Code2Icon,
    title: "Build & Iterate",
    description: "Develop frontend and backend incrementally, writing clean code, unit tests, and continuous refactoring.",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20"
  },
  {
    step: "04",
    icon: RocketIcon,
    title: "Deploy & Ship",
    description: "CI/CD pipeline, performance optimization, SEO tuning, and launch — then gather feedback and iterate.",
    color: "text-orange-400",
    bg: "bg-orange-400/10 border-orange-400/20"
  }
];

const blogCategories = [
  { slug: "development", label: "Development", count: 3, icon: Code2Icon },
  { slug: "machine-learning", label: "Machine Learning", count: 2, icon: CpuIcon },
  { slug: "design", label: "Design", count: 1, icon: PaletteIcon },
  { slug: "career", label: "Career", count: 1, icon: BriefcaseIcon },
  { slug: "tools", label: "Tools", count: 1, icon: WrenchIcon }
];

const blogPosts = [
  {
    id: "getting-started-react",
    title: "Getting Started with React: Modern Architecture",
    excerpt: "React is an industry-standard library for building interactive user interfaces. In this post, I break down modern component patterns, hooks, and clean state management.",
    content: `React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.

### Why React in Modern Development?
React provides a rich ecosystem, unmatched flexibility, and seamless integration with modern tooling like Vite and Tailwind CSS.

### Key Concepts to Master:
1. **Component Modularity**: Breaking down UI into isolated, testable, and reusable blocks.
2. **Predictable State Flow**: Utilizing hooks such as useState, useEffect, and custom hooks for business logic.
3. **Performance Tuning**: Using memoization, virtualization, and lazy loading to keep interactions smooth.

With disciplined component design and clean typing, your application stays scalable as features multiply.`,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
    date: "Aug 15, 2025",
    readTime: "5 min read",
    category: "Development",
    categorySlug: "development",
    badgeText: "Frontend",
    tags: ["React", "JavaScript", "Architecture", "Web Development"]
  },
  {
    id: "ml-model-integration",
    title: "Integrating Machine Learning Models into Web Applications",
    excerpt: "Deploying trained ML models into web architectures requires careful consideration of latency, serialized formats, and asynchronous inference endpoints.",
    content: `Machine learning models provide immense predictive power, but delivering that value to end users requires solid web engineering.

### Architectural Best Practices:
1. **Decouple Prediction from Web Traffic**: Offload heavy inference tasks to worker queues or dedicated microservices.
2. **Model Serialization**: Export models to lightweight formats such as ONNX or quantized weights for sub-100ms response times.
3. **Fallback & Graceful Degradation**: Always provide heuristic fallbacks if inference times out.

Combining responsive React frontends with Python inference backends creates delightful, intelligent user experiences.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1000&auto=format&fit=crop",
    date: "Aug 02, 2025",
    readTime: "7 min read",
    category: "Machine Learning",
    categorySlug: "machine-learning",
    badgeText: "AI & ML",
    tags: ["Machine Learning", "Python", "REST API", "Full Stack"]
  },
  {
    id: "nodejs-express-api",
    title: "Node.js and Express: Building Scalable RESTful Services",
    excerpt: "Learn how to structure enterprise Node.js applications with controllers, service layers, custom error handling middlewares, and MongoDB.",
    content: `Node.js paired with Express provides a lightweight, non-blocking asynchronous environment ideally suited for high-throughput REST APIs and microservices.

### Architectural Best Practices:
- **Clean Folder Hierarchy**: Decouple routes, controllers, middleware, and database models.
- **Input Validation**: Use Zod or Joi to validate and sanitize incoming payloads.
- **JWT Authentication**: Protect endpoints with bearer token verification.
- **Centralized Error Handling**: Express custom error middlewares prevent unhandled rejections and maintain consistent error responses.

With proper indexing and connection pooling in MongoDB or PostgreSQL, your Node backend will easily handle thousands of requests per second.`,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    date: "Jul 20, 2025",
    readTime: "6 min read",
    category: "Development",
    categorySlug: "development",
    badgeText: "Backend",
    tags: ["Node.js", "Express", "REST API", "Backend", "MongoDB"]
  },
  {
    id: "ui-ux-principles",
    title: "UI/UX Design Principles for Developers",
    excerpt: "Good design is not just about aesthetics, but about usability, psychological comfort, and clear visual hierarchy.",
    content: `Aesthetics capture attention, but thoughtful usability earns user loyalty. As developers, mastering fundamental design principles allows us to craft software that is intuitive, accessible, and delightful.

### Core Principles for Every Developer:
1. **Visual Hierarchy**: Guide the user's eye naturally through size, contrast, and spatial grouping.
2. **Consistency & Familiarity**: Standardize navigation patterns, button styles, and micro-interactions.
3. **Speed as a Feature**: Smooth animations and snappy feedback states create psychological satisfaction.
4. **Accessibility First (WCAG)**: High contrast ratios, accessible focus states, and keyboard navigable controls.

When design and code blend seamlessly, the product feels effortless to use.`,
    image: "https://images.unsplash.com/photo-1581291518655-9523c93269c3?q=80&w=1000&auto=format&fit=crop",
    date: "Jul 10, 2025",
    readTime: "4 min read",
    category: "Design",
    categorySlug: "design",
    badgeText: "Design",
    tags: ["UI/UX", "Figma", "Design Systems", "Product Design"]
  }
];

const insightsCode = [
  { indent: 0, content: "const engineer = {", color: "text-text-light" },
  { indent: 1, content: "name:", color: "text-purple-400", value: '"Setelign"', valueColor: "text-yellow-300" },
  { indent: 1, content: "focus:", color: "text-purple-400", value: '["FullStack", "Machine Learning"]', valueColor: "text-primary" },
  { indent: 1, content: "status:", color: "text-purple-400", value: '"Open to Opportunities"', valueColor: "text-orange-400" },
  { indent: 0, content: "};", color: "text-text-light" },
  { indent: 0, content: "", color: "" },
  { indent: 0, content: "engineer.buildNextGenApps();", color: "text-primary" }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [projectCategory, setProjectCategory] = useState("all");
  const [blogSearch, setBlogSearch] = useState("");
  const [blogCategory, setBlogCategory] = useState("all");
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [githubRepos, setGithubRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);

  // Sync tab with URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && navItems.some(item => item.id === hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigateTo = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Fetch GitHub repos from zjesiut
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoadingRepos(true);
        const res = await fetch("https://api.github.com/users/zjesiut/repos?sort=stars&per_page=6");
        const data = await res.json();
        if (Array.isArray(data)) {
          setGithubRepos(data);
        }
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
      } finally {
        setLoadingRepos(false);
      }
    };
    fetchRepos();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setProfileImage(base64);
        localStorage.setItem("profileImage", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const filteredProjects = useMemo(() => {
    if (projectCategory === "all") return projectsData;
    return projectsData.filter(p => p.category === projectCategory);
  }, [projectCategory]);

  const filteredBlogs = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCat = blogCategory === "all" || post.categorySlug === blogCategory;
      const query = blogSearch.toLowerCase().trim();
      const matchesSearch = !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(t => t.toLowerCase().includes(query));
      return matchesCat && matchesSearch;
    });
  }, [blogCategory, blogSearch]);

  const socialIconComponent = (type) => {
    switch (type) {
      case "github": return GithubIcon;
      case "linkedin": return LinkedInIcon;
      case "twitter": return TwitterIcon;
      case "telegram": return TelegramIcon;
      case "facebook": return FacebookIcon;
      case "mail": return MailIcon;
      default: return GlobeIcon;
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark text-text-light flex flex-col font-sans selection:bg-primary/30 selection:text-white">
      
      {/* ================= FIXED NAVBAR ================= */}
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-primary/12 bg-bg-dark/98 backdrop-blur-md">
        <nav className="section-container" aria-label="Main navigation">
          <div className="flex h-[60px] items-center justify-between gap-3">
            
            {/* Logo */}
            <button
              onClick={() => navigateTo("home")}
              className="flex shrink-0 items-center gap-2 text-[15px] font-bold text-text-light hover:opacity-90 transition-opacity"
              aria-label="Setelign - Home"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-xs font-extrabold text-bg-dark shadow-[0_0_12px_rgba(20,255,197,0.4)]">
                S
              </span>
              <span>{profile.name}</span>
            </button>

            {/* Desktop Navigation Links */}
            <ul className="hidden flex-1 items-center justify-center gap-0.5 lg:flex" role="list">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <li key={item.id} className="relative">
                    <button
                      onClick={() => navigateTo(item.id)}
                      className={`block px-3 py-2 text-[13px] font-medium transition-colors ${
                        isActive ? "text-primary" : "text-text-muted hover:text-text-light"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute right-2.5 -bottom-0.5 left-2.5 h-0.5 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right Header CTAs */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="hidden items-center gap-1.5 text-[11px] text-text-muted xl:flex hover:text-primary transition-colors"
              >
                <HeadphonesIcon size={14} className="shrink-0 text-primary" />
                <span>
                  Support: <span className="text-text-light">{profile.clientSupport}</span>
                </span>
              </a>

              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 rounded-md border border-primary/40 px-2.5 py-1.5 text-[12px] font-medium text-primary transition-colors hover:bg-primary/10 sm:inline-flex"
              >
                <DownloadIcon size={13} />
                <span>Download CV</span>
              </a>

              {/* Mobile hamburger button */}
              <button
                type="button"
                className="rounded p-1.5 text-text-muted hover:text-white lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t border-primary/10 lg:hidden pb-3"
              >
                <ul className="flex flex-col gap-0.5 py-2" role="list">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => navigateTo(item.id)}
                        className={`w-full text-left rounded px-3 py-2 text-sm font-medium ${
                          activeTab === item.id ? "text-primary bg-primary/10 font-bold" : "text-text-muted"
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                  <li className="pt-2 px-1">
                    <a
                      href={profile.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-md border border-primary/40 px-3 py-2 text-sm text-primary hover:bg-primary/10"
                    >
                      <DownloadIcon size={15} />
                      <span>Download CV</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 pt-[60px]">
        
        {/* ================= VIEW: HOME ================= */}
        {activeTab === "home" && (
          <div className="overflow-x-hidden bg-bg-dark">
            
            {/* Hero Section */}
            <section className="relative overflow-hidden py-10 sm:py-16 lg:py-20" aria-label="Hero">
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{ background: "radial-gradient(ellipse 70% 60% at 70% 45%, rgba(20,255,197,0.07), transparent 75%)" }}
                aria-hidden="true"
              />
              
              <div className="section-container">
                <div className="grid grid-cols-12 items-center gap-2.5 sm:gap-8 lg:gap-8">
                  
                  {/* Left Column Text */}
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55 }}
                    className="col-span-7 sm:col-span-7 lg:col-span-6 xl:col-span-5"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2.5 text-primary">
                      <span className="h-0.5 w-4 sm:w-6 rounded-full bg-primary" />
                      <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                        Full-Stack Engineer
                      </span>
                    </div>

                    <h1 className="mt-1.5 sm:mt-3 text-xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.5rem] leading-tight lg:leading-[1.12]">
                      Hi, I'm{" "}
                      <span className="bg-gradient-to-r from-primary via-[#5cffe0] to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(20,255,197,0.4)]">
                        {profile.name}
                      </span>
                    </h1>

                    <div className="mt-1 flex w-full max-w-[490px] items-center justify-between text-[8.5px] min-[360px]:text-[9.2px] min-[390px]:text-[10px] min-[420px]:text-[10.8px] sm:text-sm lg:text-[15px] font-semibold text-text-light/90 tracking-tight">
                      <span>Software Engineer</span>
                      <span className="text-primary text-[8px] sm:text-xs">•</span>
                      <span>Full-Stack Dev</span>
                      <span className="text-primary text-[8px] sm:text-xs">•</span>
                      <span>ML Enthusiast</span>
                    </div>

                    <p className="mt-1.5 sm:mt-3 max-w-[490px] text-[11px] sm:text-sm lg:text-[15px] leading-snug sm:leading-relaxed text-text-muted text-justify">
                      {profile.shortBio}
                    </p>

                    <div className="mt-3 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
                      <button
                        onClick={() => navigateTo("projects")}
                        className="ref-btn-primary inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full px-3.5 py-1.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(20,255,197,0.25)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,255,197,0.45)] active:scale-95 cursor-pointer"
                      >
                        <span>View Projects</span>
                        <ArrowRightIcon size={13} className="sm:w-[15px] sm:h-[15px]" />
                      </button>

                      <button
                        onClick={() => navigateTo("contact")}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-text-light transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary cursor-pointer"
                      >
                        <span>Contact Me</span>
                      </button>
                    </div>

                    {/* Social pill icons */}
                    <div className="mt-2.5 sm:mt-5 flex items-center gap-2 sm:gap-3">
                      {socialLinks.map((s) => {
                        const Icon = socialIconComponent(s.icon);
                        return (
                          <a
                            key={s.name}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/10 text-text-muted transition-all hover:border-primary/50 hover:text-primary hover:scale-110"
                            aria-label={s.name}
                          >
                            <Icon size={12} className="sm:w-4 sm:h-4" />
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Right Column Portrait & Orbital Rings */}
                  <motion.div
                    initial={{ opacity: 0, x: 24, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="col-span-5 sm:col-span-5 lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end"
                  >
                    {/* Concentric ambient glowing rings */}
                    <div className="pointer-events-none absolute -inset-2 sm:-inset-6 -z-10 flex items-center justify-center" aria-hidden="true">
                      <div className="h-32 w-32 sm:h-96 sm:w-96 rounded-full bg-primary/10 blur-3xl" />
                      <div className="absolute h-[160px] w-[160px] sm:h-[440px] sm:w-[440px] rounded-full border border-primary/10" />
                      <div className="absolute h-[220px] w-[220px] sm:h-[580px] sm:w-[580px] rounded-full border border-primary/[0.04]" />
                    </div>

                    <div className="relative w-full max-w-[170px] sm:max-w-[380px] lg:max-w-[480px]">
                      
                      {/* Top Handwritten Callout */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="pointer-events-none absolute -top-5 right-0 sm:-top-10 sm:right-6 z-20 flex items-center gap-1"
                      >
                        <div className="text-right font-signature text-[9px] sm:text-base lg:text-xl leading-tight text-primary drop-shadow-[0_0_8px_rgba(20,255,197,0.5)]">
                          <div>Build & Create</div>
                          <div className="text-primary/75 text-[8px] sm:text-sm">Modern Web Apps</div>
                        </div>
                        <svg className="w-3.5 h-3.5 sm:w-8 sm:h-8 text-primary/70 -rotate-12 transform" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 8 C 24 10, 30 18, 28 30" />
                          <path d="M 22 24 L 28 30 L 34 24" />
                        </svg>
                      </motion.div>

                      {/* Portrait Container with Upload Badge */}
                      <div className="relative group">
                        <img
                          src={profileImage || profile.portraitUrl}
                          alt={profile.name}
                          className="relative z-10 w-full h-auto object-contain rounded-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-[1.02]"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";
                          }}
                        />

                        {/* Interactive photo change trigger */}
                        <label
                          htmlFor="hero-profile-upload"
                          className="absolute bottom-3 right-3 z-30 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-bg-dark shadow-[0_0_15px_rgba(20,255,197,0.6)] cursor-pointer transition-transform hover:scale-110 active:scale-95"
                          title="Change profile photo"
                        >
                          <CameraIcon size={16} />
                          <input
                            type="file"
                            id="hero-profile-upload"
                            hidden
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>

                        {/* Subtle edge vignette */}
                        <div
                          className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
                          style={{
                            background: `
                              linear-gradient(to bottom, transparent 82%, #05080a 98%),
                              linear-gradient(to right, #05080a 0%, transparent 6%, transparent 94%, #05080a 100%),
                              linear-gradient(to top, transparent 92%, #05080a 100%)
                            `
                          }}
                        />
                      </div>

                      {/* Bottom Handwritten Callout */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="pointer-events-none absolute -bottom-4 right-0 sm:-bottom-8 sm:right-6 z-20 flex items-center gap-1"
                      >
                        <svg className="w-3.5 h-3.5 sm:w-8 sm:h-8 text-primary/70 rotate-12 transform" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M 32 30 C 26 22, 18 16, 10 12" />
                          <path d="M 18 10 L 10 12 L 12 20" />
                        </svg>
                        <div className="text-left font-signature text-[9px] sm:text-base lg:text-xl leading-tight text-primary drop-shadow-[0_0_8px_rgba(20,255,197,0.5)]">
                          <div>Clean Code →</div>
                          <div className="text-primary/75 text-[8px] sm:text-sm">Real Impact</div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Bottom Counter Bar */}
                  <div className="col-span-12 mt-4 sm:mt-10 flex items-center justify-between sm:justify-start gap-3 sm:gap-10 border-t border-white/8 pt-4 sm:pt-6">
                    <div>
                      <div className="text-xl sm:text-3xl font-extrabold text-primary">5+</div>
                      <div className="text-[10px] sm:text-xs text-text-muted/80 font-medium mt-0.5">Projects Completed</div>
                    </div>
                    <div className="h-7 sm:h-9 w-px bg-white/10" />
                    <div>
                      <div className="text-xl sm:text-3xl font-extrabold text-primary">3+</div>
                      <div className="text-[10px] sm:text-xs text-text-muted/80 font-medium mt-0.5">Years of Learning</div>
                    </div>
                    <div className="h-7 sm:h-9 w-px bg-white/10" />
                    <div>
                      <div className="text-xl sm:text-3xl font-extrabold text-primary">2+</div>
                      <div className="text-[10px] sm:text-xs text-text-muted/80 font-medium mt-0.5">Roles & Internships</div>
                    </div>
                    <div className="h-7 sm:h-9 w-px bg-white/10" />
                    <div>
                      <div className="text-xl sm:text-3xl font-extrabold text-primary">100%</div>
                      <div className="text-[10px] sm:text-xs text-text-muted/80 font-medium mt-0.5">Passion</div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Featured Projects Section */}
            <section className="pb-10 sm:pb-12" aria-label="Featured projects">
              <div className="section-container">
                <div className="ref-panel rounded-xl p-5 sm:p-7">
                  <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
                    <div>
                      <h2 className="text-xl font-bold sm:text-[22px]">
                        <span className="text-text-light">Featured </span>
                        <span className="text-primary">Projects</span>
                      </h2>
                      <p className="mt-0.5 text-[13px] text-text-muted">Selected work and software applications.</p>
                    </div>
                    <button
                      onClick={() => navigateTo("projects")}
                      className="inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-primary hover:text-primary-bright cursor-pointer"
                    >
                      <span>View All Projects</span>
                      <ArrowRightIcon size={14} />
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project, i) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={i}
                        onPreview={(p) => setSelectedProject(p)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Why Work With Me Panel */}
            <section className="pb-10 sm:pb-12" aria-label="Why work with me">
              <div className="section-container">
                <div className="ref-panel rounded-xl p-5 sm:p-7">
                  <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
                    <div>
                      <h2 className="text-xl font-bold sm:text-[22px]">
                        <span className="text-text-light">Why Work </span>
                        <span className="text-primary">With Me</span>
                      </h2>
                      <p className="mt-0.5 text-[13px] text-text-muted">What makes me a reliable partner for your next engineering project.</p>
                    </div>
                    <button
                      onClick={() => navigateTo("about")}
                      className="inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-primary hover:text-primary-bright cursor-pointer"
                    >
                      <span>Learn More About Me</span>
                      <ArrowRightIcon size={14} />
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {whyWorkWithMe.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.article
                          key={item.id}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08 }}
                          className="rounded-xl border border-primary/15 bg-bg-card p-5 transition-colors hover:border-primary/30"
                        >
                          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 text-primary">
                            <Icon size={18} />
                          </div>
                          <h3 className="text-[14px] font-semibold text-text-light">{item.title}</h3>
                          <p className="mt-2 text-[12px] leading-relaxed text-text-muted">{item.description}</p>
                        </motion.article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Currently Building Panel */}
            <section className="pb-14 sm:pb-16" aria-label="Currently building">
              <div className="section-container">
                <div className="ref-panel rounded-2xl p-6 sm:p-8">
                  <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
                    <div>
                      <h2 className="text-xl font-bold sm:text-2xl">
                        <span className="text-text-light">Currently </span>
                        <span className="text-primary">Building</span>
                      </h2>
                      <p className="mt-1 text-sm text-text-muted">Projects and systems I'm actively engineering.</p>
                    </div>
                    <button
                      onClick={() => navigateTo("projects")}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-bright cursor-pointer"
                    >
                      <span>View All Projects</span>
                      <ArrowRightIcon size={14} />
                    </button>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {currentlyBuilding.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.article
                          key={item.id}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 rounded-xl border border-primary/15 bg-bg-card p-3.5 transition-colors hover:border-primary/30"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 text-primary">
                            <Icon size={15} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <h3 className="text-[13px] font-semibold text-text-light truncate">{item.title}</h3>
                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-[#061e14] px-1.5 py-0.5 text-[9px] font-bold text-emerald-400 hover:border-emerald-400 transition-colors shrink-0"
                                >
                                  <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                                  <span>Live</span>
                                </a>
                              )}
                            </div>
                            <p className="mt-0.5 text-[11px] leading-relaxed text-text-muted line-clamp-2">{item.description}</p>
                          </div>
                        </motion.article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ================= VIEW: ABOUT ================= */}
        {activeTab === "about" && (
          <div className="overflow-x-hidden bg-bg-dark">
            <section className="relative overflow-hidden py-10 sm:py-16 lg:py-20" aria-label="About Hero">
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{ background: "radial-gradient(ellipse 70% 60% at 70% 45%, rgba(20,255,197,0.07), transparent 75%)" }}
                aria-hidden="true"
              />
              <div className="section-container">
                <div className="grid grid-cols-12 items-center gap-2.5 sm:gap-8 lg:gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55 }}
                    className="col-span-7 sm:col-span-7 lg:col-span-6 xl:col-span-5"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2.5 text-primary">
                      <span className="h-0.5 w-4 sm:w-6 rounded-full bg-primary" />
                      <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">About Me</span>
                    </div>

                    <h1 className="mt-1.5 sm:mt-3 text-xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.5rem] leading-tight lg:leading-[1.12]">
                      Hi, I'm{" "}
                      <span className="bg-gradient-to-r from-primary via-[#5cffe0] to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(20,255,197,0.4)]">
                        {profile.name}
                      </span>
                    </h1>

                    <p className="mt-1.5 sm:mt-4 max-w-[490px] text-[11px] sm:text-sm lg:text-[15px] leading-snug sm:leading-relaxed text-text-muted">
                      {profile.bio}
                    </p>

                    <div className="mt-3 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
                      <a
                        href={profile.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ref-btn-primary inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full px-3.5 py-1.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(20,255,197,0.25)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,255,197,0.45)] active:scale-95 cursor-pointer"
                      >
                        <DownloadIcon size={14} />
                        <span>Download Resume</span>
                      </a>
                      <button
                        onClick={() => navigateTo("contact")}
                        className="inline-flex items-center gap-1.5 rounded-full border border-primary/45 px-3.5 py-1.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-text-light hover:bg-primary/10 cursor-pointer"
                      >
                        <span>Contact Me</span>
                        <ArrowRightIcon size={13} />
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 24, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="col-span-5 sm:col-span-5 lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end"
                  >
                    <div className="relative w-full max-w-[170px] sm:max-w-[380px] lg:max-w-[480px]">
                      <img
                        src={profileImage || profile.portraitUrl}
                        alt={profile.name}
                        className="relative z-10 w-full h-auto object-contain rounded-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* My Story Section */}
            <section className="pb-10 sm:pb-14" aria-label="My Story">
              <div className="section-container">
                <div className="ref-panel rounded-2xl p-5 sm:p-7 lg:p-8">
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col justify-between gap-6"
                    >
                      <div>
                        <span className="text-[11px] font-bold tracking-widest text-primary uppercase">My Story</span>
                        <h2 className="mt-1.5 text-2xl font-bold text-text-light sm:text-[1.75rem]">
                          A Journey of <span className="text-primary">Engineering & Growth</span>
                        </h2>
                        <div className="mt-4 space-y-3">
                          <p className="text-[13px] leading-relaxed text-text-muted">
                            As a Software Engineering student at Wachemo University, I have spent the last several years exploring both ends of the software stack. I believe software engineering is fundamentally about turning ideas into real-world impact.
                          </p>
                          <p className="text-[13px] leading-relaxed text-text-muted">
                            From engineering full-stack platforms with React and Node.js to experimenting with modern Machine Learning classification pipelines and AI workflows, I take pride in writing clean, well-tested, and maintainable code.
                          </p>
                        </div>
                      </div>

                      {/* Fact items */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                            <MapPinIcon size={16} />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold tracking-widest text-text-muted uppercase">Location</p>
                            <p className="text-[13px] text-text-light">{profile.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                            <GraduationCapIcon size={16} />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold tracking-widest text-text-muted uppercase">University</p>
                            <p className="text-[13px] text-text-light">{profile.university}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                            <MailIcon size={16} />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold tracking-widest text-text-muted uppercase">Email</p>
                            <p className="text-[13px] text-text-light">{profile.email}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Column: Setup + Quote + Interests */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="glass flex flex-col justify-center rounded-xl p-5 border border-primary/20">
                        <QuoteIcon size={22} className="mb-2 text-primary/60" />
                        <p className="text-[13px] leading-relaxed text-text-muted italic">
                          "I'm not just writing code, I'm building intelligent digital systems that make an enduring difference."
                        </p>
                        <p className="mt-2 text-[11px] font-bold text-primary">— Setelign</p>
                      </div>

                      <div>
                        <h3 className="mb-3 text-base font-bold text-text-light">My Interests & Passions</h3>
                        <div className="grid grid-cols-2 gap-2.5">
                          {myInterests.map((interest, idx) => {
                            const Icon = interest.icon;
                            return (
                              <motion.div
                                key={interest.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass glass-hover flex items-center gap-2.5 rounded-xl px-3 py-2.5"
                              >
                                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 ${interest.color}`}>
                                  <Icon size={14} />
                                </div>
                                <span className="text-[12px] font-medium text-text-light">{interest.label}</span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* Education & Experience Section */}
            <section className="pb-14 sm:pb-20" aria-label="Education and Experience">
              <div className="section-container">
                <div className="ref-panel rounded-2xl p-5 sm:p-7 lg:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-bold tracking-widest text-primary uppercase">My Journey</span>
                      <h2 className="mt-1.5 text-2xl font-bold text-text-light sm:text-[1.75rem]">
                        Education & <span className="text-primary">Experience</span>
                      </h2>
                    </div>
                    <a
                      href={profile.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-primary hover:text-primary-bright"
                    >
                      <span>Download Resume</span>
                      <ArrowRightIcon size={14} />
                    </a>
                  </div>

                  <div className="relative mt-8">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                      {educationExperience.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-4"
                          >
                            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-bg-dark shadow-[0_0_14px_rgba(20,255,197,0.3)]">
                              <Icon size={15} className="text-primary" />
                            </div>
                            <div className="flex-1">
                              {item.period && (
                                <span className="text-[11px] font-bold text-primary">{item.period}</span>
                              )}
                              <h3 className="mt-0.5 text-[15px] font-bold text-text-light">{item.title}</h3>
                              <p className="text-[11px] font-medium text-text-muted">{item.subtitle}</p>
                              <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{item.description}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Verified Certifications Section */}
            <section className="pb-14 sm:pb-20" aria-label="Certifications">
              <div className="section-container">
                <div className="ref-panel rounded-2xl p-5 sm:p-7 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-primary">
                        <ShieldCheckIcon size={16} />
                        <span className="text-[11px] font-bold tracking-widest uppercase">Verified Credentials</span>
                      </div>
                      <h2 className="mt-1.5 text-2xl font-bold text-text-light sm:text-[1.75rem]">
                        Certifications & <span className="text-primary">Credentials</span>
                      </h2>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                      <CheckCircleIcon size={13} />
                      <span>2 Verified Badges</span>
                    </span>
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {certificatesData.map((cert, idx) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.04] p-5 justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="inline-flex items-center gap-1.5 font-bold text-primary">
                              <AwardIcon size={14} />
                              {cert.issuer}
                            </span>
                            <span className="text-[11px] text-text-muted">{cert.issueDate}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-text-light transition-colors group-hover:text-primary">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-text-muted">{cert.partner}</p>
                          <p className="text-xs leading-relaxed text-text-muted">{cert.description}</p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {cert.skills.map((s) => (
                              <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-text-muted">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5 flex items-center gap-2.5 border-t border-white/10 pt-3.5">
                          <button
                            type="button"
                            onClick={() => setSelectedCertificate(cert)}
                            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 py-2 px-3 text-xs font-semibold text-text-light hover:border-primary/40 hover:bg-primary/10 hover:text-primary cursor-pointer"
                          >
                            <EyeIcon size={13} />
                            <span>View Details</span>
                          </button>
                          <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 py-2 px-3 text-xs font-semibold text-primary hover:bg-primary hover:text-black shadow-[0_0_15px_rgba(20,255,197,0.15)]"
                          >
                            <span>Verify Online</span>
                            <ExternalLinkIcon size={13} />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ================= VIEW: PROJECTS ================= */}
        {activeTab === "projects" && (
          <div className="overflow-x-hidden bg-bg-dark">
            <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20" aria-label="Projects Hero">
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{ background: "radial-gradient(ellipse 70% 60% at 70% 45%, rgba(20,255,197,0.07), transparent 75%)" }}
                aria-hidden="true"
              />
              <div className="section-container">
                <div className="grid grid-cols-12 items-center gap-2.5 sm:gap-8 lg:gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55 }}
                    className="col-span-7 sm:col-span-7 lg:col-span-6 xl:col-span-5"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2.5 text-primary">
                      <span className="h-0.5 w-4 sm:w-6 rounded-full bg-primary" />
                      <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">My Portfolio</span>
                    </div>

                    <h1 className="mt-1.5 sm:mt-3 text-xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.5rem] leading-tight lg:leading-[1.12]">
                      Turning Ideas Into{" "}
                      <span className="bg-gradient-to-r from-primary via-[#5cffe0] to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(20,255,197,0.4)]">
                        Real Systems
                      </span>
                    </h1>

                    <p className="mt-1.5 sm:mt-4 max-w-[490px] text-[11px] sm:text-sm lg:text-[15px] leading-snug sm:leading-relaxed text-text-muted">
                      A curated collection of full-stack web applications and software engineering projects. Each platform represents practical architecture, reliable APIs, and interactive user interfaces.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 24, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="col-span-5 sm:col-span-5 lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end"
                  >
                    <div className="relative w-full max-w-[340px] sm:max-w-[420px] rounded-2xl border border-primary/20 bg-[#080d14]/90 p-4 shadow-2xl backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-3 text-xs text-primary font-bold">
                        <TerminalIcon size={16} />
                        <span>Featured Highlights</span>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed">
                        Explore full-stack platforms with Chapa payment gateways, course management portals, and active GitHub repositories below.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Filter Tabs */}
                <div className="mt-12 flex flex-wrap gap-2">
                  {[
                    { id: "all", label: "All Projects" },
                    { id: "web-app", label: "Web Apps" },
                    { id: "fullstack", label: "Full Stack" }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setProjectCategory(cat.id)}
                      className={`rounded-full px-4 py-1.5 text-[12px] font-semibold transition-all cursor-pointer ${
                        projectCategory === cat.id
                          ? "ref-btn-primary shadow-[0_0_16px_rgba(20,255,197,0.3)]"
                          : "border border-white/10 text-text-muted hover:border-primary/30 hover:text-text-light"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-12" aria-label="Projects list">
              <div className="section-container">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((p, idx) => (
                    <ProjectCard key={p.id} project={p} index={idx} onPreview={(item) => setSelectedProject(item)} />
                  ))}
                </div>
              </div>
            </section>

            {/* GitHub Repositories Section */}
            <section className="pb-16" aria-label="GitHub Repositories">
              <div className="section-container">
                <div className="ref-panel rounded-2xl p-6 sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold sm:text-2xl">
                        <span className="text-text-light">Live </span>
                        <span className="text-primary">GitHub Projects</span>
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm text-text-muted">Directly synced from github.com/zjesiut</p>
                    </div>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <GithubIcon size={14} />
                      <span>View GitHub Profile</span>
                    </a>
                  </div>

                  {loadingRepos ? (
                    <div className="py-12 text-center text-text-muted text-sm">
                      <p>Loading repositories from GitHub...</p>
                    </div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {githubRepos.map((repo) => (
                        <div
                          key={repo.id}
                          className="glass glass-hover rounded-xl p-4 flex flex-col justify-between border border-white/8 hover:border-primary/40 transition-all"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-sm font-bold text-text-light truncate">{repo.name}</h3>
                              <span className="text-xs font-semibold text-primary shrink-0">
                                ⭐ {repo.stargazers_count}
                              </span>
                            </div>
                            <p className="mt-2 text-xs text-text-muted line-clamp-2 leading-relaxed">
                              {repo.description || "Open source software project on GitHub."}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between">
                            <span className="text-[11px] font-mono text-primary/80">
                              {repo.language || "JavaScript"}
                            </span>
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-text-light hover:text-primary transition-colors"
                            >
                              <span>View Code</span>
                              <ExternalLinkIcon size={10} />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Development Process */}
            <section className="py-12 sm:py-16" aria-label="Development Process">
              <div className="section-container">
                <div className="mb-8 text-center">
                  <span className="text-[11px] font-bold tracking-widest text-primary uppercase">How I Work</span>
                  <h2 className="mt-2 text-2xl font-bold text-text-light sm:text-3xl">
                    My Dev <span className="text-primary">Process</span>
                  </h2>
                  <p className="mx-auto mt-2 max-w-[480px] text-[13px] text-text-muted">
                    From blank page to shipped product — here's how I turn ideas into reliable software.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {devProcessSteps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.step} className="glass glass-hover relative flex flex-col items-center rounded-2xl p-5 text-center">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-bg-dark px-2.5 py-0.5 text-[10px] font-black tracking-widest text-primary border border-primary/30">
                          {step.step}
                        </span>
                        <div className={`mt-3 flex h-12 w-12 items-center justify-center rounded-xl border ${step.bg}`}>
                          <Icon size={22} className={step.color} />
                        </div>
                        <h3 className="mt-3 text-[14px] font-bold text-text-light">{step.title}</h3>
                        <p className="mt-2 text-[11px] leading-relaxed text-text-muted">{step.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ================= VIEW: SKILLS ================= */}
        {activeTab === "skills" && (
          <div className="overflow-x-hidden bg-bg-dark">
            <section className="py-12 sm:py-16 lg:py-20" aria-label="Skills & Tools">
              <div className="section-container">
                <div className="mb-10 text-left sm:mb-12">
                  <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    My <span className="bg-gradient-to-r from-primary via-[#5cffe0] to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(20,255,197,0.4)]">Skills</span>
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-text-muted">
                    Technologies, frameworks, and engineering principles I utilize to build modern full-stack web applications.
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
                  {skillsData.map((category) => (
                    <div
                      key={category.title}
                      className="rounded-2xl border border-white/8 bg-[#071017]/85 p-6 sm:p-8 backdrop-blur-xl shadow-lg lg:col-span-4"
                    >
                      <h2 className="mb-6 text-lg sm:text-xl font-bold tracking-wide text-white flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {category.title}
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {category.skills.map((s) => (
                          <div
                            key={s.name}
                            className="group flex flex-col items-center gap-2 rounded-xl p-3 bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all"
                          >
                            <TechIcon name={s.name} className="w-10 h-10 transition-transform group-hover:scale-110" />
                            <span className="text-xs font-semibold text-text-muted group-hover:text-white transition-colors">
                              {s.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Engineering Principles */}
                <div className="mt-16">
                  <div className="flex items-center gap-2.5 text-primary">
                    <span className="h-0.5 w-6 rounded-full bg-primary" />
                    <span className="text-xs font-bold tracking-widest uppercase">How I Build</span>
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    Engineering Principles & <span className="text-primary">Standards</span>
                  </h2>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {engineeringPrinciples.map((ep) => {
                      const Icon = ep.icon;
                      return (
                        <div
                          key={ep.title}
                          className="glass glass-hover rounded-2xl p-6 flex flex-col justify-between border border-white/8 hover:border-primary/40 transition-all"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                                <Icon size={20} />
                              </div>
                              <span className="rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary">
                                {ep.tag}
                              </span>
                            </div>
                            <h3 className="text-base font-bold text-white mb-2">{ep.title}</h3>
                            <p className="text-xs leading-relaxed text-text-muted">{ep.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= VIEW: SERVICES ================= */}
        {activeTab === "services" && (
          <div className="overflow-x-hidden bg-bg-dark py-12 sm:py-16 lg:py-20">
            <div className="section-container">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Services & <span className="text-primary">Expertise</span>
                </h1>
                <p className="mt-3 text-sm sm:text-base text-text-muted">
                  Professional software engineering services to transform ideas into scalable digital products.
                </p>
                <div className="mt-4 h-1 w-16 rounded-full bg-primary mx-auto" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {servicesData.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="glass glass-hover group rounded-2xl p-6 border border-white/8 hover:border-primary/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-bg-dark">
                          <Icon size={22} />
                        </div>
                        <h3 className="text-lg font-semibold text-text-light">{service.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-text-muted">{service.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Call to action panel */}
              <div className="glass mt-16 rounded-3xl p-8 text-center md:p-12 border border-primary/20">
                <h3 className="text-2xl font-bold text-text-light">Have a project or opportunity in mind?</h3>
                <p className="mx-auto mt-4 max-w-lg text-text-muted text-sm">
                  Whether you need a new full-stack system, ML integration, or engineering support, I'm ready to collaborate.
                </p>
                <button
                  onClick={() => navigateTo("contact")}
                  className="ref-btn-primary mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold shadow-[0_0_20px_rgba(20,255,197,0.3)] cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW: BLOG ================= */}
        {activeTab === "blog" && (
          <div className="overflow-x-hidden bg-bg-dark py-12 sm:py-16">
            <div className="section-container">
              
              {/* Blog Hero with interactive code terminal widget */}
              <div className="grid grid-cols-12 items-center gap-6 lg:gap-10 mb-12">
                <div className="col-span-12 lg:col-span-6">
                  <span className="text-xs font-bold tracking-wide text-primary uppercase">My Articles & Notes</span>
                  <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                    Engineering{" "}
                    <span className="bg-gradient-to-r from-primary to-[#5cffe0] bg-clip-text text-transparent">
                      Insights
                    </span>
                  </h1>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    Documenting architectures, learnings in Machine Learning, full-stack development, and modern software design.
                  </p>
                </div>

                {/* Interactive insights.ts terminal mockup */}
                <div className="col-span-12 lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-[380px] rounded-xl overflow-hidden border border-primary/25 bg-[#090d12] shadow-2xl">
                    <div className="flex items-center gap-1.5 bg-[#121820] px-3.5 py-2.5 border-b border-white/8">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                      <span className="ml-3 text-[10px] text-text-muted/60 font-mono tracking-wider">insights.ts</span>
                    </div>
                    <div className="px-4 py-4 font-mono text-[11px] leading-[1.8] space-y-0.5">
                      {insightsCode.map((line, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="w-4 shrink-0 text-right text-white/15 select-none">{i + 1}</span>
                          <span className={line.color} style={{ paddingLeft: `${line.indent * 12}px` }}>
                            {line.content}
                            {line.value && <span className={`ml-1.5 ${line.valueColor}`}>{line.value}</span>}
                          </span>
                        </div>
                      ))}
                      <div className="flex items-center gap-3">
                        <span className="w-4 shrink-0 text-right text-white/15 select-none">{insightsCode.length + 1}</span>
                        <span className="inline-block h-3.5 w-1.5 bg-primary animate-pulse" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-primary/10 px-3.5 py-1.5 border-t border-primary/20 text-[10px] font-mono text-primary/80">
                      <span>TypeScript</span>
                      <span>ready to read ✓</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Grid & Sidebar */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-sm font-semibold text-primary">
                      {filteredBlogs.length} {filteredBlogs.length === 1 ? "article" : "articles"} found
                    </span>
                    {blogCategory !== "all" && (
                      <button
                        onClick={() => setBlogCategory("all")}
                        className="text-xs text-primary hover:underline cursor-pointer"
                      >
                        Reset filter
                      </button>
                    )}
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {filteredBlogs.map((post) => (
                      <article
                        key={post.id}
                        className="glass glass-hover rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-white/8 hover:border-primary/30 transition-all cursor-pointer"
                        onClick={() => setSelectedBlog(post)}
                      >
                        <div>
                          <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#05080c]">
                            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                          </div>
                          <span className="inline-block rounded-full border border-primary/25 bg-primary/10 px-3 py-0.5 text-[11px] font-medium text-primary mb-2">
                            {post.badgeText}
                          </span>
                          <h3 className="text-base font-bold text-white mb-2 line-clamp-2 hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-text-muted mb-3">
                            <ClockIcon size={12} className="text-primary/70" />
                            <span>{post.readTime}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                          <p className="text-xs leading-relaxed text-text-muted/85 line-clamp-3 mb-4">{post.excerpt}</p>
                        </div>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-bright"
                        >
                          <span>Read Article</span>
                          <ArrowRightIcon size={12} />
                        </button>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Search */}
                  <div className="relative">
                    <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted/60 pointer-events-none" />
                    <input
                      type="text"
                      value={blogSearch}
                      onChange={(e) => setBlogSearch(e.target.value)}
                      placeholder="Search articles..."
                      className="w-full rounded-xl border border-white/8 bg-[#090e14] py-3 pr-10 pl-10 text-xs text-white placeholder:text-text-muted/50 focus:border-primary/50 focus:outline-none"
                    />
                  </div>

                  {/* Categories */}
                  <div className="rounded-2xl border border-white/6 bg-[#090e14] p-5 shadow-sm">
                    <h3 className="text-base font-bold text-white mb-4">Categories</h3>
                    <div className="space-y-1">
                      {blogCategories.map((cat) => {
                        const isSelected = blogCategory === cat.slug;
                        const Icon = cat.icon;
                        return (
                          <button
                            key={cat.slug}
                            onClick={() => setBlogCategory(isSelected ? "all" : cat.slug)}
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition-colors cursor-pointer ${
                              isSelected ? "bg-primary/15 font-semibold text-primary" : "text-text-muted hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <span className="flex items-center gap-2.5">
                              <Icon size={15} />
                              <span>{cat.label}</span>
                            </span>
                            <span className="font-semibold text-primary">{cat.count}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW: CONTACT ================= */}
        {activeTab === "contact" && (
          <div className="overflow-x-hidden bg-bg-dark py-10 sm:py-16">
            <div className="section-container">
              
              <div className="mb-10 text-center max-w-xl mx-auto">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-primary uppercase">Get In Touch</span>
                <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                  Contact <span className="text-primary">Me</span>
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-text-muted">
                  Have a question, proposal, or want to discuss full-stack or ML projects? Send me a message below!
                </p>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
                <a href={`mailto:${profile.email}`} className="glass glass-hover flex flex-col gap-2 rounded-2xl p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <MailIcon size={18} />
                  </div>
                  <p className="text-[10px] font-bold tracking-widest text-text-muted uppercase">Email</p>
                  <p className="text-[13px] font-semibold text-text-light truncate">{profile.email}</p>
                  <p className="text-[11px] text-text-muted">Direct communication</p>
                </a>

                <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="glass glass-hover flex flex-col gap-2 rounded-2xl p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <PhoneIcon size={18} />
                  </div>
                  <p className="text-[10px] font-bold tracking-widest text-text-muted uppercase">Phone / Telegram</p>
                  <p className="text-[13px] font-semibold text-text-light">{profile.phone}</p>
                  <p className="text-[11px] text-text-muted">Available for direct inquiries</p>
                </a>

                <div className="glass flex flex-col gap-2 rounded-2xl p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <MapPinIcon size={18} />
                  </div>
                  <p className="text-[10px] font-bold tracking-widest text-text-muted uppercase">Location</p>
                  <p className="text-[13px] font-semibold text-text-light">{profile.location}</p>
                  <p className="text-[11px] text-text-muted">Ethiopia / Remote Worldwide</p>
                </div>

                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="glass glass-hover flex flex-col gap-2 rounded-2xl p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <LinkedInIcon size={18} />
                  </div>
                  <p className="text-[10px] font-bold tracking-widest text-text-muted uppercase">LinkedIn</p>
                  <p className="text-[13px] font-semibold text-text-light">Setelign Melese</p>
                  <p className="text-[11px] text-text-muted">Connect professionally</p>
                </a>
              </div>

              {/* Form & Info */}
              <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
                <div className="glass rounded-2xl p-6 sm:p-7">
                  <span className="text-[11px] font-bold tracking-widest text-primary uppercase">Send a Message</span>
                  <h2 className="mt-1 text-2xl font-bold text-text-light">
                    Drop Me a <span className="text-primary">Note</span>
                  </h2>
                  <p className="mt-1 text-[12px] text-text-muted">
                    Fill out the form below and I'll get back to you promptly.
                  </p>

                  <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="mb-1.5 block text-[11px] font-semibold text-text-light">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/8 bg-white/[0.03] py-2.5 px-3.5 text-[13px] text-text-light placeholder-text-muted/50 outline-none focus:border-primary/50"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[11px] font-semibold text-text-light">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full rounded-xl border border-white/8 bg-white/[0.03] py-2.5 px-3.5 text-[13px] text-text-light placeholder-text-muted/50 outline-none focus:border-primary/50"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[11px] font-semibold text-text-light">
                          Subject <span className="text-primary">*</span>
                        </label>
                        <select
                          required
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          className="w-full rounded-xl border border-white/8 bg-[#090e14] py-2.5 px-3.5 text-[13px] text-text-light outline-none focus:border-primary/50"
                        >
                          <option value="">Select a subject</option>
                          <option value="Project Collaboration">Project Collaboration</option>
                          <option value="Internship / Job Opportunity">Internship / Job Opportunity</option>
                          <option value="Freelance Development">Freelance Development</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[11px] font-semibold text-text-light">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full resize-none rounded-xl border border-white/8 bg-white/[0.03] py-2.5 px-3.5 text-[13px] text-text-light placeholder-text-muted/50 outline-none focus:border-primary/50"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="submit"
                        className="ref-btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-[13px] font-bold cursor-pointer"
                      >
                        <SendIcon size={14} />
                        <span>Send Message →</span>
                      </button>
                      {contactSuccess && (
                        <span className="text-[12px] font-semibold text-primary">
                          ✓ Message sent successfully!
                        </span>
                      )}
                    </div>
                  </form>
                </div>

                {/* Right Info Box */}
                <div className="glass rounded-2xl p-6 flex flex-col justify-between border border-primary/20">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-text-light">
                      Let's Build <span className="text-primary">Together</span>
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      I'm actively seeking opportunities to build impactful software. Whether you have an open position or a client project, feel free to reach out anytime.
                    </p>

                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs space-y-2">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <CheckCircleIcon size={14} />
                        <span>Quick Responses</span>
                      </div>
                      <p className="text-text-muted">
                        I typically respond to inquiries within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/8 text-center text-xs text-text-muted">
                    <span>Direct: </span>
                    <a href={`mailto:${profile.email}`} className="text-primary font-semibold hover:underline">
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-primary/12 bg-bg-dark mt-auto">
        <div className="section-container py-7">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            
            {/* Logo */}
            <button
              onClick={() => navigateTo("home")}
              className="flex items-center gap-2 text-[15px] font-bold text-text-light"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-xs font-extrabold text-bg-dark">
                S
              </span>
              <span>{profile.name}</span>
            </button>

            {/* Quick Links */}
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1" role="list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigateTo(item.id)}
                    className="text-[12px] text-text-muted transition-colors hover:text-primary cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => {
                const Icon = socialIconComponent(s.icon);
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-light/70 transition-colors hover:text-primary"
                    aria-label={s.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-center text-[12px] text-text-muted">
            © {new Date().getFullYear()} {profile.name} (Setelign Melese). All rights reserved.
          </p>
        </div>
      </footer>

      {/* ================= MODAL: PROJECT DETAILS ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#090e15] shadow-2xl"
              role="dialog"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/8 bg-[#0a1018] px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                    {selectedProject.type}
                  </span>
                  {selectedProject.isLive && (
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{selectedProject.statusBadge || "Live"}</span>
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-text-muted hover:border-white/20 hover:text-white"
                >
                  <CloseIcon size={16} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 lg:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Screenshot */}
                  <div className="lg:col-span-6 rounded-xl overflow-hidden border border-white/10 bg-[#05080c] aspect-video flex items-center justify-center">
                    <img src={selectedProject.image} alt={selectedProject.title} className="h-full w-full object-cover" />
                  </div>

                  {/* Info */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {selectedProject.title}
                        <span className="text-primary">{selectedProject.titleHighlight}</span>
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.features && (
                      <div>
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <CheckCircleIcon size={14} className="text-primary" />
                          Key Features
                        </h3>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {selectedProject.features.map((feat) => (
                            <div key={feat} className="flex items-start gap-2 rounded-lg border border-white/8 bg-white/[0.02] p-2 text-xs text-text-light">
                              <span className="text-primary">•</span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block mb-2">Tech Stack</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs text-primary font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ref-btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold shadow-[0_0_15px_rgba(20,255,197,0.3)]"
                        >
                          <span>Live Demo / App</span>
                          <ExternalLinkIcon size={12} />
                        </a>
                      )}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-text-light hover:text-primary"
                        >
                          <GithubIcon size={14} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL: BLOG READING ================= */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#090e15] shadow-2xl"
              role="dialog"
            >
              <div className="flex items-center justify-between border-b border-white/8 px-6 py-4 bg-[#0a1018]">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                    {selectedBlog.badgeText}
                  </span>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <ClockIcon size={12} />
                    {selectedBlog.readTime}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBlog(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-text-muted hover:text-white"
                >
                  <CloseIcon size={16} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedBlog.title}
                </h2>
                <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#05080c] aspect-video w-full">
                  <img src={selectedBlog.image} alt={selectedBlog.title} className="h-full w-full object-cover" />
                </div>
                <div className="text-text-muted text-sm sm:text-base leading-relaxed space-y-4">
                  {selectedBlog.content.split("\n\n").map((para, i) => {
                    if (para.startsWith("### ")) {
                      return (
                        <h3 key={i} className="text-lg sm:text-xl font-bold text-white pt-2">
                          {para.replace("### ", "")}
                        </h3>
                      );
                    }
                    return <p key={i}>{para}</p>;
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL: CERTIFICATE PREVIEW ================= */}
      <AnimatePresence>
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              className="relative z-10 flex flex-col lg:flex-row max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#090d12] shadow-2xl"
            >
              <div className="flex-1 bg-black/40 p-6 flex items-center justify-center">
                <img src={selectedCertificate.imageUrl} alt={selectedCertificate.title} className="max-h-[60vh] rounded-lg object-contain" />
              </div>
              <div className="w-full lg:w-[360px] p-6 bg-[#0c1117] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{selectedCertificate.title}</h3>
                  <p className="text-xs text-primary font-semibold">{selectedCertificate.issuer}</p>
                  <p className="text-xs text-text-muted">{selectedCertificate.description}</p>
                </div>
                <div className="pt-4 border-t border-white/10 mt-4 flex gap-2">
                  <a
                    href={selectedCertificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ref-btn-primary flex-1 py-2 text-center text-xs rounded-xl font-bold"
                  >
                    Verify Online
                  </a>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="border border-white/15 px-4 py-2 text-xs rounded-xl text-text-muted hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Subcomponent: Project Card
function ProjectCard({ project, index = 0, onPreview }) {
  const live = project.liveUrl || project.demo;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-primary/20 bg-bg-card transition-all duration-300 hover:border-primary/45 hover:shadow-[0_0_24px_rgba(20,255,197,0.08)]"
    >
      <div className="relative p-3 pb-0">
        <div
          onClick={() => onPreview && onPreview(project)}
          className="group/img relative overflow-hidden rounded-xl border border-white/10 bg-[#05080c] cursor-pointer shadow-md"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-48 sm:h-52 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-card/40 via-transparent to-transparent" />
          
          {project.isLive && (
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-[#061e14]/90 px-2.5 py-0.5 text-[9px] font-bold text-emerald-400 backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.35)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>{project.statusBadge || "Live"}</span>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPreview(project);
              }}
              className="flex items-center gap-1 rounded-full border border-primary/40 bg-primary/25 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-md hover:bg-primary hover:text-bg-dark transition-all"
            >
              <EyeIcon size={12} />
              <span>Details</span>
            </button>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md hover:bg-white hover:text-bg-dark transition-all"
              >
                <ExternalLinkIcon size={12} />
                <span>Launch</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 pt-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold tracking-wider text-primary/80 uppercase">
            {project.type}
          </span>
        </div>

        <h3 className="mt-1 text-[15px] font-bold leading-snug">
          <span className="text-text-light">{project.title}</span>
          <span className="text-primary">{project.titleHighlight}</span>
        </h3>

        <p className="mt-2 flex-1 text-[12px] leading-relaxed text-text-muted line-clamp-3">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-primary/30 bg-bg-deep px-2 py-0.5 text-[10px] font-medium text-primary">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3">
          <div className="flex items-center gap-2">
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-btn-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold shadow-[0_0_12px_rgba(20,255,197,0.2)]"
              >
                <span>Live Demo</span>
                <ArrowRightIcon size={11} />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onPreview(project)}
                className="ref-btn-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold"
              >
                <span>Details</span>
                <ArrowRightIcon size={11} />
              </button>
            )}
            <button
              type="button"
              onClick={() => onPreview(project)}
              className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary hover:bg-primary/20"
            >
              <EyeIcon size={11} />
              <span>Preview</span>
            </button>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-text-muted hover:border-primary/40 hover:text-primary transition-colors"
              title="View GitHub Repository"
            >
              <GithubIcon size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}