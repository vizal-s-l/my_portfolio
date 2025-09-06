import { GraduationCap, Briefcase, Code, Database, Brain, Award } from 'lucide-react';
import dataVisualsImage from '@/assets/data-analytics-hero.jpg';

const AboutSection = () => {
  const skills = [
    {
      category: 'Programming & Data',
      icon: Code,
      items: ['Python', 'MySQL', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      category: 'Analytics & BI',
      icon: Award,
      items: ['Power BI', 'Zoho Analytics']
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      items: ['OpenAI APIs', 'LLMs', 'OpenAI Batch processing']
    }
  ];

  const experience = [
    {
      role: 'Data Analyst',
      company: 'Cx360 Degrees Pvt Ltd',
      period: 'Jan 2025 – Present',
      description: 'Developing ETL processes, AI-powered analytics using Python, MySQL, Jupyter Lab, Zoho Analytics, and AWS S3.',
      achievements: [
        'Built ETL pipelines processing 100K+ records weekly',
        'Creating Customer insights using OpenaI APIs',
        'Created predictive models achieving 90% accuracy in business forecasting'
      ]
    },
    {
      role: 'Student Trainee',
      company: 'Bosch Global Software Technologies-Bangalore',
      period: 'Completed Apr 2024',
      description: 'Gained hands-on experience in software development for firmware',
      achievements: [
        'Contributed to POC Board testings',
        'Learned industry best practices for code quality and testing',
        'Collaborated on cross-functional development teams'
      ]
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">About Me</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a Data Analyst with a background in Electrical and Electronics Engineering. 
                Currently working at Cx360, I specialize in transforming complex data into actionable insights 
                through Python, SQL, and advanced analytics tools.
              </p>
            </div>

            {/* Education */}
            <div className="bg-card rounded-lg p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-card-foreground">Education</h3>
              </div>
              <div>
                <h4 className="font-medium text-card-foreground">
                  B.E. Electrical and Electronics Engineering
                </h4>
                <p className="text-muted-foreground">Graduated April 2024</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Strong foundation in analytical thinking, problem-solving, and systematic approaches to complex challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative animate-scale-in delay-300">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={dataVisualsImage}
                alt="Data Analytics and AI Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-slide-up">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Skills & Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center items-start gap-8 max-w-7xl mx-auto">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              // Define different widths for each skill category
              const widthClasses = [
                'w-80', // Programming & Data - Widest (320px)
                'w-64', // Analytics & BI - Medium (256px)
                'w-72'  // AI & Machine Learning - Large (288px)
              ];
              
              return (
                <div
                  key={skillGroup.category}
                  className={`group bg-card rounded-2xl p-8 shadow-card transition-all duration-300 border border-border/50 animate-scale-in ${widthClasses[index] || 'w-72'} min-h-[320px]`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-6 h-full">
                    <div className="p-4 rounded-2xl bg-primary/10 transition-colors duration-300">
                      <IconComponent className="text-primary transition-transform duration-300" size={48} />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="text-xl font-bold text-card-foreground mb-4 transition-colors duration-300">
                        {skillGroup.category}
                      </h4>
                      <div className="grid gap-3">
                        {skillGroup.items.map((item, itemIndex) => (
                          <div
                            key={item}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground bg-muted/50 rounded-lg transition-all duration-200 border border-transparent"
                            style={{ animationDelay: `${index * 150 + itemIndex * 50}ms` }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Professional Experience</span>
          </h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="project-card p-8 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <Briefcase className="text-primary mt-1" size={24} />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-card-foreground">
                          {exp.role}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;