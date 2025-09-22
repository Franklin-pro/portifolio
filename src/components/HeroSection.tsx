import avatarImage from '@/assets/me.png';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Glow Effect */}
      <div className="hero-glow"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <p className="text-sm text-muted-foreground mb-4">
            Hello! I Am <span className="gradient-text font-medium">Franklin Developer</span>
          </p>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            A Designer who{' '}
            <br className="hidden lg:block" />
            Judges a book{' '}
            <br className="hidden lg:block" />
            by its <span className="gradient-text">Cover</span>...
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
            Because it's not as easy to know just what you want
          </p>
        </div>

        {/* Avatar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="glow-effect">
              <img 
                src={avatarImage} 
                alt="Portfolio Avatar" 
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;