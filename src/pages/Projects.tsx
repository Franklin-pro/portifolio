import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import imbugaImage from '../assets/pharma.png';
import guraImage from '../assets/e-commerce.png';
import simpoImage from '../assets/simpo.png';
import leaziImage from '../assets/Leazi.jpeg';
import cinemarwa from '../assets/cinemarwa.png';
import pharmacoreImage from '../assets/pharmacore.png';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Gura Online",
      category: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform specializing in digital products and services. Features seamless shopping experience with integrated payment processing, inventory management, and advanced filtering.",
      image: guraImage,
      credits: ['Single'],
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
      credits: ['MUGANZA'],
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
      credits: ['Single'],
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
      credits: ['Qonics-Inc'],
      status: "live",
      tags: ["Property Management", "Web App", "React", "Management System"],
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
      credits: ['Single'],
      status: "pending",
      tags: ["Movie Platform", "React", "Movie Management"],
      link: "https://cinema.rw/",
      github: "https://github.com/Franklin-pro/Cinemarwa-FN",
      featured: true,
    },
    // Add more projects here if you have them
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-foreground/10 border border-foreground/20 text-foreground rounded-sm font-semibold hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            All <span className="bg-green-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-green-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore all my projects showcasing design and development expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="p-6 relative z-10">
                {/* Image */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 group/image">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-md border border-foreground/20 rounded-sm">
                    <div className={`w-2 h-2 bg-${project.status === "Live" || project.status === "live" ? "green" : project.status === "pending" ? "yellow" : "red"}-500 rounded-full animate-pulse`}></div>
                    <span className="text-xs font-medium">{project.status}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="inline-flex w-fit">
                    <span className="px-2 py-1 bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-green-500/30 rounded-full text-xs text-green-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-foreground/10 text-foreground/80 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-4">
                    <button
                      disabled={project.status === "pending" || project.status === "fixing bugs"}
                      onClick={() => window.open(project.link, "_blank")}
                      className={`${project.status === "pending" || project.status === "fixing bugs" ? "opacity-50 cursor-not-allowed" : "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-sm text-sm font-semibold hover:shadow-lg transition-all duration-300"}`}
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 border-2 border-foreground/20 text-foreground rounded-sm text-sm font-semibold hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                      >
                        <span>Code</span>
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;