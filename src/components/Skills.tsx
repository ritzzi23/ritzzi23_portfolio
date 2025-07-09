import { Badge } from '@/components/ui/badge';
import { Brain, Cpu, Network, Database, Cloud, Code2, Zap, Sparkles } from 'lucide-react';

const badgeGradients = [
  // For each card: blue, purple, green
  'dark:from-blue-500/70 dark:to-blue-700/70',
  'dark:from-purple-500/70 dark:to-purple-700/70',
  'dark:from-emerald-500/70 dark:to-emerald-700/70',
];
const badgeBorders = [
  'dark:border-blue-400',
  'dark:border-purple-400',
  'dark:border-emerald-400',
];
const badgeShadows = [
  'dark:shadow-blue-500/30',
  'dark:shadow-purple-500/30',
  'dark:shadow-emerald-500/30',
];
const badgeLightBorders = [
  'border-slate-200',
  'border-slate-200',
  'border-slate-200',
];
const badgeLightShadows = [
  'shadow-slate-200/40',
  'shadow-slate-200/40',
  'shadow-slate-200/40',
];

const BADGE_WIDTH = 'w-[160px]'; // fixed width for all badges on desktop
const BADGE_HEIGHT = 'h-12'; // fixed height for all badges

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & Deep Learning",
      icon: Brain,
      skills: ["PyTorch", "NLP", "Transformers", "BERT/GPT", "Computer Vision", "CNNs/RNNs"],
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100/50 dark:from-blue-900/60 dark:to-blue-800/40"
    },
    {
      title: "Agentic AI & LLMs", 
      icon: Zap,
      skills: ["LangChain", "LangGraph", "Multi-Agent Systems", "RAG", "Function Calling", "Reasoning and Acting (Re-Act)"],
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100/50 dark:from-purple-900/60 dark:to-purple-800/40"
    },
    {
      title: "MLOps & Infrastructure",
      icon: Cloud,
      skills: ["Kubernetes", "Docker", "MLflow", "Kubeflow", "AWS SageMaker", "Model Serving"],
      color: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100/50 dark:from-emerald-900/60 dark:to-emerald-800/40"
    }
  ];

  const researchAreas = [
    { icon: Network, title: "Neural Architecture Search", desc: "Automated ML model design" },
    { icon: Cpu, title: "Edge AI Optimization", desc: "Efficient model deployment" },
    { icon: Database, title: "Multimodal Learning", desc: "Vision-Language models" },
    { icon: Sparkles, title: "AI Safety & Alignment", desc: "Responsible AI development" }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900 dark:to-cyan-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium section header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400 dark:to-blue-500"></div>
              <Sparkles className="w-6 h-6 text-purple-500 dark:text-purple-400" />
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-400 dark:to-purple-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-800 dark:text-slate-100 mb-6 tracking-tight">
              Technical <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Mastery</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge AI/ML technologies powering the next generation of intelligent systems
            </p>
          </div>
          
          {/* Enhanced skill categories */}
          <div className="grid lg:grid-cols-3 gap-4 md:gap-6 mb-10">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="group relative flex flex-col h-full min-h-[380px] md:min-h-[360px]">
                  {/* Card background and border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-3xl blur-sm group-hover:blur-none transition-all duration-500`}></div>
                  <div className="relative flex flex-col flex-1 justify-center bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl p-5 md:p-6 rounded-3xl shadow-xl border border-white/60 dark:border-slate-800/80 hover:shadow-2xl dark:shadow-blue-900/30 transition-all duration-500 hover:-translate-y-2">
                    {/* Icon with glow */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 flex items-center justify-center">
                      <div className={`absolute inset-0 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-300 ${category.color} dark:from-white/10 dark:to-white/5`}></div>
                      <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg z-10`}>
                        <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 text-center mb-6 leading-tight">
                      {category.title}
                    </h3>
                    {/* Skills grid */}
                    <div className="grid grid-cols-2 gap-3 min-h-[108px] md:min-h-[120px] lg:min-h-[120px] items-center justify-items-center">
                      {category.skills.map((skill, skillIndex) => (
                        <button
                          key={skillIndex}
                          type="button"
                          className={`flex items-center justify-center gap-2 px-2 md:px-3 w-full min-w-0 max-w-full ${BADGE_HEIGHT} text-xs md:text-sm font-semibold rounded-2xl border-2 shadow-lg transition-all duration-300 tracking-wide
                            bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800
                            border-slate-200 dark:border-slate-700
                            hover:scale-110 hover:shadow-2xl hover:brightness-110 hover:bg-gradient-to-tr hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900
                            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-blue-600 dark:focus:ring-offset-slate-900
                            active:scale-105 active:shadow-xl
                            group
                          `}
                          style={{ textAlign: 'center', wordBreak: 'break-word', whiteSpace: 'normal', minWidth: 0, maxWidth: '100%' }}
                        >
                          <Code2 className="w-4 h-4 text-blue-400 dark:text-blue-300 opacity-80 group-hover:scale-125 group-hover:text-blue-600 transition-transform duration-200" />
                          <span className="block w-full text-center leading-tight">{skill}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Research areas section */}
          <div id="research-focus" className="scroll-mt-24 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 dark:border-slate-700/50">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Research Focus Areas</h3>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">Pushing the boundaries of AI research and innovation</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {researchAreas.map((area, index) => {
                const IconComponent = area.icon;
                // Assign a unique hover color for each area
                const hoverColors = [
                  'hover:bg-blue-100 dark:hover:bg-blue-900',      // Network
                  'hover:bg-emerald-100 dark:hover:bg-emerald-900',// Cpu
                  'hover:bg-slate-200 dark:hover:bg-slate-700',    // Database
                  'hover:bg-purple-100 dark:hover:bg-purple-900'   // Sparkles
                ];
                return (
                  <button
                    key={index}
                    type="button"
                    className={`flex flex-col items-center justify-center gap-2 px-2 md:px-3 w-full min-w-0 max-w-full h-36 md:h-40 text-sm md:text-base font-semibold rounded-2xl border-2 shadow-lg transition-all duration-300 tracking-wide bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 scale-100 active:scale-100 active:shadow-xl group ${hoverColors[index]} hover:scale-105 hover:shadow-2xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-blue-600 dark:focus:ring-offset-slate-900`}
                    style={{ textAlign: 'center', wordBreak: 'break-word', whiteSpace: 'normal', minWidth: 0, maxWidth: '100%' }}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-1 md:mb-2 group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    <span className="block w-full text-center leading-tight font-bold text-slate-800 dark:text-slate-100">{area.title}</span>
                    <span className="block w-full text-center leading-tight text-xs md:text-sm text-slate-600 dark:text-slate-300 font-normal">{area.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
