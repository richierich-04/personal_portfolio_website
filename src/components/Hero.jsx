import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Richita
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Web Developer & Product Enthusiast
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
          Final-year Computer Science student specializing in web development and API integration, with experience in building scalable applications using the MERN stack. Passionate about product thinking, management, and exploring AI to create impactful, user-focused solutions.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contacts"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
      <motion.div
        className="code-display"
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
      <SyntaxHighlighter
        language="typescript"
        customStyle={{
          margin: 0,
          padding: "2rem",
          height: "100%",
          borderRadius: "20px",
          background: "rgba(30, 41, 59, 0.95)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          backdropFilter: "blur(10px)",
          marginBottom: 50,
        }}
        style={vscDarkPlus}
      >
              {`const aboutMe: DeveloperProfile = {
  codename: "RichieRich",
  origin: "☕ Somewhere between coffee and VS Code",
  role: "Full Stack & Product + Gen AI Developer",
  stack: {
    languages: ["JavaScript", "TypeScript", "Python", "SQL"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Node.js"],
    ai_tools: ["OpenAI", "LangChain", "Hugging Face", "TensorFlow"],
  },
  traits: [
    "minimalistic design lover",
    "pixel-perfectionist", 
    "pretty UI creator",
    "AI integration specialist",
  ],
  missionStatement:
    "Making things minimalistic and pretty while building the future",
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </motion.div>



          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
