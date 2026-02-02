import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CustomCursor from './components/CustomCursor';

function App() {
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

      <MainLayout>
        <HomePage />
      </MainLayout>
      <CustomCursor />
    </div>
  );
}

export default App;