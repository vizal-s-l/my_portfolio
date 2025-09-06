import { FileDown, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/vizal-profile.jpeg';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-accent animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-primary-light animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Vizal S L</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
                Data Analyst 
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
                Turning data into insights | Python & SQL 
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="/resume.pdf"
                download="Vizal_S_L_Resume.pdf"
                className="btn-primary inline-flex items-center justify-center space-x-2"
                onClick={(e) => {
                  // Check if file exists before download
                  const link = e.currentTarget;
                  fetch(link.href, { method: 'HEAD' })
                    .then(response => {
                      if (!response.ok) {
                        e.preventDefault();
                        alert('Resume PDF is currently being updated. Please contact me directly for my latest resume.');
                      }
                    })
                    .catch(() => {
                      e.preventDefault();
                      alert('Resume PDF is currently being updated. Please contact me directly for my latest resume.');
                    });
                }}
              >
                <FileDown size={20} />
                <span>Download Resume</span>
              </a>
              <button
                onClick={scrollToProjects}
                className="btn-outline inline-flex items-center justify-center space-x-2"
              >
                <span>Explore Projects</span>
                <ArrowDown size={20} />
              </button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="relative animate-scale-in delay-300">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={profileImage}
                  alt="Vizal S L - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg animate-bounce delay-1000">
                📊
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-3 rounded-lg shadow-lg animate-bounce delay-2000">
                🤖
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;