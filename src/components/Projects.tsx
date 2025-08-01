import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "AI Trip Planner Agent",
      description: "An intelligent, agentic AI-powered travel planner leveraging self-hosted Gemma 3 1B LLM and real-time data from multiple APIs. Features LangGraph-based multi-tool reasoning, deployed on Google Cloud Run with GPU acceleration.",
      image: "/ai-trip-planner-screenshot.png",
      tech: ["LangGraph", "Gemma 3", "FastAPI", "Streamlit", "Google Cloud", "Docker"],
      category: "Agentic AI",
      year: "2024",
      github: "https://github.com/ritzzi23/ai_trip_planner_agent/tree/final_code",
      live: "https://ai-trip-planner-frontend-549370391494.europe-west1.run.app/"
    },
    {
      title: "Autonomous Driving Vision System",
      description: "A computer vision system for autonomous vehicles using deep learning to detect objects, lane lines, and traffic signs in real-time with 99.2% accuracy.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      tech: ["PyTorch", "OpenCV", "YOLO", "TensorRT"],
      category: "Computer Vision",
      year: "2024",
      github: "#",
      live: "#"
    },
    {
      title: "Natural Language AI Assistant",
      description: "An intelligent chatbot powered by transformer models, capable of understanding context and providing human-like responses across multiple domains.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["Transformers", "BERT", "GPT", "FastAPI"],
      category: "NLP",
      year: "2024",
      github: "#",
      live: "#"
    },
    {
      title: "Medical Image Analysis Platform",
      description: "Deep learning system for analyzing medical images, detecting anomalies in X-rays and MRIs with radiologist-level accuracy for early diagnosis.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      tech: ["TensorFlow", "Keras", "CNN", "DICOM"],
      category: "Healthcare AI",
      year: "2023",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 mb-4">
              AI/ML <span className="font-semibold">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Innovative AI solutions solving real-world problems across various industries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-2xl">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay with category and year */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Project links overlay */}
                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors group"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors group"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full font-medium border border-slate-200 dark:border-slate-600 flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-10">
            <p className="text-slate-600 dark:text-slate-300 mb-8">Explore more of my AI/ML research and implementations</p>
            <button type="button" className="px-8 py-3 rounded-2xl border-2 shadow-lg transition-all duration-300 font-semibold text-white text-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-slate-700 hover:scale-105 hover:shadow-2xl hover:brightness-110 hover:bg-gradient-to-tr hover:from-blue-900 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-blue-600 dark:focus:ring-offset-slate-900 active:scale-100 active:shadow-xl group">
              View Research Papers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
