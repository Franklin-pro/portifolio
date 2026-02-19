import { Code, Zap, Palette, Smartphone, Database, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, Vue.js with modern state management and UI frameworks"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Flutter for cross-platform mobile applications with native performance"
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "RESTful APIs, database design, and server-side logic with Node.js"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, responsive interfaces using Tailwind CSS and design principles"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized applications with focus on speed and user experience"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges"
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-green-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A passionate software engineer dedicated to creating innovative digital solutions
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Franklin Ndanyuzwe</h3>
              <p className="text-lg text-foreground/70">
                Software Engineer at <span className="text-green-600 font-semibold">Qonics Inc</span>
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I'm a passionate software developer with expertise in React, Next.js, Vue.js, and Flutter. 
                With over a year of experience, I specialize in building full-stack applications, 
                focusing on frontend development, mobile app development with Flutter, API integration, 
                and state management using modern frameworks.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "50+", label: "Projects" },
                { number: "30+", label: "Clients" },
                { number: "1+", label: "Years Experience" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-foreground/5 border border-foreground/10 rounded-sm hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills Grid */}
          <div className="grid gap-4">
            {skills.slice(0, 3).map((skill) => (
              <div
                key={skill.title}
                className="p-4 bg-foreground/5 border border-foreground/10 rounded-sm hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <skill.icon className="w-6 h-6 text-green-500 group-hover:text-purple-500 transition-colors flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{skill.title}</h4>
                    <p className="text-sm text-foreground/60">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-green-600 rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
