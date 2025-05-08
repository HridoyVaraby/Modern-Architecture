import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    content: "Modern Architecture transformed our space beyond expectations. Their creativity, professionalism, and attention to detail are unmatched.",
    author: "Farzana Rahman",
    location: "Dhaka",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    content: "Working with this team was a pleasure from start to finish. They truly understood our vision and brought it to life beautifully.",
    author: "Ahmed Hassan",
    location: "Chittagong",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    content: "Their innovative approach to sustainable design has made our commercial building both beautiful and energy efficient.",
    author: "Samira Khan",
    location: "Dhaka",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Our clients' satisfaction is our greatest measure of success and source of inspiration."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={cn(
                "bg-white p-6 rounded-md shadow-sm relative",
                index === 0 ? "md:col-span-1" : ""
              )}
            >
              <div className="mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-[#D35400] opacity-30" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[#4F4F4F] mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover mr-3" 
                />
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-[#4F4F4F]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton href="#" variant="primary">
            Read More Testimonials
          </CTAButton>
        </div>
      </div>
    </section>
  );
}