import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Homeowner',
    quote: 'Working with Modern Architecture was a dream come true. They transformed our vision into a beautiful home that exceeds all our expectations. Their attention to detail and commitment to sustainability made all the difference.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    project: 'Residential Villa',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rahman',
    position: 'CEO, TechSpace Inc.',
    quote: 'The team at Modern Architecture delivered an office space that perfectly balances functionality and aesthetics. Our employees love the new environment, and it has significantly improved productivity and collaboration.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    project: 'Corporate Headquarters',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amina Khan',
    position: 'Principal, International School',
    quote: 'The innovative design of our new campus has transformed the educational experience for our students. Modern Architecture understood our needs and created spaces that inspire learning and creativity.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    project: 'Educational Campus',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Chen',
    position: 'Restaurant Owner',
    quote: 'Our restaurant design has become a talking point among customers. Modern Architecture created a space that enhances the dining experience while being highly functional for our staff. Couldn\'t be happier with the results.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    project: 'Fine Dining Restaurant',
    rating: 5,
  },
  {
    id: 5,
    name: 'Fatima Ahmed',
    position: 'Director, Wellness Center',
    quote: 'The serene and healing environment created by Modern Architecture has been instrumental in the success of our wellness center. Their understanding of how space affects wellbeing is truly remarkable.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    project: 'Wellness & Spa Center',
    rating: 5,
  },
  {
    id: 6,
    name: 'Raj Patel',
    position: 'Property Developer',
    quote: 'We\'ve partnered with Modern Architecture on multiple projects, and they consistently deliver exceptional designs that stand out in the market. Their professionalism and creativity make them our go-to architectural firm.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    project: 'Mixed-Use Development',
    rating: 5,
  },
];

const videoTestimonials = [
  {
    id: 1,
    name: 'The Urban Courtyard Project',
    client: 'Rahman Family',
    thumbnail: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'TechSpace Headquarters',
    client: 'TechSpace Inc.',
    thumbnail: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'International School Campus',
    client: 'Education Foundation',
    thumbnail: 'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const stats = [
  { value: '95%', label: 'Client Satisfaction' },
  { value: '120+', label: 'Completed Projects' },
  { value: '15+', label: 'Industry Awards' },
  { value: '10+', label: 'Years of Excellence' },
];

export function Testimonials() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Client Testimonials
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Hear what our clients have to say about their experience working with Modern Architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-[#4F4F4F]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Read testimonials from clients who have experienced our architectural services."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#4F4F4F] italic mb-6">"{testimonial.quote}"</p>
                  <p className="text-sm text-[#4F4F4F] mb-1">Project: {testimonial.project}</p>
                </div>
                <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-[#4F4F4F]">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Video Testimonials" 
            subtitle="Watch our clients share their experience working with Modern Architecture."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id}
                className="group overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{video.name}</h3>
                  <p className="text-[#4F4F4F] text-sm">Client: {video.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Our Clients" 
            subtitle="We've had the privilege of working with these esteemed organizations."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-gray-300">LOGO {index + 1}</div>
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
            Join our satisfied clients and experience the Modern Architecture difference. Contact us today for a consultation.
          </p>
          <CTAButton href="/contact" variant="primary" className="mx-auto">
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </>
  );
}