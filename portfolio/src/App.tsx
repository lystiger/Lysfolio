import { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CustomCursor from './components/CustomCursor';
import Starfield from './components/Starfield';

function App() {
  const [starsEnabled, setStarsEnabled] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('starsEnabled');
    if (stored !== null) {
      setStarsEnabled(stored === 'true');
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setStarsEnabled(!prefersReducedMotion);
  }, []);

  useEffect(() => {
    localStorage.setItem('starsEnabled', String(starsEnabled));
  }, [starsEnabled]);

  return (
    <div className="relative min-h-screen">
      {/* Blurred Background Image */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: 'url(/test.jpg)',
          filter: 'blur(5px)',
          WebkitFilter: 'blur(5px)', // For Safari
        }}
      ></div>
      {/* Semi-transparent Overlay */}
      <div className="fixed inset-0 w-full h-full bg-obsidian opacity-70 -z-10"></div>
      {/* Starfield */}
      {starsEnabled && (
        <div className="fixed inset-0 w-full h-full -z-10">
          <Starfield />
        </div>
      )}

      <MainLayout
        starsEnabled={starsEnabled}
        onToggleStars={() => setStarsEnabled((prev) => !prev)}
      >
        <HomePage />
      </MainLayout>
      <CustomCursor />
    </div>
  );
}

export default App;
