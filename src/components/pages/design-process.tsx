import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

const designProcessSteps = [
  {
    id: 1,
    title: 'Discovery & Analysis',
    description: 'We begin with a thorough analysis of your needs, site conditions, and project goals to develop a deep understanding of your vision.',
    icon: '🔍',
    details: [
      'Client interviews and requirement gathering',
      'Site analysis and environmental assessment',
      'Regulatory and zoning review',
      'Budget and timeline evaluation',
      'Precedent studies and research'
    ]
  },
  {
    id: 2,
    title: 'Concept Development',
    description: 'Based on our analysis, we create initial design concepts that explore different approaches to meeting your project requirements.',
    icon: '💡',
    details: [
      'Preliminary sketches and diagrams',
      'Spatial organization strategies',
      'Massing and form studies',
      'Conceptual material palettes',
      'Initial sustainability strategies'
    ]
  },
  {
    id: 3,
    title: 'Design Refinement',
    description: 'Through collaborative sessions, we refine the chosen concept, incorporating your feedback and technical requirements.',
    icon: '✏️',
    details: [
      'Detailed floor plans and elevations',
      'Material and finish selections',
      'Structural and systems integration',
      'Interior space development',
      'Landscape and site design'
    ]
  },
  {
    id: 4,
    title: 'Documentation',
    description: 'We create comprehensive construction documents and specifications to ensure accurate implementation of the design.',
    icon: '📝',
    details: [
      'Construction drawings and details',
      'Material and product specifications',
      'Building code compliance',
      'Coordination with consultants',
      'Permit application support'
    ]
  },
  {
    id: 5,
    title: 'Bidding & Negotiation',
    description: 'We assist in selecting qualified contractors and negotiating favorable terms to ensure your project is in good hands.',
    icon: '🤝',
    details: [
      'Contractor prequalification',
      'Bid package preparation',
      'Bid evaluation and comparison',
      'Contract negotiation support',
      'Value engineering when needed'
    ]
  },
  {
    id: 6,
    title: 'Construction Administration',
    description: 'Our team provides oversight during construction to ensure the project is built according to design specifications.',
    icon: '🏗️',
    details: [
      'Regular site visits and observations',
      'Review of shop drawings and submittals',
      'Addressing field questions and issues',
      'Quality control monitoring',
      'Project closeout and documentation'
    ]
  },
];

const designPrinciples = [
  {
    title: 'User-Centered Design',
    description: 'We place the needs, preferences, and experiences of the end-users at the center of our design process.',
    icon: '👥'
  },
  {
    title: 'Contextual Harmony',
    description: 'Our designs respond thoughtfully to their physical, cultural, and historical context.',
    icon: '🌍'
  },
  {
    title: 'Sustainable Innovation',
    description: 'We integrate environmentally responsible strategies and innovative solutions throughout our work.',
    icon: '♻️'
  },
  {
    title: 'Timeless Aesthetics',
    description: 'We strive for designs that transcend trends and maintain their beauty and relevance over time.',
    icon: '⏱️'
  },
];

const testimonials = [
  {
    quote: "The design process was transparent and collaborative from start to finish. The team's attention to detail and ability to translate our vision into reality exceeded our expectations.",
    author: "Sarah Johnson",
    position: "Homeowner, Riverside Residence",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Working with Modern Architecture transformed our commercial space into a landmark that perfectly represents our brand while providing an exceptional experience for our customers.",
    author: "Michael Chen",
    position: "CEO, Harmony Heights Development",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The team's methodical approach to the design process ensured that every aspect of our complex institutional project was carefully considered and beautifully executed.",
    author: "Dr. Amina Patel",
    position: "Director, National Education Center",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

function DesignProcess() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-[4.5rem]">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our Design Process
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              A thoughtful, collaborative approach that transforms your vision into exceptional architectural reality.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Our Approach" 
            subtitle="We follow a comprehensive, client-centered process to ensure every project achieves excellence in both form and function."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="bg-[#F5F5F5] p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-[#4F4F4F]">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Our Design Process" 
            subtitle="A structured yet flexible approach that guides each project from initial concept to successful completion."
            align="center"
            className="mb-16"
          />
          
          <div className="space-y-16">
            {designProcessSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step number indicator */}
                <div className="absolute left-0 top-0 -mt-6 text-8xl font-bold text-black/5 select-none hidden md:block">
                  {String(step.id).padStart(2, '0')}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                  {/* Left content - Icon and title */}
                  <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm z-10">
                    <div className="text-5xl mb-6">{step.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-[#4F4F4F] mb-6">{step.description}</p>
                    
                    {index < designProcessSteps.length - 1 && (
                      <div className="hidden md:block absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 z-20">
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Right content - Details */}
                  <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-sm">
                    <h4 className="text-lg font-medium mb-4">What happens in this phase:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-black mr-2">•</span>
                          <span className="text-[#4F4F4F]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Client Experiences" 
            subtitle="Hear from our clients about their journey through our design process."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#F5F5F5] p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-[#4F4F4F]">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-[#4F4F4F] italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Design Journey?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to transform your vision into an exceptional architectural reality. Contact us today to start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton href="/contact" variant="primary">
              Schedule a Consultation
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

export default DesignProcess;