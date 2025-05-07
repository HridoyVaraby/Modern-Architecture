import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

export function About() {
  return (
    <section id="about" className="py-20 bg-[#F5F5F5]">
      <div className="container">
        <SectionHeading 
          title="Our Vision is to Build the Future" 
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#4F4F4F] mb-6">
              Modern Architecture is a Dhaka-based architecture and design firm delivering high-impact solutions for residential, commercial, and institutional spaces.
            </p>
            <p className="text-[#4F4F4F] mb-8">
              Our design approach balances aesthetics, sustainability, and function — tailored to the unique needs of each client and context.
            </p>
            <CTAButton href="#about" variant="primary">
              Learn More About Us
            </CTAButton>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Modern office space with glass walls"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D35400] rounded-md hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}