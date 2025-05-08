import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';
import { cn } from '@/lib/utils';

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
    <section id="process" className="py-24 bg-[#212121] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 hidden md:block" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionHeading 
            title="Our Process" 
            align="center"
            className="text-white mb-4"
          />
          <div className="h-1 w-24 bg-white mb-6"></div>
          <p className="text-[#BDBDBD] max-w-2xl">
            Our streamlined process ensures quality, creativity, and transparency at every step.
          </p>
        </div>
        
        <div className="relative mt-16">
          {/* Process Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-white/80 via-white/50 to-white/20 transform md:-translate-x-1/2" />
          
          {/* Process Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={step.id}
                className={cn(
                  "relative flex items-start gap-6 md:gap-0",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white text-[#212121] flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className={cn(
                  "md:w-5/12",
                  index % 2 === 0 ? "md:pr-16 md:text-left md:ml-10" : "md:pl-16 md:text-right md:mr-10"
                )}>
                  <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-[#BDBDBD] leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Connector line for desktop */}
                  <div className={cn(
                    "absolute top-7 hidden md:block h-[2px] bg-white/30 w-16",
                    index % 2 === 0 ? "right-[calc(50%+2rem)]" : "left-[calc(50%+2rem)]"
                  )} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <CTAButton href="#" variant="primary" className="px-8 py-3 text-base">
            Discover Our Design Process
          </CTAButton>
        </div>
      </div>
    </section>
  );
}