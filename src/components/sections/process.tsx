import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

const processSteps = [
  {
    id: 1,
    title: 'Initial Consultation & Site Study',
    description: 'We begin by understanding your vision, requirements, and constraints through detailed discussions.',
    icon: '01',
  },
  {
    id: 2,
    title: 'Concept Design & 3D Visualization',
    description: 'Creating preliminary designs and 3D visualizations to help you see your project come to life.',
    icon: '02',
  },
  {
    id: 3,
    title: 'Client Feedback & Refinement',
    description: 'We collaborate closely with you to refine the design based on your feedback and preferences.',
    icon: '03',
  },
  {
    id: 4,
    title: 'Final Design & Documentation',
    description: 'Developing detailed construction drawings and specifications for project implementation.',
    icon: '04',
  },
  {
    id: 5,
    title: 'Construction Supervision',
    description: 'Providing oversight during the construction phase to ensure design integrity and quality.',
    icon: '05',
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-[#212121] text-white">
      <div className="container">
        <SectionHeading 
          title="Our Process" 
          subtitle="Our streamlined process ensures quality, creativity, and transparency at every step."
          className="text-white"
        />
        
        <div className="relative mt-16">
          {/* Process Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#4F4F4F] transform -translate-x-1/2 hidden md:block" />
          
          {/* Process Steps */}
          <div className="space-y-16 md:space-y-0">
            {processSteps.map((step, index) => (
              <div 
                key={step.id}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D35400] text-white flex items-center justify-center font-semibold text-lg relative z-10 mb-4 md:mb-0">
                  {step.icon}
                </div>
                
                {/* Content - alternating left and right */}
                <div className={`md:w-1/2 md:absolute ${index % 2 === 0 ? 'md:left-0 md:pr-16 md:text-right' : 'md:right-0 md:pl-16'}`}>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-[#BDBDBD] text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <CTAButton href="#" variant="primary">
            Discover Our Design Process
          </CTAButton>
        </div>
      </div>
    </section>
  );
}