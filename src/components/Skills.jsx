import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const floatingAnimation = {
  y: [-10, 10, -10],
  rotate: [-5, 5, -5],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }
};

const skillsData = [
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
    color: "#F7DF1E",
    delay: 0.1
  },
  {
    name: "React",
    icon: "fab fa-react",
    color: "#61DAFB",
    delay: 0.2
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    color: "#339933",
    delay: 0.3
  },
  {
    name: "Python",
    icon: "fab fa-python",
    color: "#3776AB",
    delay: 0.4
  },
  {
    name: "MongoDB",
    icon: "fas fa-database",
    color: "#47A248",
    delay: 0.5
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
    color: "#F05032",
    delay: 0.6
  },
  {
    name: "Docker",
    icon: "fab fa-docker",
    color: "#2496ED",
    delay: 0.7
  },
  {
    name: "AWS",
    icon: "fab fa-aws",
    color: "#FF9900",
    delay: 0.8
  },
  {
    name: "TypeScript",
    icon: "fas fa-code",
    color: "#3178C6",
    delay: 0.9
  },
  {
    name: "Next.js",
    icon: "fas fa-layer-group",
    color: "#000000",
    delay: 1.0
  },
  {
    name: "TailwindCSS",
    icon: "fas fa-paint-brush",
    color: "#06B6D4",
    delay: 1.1
  },
  {
    name: "GraphQL",
    icon: "fas fa-project-diagram",
    color: "#E10098",
    delay: 1.2
  }
];

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="skills-container">
        <motion.div
          className="skills-header"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2>Technologies & Skills</h2>
          <p>Tools and technologies I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.6, 
                  delay: skill.delay,
                  type: "spring",
                  stiffness: 100
                }
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              animate={floatingAnimation}
              style={{ 
                animationDelay: `${skill.delay}s`,
                animationDuration: `${3 + (index % 3)}s`
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="skill-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <i 
                  className={skill.icon}
                  style={{ color: skill.color }}
                ></i>
              </motion.div>
              <motion.span 
                className="skill-name"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: skill.delay + 0.3 }}
              >
                {skill.name}
              </motion.span>
              
              {/* Glowing effect on hover */}
              <motion.div 
                className="skill-glow"
                style={{ 
                  background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating particles background */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [-20, -40, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};