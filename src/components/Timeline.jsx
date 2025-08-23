import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const slideIn = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
  transition: { duration: 0.5 }
};

const floatingAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }
};

const educationData = [
  {
    year: "2022-2026",
    title: "Bachelor of Technology",
    institution: "Computer Science Engineering",
    location: "University Name",
    description: "Specializing in Full Stack Development, Data Structures, Algorithms, and AI/ML technologies.",
    icon: "fas fa-graduation-cap",
    color: "#3b82f6"
  },
  {
    year: "2020-2022",
    title: "Higher Secondary",
    institution: "Science Stream",
    location: "School Name",
    description: "Physics, Chemistry, Mathematics with Computer Science. Graduated with 95% marks.",
    icon: "fas fa-school",
    color: "#10b981"
  },
  {
    year: "2018-2020",
    title: "Secondary School",
    institution: "CBSE Board",
    location: "School Name",
    description: "Completed with distinction. Active in coding competitions and science exhibitions.",
    icon: "fas fa-book",
    color: "#f59e0b"
  }
];

const experienceData = [
  {
    year: "2024-Present",
    title: "Full Stack Developer Intern",
    institution: "Tech Startup",
    location: "Remote",
    description: "Building scalable web applications using MERN stack. Implemented AI chatbot integration and improved app performance by 40%.",
    icon: "fas fa-laptop-code",
    color: "#8b5cf6",
    skills: ["React", "Node.js", "MongoDB", "AI Integration"]
  },
  {
    year: "2023-2024",
    title: "Frontend Developer",
    institution: "Freelance Projects",
    location: "Remote",
    description: "Developed responsive websites for 10+ clients. Specialized in React.js and modern UI/UX design principles.",
    icon: "fas fa-paint-brush",
    color: "#ef4444",
    skills: ["React", "TailwindCSS", "Figma", "Responsive Design"]
  },
  {
    year: "2023",
    title: "Open Source Contributor",
    institution: "GitHub Projects",
    location: "Global",
    description: "Contributed to multiple open-source projects. Fixed bugs, added features, and improved documentation.",
    icon: "fab fa-github",
    color: "#6b7280",
    skills: ["Git", "Documentation", "Code Review", "Community"]
  }
];

const aboutData = {
  title: "About Me",
  description: "I'm a passionate developer who loves creating beautiful, functional applications. When I'm not coding, you'll find me exploring new technologies, reading tech blogs, or working on personal projects.",
  personality: ["Problem Solver", "Creative Thinker", "Team Player", "Continuous Learner"],
  funFact: "I've built over 50+ projects and contributed to 20+ open source repositories! ✨"
};

const hobbiesData = [
  {
    name: "Coding",
    icon: "fas fa-code",
    color: "#3b82f6",
    description: "Building side projects"
  },
  {
    name: "Photography",
    icon: "fas fa-camera",
    color: "#ef4444",
    description: "Capturing moments"
  },
  {
    name: "Gaming",
    icon: "fas fa-gamepad",
    color: "#10b981",
    description: "Strategy games"
  },
  {
    name: "Reading",
    icon: "fas fa-book-reader",
    color: "#f59e0b",
    description: "Tech blogs & novels"
  },
  {
    name: "Music",
    icon: "fas fa-music",
    color: "#8b5cf6",
    description: "Lo-fi beats"
  },
  {
    name: "Travel",
    icon: "fas fa-plane",
    color: "#06b6d4",
    description: "Exploring places"
  }
];

export const Timeline = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [activeData, setActiveData] = useState(educationData);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveData(tab === 'education' ? educationData : experienceData);
  };

  return (
    <motion.section
      id="timeline"
      className="compact-timeline-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating background elements */}
      <div className="compact-floating-shapes">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="compact-floating-shape"
            animate={{
              y: [-20, 20, -20],
              x: [-15, 15, -15],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + (i % 3),
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'][i % 4] + '15'
            }}
          />
        ))}
      </div>

      <div className="compact-timeline-container">
        {/* Header */}
        <motion.div
          className="compact-timeline-header"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2>My Journey</h2>
          <p>Education, Experience & What Makes Me Tick</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="timeline-grid">
          {/* Left Side - Timeline */}
          <div className="timeline-left">
            {/* Tab Buttons */}
            <div className="tab-buttons">
              <motion.button
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => handleTabChange('education')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-graduation-cap"></i>
                Education
              </motion.button>
              <motion.button
                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => handleTabChange('experience')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-briefcase"></i>
                Experience
              </motion.button>
            </div>

            {/* Timeline Content */}
            <div className="compact-timeline-content">
              <motion.div 
                className="compact-timeline-line"
                initial={{ height: 0 }}
                animate={{ height: "80%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="timeline-items"
                  variants={slideIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {activeData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="compact-timeline-item"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.2 }
                      }}
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <motion.div 
                        className="compact-timeline-icon"
                        //style={{ backgroundColor: item.color }}
                        animate={floatingAnimation}
                        style={{ animationDelay: `${index * 0.3}s`, backgroundColor: item.color }}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <i className={item.icon}></i>
                      </motion.div>
                      
                      <div className="compact-timeline-card">
                        <span className="compact-timeline-year">{item.year}</span>
                        <h3>{item.title}</h3>
                        <h4>{item.institution}</h4>
                        <span className="compact-timeline-location">
                          <i className="fas fa-map-marker-alt"></i> {item.location}
                        </span>
                        <p>{item.description}</p>
                        
                        {item.skills && (
                          <div className="compact-timeline-skills">
                            {item.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="compact-skill-tag">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side - About & Hobbies */}
          <div className="timeline-right">
            {/* About Me Section */}
            <motion.div
              className="compact-about-section"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="compact-about-card"
                animate={floatingAnimation}
                whileHover={{ scale: 1.02 }}
              >
                <div className="compact-about-icon">
                  <i className="fas fa-user-astronaut"></i>
                </div>
                <h3>{aboutData.title}</h3>
                <p>{aboutData.description}</p>
                
                <div className="compact-personality-traits">
                  {aboutData.personality.map((trait, index) => (
                    <motion.span
                      key={index}
                      className="compact-trait-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div 
                  className="compact-fun-fact"
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <i className="fas fa-lightbulb"></i>
                  <span>{aboutData.funFact}</span>
                </motion.div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </motion.section>
  );
};