import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

export function Commercial() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-[4.5rem]">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Commercial Architecture
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Innovative commercial spaces that enhance productivity, brand identity, and user experience.
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
                title="Commercial Design Excellence" 
                align="left"
                className="mb-4"
              />
              <div className="h-1 w-24 bg-black mb-6"></div>
              
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                Our commercial architecture services focus on creating spaces that not only look impressive but also function efficiently to support your business objectives and enhance user experience.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                We understand that commercial projects require a balance of aesthetics, functionality, brand identity, and return on investment. Our team works closely with clients to develop solutions that meet these complex requirements.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-8">
                From office buildings and retail spaces to hospitality venues and mixed-use developments, we bring creativity and technical expertise to every commercial project.
              </p>
              
              <CTAButton href="/contact" variant="primary">
                Start Your Commercial Project
              </CTAButton>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 border-2 border-black rounded-md transform translate-x-4 translate-y-4 hidden md:block" />
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern commercial architecture"
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
            title="Our Commercial Services" 
            subtitle="Comprehensive solutions for all your commercial architecture needs"
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Office Design',
                description: 'Innovative workplace solutions that enhance productivity, collaboration, and employee well-being.',
                icon: '🏢'
              },
              {
                title: 'Retail Architecture',
                description: 'Engaging retail environments that attract customers and enhance the shopping experience.',
                icon: '🛍️'
              },
              {
                title: 'Hospitality Design',
                description: 'Memorable hospitality spaces that delight guests and optimize operational efficiency.',
                icon: '🏨'
              },
              {
                title: 'Mixed-Use Developments',
                description: 'Integrated mixed-use projects that create vibrant, multi-functional urban environments.',
                icon: '🏙️'
              },
              {
                title: 'Workplace Renovations',
                description: 'Strategic renovations that transform existing commercial spaces to meet evolving business needs.',
                icon: '🔨'
              },
              {
                title: 'Commercial Master Planning',
                description: 'Comprehensive planning for commercial developments and business districts.',
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
            title="Featured Commercial Projects" 
            subtitle="A selection of our recent commercial architecture work"
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Urban Office Tower',
                description: 'A modern office building designed for flexibility and sustainability.',
                image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Boutique Retail Center',
                description: 'A distinctive retail environment that enhances the shopping experience.',
                image: 'https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Luxury Hotel',
                description: 'A hospitality project that balances luxury aesthetics with operational efficiency.',
                image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
              View All Commercial Projects
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#212121] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <SectionHeading 
            title="Ready to Transform Your Commercial Space?" 
            subtitle="Let's collaborate to create a commercial environment that drives success."
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