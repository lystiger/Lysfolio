import React, { useEffect, useState } from 'react';
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

  const techIcons = [
    { label: 'React', src: '/react-svgrepo-com.svg' },
    { label: 'Vue', src: '/vue.svg' },
    { label: 'Node.js', src: '/nodejs-svgrepo-com.svg' },
    { label: 'MongoDB', src: '/mongodb-svgrepo-com.svg' },
    { label: 'FastAPI', src: '/fastapi-svgrepo-com.svg' },
    { label: 'Python', src: '/python.svg' },
    { label: 'PyTorch', src: '/pytorch-svgrepo-com.svg' },
    { label: 'TensorFlow', src: '/tensorflow-svgrepo-com.svg' },
    { label: 'Docker', src: '/docker-16-svgrepo-com.svg' },
    { label: 'Kubernetes', src: '/kubernetes-16-svgrepo-com.svg' },
    { label: 'Java', src: '/java-16-svgrepo-com.svg' },
    { label: 'JavaScript', src: '/js02-svgrepo-com.svg' },
    { label: 'CLion', src: '/clion-svgrepo-com.svg' },
    { label: 'VS Code', src: '/vscode-16-svgrepo-com.svg' },
    { label: 'Android Studio', src: '/logo-google-android-studio-svgrepo-com.svg' },
    { label: 'Figma', src: '/figma-svgrepo-com.svg' },
    { label: 'Unity', src: '/unity-small-svgrepo-com.svg' },
    { label: 'Lightroom', src: '/adobelightroom-svgrepo-com.svg' },
  ];
  const [toastVisible, setToastVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!toastVisible) return;
    const timer = window.setTimeout(() => setToastVisible(false), 2200);
    return () => window.clearTimeout(timer);
  }, [toastVisible]);

  useEffect(() => {
    if (isSending) {
      document.body.classList.add('cursor-default');
    } else {
      document.body.classList.remove('cursor-default');
    }
  }, [isSending]);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const subject = encodeURIComponent(`Portfolio Contact from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\n\n${message || ''}`
    );

    setToastVisible(true);
    setIsSending(true);
    window.setTimeout(() => {
      window.location.href = `mailto:Dohunganh5002@gmail.com?subject=${subject}&body=${body}`;
    }, 350);
  };

  return (
    <div className="space-y-16 sm:space-y-20">
      {toastVisible && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-6 right-6 z-[9999] rounded-xl border border-indigo-neon/40 bg-obsidian/90 px-4 py-3 text-sm text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
        >
          Opening your email app...
        </div>
      )}
      {isSending && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-obsidian/90 px-6 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
            <div className="h-12 w-12 rounded-full border-2 border-indigo-neon/40 border-t-indigo-neon animate-spin" />
            <p className="text-sm text-white/80 font-mono">Opening email app...</p>
            <button
              type="button"
              onClick={() => setIsSending(false)}
              className="mt-1 rounded-full border border-white/20 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-white/80 hover:text-white hover:border-white/40 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <motion.section
        id="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-16 sm:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white/70 mb-4"
            >
              AI Systems • Backend • Automation
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Building the{' '}
              <motion.span
                variants={futureVariants}
                transition={{
                  duration: 1.5,
                  ease: [0.42, 0, 0.58, 1],
                }}
                className="inline-block bg-gradient-to-r from-indigo-neon to-purple-500 text-transparent bg-clip-text"
                style={{
                  textShadow:
                    '0 4px 12px rgba(99, 102, 241, 0.45), 0 10px 30px rgba(99, 102, 241, 0.35)',
                }}
              >
                Future
              </motion.span>{' '}
              of AI and Automation
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              AI system developer focused on backend systems, automation, and practical ML.
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="#projects"
              className="inline-flex bg-indigo-neon text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-600 transition-colors duration-300"
            >
              View My Work
            </motion.a>
          </div>
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <FlipCard />
          </motion.div>
        </div>
      </motion.section>

      <div className="h-px bg-gradient-to-r from-transparent via-indigo-neon/40 to-transparent" />

      {/* About Me Section */}
      <motion.section
        id="about"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="py-16"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white text-center mb-12">About & Highlights</motion.h2>
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-prose mx-auto md:mx-0">
              I’m a self-driven computer science student who likes building things before being told how. I focus mainly on backend and system engineering—APIs, async systems, databases, testing, and architecture. I learn by breaking systems, fixing them, and rebuilding them cleaner. Outside of backend, I explore AI, computer vision, and automation, especially projects that combine multiple domains into something practical.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Awards</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">Top 4 at USTH Student Research 🌟</span>
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">Top 20 in VinTech Challenge 🌟</span>
              <span className="bg-white/10 text-indigo-neon px-4 py-2 rounded-full text-sm font-mono">Open to new challenges</span>
            </div>
          </div>
        </motion.div>
        {/* Skills Marquee */}
        <motion.div variants={itemVariants} className="relative mt-16">
          <div className="marquee py-10">
            <div className="marquee__track">
              {techIcons.map((icon, index) => (
                <span key={index} className="inline-flex items-center justify-center mx-8 sm:mx-12">
                  <img
                    src={icon.src}
                    alt={icon.label}
                    title={icon.label}
                    className="h-11 w-11 sm:h-16 sm:w-16 opacity-70 grayscale filter brightness-110 transition duration-300 hover:opacity-90"
                    loading="lazy"
                  />
                </span>
              ))}
              {techIcons.map((icon, index) => (
                <span key={`duplicate-${index}`} className="inline-flex items-center justify-center mx-8 sm:mx-12">
                  <img
                    src={icon.src}
                    alt={icon.label}
                    title={icon.label}
                    className="h-11 w-11 sm:h-16 sm:w-16 opacity-70 grayscale filter brightness-110 transition duration-300 hover:opacity-90"
                    loading="lazy"
                  />
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      <div className="h-px bg-gradient-to-r from-transparent via-indigo-neon/40 to-transparent" />

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

      <div className="h-px bg-gradient-to-r from-transparent via-indigo-neon/40 to-transparent" />

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
          <form className="space-y-6" onSubmit={handleContactSubmit}>
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
              disabled={isSending}
              className="w-full sm:w-auto bg-indigo-neon text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/lystiger" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-neon transition-colors duration-300 text-3xl">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/anh-do-hung-1a801331a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-neon transition-colors duration-300 text-3xl">
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
