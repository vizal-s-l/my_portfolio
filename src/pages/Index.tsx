import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Blogs Section */}
        <BlogsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">Vizal S L</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                Data Analyst & AI Enthusiast passionate about transforming complex data into actionable insights.
                Specializing in Python, SQL, and AI-powered analytics.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:vizalsl241@gmail.com"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/vizalsl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://github.com/vizal-s-l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Blogs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/resume.pdf"
                    download="Vizal_S_L_Resume.pdf"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/vizalsl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:vizalsl241@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Email Me
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-0 md:space-y-4 lg:space-y-0">
              <p className="text-muted-foreground text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Vizal S L. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground text-center sm:text-left">
                <span className="hidden sm:inline">Built with React, TypeScript & Tailwind CSS</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
