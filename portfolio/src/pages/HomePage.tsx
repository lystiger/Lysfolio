import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import FlipCard from '../components/FlipCard';

const HomePage: React.FC = () => {
  // Framer Motion variants for section entrance orchestration
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const futureVariants = {
    hidden: { opacity: 0, backgroundPosition: '0% 50%' },
    visible: {
      opacity: 1,
      backgroundPosition: '100% 50%',
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  const bentoGridClasses = (index: number) => {
    switch (index) {
      case 0:
        return 'lg:col-span-2';
      case 1:
        return 'lg:col-span-2';
      case 2:
        return 'lg:col-span-1';
      case 3:
        return 'lg:col-span-3';
      default:
        return 'lg:col-span-1';
    }
  };

  const skills = ['React', 'Panda', 'Linux', 'Node.js', 'TensorFlow', 'MongoDB', 'PostgreSQL', 'C#', 'C++', 'Vue.js', 'Python', 'PyTorch'];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section
        id="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center py-20"
      >
        <motion.h1 variants={itemVariants} className="text-5xl font-bold text-white mb-4">
          Building the{' '}
          <motion.span
            variants={futureVariants}
            className="inline-block bg-gradient-to-r from-indigo-neon to-purple-500 text-transparent bg-clip-text"
          >
            Future
          </motion.span>{' '}
          of AI and Automation
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-slate-300 mb-8">
          AI System Developer focused on high-performance interfaces.
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="#projects"
          className="bg-indigo-neon text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 transition-colors duration-300"
        >
          View My Work
        </motion.a>
        <motion.div variants={itemVariants} className="mt-12 flex justify-center">
          <FlipCard />
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        id="about"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="py-16"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white text-center mb-12">Me and My Achievements</motion.h2>
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-300 leading-relaxed">
              I’m a self-driven computer science student who likes building things before being told how. I focus mainly on backend and system engineering—APIs, async systems, databases, testing, and architecture. I learn by breaking systems, fixing them, and rebuilding them cleaner. Outside of backend, I explore AI, computer vision, and automation, especially projects that combine multiple domains into something practical.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Awards</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">Top 4 at USTH Student Research 🌟</span>
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">Top 20 best VinTech Challenge 🌟</span>
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">Ongoing</span>
            </div>
          </div>
        </motion.div>
        {/* Skills Marquee */}
        <motion.div variants={itemVariants} className="relative flex overflow-x-hidden mt-16">
          <div className="py-12 animate-marquee whitespace-nowrap">
            {skills.map((skill, index) => (
              <span key={index} className="text-4xl mx-8 text-white/20 font-bold uppercase">
                {skill}
              </span>
            ))}
            {skills.map((skill, index) => ( // Duplicate content for seamless loop
              <span key={`duplicate-${index}`} className="text-4xl mx-8 text-white/20 font-bold uppercase">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Project Gallery Section - Bento Grid */}
      <motion.section
        id="projects"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="py-16"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white text-center mb-12">Featured Projects</motion.h2>
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div variants={itemVariants} key={project.id} className={bentoGridClasses(index)}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="py-16 text-center"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-8">Let's Connect</motion.h2>
        <motion.div variants={itemVariants} className="max-w-lg mx-auto mt-8">
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-transparent border-b-2 border-white/20 focus:outline-none focus:border-indigo-neon text-white peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-3.5 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-indigo-neon peer-focus:text-sm"
              >
                Name
              </label>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-neon"
                initial={{ scaleX: 0 }}
                whileFocus={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-transparent border-b-2 border-white/20 focus:outline-none focus:border-indigo-neon text-white peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-3.5 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-indigo-neon peer-focus:text-sm"
              >
                Email
              </label>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-neon"
                initial={{ scaleX: 0 }}
                whileFocus={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 bg-transparent border-b-2 border-white/20 focus:outline-none focus:border-indigo-neon text-white peer"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 -top-3.5 text-white/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-indigo-neon peer-focus:text-sm"
              >
                Message
              </label>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-neon"
                initial={{ scaleX: 0 }}
                whileFocus={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-neon text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/lystiger" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-neon transition-colors duration-300 text-3xl">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/lystiger" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-neon transition-colors duration-300 text-3xl">
            <Linkedin size={32} />
          </a>
          <a href="mailto:Dohunganh5002@gmail.com" className="text-white hover:text-indigo-neon transition-colors duration-300 text-3xl">
            <Mail size={32} />
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HomePage;
