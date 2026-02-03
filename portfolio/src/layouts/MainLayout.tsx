import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion'; // Import Framer Motion
import HapticText from '../components/HapticText';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], [80, 60]); // Shrink from 80px to 60px
  const blurValue = useTransform(scrollY, [0, 100], [0, 10]); // Increase blur from 0 to 10px
  const backdropFilter = useTransform(blurValue, (latest) => `blur(${latest}px)`);

  const phrases = [
    { text: 'Hello, Im Lystiger', color: '#93c5fd' }, // Soft blue
    { text: 'こんにちは、Lystigerです', color: '#c4b5fd' }, // Soft purple
    { text: 'Bonjour, je suis Lystiger', color: '#e5e7eb' }, // Soft white/gray
    { text: 'Hola, soy Lystiger', color: '#86efac' }, // Soft green
    { text: 'Hallo, ich bin Lystiger', color: '#fde68a' }, // Soft yellow
    { text: 'Xin Chao, To la Lystiger', color: '#fca5a5' }, // Soft red
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <motion.header
        style={{ height, backdropFilter }}
        className="bg-obsidian/80 text-white p-4 shadow-lg sticky top-0 z-50 overflow-hidden"
      >
        <nav className="container mx-auto flex justify-between items-center h-full">
          <HapticText phrases={phrases} interval={4500} />
          <ul className="flex space-x-4">
            <li><a href="#hero" className="hover:text-indigo-neon transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-neon transition-colors duration-300">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-neon transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-neon transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </motion.header>
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {children}
      </main>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-neon text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 transition-colors duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
      <footer className="bg-obsidian text-white p-4 text-center">
        <p>&copy; 2026 Lystiger. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
