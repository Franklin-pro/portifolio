import { ChevronLeft, ChevronRight, ShoppingCart, Database, Music, Palette, Code, Cloud, Shield, Users, Globe, ArrowBigDown, ArrowBigRight, ArrowRight } from 'lucide-react';
import imbugaImage from '../assets/imbuga.png';
import guraImage from '../assets/e-commerce.png';
import simpoImage from '../assets/simpo.png';
import { Button } from 'react-day-picker';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Project 1: Gura Online */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-primary mb-2">E-COMMERCE PLATFORM</p>
              <h3 className="text-2xl font-bold">Gura Online</h3>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Gura Online is a fully responsive e-commerce platform specializing in digital products and services. 
                Built with modern web technologies, it features a seamless shopping experience with integrated payment processing, 
                inventory management, and customer relationship tools. The platform includes advanced filtering, wishlist functionality, 
                and a streamlined checkout process that reduces cart abandonment. With SEO optimization and cross-browser compatibility, 
                Gura Online delivers exceptional performance across all devices :cite[4].
              </p>
              
              <a
              href="https://gura-online.netlify.app/"
              target='_blank'
              className=" bg-green-500  text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors space-x-3 inline-flex items-center justify-center"
            >
              <span>Visit</span>
              <ArrowRight className="h-5 w-5 mr-2  animate-pulse" />
             
            </a>
            </div>
            
            <div className="glass-card p-4">
              <div className="bg-white rounded-lg p-6 text-black">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center text-sm font-medium">Gura Online - Admin Dashboard</div>
                </div>
                <div className="space-y-3">
              <img src={guraImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Imbuga Protocol */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="text-right">
              <p className="text-sm text-primary mb-2">WEB SERVICES PROTOCOL</p>
              <h3 className="text-2xl font-bold">Imbuga Protocol</h3>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-4 lg:order-1">
              <div className="bg-white rounded-lg p-6 text-black">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center text-sm font-medium">Imbuga Protocol - Service Dashboard</div>
                </div>
                <div className="space-y-3">
                <img src={imbugaImage} alt="" />
                </div>
              </div>
            </div>
            
            <div className="lg:order-2">
              <p className="text-foreground/80 leading-relaxed mb-6">
                Imbuga Protocol is a sophisticated web service architecture that enables seamless communication between 
                client and server applications. Implementing a complete web service protocol stack including transport (HTTP/S), 
                messaging (SOAP/XML), description (WSDL), and discovery (UDDI) protocols. The system facilitates publish, find, 
                and bind operations between service providers, requestors, and registries, ensuring interoperable machine-to-machine 
                interaction across networks :cite[2]:cite[5].
              </p>
              
                <a
             href="https://imbuga-protocol.netlify.app/"
              target='_blank'
              className=" bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors space-x-3 inline-flex items-center justify-center"
            >
               <span>Visit</span>
              <ArrowRight className="h-5 w-5 mr-2 animate-pulse" />
             
            </a>
            </div>
          </div>
        </div>

        {/* Project 3: SimpoPlanet */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-primary mb-2">MUSIC STUDIO & AUDIO PLATFORM</p>
              <h3 className="text-2xl font-bold">SimpoPlanet</h3>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                SimpoPlanet is a comprehensive music studio and audio services platform designed for artists, producers, 
                and audio enthusiasts. Featuring an integrated audio player with waveform visualization, the platform enables 
                music promotion, collaboration, and distribution. Built with responsive design principles, it includes 
                e-commerce capabilities for selling music and merchandise, event management tools, and fan engagement features. 
                The platform supports audio description services for accessibility compliance, making audio content available 
                to diverse audiences :cite[1]:cite[6].
              </p>
              
          <a
             href="https://simpostudio.netlify.app/"
              target='_blank'
              className=" bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors space-x-3 inline-flex items-center justify-center"
            >
               <span>Visit</span>
              <ArrowRight className="h-5 w-5 mr-2 animate-pulse" />
             
            </a>
            </div>
            
            <div className="glass-card p-4">
              <div className="bg-white rounded-lg p-6 text-black">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center text-sm font-medium">SimpoPlanet - Studio Interface</div>
                </div>
                <div className="space-y-3">
                  <img src={simpoImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;