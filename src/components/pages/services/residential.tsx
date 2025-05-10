import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

function Residential() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-[4.5rem]">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Residential Architecture
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Creating thoughtful, functional, and beautiful living spaces that enhance everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Residential Design Excellence" 
                align="left"
                className="mb-4"
              />
              <div className="h-1 w-24 bg-black mb-6"></div>
              
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                Our residential architecture services focus on creating homes that reflect your lifestyle, preferences, and needs while maintaining the highest standards of design excellence.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                Whether you're looking to build a new custom home, renovate an existing residence, or add an extension, our team brings creativity, technical expertise, and attention to detail to every project.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-8">
                We believe that great residential design balances aesthetics, functionality, sustainability, and context to create spaces that truly enhance how you live.
              </p>
              
              <CTAButton href="/contact" variant="primary">
                Start Your Residential Project
              </CTAButton>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 border-2 border-black rounded-md transform translate-x-4 translate-y-4 hidden md:block" />
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern residential architecture"
                className="w-full h-auto rounded-md shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Our Residential Services" 
            subtitle="Comprehensive solutions for all your residential architecture needs"
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Home Design',
                description: 'Bespoke residential designs tailored to your unique lifestyle, preferences, and site conditions.',
                icon: '🏠'
              },
              {
                title: 'Home Renovations',
                description: 'Thoughtful renovations that transform existing spaces while respecting the original character of your home.',
                icon: '🔨'
              },
              {
                title: 'Additions & Extensions',
                description: 'Seamless additions that expand your living space while enhancing the overall design of your home.',
                icon: '📐'
              },
              {
                title: 'Interior Architecture',
                description: 'Comprehensive interior architectural services that optimize space, flow, and functionality.',
                icon: '🪑'
              },
              {
                title: 'Sustainable Home Design',
                description: 'Eco-friendly residential solutions that reduce environmental impact and energy consumption.',
                icon: '♻️'
              },
              {
                title: 'Residential Master Planning',
                description: 'Strategic planning for residential developments and multi-family housing projects.',
                icon: '📋'
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[#4F4F4F]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Featured Residential Projects" 
            subtitle="A selection of our recent residential architecture work"
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Lakeside Retreat',
                description: 'A modern family home designed to maximize views and natural light.',
                image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Urban Townhouse',
                description: 'A sophisticated townhouse renovation in the heart of the city.',
                image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Hillside Villa',
                description: 'A luxury residence designed to blend with its natural surroundings.',
                image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/90 mb-4">{project.description}</p>
                  <a href="/portfolio" className="text-white underline underline-offset-4">View Project</a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <CTAButton href="/portfolio" variant="secondary">
              View All Residential Projects
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#212121] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <SectionHeading 
            title="Ready to Create Your Dream Home?" 
            subtitle="Let's collaborate to bring your residential vision to life."
            align="center"
            className="mb-10 text-white"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">
              Contact Us
            </CTAButton>
            <CTAButton href="/portfolio" variant="secondary">
              View Our Portfolio
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default Residential;