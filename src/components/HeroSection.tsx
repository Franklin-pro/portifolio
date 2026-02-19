import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import avatarImage from '@/assets/me.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block lg:block">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 via-purple-500/10 to-pink-500/10 border border-green-500/20 rounded-full hover:border-purple-500/40 transition-all duration-300">
              <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-purple-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-foreground/80">Available for freelance projects</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Creative</span>
              <span className="block bg-green-600 bg-clip-text text-transparent">
                Developer & Designer
              </span>
              <span className="block text-foreground/80">Crafting Digital Excellence</span>
            </h1>

            <p className="text-lg lg:text-xl text-foreground/70 max-w-lg leading-relaxed">
              I design and build beautiful, functional digital experiences that drive results. 
              Specialized in creating modern web applications with cutting-edge technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-3 bg-green-600 text-white rounded-sm font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-foreground/20 text-foreground rounded-sm font-semibold hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start pt-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 bg-foreground/10 hover:bg-gradient-to-r hover:from-green-500 hover:via-purple-500 hover:to-pink-500 text-foreground hover:text-white rounded-sm transition-all duration-300 transform hover:scale-110 group"
                title={label}
              >
                <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Avatar Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-green-600 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative bg-background rounded-3xl overflow-hidden border-2 border-foreground/10 group-hover:border-purple-500/50 transition-all duration-300 transform group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay"></div>
              <img 
                src={avatarImage} 
                alt="Portfolio Avatar" 
                className="w-96 h-96 object-cover relative z-10 transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-500 to-purple-500 rounded-full blur-xl opacity-50 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-float animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;