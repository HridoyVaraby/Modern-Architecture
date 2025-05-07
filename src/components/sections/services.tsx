import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';
import { Building2, Home, TreePine, PencilRuler } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Architectural Design',
    description: 'From concept to construction, we offer full-scale architectural services tailored to your project vision.',
    icon: Building2,
  },
  {
    id: 2,
    title: 'Interior Design',
    description: 'We create harmonious, modern interiors that enhance everyday living and reflect your personality.',
    icon: Home,
  },
  {
    id: 3,
    title: 'Urban Planning',
    description: 'Our team delivers smart, scalable planning for cities that want to grow sustainably.',
    icon: PencilRuler,
  },
  {
    id: 4,
    title: 'Landscape Architecture',
    description: 'Integrating natural elements into built environments for better living and well-being.',
    icon: TreePine,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#F5F5F5]">
      <div className="container">
        <SectionHeading 
          title="What We Offer" 
          subtitle="We provide a comprehensive range of services designed to meet your architectural and design needs."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#000000]/10 text-[#000000] mb-4">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#4F4F4F] mb-4 text-sm">{service.description}</p>
              <a 
                href="#" 
                className="text-[#000000] text-sm font-medium inline-flex items-center hover:underline"
              >
                Learn More 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton href="#" variant="primary">
            View All Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
}