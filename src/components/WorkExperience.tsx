const WorkExperience = () => {
  const experiences = [
      {
      title: "Leazi Web App", 
      subtitle: "is software for managing a House rental business",
      year: "2025",
      color: "from-orange-500 to-red-500"
    },
     {
      title: "Simpo Studio Label",
      subtitle: "Music studio and audio platform", 
      year: "2025",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "MasterKraft Web App",
      subtitle: "School management system",
      year: "2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Gura online  Mobile App and Web",
      subtitle: "E-commerce platform for all your shopping needs",
      year: "2023", 
      color: "from-purple-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          Work Experience
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card p-6 group hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-lg`}>
                  📱
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {exp.subtitle}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {exp.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;