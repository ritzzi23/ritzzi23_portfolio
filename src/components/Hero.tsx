import { ArrowDown, Github, Linkedin, Mail, Download, Brain, Sparkles, Zap, Code } from 'lucide-react';
import LeetCodeIcon from './LeetCodeIcon';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden pt-16">
      {/* Advanced background decoration with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-900/20 dark:to-purple-900/20"></div>
      <div className="absolute top-32 left-32 w-64 h-64 bg-gradient-to-r from-blue-100/30 to-cyan-100/30 dark:from-blue-800/20 dark:to-cyan-800/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-r from-purple-100/30 to-pink-100/30 dark:from-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 dark:from-emerald-800/15 dark:to-teal-800/15 rounded-full blur-2xl animate-bounce delay-500"></div>
      
      {/* Floating tech icons */}
      <div className="absolute top-1/4 right-1/4 opacity-10 animate-float">
        <Brain className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      </div>
      <div className="absolute bottom-1/4 left-1/6 opacity-10 animate-float delay-1000">
        <Zap className="w-10 h-10 text-purple-600 dark:text-purple-400" />
      </div>
      <div className="absolute top-3/4 right-1/6 opacity-10 animate-float delay-500">
        <Sparkles className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
        <div className="animate-fade-in">
          {/* Enhanced professional avatar with glow effect */}
          <div className="relative mb-6">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-200 via-white to-purple-200 dark:from-blue-600 dark:via-slate-800 dark:to-purple-600 flex items-center justify-center shadow-2xl border-4 border-white dark:border-slate-700 relative overflow-hidden">
              <span className="text-6xl font-bold text-blue-700 dark:text-blue-300 select-none">RO</span>
            </div>
            {/* Glowing ring effect */}
            <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 dark:from-blue-500/40 dark:to-purple-500/40 blur-md scale-110 opacity-50 animate-pulse"></div>
          </div>
          
          {/* Personal introduction */}
          <div className="mb-4">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-2">Hi, I'm Ritesh Ojha</h1>
            <p className="text-xl text-blue-700 dark:text-blue-300 font-semibold mb-2">Machine Learning Engineer</p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">I specialize in building scalable AI systems and data pipelines.<br />Welcome to my portfolio where data drives intelligence and systems scale seamlessly.</p>
          </div>
          
          {/* Premium typography with gradient text */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-blue-400 dark:to-blue-500"></div>
            <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-purple-400 dark:to-purple-500"></div>
          </div>
          
          {/* Enhanced action buttons with premium styling */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href="#projects"
              className="flex-1 min-w-[220px] max-w-xs"
            >
              <button type="button" className="w-full h-20 flex items-center justify-center gap-3 rounded-2xl border-2 shadow-lg transition-all duration-300 font-semibold text-white text-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-slate-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 hover:bg-gradient-to-tr hover:from-blue-900 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-blue-600 dark:focus:ring-offset-slate-900 active:scale-100 active:shadow-xl group">
                <Brain className="w-6 h-6 text-white" />
                <span>Explore AI Projects</span>
              </button>
            </a>
            <a
              href="#research-focus"
              className="flex-1 min-w-[220px] max-w-xs"
            >
              <button type="button" className="w-full h-20 flex items-center justify-center gap-3 rounded-2xl border-2 shadow-lg transition-all duration-300 font-semibold text-white text-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-slate-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 hover:bg-gradient-to-tr hover:from-blue-900 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-blue-600 dark:focus:ring-offset-slate-900 active:scale-100 active:shadow-xl group">
                <Sparkles className="w-6 h-6 text-white" />
                <span>Research Portfolio</span>
              </button>
            </a>
            <a
              href="/ritesh_ojha_resume.pdf"
              download="ritesh_ojha_resume.pdf"
              className="flex-1 min-w-[220px] max-w-xs"
            >
              <button type="button" className="w-full h-20 flex items-center justify-center gap-3 rounded-2xl border-2 shadow-lg transition-all duration-300 font-semibold text-white text-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-slate-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 hover:bg-gradient-to-tr hover:from-blue-900 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-blue-600 dark:focus:ring-offset-slate-900 active:scale-100 active:shadow-xl group">
                <Download className="w-6 h-6 text-white" />
                <span>Resume</span>
              </button>
            </a>
          </div>
          
          {/* Premium social links with enhanced styling */}
          <div className="flex justify-center space-x-6 mb-10">
            <a href="https://github.com/ritzzi23" target="_blank" rel="noopener noreferrer">
              <button type="button" className="flex items-center justify-center w-16 h-16 rounded-2xl border-2 shadow-lg transition-all duration-300 bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 hover:bg-gradient-to-tr hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-blue-600 dark:focus:ring-offset-slate-900 active:scale-100 active:shadow-xl group p-0">
                <Github className="w-9 h-9 text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors duration-300" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/ritzzi23/" target="_blank" rel="noopener noreferrer">
              <button type="button" className="flex items-center justify-center w-16 h-16 rounded-2xl border-2 shadow-lg transition-all duration-300 bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 hover:bg-gradient-to-tr hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-blue-600 dark:focus:ring-offset-slate-900 active:scale-100 active:shadow-xl group p-0">
                <Linkedin className="w-9 h-9 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </button>
            </a>
            <a href="https://github.com/ritzzi23/data_structure_problems" target="_blank" rel="noopener noreferrer">
              <button type="button" className="flex items-center justify-center w-16 h-16 rounded-2xl border-2 shadow-lg transition-all duration-300 bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 hover:bg-gradient-to-tr hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-blue-600 dark:focus:ring-offset-slate-900 active:scale-100 active:shadow-xl group p-0">
                <LeetCodeIcon className="w-9 h-9 text-slate-600 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300" />
              </button>
            </a>
            <a href="mailto:ro2283@nyu.edu">
              <button type="button" className="flex items-center justify-center w-16 h-16 rounded-2xl border-2 shadow-lg transition-all duration-300 bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 hover:bg-gradient-to-tr hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-blue-600 dark:focus:ring-offset-slate-900 active:scale-100 active:shadow-xl group p-0">
                <Mail className="w-9 h-9 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
