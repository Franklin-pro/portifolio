import { ArrowRight, Github, ExternalLink, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import imbugaImage from '../assets/pharma.png';
import guraImage from '../assets/e-commerce.png';
import simpoImage from '../assets/simpo.png';
import leaziImage from '../assets/Leazi.jpeg';
import cinemarwa from '../assets/cinemarwa.png';
import pharmacoreImage from '../assets/pharmacore.png';

const ProjectsSection = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "Gura Online",
      category: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform specializing in digital products and services. Features seamless shopping experience with integrated payment processing, inventory management, and advanced filtering.",
      image: guraImage,
      credits:['Single'],
      status: "fixing bugs",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      link: "https://gura-online.netlify.app/",
      github: "#",
      featured: true,
    },
    {
      id: 2,
      title: "PHARMACORE ",
      category: "Web Services",
      description: "PHARMACORE is a comprehensive pharmaceutical management system that streamlines inventory control, prescription management, expiring Medications tracking, and expense tracking for healthcare providers.",
      image: pharmacoreImage,
      credits:['MUGANZA'],
      status: "pending",
      tags: ["Web Services", "pharmacy management", "inventory control", "expense tracking"],
      link: "https://imbuga-protocol.netlify.app/",
      github: "#",
      featured: true,
    },
    {
      id: 3,
      title: "SimpoPlanet",
      category: "Music Platform",
      description: "A comprehensive music studio and audio services platform for artists and producers. Features audio player with waveform visualization, music promotion, collaboration tools, and e-commerce capabilities.",
      image: simpoImage,
      credits:['Single'],
      status: "Live",
      tags: ["Music Platform", "Audio", "React", "E-Commerce", "WebAudio"],
      link: "https://simpostudio.netlify.app/",
      github: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Leazi Management system",
      category: "Leazi web",
      description: "Leazi transforms the way you manage properties, putting powerful tools and insights at your fingertips..",
      image: leaziImage,
      credit:['Qonics-Inc'],
      status: "live",
      tags: ["Music Platform", "Audio", "React", "E-Commerce", "WebAudio"],
      link: "https://leazi.io/",
      github: "#",
      featured: true,
    },
    {
      id: 5,
      title: "CINEMA-RW",
      category: "Movie Platform",
      description: "A comprehensive movie platform for watching and Earning money through movie subscriptions and purchases.",
      image: cinemarwa,
      credits:['Single'],
      status: "pending",
      tags: ["Movie Platform", "React", "Movie Management"],
      link: "https://cinema.rw/",
      github: "https://github.com/Franklin-pro/Cinemarwa-FN",
      featured: true,
    },

  ];

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-green-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore my recent work showcasing design and development expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className={`grid lg:grid-cols-2 gap-8 p-8 lg:p-12 relative z-10 ${
                index % 2 === 1 ? "lg:grid-cols-2 lg:direction-rtl" : ""
              }`}>
                {/* Content */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="space-y-4">
                    {/* Category Badge */}
                    <div className="inline-flex w-fit">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-green-500/30 rounded-full text-sm text-green-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-bold">{project.title}</h3>

                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-foreground/10 text-foreground/80 text-sm rounded-full hover:bg-purple-500/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-6">
                      <button
                      disabled={project.status === "pending" || project.status === "fixing bugs"}
                      onClick={() => window.open(project.link, "_blank")}
                        
                        className={`${project.status === "pending" || project.status === "fixing bugs" ? "opacity-50 cursor-not-allowed" : "inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 group/btn"}`}
                      >
                        <span>Visit Project</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <a
                        href={project.github}
                        className={`${project.status === "pending" || project.status === "fixing bugs" ? "opacity-50 cursor-not-allowed" : "inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground/20 text-foreground rounded-sm font-semibold hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 group/btn"}`}
                      >
                        <span>View Code</span>
                        <Github className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative w-full h-96 rounded-xl overflow-hidden group/image">
                    {/* Image Glow Effect */}
                    <div className="absolute inset-0 bg-green-600 opacity-0 group-hover/image:opacity-20 transition-opacity duration-500"></div>

                    {/* Image Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                    />

                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-background/80 backdrop-blur-md border border-foreground/20 rounded-sm">
                      <div className={`w-2 h-2 bg-${project.status === "pending" ? "green" : "yellow"}-500 rounded-full animate-pulse`}></div>
                      <span className="text-sm font-medium">{project.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground/10 border border-foreground/20 text-foreground rounded-sm font-semibold hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;