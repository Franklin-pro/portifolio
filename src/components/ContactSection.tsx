import {
  GithubIcon,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Twitter,
  Calendar,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      <div className="absolute -left-32 -bottom-32 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-4 mb-6">
            <p className="text-lg bg-blue-500/25 p-2 rounded-lg  max-w-2xl text-start mx-auto pb-2">
            I am a Web and Mobile Developer based in Kigali, Rwanda. I am
            dedicated to building beautiful and efficient applications with a
            focus on clean code and exceptional user experience.
          </p>
          <p className="text-lg  bg-blue-500/25 p-2 rounded-lg text-start max-w-2xl mx-auto">
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design. Have a project
            in mind? Let's make it happen.
          </p>
        </div>
        </div>

        <div className="grid md:grid-cols-1 gap-10 items-start">
          {/* Contact Information Card */}
          <div className="glass-card p-8 h-full">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              Get in touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Email</p>
                  <a
                    href="mailto:franklinprogrammer@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    franklinprogrammer@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Phone</p>
                  <a
                    href="tel:+250790019543"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    +250 790 019 543
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Location</p>
                  <a
                    href="https://www.google.com/maps/place/Franklin+developer/@-1.9825347,30.0910301,1129m/data=!3m2!1e3!4b1!4m6!3m5!1s0x19dca72eef097c9b:0x68f8ed50e4465099!8m2!3d-1.9825401!4d30.0936104!16s%2Fg%2F11ltsr__hs!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    Gatenga, Kigali, Rwanda
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/250783446449?text=Hi%20Franklin%20Programmer!%20I'm%20interested%20in%20working%20with%20you.%20Could%20you%20please%20provide%20more%20information%20about%20your%20services%20and%20availability?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-foreground/10">
              <h4 className="text-lg font-medium mb-4">Follow me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Franklin-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/franklin-ndanyuzwe-00113431a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/franklinpro21?t=fwSGTCyG_GqylUjbSrFzeg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform"
                  title="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="glass-card p-8 h-full">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              Send a message
            </h3>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-background/50 border border-foreground/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all" 
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-background/50 border border-foreground/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all" 
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-background/50 border border-foreground/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all" 
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 bg-background/50 border border-foreground/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all" 
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-foreground/10 text-center">
              <p className="text-foreground/70 text-sm mb-3">Prefer to schedule a meeting?</p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity"
              >
                <Calendar className="w-4 h-4" />
                Book a call on Calendly
              </a>
            </div>
          </div> */}
        </div>

        {/* Footer Logo */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
            <div className="text-5xl font-bold gradient-text relative z-10">
              F
            </div>
          </div>
          <p className="mt-4 text-foreground/70">
            Franklin Programmer © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
