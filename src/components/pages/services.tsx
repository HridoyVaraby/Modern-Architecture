import { Routes, Route, Link } from 'react-router-dom';
import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

// Import service subpages
import Residential from './services/residential';
import Commercial from './services/commercial';
import Institutional from './services/institutional';
import InteriorDesign from './services/interior-design';
import Landscape from './services/landscape';

function Services() {
  return (
    <>
      <Routes>
        <Route path="" element={<ServicesHome />} />
        <Route path="residential" element={<Residential />} />
        <Route path="commercial" element={<Commercial />} />
        <Route path="institutional" element={<Institutional />} />
        <Route path="interior-design" element={<InteriorDesign />} />
        <Route path="landscape" element={<Landscape />} />
      </Routes>
    </>  
  );
}

function ServicesHome() {
  return <ServicesContent />;
}

function ServicesContent() {
  
  const services = [
  {
    id: 'architectural-design',
    title: 'Architectural Design',
    description: 'Comprehensive architectural design services for residential, commercial, and institutional projects.',
    icon: '🏛️',
    features: [
      'Concept Development',
      'Schematic Design',
      'Design Development',
      'Construction Documentation',
      'Building Information Modeling (BIM)',
    ],
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'residential'
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'Thoughtful interior design solutions that balance aesthetics, functionality, and client needs.',
    icon: '🪑',
    features: [
      'Space Planning',
      'Material Selection',
      'Furniture Design & Specification',
      'Lighting Design',
      'Color & Texture Consultation',
    ],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'interior-design',
  },
  {
    id: 'urban-planning',
    title: 'Urban Planning',
    description: 'Strategic urban planning services that create sustainable, livable, and vibrant communities.',
    icon: '🏙️',
    features: [
      'Master Planning',
      'Urban Design Guidelines',
      'Public Space Design',
      'Transit-Oriented Development',
      'Sustainable Urban Solutions',
    ],
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'institutional',
  },
  {
    id: 'landscape-architecture',
    title: 'Landscape Architecture',
    description: 'Creating harmonious outdoor spaces that complement architectural designs and enhance the environment.',
    icon: '🌳',
    features: [
      'Site Analysis & Planning',
      'Hardscape & Softscape Design',
      'Water Feature Design',
      'Sustainable Landscape Solutions',
      'Outdoor Lighting Design',
    ],
    image: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'landscape',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Comprehensive project management services to ensure successful project delivery from concept to completion.',
    icon: '📋',
    features: [
      'Budget Development & Monitoring',
      'Schedule Development & Tracking',
      'Contractor Selection & Coordination',
      'Construction Administration',
      'Quality Control & Assurance',
    ],
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'commercial',
  },
  {
    id: 'sustainable-design',
    title: 'Sustainable Design',
    description: 'Environmentally responsible design solutions that minimize ecological impact and maximize resource efficiency.',
    icon: '♻️',
    features: [
      'Green Building Certification',
      'Energy Modeling & Analysis',
      'Passive Design Strategies',
      'Renewable Energy Integration',
      'Sustainable Material Selection',
    ],
    image: 'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'residential',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a thorough consultation to understand your vision, requirements, and project goals.',
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'Our team develops initial design concepts based on your requirements and our site analysis.',
  },
  {
    number: '03',
    title: 'Design Refinement',
    description: 'We refine the chosen concept through collaborative feedback and detailed development.',
  },
  {
    number: '04',
    title: 'Documentation',
    description: 'Comprehensive construction documents are prepared for permitting and construction.',
  },
  {
    number: '05',
    title: 'Construction Support',
    description: 'We provide ongoing support during the construction phase to ensure design integrity.',
  },
];

// Continue ServicesContent implementation
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-10">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Comprehensive architectural and design services tailored to your unique vision and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="What We Offer" 
            subtitle="Explore our comprehensive range of architectural and design services."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-[#4F4F4F] mb-4">{service.description}</p>
                  <Link 
                    to={service.href} 
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, index) => (
        <section 
          id={service.id}
          key={service.id} 
          className={`py-24 ${index % 2 === 0 ? 'bg-[#F5F5F5]' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <SectionHeading 
                  title={service.title} 
                  align="left"
                  className="mb-6"
                />
                
                <p className="text-[#4F4F4F] text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <h4 className="text-lg font-semibold mb-4">Our Approach</h4>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      <span className="text-[#4F4F4F]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <CTAButton href="/contact" variant="primary">
                  Discuss Your Project
                </CTAButton>
              </div>
              
              <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-black rounded-md transform translate-x-4 translate-y-4 hidden md:block" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto rounded-md shadow-lg relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Process */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Our Process" 
            subtitle="How we bring your architectural vision to life from concept to completion."
            align="center"
            className="mb-16"
          />
          
          <div className="relative">
            {/* Process Timeline (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-black/10 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-lg shadow-sm h-full z-10 relative">
                    <div className="text-3xl font-bold text-black/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-[#4F4F4F]">{step.description}</p>
                  </div>
                  
                  {/* Timeline Node (Desktop) */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 z-20" />
                  
                  {/* Arrow (Desktop) */}
                  {index < processSteps.length - 1 && (
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services."
            align="center"
            className="mb-16"
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What types of projects do you work on?',
                answer: 'We work on a diverse range of projects including residential homes, commercial buildings, institutional facilities, interior design, urban planning, and landscape architecture. Our team has experience with projects of various scales, from small renovations to large-scale developments.'
              },
              {
                question: 'How long does a typical architectural project take?',
                answer: 'Project timelines vary depending on scope and complexity. A residential project typically takes 3-6 months for design and documentation, while larger commercial projects may take 6-12 months or more. Construction timelines are additional and depend on the project scale.'
              },
              {
                question: 'What is your design process?',
                answer: 'Our design process includes initial consultation, concept development, schematic design, design development, construction documentation, and construction administration. We work closely with clients at each stage to ensure their vision is realized.'
              },
              {
                question: 'How do you charge for your services?',
                answer: 'Our fee structure is typically based on a percentage of the construction cost or a fixed fee depending on the project type and scope. We provide detailed fee proposals after the initial consultation.'
              },
              {
                question: 'Do you handle the construction phase?',
                answer: 'While we don\'t act as contractors, we provide construction administration services to ensure the design is executed according to specifications. We work closely with contractors and make regular site visits during construction.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#F5F5F5] p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-[#4F4F4F]">{faq.answer}</p>
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
            Contact us today to discuss your architectural needs and how we can bring your vision to life.
          </p>
          <CTAButton href="/contact" variant="primary" className="mx-auto">
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </>
  );
}

export default Services;