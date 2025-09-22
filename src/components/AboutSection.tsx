const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          I'm a Software Engineer.|
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8">
          Currently, I'm a Software Engineer at{' '}
          <span className="gradient-text font-medium">Qonics Inc</span>
        </p>
        
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <p className="text-foreground/90 leading-relaxed">
            A self-taught UI/UX designer, functioning in the industry for 3+ years now. 
            I make meaningful and delightful digital products that create an equilibrium 
            between user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;