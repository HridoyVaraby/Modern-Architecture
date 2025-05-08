import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';
import { cn } from '@/lib/utils';

export function About() {
  return (
    <section id="about" className="py-24 bg-[#F5F5F5] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#000000]/5 rounded-full -translate-y-1/2 translate-x-1/2 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#000000]/5 rounded-full translate-y-1/2 -translate-x-1/2 hidden md:block" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="max-w-xl">
            <SectionHeading 
              title="Our Vision is to Build the Future" 
              align="left"
              className="mb-4"
            />
            <div className="h-1 w-24 bg-black mb-6"></div>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className={cn(
                  "w-2 h-2 rounded-full",
                  i === 1 ? "bg-black" : "bg-gray-300"
                )} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                Modern Architecture is a Dhaka-based architecture and design firm delivering high-impact solutions for residential, commercial, and institutional spaces.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-8">
                Our design approach balances aesthetics, sustainability, and function — tailored to the unique needs of each client and context.
              </p>
              <div className="flex items-center">
                <CTAButton href="#about" variant="primary">
                  Learn More About Us
                </CTAButton>
                <div className="ml-4 h-px w-16 bg-gray-300 hidden md:block"></div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 border-2 border-black rounded-md transform translate-x-4 translate-y-4 hidden md:block" />
            <img 
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Modern office space with glass walls"
              className="w-full h-auto rounded-md shadow-lg relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#000000] rounded-md hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}