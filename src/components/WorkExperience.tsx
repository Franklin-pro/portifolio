import { Calendar, Award, Briefcase, ArrowRight } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Leazi Web App",
      subtitle: "House rental management software",
      year: "2025",
      color: "from-orange-500 to-red-500",
      description: "Developed a comprehensive property management system for rental businesses",
      icon: Briefcase,
    },
    {
      title: "Simpo Studio Label",
      subtitle: "Music studio and audio platform",
      year: "2025",
      color: "from-green-500 to-teal-500",
      description: "Built a complete music production and distribution platform",
      icon: Briefcase,
    },
    {
      title: "MasterKraft Web App",
      subtitle: "School management system",
      year: "2024",
      color: "from-purple-500 to-pink-500",
      description: "Created an integrated educational management solution",
      icon: Briefcase,
    },
    {
      title: "Gura Online",
      subtitle: "E-commerce platform (Mobile & Web)",
      year: "2023",
      color: "from-green-500 to-cyan-500",
      description: "Developed a full-featured shopping platform for digital products",
      icon: Briefcase,
    },
  ];

  const currentRole = {
    company: "Qonics Inc",
    position: "Software Engineer",
    duration: "Present",
    description: "Leading frontend development and contributing to full-stack solutions",
  };

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="bg-green-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My professional journey and key projects I've contributed to
          </p>
        </div>

        {/* Current Role Highlight */}
        <div className="mb-16 p-8 bg-gradient-to-br from-green-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all duration-300 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{currentRole.position}</h3>
                  <p className="text-lg text-green-400">{currentRole.company}</p>
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-green-500/30 rounded-full text-sm font-semibold text-green-400 mt-4 md:mt-0">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {currentRole.duration}
                </span>
              </div>
              <p className="text-foreground/80 text-lg">{currentRole.description}</p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-4 mb-12">
          <h3 className="text-2xl font-bold">Key Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-sm bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <exp.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-foreground/70 mb-2">{exp.subtitle}</p>
                    <p className="text-sm text-foreground/60 mb-3">{exp.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-green-400">
                        <Calendar className="w-3 h-3" />
                        {exp.year}
                      </span>
                      <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline or Skills Section */}
        <div className="mt-12 p-8 bg-foreground/5 border border-foreground/10 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Frontend</h4>
              <ul className="space-y-2 text-foreground/80">
                {["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "State Management"].map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Other</h4>
              <ul className="space-y-2 text-foreground/80">
                {["Flutter", "Node.js", "MongoDB", "API Integration", "UI/UX Design", "Git & Version Control"].map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkExperience;