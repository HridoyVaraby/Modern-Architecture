import { SectionHeading } from '@/components/common/section-heading';
import { CTAButton } from '@/components/common/cta-button';

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-[4.5rem]">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              About Us
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Learn about our journey, our team, and our vision for the future of architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Our Vision is to Build the Future" 
                align="left"
                className="mb-4"
              />
              <div className="h-1 w-24 bg-black mb-6"></div>
              
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                Modern Architecture is a Dhaka-based architecture and design firm delivering high-impact solutions for residential, commercial, and institutional spaces.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-5">
                Our design approach balances aesthetics, sustainability, and function — tailored to the unique needs of each client and context.
              </p>
              <p className="text-[#4F4F4F] text-lg leading-relaxed mb-8">
                Founded in 2010, we have grown from a small team of passionate architects to a full-service design studio with expertise across multiple disciplines.
              </p>
              
              <CTAButton href="#team" variant="primary">
                Meet Our Team
              </CTAButton>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 border-2 border-black rounded-md transform translate-x-4 translate-y-4 hidden md:block" />
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team collaborating on a project"
                className="w-full h-auto rounded-md shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide our work and define our practice."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Design Excellence',
                description: 'We pursue excellence in every aspect of our design process, from concept to completion.',
                icon: '✏️'
              },
              {
                title: 'Sustainability',
                description: 'We create environmentally responsible designs that minimize ecological impact and maximize resource efficiency.',
                icon: '🌱'
              },
              {
                title: 'Client Focus',
                description: 'We listen carefully to our clients\' needs and aspirations, ensuring our designs exceed expectations.',
                icon: '👥'
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and methodologies to push the boundaries of architectural possibility.',
                icon: '💡'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and partnership to create exceptional outcomes.',
                icon: '🤝'
              },
              {
                title: 'Cultural Sensitivity',
                description: 'We respect and respond to the cultural and social contexts in which our projects exist.',
                icon: '🌍'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-[#4F4F4F]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The talented professionals behind our award-winning designs."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ahmed Rahman',
                position: 'Principal Architect & Founder',
                bio: 'With over 20 years of experience, Ahmed leads our firm with vision and expertise.',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                name: 'Fatima Khan',
                position: 'Senior Architect',
                bio: 'Fatima specializes in sustainable design and has led many of our award-winning projects.',
                image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                name: 'Rahul Chowdhury',
                position: 'Interior Design Director',
                bio: 'Rahul brings spaces to life with his innovative approach to interior architecture.',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                name: 'Nadia Islam',
                position: 'Project Manager',
                bio: 'Nadia ensures our projects are delivered on time, on budget, and to the highest standards.',
                image: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                name: 'Kamal Hossain',
                position: 'Landscape Architect',
                bio: 'Kamal creates harmonious outdoor spaces that complement our architectural designs.',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                name: 'Priya Sharma',
                position: 'Junior Architect',
                bio: 'Priya brings fresh perspectives and creative energy to our design team.',
                image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
            ].map((member, index) => (
              <div key={index} className="group overflow-hidden rounded-lg bg-[#F5F5F5]">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#000000] font-medium text-sm mb-3">{member.position}</p>
                  <p className="text-[#4F4F4F] text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Our Achievements" 
            subtitle="Recognition of our commitment to excellence in architecture and design."
            align="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Awards & Recognition</h3>
              <ul className="space-y-4">
                {[
                  'Bangladesh Architectural Excellence Award, 2022',
                  'International Green Building Certification, 2021',
                  'South Asian Design Innovation Award, 2020',
                  'Urban Development Recognition, Dhaka City Corporation, 2019',
                  'Sustainable Design Award, Architecture Foundation, 2018'
                ].map((award, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-[#4F4F4F]">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '100+', label: 'Completed Projects' },
                  { number: '15+', label: 'Years of Experience' },
                  { number: '25', label: 'Team Members' },
                  { number: '12', label: 'Industry Awards' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
                    <div className="text-[#4F4F4F]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}