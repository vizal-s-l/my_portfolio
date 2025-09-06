import { useState } from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  type: 'Personal' | 'Professional' | 'MVP';
  status: 'Completed' | 'In Progress';
  links?: {
    demo?: string;
    github?: string;
    medium?: string;
  };
}

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'review-sentiment',
      title: 'Review Sentiment Analysis Tool',
      year: '2025',
      description: 'Hybrid sentiment analyzer with VADER, TextBlob, GPT.',
      longDescription: 'Developed a sentiment classification tool using multiple NLP engines, including OpenAI GPT, to provide granular sentiment insights across ecommerce reviews.',
      tags: ['Python', 'AI'],
      type: 'Personal',
      status: 'Completed',
      links: {
        github: 'https://github.com/vizal-s-l/review_sentiment_analyser'
      }
    },
    {
      id: 'gsheet-ecom-reviews',
      title: 'Ecommerce Google Spreadsheet Integration',
      year: '2025',
      description: 'Automated Python pipeline for cleaning and reporting Google Sheets data.',
      longDescription: 'Built a Python data pipeline that extracts, cleans, and aggregates ecommerce data from Google Sheets. Results are written back into new tabs for seamless reporting and analysis.',
      tags: ['Python', 'Analytics','Google Sheets API'],
      type: 'Personal',
      status: 'Completed',
      links: {
        github: 'https://github.com/vizal-s-l/googlespreadsheet_ecom_data'
      }
    },
    {
      id: 'movie-pipeline',
      title: 'Movie Insights Analytics Pipeline',
      year: '2024',
      description: 'Movie raw data transformed into insights.',
      longDescription: 'Built an end-to-end data pipeline with SQL and Python, transforming raw movie ratings into user behavior and trend insights with rich visualizations.',
      tags: ['Python', 'Matplotlib', 'Pandas'],
      type: 'Personal',
      status: 'Completed',
      links: {
        github: 'https://github.com/vizal-s-l/movie-insights-pipeline'
      }

    },
    {
      id: 'stock-value-fetcher',
      title: 'Real-Time Stock Data Value Fetcher',
      year: '2024',
      description: 'Fetching real time stock value and updating it in MySQL Database.',
      longDescription: 'Designed a pipeline that extracts live stock data, stores it in MySQL, and visualizes IT sector stock trends in Jupyter Notebooks.',
      tags: ['Python', 'MySQL', 'Analytics', 'yahoofinance'],
      type: 'Personal',
      status: 'In Progress',
      links: {
        github: 'https://github.com/vizal-s-l/stock-pipeline'
      }
    },
    {
      id: 'personal-finance',
      title: 'Personal Finance Management System',
      year: '2024',
      description: 'Finance tracker with MySQL and Python analysis.',
      longDescription: 'Designed a finance management system with structured MySQL database and Python visualizations, enabling insights into savings trends and spending patterns.',
      tags: ['Python', 'MySQL', 'Pandas', 'Matplotlib'],
      type: 'Personal',
      status: 'Completed',
      links: {
        github: 'https://github.com/vizal-s-l/finance-management'
      }
    }
  ];

  const filters = ['All', 'Python', 'AI'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.includes(selectedFilter) || project.type === selectedFilter
      );

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on in data analytics.
          </p>
        </div>

        {/* Filter System */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-card-foreground border border-border'
              }`}
            >
              <Tag size={14} className="inline mr-1" />
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card p-6 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Type Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  project.type === 'Personal' 
                    ? 'bg-primary text-primary-foreground'
                    : project.type === 'Professional'
                    ? 'bg-success text-success-foreground'
                    : 'bg-accent text-accent-foreground'
                }`}>
                  {project.type}
                </span>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex justify-between items-center pt-4 border-t border-border">
                <button className="text-primary font-medium text-sm underline">
                  Know More
                </button>
                <div className="flex space-x-2">
                  {project.links?.github && (
                    <Github size={16} className="text-muted-foreground cursor-pointer" />
                  )}
                  {project.links?.demo && (
                    <ExternalLink size={16} className="text-muted-foreground cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-card rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto my-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground pr-4">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground p-1 rounded-lg flex-shrink-0"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm md:text-base">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {selectedProject.links && (
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {selectedProject.links.demo && (
                      <a
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center space-x-2 text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>View Demo</span>
                      </a>
                    )}
                    {selectedProject.links.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex items-center justify-center space-x-2 text-sm"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;