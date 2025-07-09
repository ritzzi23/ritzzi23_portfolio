import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-6 mb-4 md:items-start">
            {/* Brand section */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">AI Engineer</h3>
              <p className="text-slate-400 dark:text-slate-300 leading-relaxed text-sm">
                Building intelligent systems that push the boundaries of artificial intelligence and machine learning.
              </p>
              <div className="flex space-x-3 mt-2">
                <a 
                  href="#" 
                  className="p-2 bg-slate-700 dark:bg-slate-800 rounded-md hover:bg-slate-600 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-slate-700 dark:bg-slate-800 rounded-md hover:bg-slate-600 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-slate-700 dark:bg-slate-800 rounded-md hover:bg-slate-600 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
            
            {/* Quick links */}
            <div className="space-y-1">
              <h4 className="text-base font-semibold">Quick Links</h4>
              <div className="space-y-1 text-sm">
                <a href="#about" className="block text-slate-400 dark:text-slate-300 hover:text-white transition-colors">About</a>
                <a href="#skills" className="block text-slate-400 dark:text-slate-300 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="block text-slate-400 dark:text-slate-300 hover:text-white transition-colors">Projects</a>
                <a href="#research" className="block text-slate-400 dark:text-slate-300 hover:text-white transition-colors">Research</a>
              </div>
            </div>
            
            {/* Expertise */}
            <div className="space-y-1">
              <h4 className="text-base font-semibold">Expertise</h4>
              <div className="space-y-1 text-sm">
                <p className="text-slate-400 dark:text-slate-300">Machine Learning</p>
                <p className="text-slate-400 dark:text-slate-300">Deep Learning</p>
                <p className="text-slate-400 dark:text-slate-300">Computer Vision</p>
                <p className="text-slate-400 dark:text-slate-300">Natural Language Processing</p>
              </div>
            </div>
          </div>
          {/* Bottom section */}
          <div className="border-t border-slate-700 dark:border-slate-800 pt-3 mt-2 flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-slate-400 dark:text-slate-300 flex items-center space-x-1 mb-2 md:mb-0">
              <span>© 2024 AI Engineer. Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span>and cutting-edge AI technologies</span>
            </p>
            {/* Back to top button */}
            <button 
              onClick={scrollToTop}
              className="px-3 py-1.5 bg-slate-700 dark:bg-slate-800 rounded-md hover:bg-slate-600 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 flex items-center gap-1 text-xs"
            >
              <ArrowUp className="w-3 h-3" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
