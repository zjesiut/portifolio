import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { 
  GithubIcon, 
  ExternalLinkIcon, 
  CodeIcon, 
  BrainIcon, 
  MailIcon, 
  UserIcon, 
  LayersIcon, 
  TerminalIcon,
  LinkedInIcon,
  CameraIcon
} from "./icons";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);
  const [githubRepos, setGithubRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoadingRepos(true);
        const response = await fetch('https://api.github.com/users/zjesiut/repos?sort=stars&per_page=6');
        const data = await response.json();
        if (Array.isArray(data)) {
          setGithubRepos(data);
        }
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoadingRepos(false);
      }
    };
    
    fetchGitHubRepos();
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setProfileImage(base64String);
        localStorage.setItem("profileImage", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const projects = [
    {
      title: "Online Learning System",
      desc: "A comprehensive platform for course management, student progress tracking, and interactive learning modules built with React and Node.js.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/zjesiut/smart-school-",
      link: "#",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop"
    },
    {
      title: "Movie Streaming Website",
      desc: "Full-stack movie platform with premium subscription features, Chapa payment integration, and seamless video playback.",
      tags: ["React", "Express", "Chapa API", "PostgreSQL"],
      github: "https://github.com/zjesiut/moviestream",
      link: "#",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop"
    },
    {
      title: "Course Registration System",
      desc: "Institutional application for managing course enrollments, student records, and academic schedules with automated validation.",
      tags: ["React", "Firebase", "TailwindCSS"],
      github: "https://github.com/zjesiut/smart-school-",
      link: "#",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1170&auto=format&fit=crop"
    }
  ];

  const skills = [
    { name: "Frontend Development", desc: "Expertise in React, Vite, and modern CSS architectures.", icon: <LayersIcon /> },
    { name: "Backend Engineering", desc: "Building scalable APIs with Node.js, Express, and Python.", icon: <TerminalIcon /> },
    { name: "Machine Learning", desc: "Developing predictive models and AI-driven applications.", icon: <BrainIcon /> },
    { name: "Full-Stack Architecture", desc: "Designing end-to-end systems from DB to UI.", icon: <CodeIcon /> }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      
      {/* Navigation */}
      <nav className="navbar">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nav-logo"
        >
          <h2 style={{ fontWeight: 800, letterSpacing: "-1px" }}>SETEGN.</h2>
        </motion.div>
        
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#github" className="nav-link">GitHub</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? "☀" : "🌙"}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-grid">
            <div className="hero-text-col">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hero-tag"
              >
                Available for new opportunities
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Building the next generation of <span style={{ color: "var(--primary)" }}>intelligent</span> web systems.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm Setegn. I specialize in crafting professional full-stack applications 
                and integrating advanced Machine Learning models into production environments.
              </motion.p>
              
              <motion.div 
                className="cta-group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button className="btn btn-primary">View Projects</button>
                <button className="btn btn-secondary">Download CV</button>
              </motion.div>
            </div>

            <motion.div 
              className="hero-image-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="profile-image-wrapper">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="profile-pic" />
                ) : (
                  <div className="profile-placeholder">
                    <UserIcon size={80} />
                  </div>
                )}
                <label htmlFor="profile-upload" className="upload-overlay">
                  <CameraIcon size={24} />
                  <span>Update Photo</span>
                </label>
                <input 
                  type="file" 
                  id="profile-upload" 
                  hidden 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                />
              </div>
              <div className="hero-glow"></div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="about">
          <div className="section-header">
            <motion.h2 {...fadeIn}>Expertise</motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.1 }}>What I bring to the table</motion.p>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="section-header">
            <motion.h2 {...fadeIn}>Selected Work</motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.1 }}>A glimpse into my development journey</motion.p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <div className="project-tags">
                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <GithubIcon size={18} /> Source
                    </a>
                    <a href={project.link} className="project-link">
                      <ExternalLinkIcon size={18} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GitHub Repositories Section */}
        <section id="github">
          <div className="section-header">
            <motion.h2 {...fadeIn}>GitHub Projects</motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.1 }}>Latest repositories from my GitHub</motion.p>
          </div>
          
          {loadingRepos ? (
            <motion.div 
              style={{ textAlign: "center", padding: "2rem" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p>Loading repositories...</p>
            </motion.div>
          ) : (
            <div className="projects-grid">
              {githubRepos.map((repo, index) => (
                <motion.div 
                  key={repo.id}
                  className="project-card github-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="project-content" style={{ padding: "1.5rem" }}>
                    {/* Header with name and stats */}
                    <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", marginBottom: "1rem", gap: "1rem" }}>
                      <h3 style={{ margin: 0, flex: 1, wordBreak: "break-word" }}>{repo.name}</h3>
                      <div style={{ display: "flex", gap: "0.8rem", whiteSpace: "nowrap" }}>
                        {repo.stargazers_count > 0 && (
                          <span style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 600 }}>⭐ {repo.stargazers_count}</span>
                        )}
                        {repo.forks_count > 0 && (
                          <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 600 }}>🔀 {repo.forks_count}</span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{ 
                      margin: "0.75rem 0", 
                      fontSize: "0.95rem", 
                      color: "var(--text-secondary)",
                      lineHeight: "1.5",
                      minHeight: "2.5rem"
                    }}>
                      {repo.description || "A GitHub project"}
                    </p>

                    {/* Language and metadata */}
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      {repo.language && (
                        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--primary)" }}></span>
                          {repo.language}
                        </span>
                      )}
                      {repo.updated_at && (
                        <span>Updated {new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })}</span>
                      )}
                    </div>

                    {/* Tags */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="project-tags" style={{ marginBottom: "1rem" }}>
                        {repo.topics.slice(0, 3).map(topic => (
                          <span key={topic} className="tag" style={{ fontSize: "0.8rem" }}>{topic}</span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="project-links">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                        <GithubIcon size={18} /> View on GitHub
                      </a>
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLinkIcon size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="contact-container">
            <motion.h2 {...fadeIn}>Let's Connect</motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.1 }}>
              Currently looking for new challenges and collaborations.
            </motion.p>
            
            <motion.div 
              className="social-bar"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a href="#" className="social-link"><GithubIcon /></a>
              <a href="#" className="social-link"><LinkedInIcon /></a>
              <a href="#" className="social-link"><MailIcon /></a>
              <a href="#" className="social-link"><UserIcon /></a>
            </motion.div>
            
            <motion.div 
              style={{ marginTop: "3rem" }}
              {...fadeIn}
            >
              <button className="btn btn-primary" style={{ margin: "0 auto" }}>
                Send a Message
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Setegn. All rights reserved.</p>
        <p style={{ marginTop: "0.5rem" }}>Built with React & Framer Motion</p>
      </footer>
    </div>
  );
}