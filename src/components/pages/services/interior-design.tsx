import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';
import { useEffect } from 'react';

export default function InteriorDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-[4.5rem]">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Interior Design
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Creating harmonious interior spaces that reflect your personality and enhance everyday living.
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
                title="Interior Design Excellence" 
                align="left"
                className="mb-4"
              />
              <div className="h-1 w-24 bg-black mb-6"></div>
              
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                Our interior design services focus on creating spaces that not only look beautiful but also function perfectly for your lifestyle or business needs.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                We believe that great interior design balances aesthetics, functionality, and personal expression. Our team works closely with clients to understand their preferences, needs, and aspirations.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-8">
                From residential interiors to commercial and hospitality spaces, we bring creativity, attention to detail, and technical expertise to every project.
              </p>
              
              <CTAButton href="/contact" variant="primary">
                Start Your Interior Design Project
              </CTAButton>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 border-2 border-black rounded-md transform translate-x-4 translate-y-4 hidden md:block" />
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern interior design"
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
            title="Our Interior Design Services" 
            subtitle="Comprehensive solutions for all your interior design needs"
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Interiors',
                description: 'Personalized interior design for homes that reflect your lifestyle and personality.',
                icon: '🏠'
              },
              {
                title: 'Commercial Interiors',
                description: 'Functional and inspiring workplace designs that enhance productivity and brand identity.',
                icon: '🏢'
              },
              {
                title: 'Hospitality Interiors',
                description: 'Memorable interior environments for hotels, restaurants, and leisure facilities.',
                icon: '🏨'
              },
              {
                title: 'Space Planning',
                description: 'Strategic space planning that optimizes flow, functionality, and spatial relationships.',
                icon: '📐'
              },
              {
                title: 'Furniture & Material Selection',
                description: 'Expert selection of furniture, finishes, and materials that align with your design vision.',
                icon: '🪑'
              },
              {
                title: 'Lighting Design',
                description: 'Thoughtful lighting solutions that enhance atmosphere, functionality, and visual comfort.',
                icon: '💡'
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
            title="Featured Interior Projects" 
            subtitle="A selection of our recent interior design work"
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Modern Apartment',
                description: 'A contemporary residential interior that balances style and comfort.',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Creative Office',
                description: 'A workplace design that fosters collaboration and creativity.',
                image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Boutique Hotel',
                description: 'A hospitality interior that creates a unique and memorable guest experience.',
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
              View All Interior Projects
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#212121] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <SectionHeading 
            title="Ready to Transform Your Interior Space?" 
            subtitle="Let's collaborate to create interiors that inspire and delight."
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