import { useState } from 'react';
import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

const categories = [
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'institutional', name: 'Institutional' },
  { id: 'interior-design', name: 'Interior Design' },
  { id: 'landscape', name: 'Landscape Architecture' },
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
  {
    id: 4,
    title: 'Central Library',
    category: 'institutional',
    location: 'Dhaka, Bangladesh',
    image: 'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Luxury Penthouse',
    category: 'interior-design',
    location: 'Dhaka, Bangladesh',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Urban Park',
    category: 'landscape',
    location: 'Dhaka, Bangladesh',
    image: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const path = window.location.pathname;
  const currentCategory = path.split('/').pop() || 'all';
  
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
            backgroundImage: 'url("https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our Portfolio
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Explore our diverse range of architectural projects across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === 'all' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
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
                    View Project
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
            subtitle="How we bring architectural visions to life from concept to completion."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We begin by understanding your needs, vision, and project requirements.'
              },
              {
                step: '02',
                title: 'Concept Design',
                description: 'Our team develops initial design concepts based on your requirements.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'We refine the chosen concept into detailed architectural plans.'
              },
              {
                step: '04',
                title: 'Execution',
                description: 'We oversee the construction process to ensure design integrity.'
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                  <div className="text-3xl font-bold text-black/20 mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-[#4F4F4F]">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
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
            Let's collaborate to bring your architectural vision to life. Contact us today for a consultation.
          </p>
          <CTAButton href="/contact" variant="primary" className="mx-auto">
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </>
  );
}