import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

function Landscape() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-[4.5rem]">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Landscape Architecture
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Thoughtful integration of natural elements into built environments for better living and well-being.
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
                title="Landscape Design Excellence" 
                align="left"
                className="mb-4"
              />
              <div className="h-1 w-24 bg-black mb-6"></div>
              
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                Our landscape architecture services focus on creating outdoor spaces that harmonize with the natural environment while enhancing the built context and user experience.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                We believe that thoughtful landscape design can transform environments, improve ecological health, and create meaningful connections between people and nature.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-8">
                From residential gardens and urban plazas to campus landscapes and ecological restoration projects, we bring creativity, environmental sensitivity, and technical expertise to every landscape project.
              </p>
              
              <CTAButton href="/contact" variant="primary">
                Start Your Landscape Project
              </CTAButton>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 border-2 border-black rounded-md transform translate-x-4 translate-y-4 hidden md:block" />
              <img 
                src="https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern landscape architecture"
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
            title="Our Landscape Services" 
            subtitle="Comprehensive solutions for all your landscape architecture needs"
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Landscapes',
                description: 'Personalized outdoor spaces that extend your living environment and connect you with nature.',
                icon: '🏡'
              },
              {
                title: 'Urban Landscapes',
                description: 'Public spaces and urban interventions that enhance city life and promote community engagement.',
                icon: '🏙️'
              },
              {
                title: 'Campus & Institutional',
                description: 'Cohesive landscape designs for educational, healthcare, and corporate campuses.',
                icon: '🏫'
              },
              {
                title: 'Parks & Recreation',
                description: 'Engaging recreational spaces that promote physical activity, social interaction, and connection with nature.',
                icon: '🌳'
              },
              {
                title: 'Ecological Restoration',
                description: 'Environmental restoration projects that enhance biodiversity and ecosystem health.',
                icon: '🌿'
              },
              {
                title: 'Landscape Master Planning',
                description: 'Comprehensive planning for large-scale landscape developments and natural systems.',
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
            title="Featured Landscape Projects" 
            subtitle="A selection of our recent landscape architecture work"
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Urban Plaza',
                description: 'A vibrant public space that serves as a community gathering place.',
                image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Residential Garden',
                description: 'A private garden that creates a peaceful retreat and extends the living space.',
                image: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Campus Landscape',
                description: 'A cohesive landscape design that enhances the institutional environment.',
                image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
              View All Landscape Projects
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#212121] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <SectionHeading 
            title="Ready to Transform Your Outdoor Space?" 
            subtitle="Let's collaborate to create landscapes that inspire and connect people with nature."
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

export default Landscape;