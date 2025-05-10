import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

export function Institutional() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-[4.5rem]">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Institutional Architecture
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Purpose-built institutional facilities that serve communities and foster learning and growth.
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
                title="Institutional Design Excellence" 
                align="left"
                className="mb-4"
              />
              <div className="h-1 w-24 bg-black mb-6"></div>
              
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                Our institutional architecture services focus on creating spaces that support education, healthcare, cultural activities, and civic engagement while reflecting the values and mission of the organizations they serve.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                We understand that institutional projects require thoughtful consideration of diverse user needs, operational efficiency, and long-term flexibility. Our team works closely with stakeholders to develop solutions that meet these complex requirements.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-8">
                From educational facilities and healthcare buildings to cultural centers and civic institutions, we bring creativity, technical expertise, and a collaborative approach to every institutional project.
              </p>
              
              <CTAButton href="/contact" variant="primary">
                Start Your Institutional Project
              </CTAButton>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 border-2 border-black rounded-md transform translate-x-4 translate-y-4 hidden md:block" />
              <img 
                src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern institutional architecture"
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
            title="Our Institutional Services" 
            subtitle="Comprehensive solutions for all your institutional architecture needs"
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Educational Facilities',
                description: 'Innovative learning environments that support modern pedagogical approaches and enhance student experience.',
                icon: '🏫'
              },
              {
                title: 'Healthcare Architecture',
                description: 'Healing environments that optimize patient care, staff efficiency, and medical outcomes.',
                icon: '🏥'
              },
              {
                title: 'Cultural & Civic Buildings',
                description: 'Inspiring spaces for cultural activities, community engagement, and civic functions.',
                icon: '🏛️'
              },
              {
                title: 'Research Facilities',
                description: 'Specialized environments that support innovation, collaboration, and scientific advancement.',
                icon: '🔬'
              },
              {
                title: 'Institutional Renovations',
                description: 'Strategic renovations that transform existing facilities to meet evolving institutional needs.',
                icon: '🔨'
              },
              {
                title: 'Campus Master Planning',
                description: 'Comprehensive planning for educational, healthcare, and civic campuses.',
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
            title="Featured Institutional Projects" 
            subtitle="A selection of our recent institutional architecture work"
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'University Learning Center',
                description: 'A modern educational facility designed to support collaborative learning.',
                image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Community Health Center',
                description: 'A healthcare facility designed to enhance patient experience and staff efficiency.',
                image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Public Library',
                description: 'A civic building that serves as a community hub for learning and engagement.',
                image: 'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
              View All Institutional Projects
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#212121] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <SectionHeading 
            title="Ready to Create an Impactful Institutional Space?" 
            subtitle="Let's collaborate to design facilities that support your mission and serve your community."
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