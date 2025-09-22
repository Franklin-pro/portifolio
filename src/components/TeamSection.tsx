import { Github, Linkedin, Twitter, Dribbble, Mail } from "lucide-react";


const TeamSection = () => {
  const socialIcons = [
    { name: "GitHub", icon: <Github size={20} />, color: "from-gray-600 to-gray-800",path:"https://github.com/Franklin-pro" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, color: "from-blue-600 to-blue-800",path:"https://www.linkedin.com/in/franklin-ndanyuzwe-00113431a/" },
    { name: "Twitter", icon: <Twitter size={20} />, color: "from-sky-500 to-sky-700",path:"https://x.com/franklinpro21?t=fwSGTCyG_GqylUjbSrFzeg&s=09" },
    { name: "Email", icon: <Mail size={20} />, color: "from-green-500 to-green-700",path:"mailto:" },
  ];

  const techIcons = [
    { name: "React", icon: 'https://www.svgrepo.com/show/303500/react-1-logo.svg'},
    { name: "TypeScript", icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg'},
    { name: "Node.js", icon: 'https://www.mindrops.com/images/nodejs-image.webp' },
    { name: "Javascript", icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s' },
    { name: "Figma", icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_H1LW-gv1GEt06gYeKCtOzqhfDRCpc99Zg&s' },
    { name: "Tailwind CSS", icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png' },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-lg text-foreground/90 mb-8">
          I'm currently looking to join a{" "}
          <span className="gradient-text font-medium">cross-functional</span> team{" "}
          <br className="hidden sm:block" />
          that values improving people's lives through accessible design
        </p>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {socialIcons.map((social, index) => (
            <div
              key={index}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-200`}
              title={social.name}
            >
             <a href={social.path} target="_blank">{social.icon}</a> 
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
<div className="flex flex-wrap justify-center gap-3">
  {techIcons.map((tech, index) => (
    <div
      key={index}
      className="w-12 h-12 rounded-lg glass-card flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
      title={tech.name}
    >

      <img
        src={tech.icon}
        alt={tech.name}
        className="w-8 h-8 object-contain"
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default TeamSection;
