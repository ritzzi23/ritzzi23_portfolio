import { useState } from 'react';
import { Menu, X, Brain, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo/Brand */}
          <button
            className="flex items-center gap-2 focus:outline-none group"
            onClick={() => {
              const home = document.querySelector('#home');
              if (home) {
                home.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            aria-label="Go to Home"
            type="button"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 via-white to-purple-200 dark:from-blue-600 dark:via-slate-800 dark:to-purple-600 flex items-center justify-center shadow border border-blue-100 dark:border-blue-500 group-hover:scale-105 transition-transform">
              <span className="text-lg font-bold text-blue-700 dark:text-blue-300 select-none">RO</span>
            </div>
            <span className="text-2xl font-bold text-blue-700 dark:text-blue-300 group-hover:underline">Ritesh Ojha</span>
          </button>

          {/* Premium Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="group relative px-8 py-4 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 text-lg font-semibold transition-all duration-300 rounded-2xl hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-purple-50/50 to-emerald-50/0 dark:from-blue-900/0 dark:via-purple-900/50 dark:to-emerald-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-12 transition-all duration-300"></div>
                </button>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-4 bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Premium Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200/50 dark:border-slate-700/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-b-2xl shadow-xl">
            <div className="px-4 py-8 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="group w-full text-left px-8 py-5 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 text-lg font-semibold rounded-2xl hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-purple-50/30 to-emerald-50/0 dark:from-blue-900/0 dark:via-purple-900/30 dark:to-emerald-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
