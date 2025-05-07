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

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <SectionHeading 
          title="Selected Works" 
          subtitle="Explore a selection of our signature projects that demonstrate innovation, clarity, and craftsmanship."
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
                    ? 'bg-[#D35400] text-white'
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
                  View Project
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton href="#" variant="primary">
            View Full Portfolio
          </CTAButton>
        </div>
      </div>
    </section>
  );
}