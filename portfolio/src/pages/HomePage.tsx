import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const HomePage: React.FC = () => {
  // Define useInView hooks for remaining sections
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const animationClasses = (inView: boolean) =>
    `transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

  // Framer Motion variants for Hero section entrance orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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

  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Framer Motion', 'Vue.js', 'Python', 'Django'];

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
          of Web.
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-slate-300 mb-8">
          Full-stack developer focused on high-performance interfaces.
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="#projects"
          className="bg-indigo-neon text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 transition-colors duration-300"
        >
          View My Work
        </motion.a>
      </motion.section>

      {/* About Me Section */}
      <section id="about" ref={aboutRef} className={`py-16 ${animationClasses(aboutInView)}`}>
        <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a passionate full-stack developer with a knack for crafting robust and scalable web applications.
              My expertise spans across modern frontend frameworks and efficient backend solutions, always
              prioritizing user experience and performance. I thrive on solving complex problems and
              continuously learning new technologies to deliver exceptional digital products.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">React</span>
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">TypeScript</span>
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">Node.js</span>
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">Tailwind CSS</span>
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">PostgreSQL</span>
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">AWS</span>
            </div>
          </div>
        </div>
        {/* Skills Marquee */}
        <div className="relative flex overflow-x-hidden mt-16">
          <div className="py-12 animate-marquee whitespace-nowrap">
            {skills.map((skill, index) => (
              <span key={index} className="text-4xl mx-8 text-white/20 font-bold uppercase">
                {skill}
              </span>
            ))}
          </div>
          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            {skills.map((skill, index) => (
              <span key={index} className="text-4xl mx-8 text-white/20 font-bold uppercase">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section - Bento Grid */}
      <section id="projects" ref={projectsRef} className={`py-16 ${animationClasses(projectsInView)}`}>
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((project, index) => (
            <div key={project.id} className={bentoGridClasses(index)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className={`py-16 text-center ${animationClasses(contactInView)}`}>
        <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
        <div className="max-w-lg mx-auto mt-8">
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
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/lystiger" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-neon transition-colors duration-300 text-3xl">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-neon transition-colors duration-300 text-3xl">
            <Linkedin size={32} />
          </a>
          <a href="mailto:your.email@example.com" className="text-white hover:text-indigo-neon transition-colors duration-300 text-3xl">
            <Mail size={32} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
