import { Brain, Database, Eye, Award, Users, Globe, Settings, MessageCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, label: "5+ Years", desc: "AI/ML Experience" },
    { icon: Users, label: "25+", desc: "ML Models Deployed" },
    { icon: Globe, label: "10+", desc: "Research Papers" }
  ];

  const experience = [
    {
      title: 'Data Scientist',
      company: 'The Warehouse Group, New Zealand',
      date: '2023 – 2024',
      accent: 'text-blue-500',
      points: [
        'Developed and deployed predictive models for retail analytics',
        'Automated data pipelines using Python and cloud services',
        'Collaborated with cross-functional teams to deliver actionable insights',
        'Improved sales forecasting accuracy by 15% using ML techniques',
      ],
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Accenture, India',
      date: '2020 – 2023',
      accent: 'text-blue-500',
      points: [
        'Designed and implemented scalable ML solutions for enterprise clients',
        'Led end-to-end model lifecycle from data preprocessing to deployment',
        'Optimized deep learning models for NLP and computer vision tasks',
        'Mentored junior engineers and conducted technical workshops',
      ],
    },
  ];
  const education = [
    {
      title: 'M.S. in Computer Engineering',
      company: 'New York University, NY, USA',
      date: '2024 – 2026',
      accent: 'text-blue-500',
      schools: [
        {
          name: 'NYU Tandon School of Engineering',
          courses: [
            'Advanced Machine Learning',
            'Deep Learning for NLP',
          ],
        },
        {
          name: 'NYU Stern School of Business',
          courses: [
            'Big Data Analytics',
          ],
        },
        {
          name: 'NYU Center for Data Science',
          courses: [
            'AI Systems Engineering',
          ],
        },
      ],
    },
    {
      title: 'B.Tech in Computer Science and Engineering',
      company: 'Amity University, Noida, India',
      date: '2016 – 2020',
      accent: 'text-blue-500',
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Artificial Intelligence',
        'Computer Vision',
      ],
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 mb-4">
              About <span className="font-semibold">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Experience & Education Grid */}
          <div className="grid gap-6 md:gap-8">
            {/* Experience */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 px-4 md:px-8 py-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">Experience</h3>
              <div className="grid md:grid-cols-2 gap-8 md:gap-0 md:divide-x md:divide-slate-200 dark:md:divide-slate-700">
                {experience.map((item, idx) => (
                  <div key={item.title} className={`flex flex-col px-0 md:px-8 ${idx === 0 ? '' : 'md:pl-8'}`}> 
                    <div className="flex items-center justify-between mb-1 w-full">
                      <span className={`text-lg font-bold ${item.accent}`}>{item.company}</span>
                      <span className="text-slate-400 dark:text-slate-500 text-sm whitespace-nowrap ml-4">{item.date}</span>
                    </div>
                    <span className="text-base font-medium text-slate-600 dark:text-slate-300 mb-1">{item.title}</span>
                    <ul className="list-disc pl-5 space-y-1 text-slate-500 dark:text-slate-300 text-sm mt-1">
                      {item.points && item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {/* Education */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 px-4 md:px-8 py-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">Education</h3>
              <div className="grid md:grid-cols-2 gap-8 md:gap-0 md:divide-x md:divide-slate-200 dark:md:divide-slate-700">
                {education.map((item, idx) => (
                  <div key={item.title} className={`flex flex-col px-0 md:px-8 ${idx === 0 ? '' : 'md:pl-8'}`}> 
                    <div className="flex items-center justify-between mb-1 w-full">
                      <span className={`text-2xl font-bold ${item.accent}`}>{item.company}</span>
                      <span className="text-slate-400 dark:text-slate-500 text-sm whitespace-nowrap ml-4">{item.date}</span>
                    </div>
                    <span className="text-base font-medium text-slate-600 dark:text-slate-300 mb-1">{item.title}</span>
                    {item.schools ? (
                      <div className="space-y-4 mt-2">
                        {item.schools.map((school, i) => (
                          <div key={i}>
                            <span className="text-base font-semibold text-blue-400 dark:text-blue-300 block mb-1">{school.name}</span>
                            <div className="pl-4">
                              <span className="block text-xs text-slate-400 dark:text-slate-500 font-semibold mb-1 uppercase tracking-wide">Relevant Courses</span>
                              <ul className="list-disc pl-5 space-y-1 text-slate-500 dark:text-slate-300 text-sm mt-1">
                                {school.courses.map((course, j) => (
                                  <li key={j}>{course}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-2 mb-1 uppercase tracking-wide">Relevant Courses</span>
                        <ul className="list-disc pl-5 space-y-1 text-slate-500 dark:text-slate-300 text-sm mt-1">
                          {item.courses && item.courses.map((course, i) => (
                            <li key={i}>{course}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
