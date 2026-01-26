import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen flex flex-col">
      <header className="p-4 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-500">Lystiger</h1>
            <nav>
              <a href="#" className="text-slate-200 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-slate-200 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#" className="text-slate-200 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-slate-200 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto max-w-5xl p-8 flex-grow">
        {children}
      </main>
      <footer className="p-8 border-t border-slate-800 mt-auto">
        <div className="container mx-auto max-w-5xl text-center text-slate-400">
          <p>&copy; 2026 Lystiger. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
