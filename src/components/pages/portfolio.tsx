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
];

export function Portfolio() {
  const path = window.location.pathname;
  const currentCategory = path.split('/').pop() || 'all';
  
  const filteredProjects = currentCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === currentCategory);
  
  return (
    <div className="pt-24">
      <div className="container">
        <SectionHeading 
          title="Our Portfolio" 
          subtitle="Explore our diverse range of architectural projects across various sectors."
        />
        
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
    </div>
  );
}