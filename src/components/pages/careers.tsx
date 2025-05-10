import { SectionHeading } from '@/components/common/section-heading';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/common/cta-button';

const openings = [
  {
    id: 1,
    title: 'Senior Architect',
    location: 'Dhaka',
    type: 'Full-time',
    experience: '5+ years',
    description: 'We are seeking an experienced architect to lead project teams and mentor junior staff.',
  },
  {
    id: 2,
    title: 'Interior Designer',
    location: 'Dhaka',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Looking for a creative interior designer with experience in high-end residential projects.',
  },
  {
    id: 3,
    title: 'Junior Architect',
    location: 'Dhaka',
    type: 'Full-time',
    experience: '0-2 years',
    description: 'Great opportunity for recent graduates to join our dynamic team.',
  },
  {
    id: 4,
    title: 'Landscape Architect',
    location: 'Dhaka',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Seeking a landscape architect with experience in urban and residential projects.',
  },
];

const benefits = [
  {
    title: 'Professional Growth',
    description: 'Continuous learning opportunities and mentorship from industry experts.',
    icon: '📈'
  },
  {
    title: 'Creative Environment',
    description: 'Work in a collaborative space that fosters innovation and design excellence.',
    icon: '🎨'
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working hours and a supportive culture that values personal wellbeing.',
    icon: '⚖️'
  },
  {
    title: 'Competitive Compensation',
    description: 'Attractive salary packages and performance-based bonuses.',
    icon: '💰'
  },
];

function Careers() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Join Our Team
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Be part of a creative team dedicated to shaping the future of architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Current Openings" 
            subtitle="Explore career opportunities at Modern Architecture."
            align="center"
            className="mb-12"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {openings.map((job) => (
                <div 
                  key={job.id}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <span className="text-sm text-[#4F4F4F] bg-gray-100 px-3 py-1 rounded-full">{job.location}</span>
                        <span className="text-sm text-[#4F4F4F] bg-gray-100 px-3 py-1 rounded-full">{job.type}</span>
                        <span className="text-sm text-[#4F4F4F] bg-gray-100 px-3 py-1 rounded-full">{job.experience}</span>
                      </div>
                    </div>
                    <Button variant="default" className="md:self-start">
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-[#4F4F4F]">{job.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-[#F5F5F5] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Don't see a suitable position?</h3>
              <p className="text-[#4F4F4F] mb-6">
                We're always looking for talented individuals to join our team. Send us your portfolio and resume, and we'll keep you in mind for future opportunities.
              </p>
              <Button variant="outline">
                Send Open Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Why Work With Us" 
            subtitle="Discover the benefits of being part of the Modern Architecture team."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-[#4F4F4F]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Our Culture" 
                subtitle="We foster a collaborative environment where creativity thrives."
                align="left"
                className="mb-8"
              />
              
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                At Modern Architecture, we believe that great design comes from diverse perspectives and collaborative thinking. Our team members are encouraged to share ideas, challenge conventions, and push the boundaries of architectural possibility.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-8">
                We invest in our people through continuous professional development, mentorship programs, and opportunities to work on a diverse range of projects. Our studio is designed to inspire creativity and foster connection between team members.
              </p>
              
              <CTAButton href="#" variant="primary">
                Learn More About Our Culture
              </CTAButton>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration in our studio"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team members discussing a project"
                className="w-full h-auto rounded-md shadow-lg mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Design review session"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team building activity"
                className="w-full h-auto rounded-md shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Explore our current openings or send us your portfolio to be considered for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton href="#" variant="primary">
              View Current Openings
            </CTAButton>
            <CTAButton href="#" variant="secondary">
              Send Open Application
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;