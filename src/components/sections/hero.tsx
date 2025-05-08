import { CTAButton } from '@/components/common/cta-button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 mt-20">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white text-sm md:text-base uppercase font-medium tracking-wider block mb-4">
              Modern Architecture
            </span>
            Shaping Space. Inspiring Life.
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
            We create thoughtful, functional, and timeless architecture rooted in design excellence and contextual relevance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="#projects" variant="primary">
              Explore Our Projects
            </CTAButton>
            <CTAButton href="#contact" variant="secondary">
              Book a Consultation
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}