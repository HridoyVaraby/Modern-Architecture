import { useState } from 'react';
import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'institutional', name: 'Institutional' },
];

const projects = [
  {
    id: 1,
    title: 'The Urban Courtyard',
    category: 'residential',
    location: 'Dhaka, Bangladesh',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Riverside Residence',
    category: 'residential',
    location: 'Dhaka, Bangladesh',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Harmony Heights',
    category: 'commercial',
    location: 'Dhaka, Bangladesh',
    image: 'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const processSteps = [
  {
    id: 1,
    title: 'Concept Development',
    description: 'We begin with a thorough analysis of your needs, site conditions, and project goals to develop initial design concepts.',
    icon: '💡',
  },
  {
    id: 2,
    title: 'Design Refinement',
    description: 'Through collaborative sessions, we refine the design, incorporating your feedback and technical requirements.',
    icon: '✏️',
  },
  {
    id: 3,
    title: 'Documentation',
    description: 'We create detailed construction documents and specifications to ensure accurate implementation of the design.',
    icon: '📝',
  },
  {
    id: 4,
    title: 'Project Realization',
    description: 'Our team provides oversight during construction to ensure the project is built according to design specifications.',
    icon: '🏗️',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-[4.5rem]">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our Portfolio
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Explore our diverse collection of architectural projects that showcase our commitment to innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Discover our most notable works across various architectural domains."
            align="center"
            className="mb-12"
          />
          
          {/* Category Filter */}
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    activeCategory === category.id
                      ? 'bg-[#000000] text-white'
                      : 'bg-[#F5F5F5] text-[#4F4F4F] hover:bg-[#BDBDBD]'
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group overflow-hidden rounded-md bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[#4F4F4F] text-sm mb-4">{project.location}</p>
                  <CTAButton href="#" variant="secondary" className="text-sm py-1 px-4">
                    View Details
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Our Project Process" 
            subtitle="We follow a structured approach to ensure every project meets our high standards of quality and innovation."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#4F4F4F]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your architectural vision to life. Contact us today to discuss your project needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton href="/contact" variant="primary">
              Contact Us
            </CTAButton>
            <CTAButton href="/services" variant="secondary">
              Explore Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}