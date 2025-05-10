import { useState } from 'react';
import { SectionHeading } from '@/components/common/section-heading';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/common/cta-button';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success('Message sent successfully!', {
      description: 'We will get back to you soon.',
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-[4.5rem]">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Get in touch with our team to discuss your architectural project needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                title="Get In Touch" 
                subtitle="We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible."
                align="left"
                className="mb-8"
              />
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F5F5F5] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 18V22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 22H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                    <p className="text-[#4F4F4F]">6/8 Sir Syed Road, Mohammadpur</p>
                    <p className="text-[#4F4F4F]">Dhaka, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F5F5F5] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.9231C22 17.5228 21.8254 18.1095 21.4943 18.6124C21.1632 19.1153 20.6893 19.5139 20.1317 19.7575C19.5741 20.0011 18.9574 20.0796 18.3588 19.9836C17.7602 19.8875 17.2043 19.6208 16.75 19.2115C15.162 17.8173 13.8016 16.1779 12.7225 14.3565C11.6434 12.5351 10.8644 10.5577 10.4225 8.49998C10.2399 7.70417 10.2399 6.87959 10.4225 6.08379C10.5942 5.34269 10.9555 4.66236 11.4742 4.11923C11.9929 3.5761 12.6483 3.19225 13.3675 3.01537C13.5358 2.97661 13.7102 2.97661 13.8785 3.01537C14.0467 3.05413 14.2046 3.13101 14.34 3.24075C14.4754 3.35049 14.5851 3.49 14.6608 3.64891C14.7365 3.80782 14.7765 3.98224 14.7775 4.15921L15.1 8.03844C15.1016 8.21325 15.0636 8.38587 14.9889 8.54271C14.9142 8.69954 14.8049 8.83673 14.6692 8.94229L12.5 10.6538C13.315 12.5191 14.6225 14.1346 16.2775 15.3462L18.4467 13.6346C18.5679 13.5355 18.7099 13.4676 18.8613 13.4362C19.0127 13.4048 19.1691 13.4108 19.3175 13.4538L22.6775 14.5C22.8325 14.5519 22.9728 14.6427 23.0848 14.7641C23.1968 14.8855 23.2772 15.0336 23.3193 15.1956C23.3614 15.3576 23.3638 15.5284 23.3264 15.6915C23.289 15.8547 23.2129 16.0052 23.105 16.1308C22.5355 16.8044 21.8065 17.3109 20.9903 17.5992C20.1741 17.8874 19.3001 17.9459 18.4533 17.7692C17.6066 17.5925 16.8216 17.1865 16.1778 16.5935C15.5341 16.0005 15.0547 15.2412 14.7875 14.3962C14.3456 12.3384 14.3456 10.2154 14.7875 8.15767C15.0547 7.31264 15.5341 6.55338 16.1778 5.96037C16.8216 5.36736 17.6066 4.96135 18.4533 4.78464C19.3001 4.60793 20.1741 4.66648 20.9903 4.95471C21.8065 5.24294 22.5355 5.74947 23.105 6.42306C23.2129 6.54865 23.289 6.69915 23.3264 6.86232C23.3638 7.02549 23.3614 7.19628 23.3193 7.35828C23.2772 7.52028 23.1968 7.66837 23.0848 7.78977C22.9728 7.91117 22.8325 8.00198 22.6775 8.05383L19.3175 9.1C19.1691 9.14306 19.0127 9.14905 18.8613 9.11765C18.7099 9.08625 18.5679 9.01835 18.4467 8.91921L16.2775 7.20767C14.6225 8.41921 13.315 10.0346 12.5 11.9L14.6692 13.6115C14.8049 13.7171 14.9142 13.8543 14.9889 14.0111C15.0636 14.168 15.1016 14.3406 15.1 14.5154L14.7775 18.3946C14.7765 18.5716 14.7365 18.746 14.6608 18.9049C14.5851 19.0638 14.4754 19.2033 14.34 19.3131C14.2046 19.4228 14.0467 19.4997 13.8785 19.5385C13.7102 19.5772 13.5358 19.5772 13.3675 19.5385C12.6483 19.3616 11.9929 18.9777 11.4742 18.4346C10.9555 17.8915 10.5942 17.2111 10.4225 16.47C10.2399 15.6742 10.2399 14.8496 10.4225 14.0538C10.8644 11.9961 11.6434 10.0187 12.7225 8.19729C13.8016 6.37588 15.162 4.73648 16.75 3.34229C17.2043 2.93297 17.7602 2.66628 18.3588 2.57025C18.9574 2.47422 19.5741 2.55271 20.1317 2.79631C20.6893 3.03991 21.1632 3.43851 21.4943 3.94142C21.8254 4.44433 22 5.03106 22 5.63075V16.9231Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-[#4F4F4F]">+880 1XXXXXXXXX</p>
                    <p className="text-[#4F4F4F]">Monday-Friday, 9am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F5F5F5] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-[#4F4F4F]">info@modernarchitecturebd.com</p>
                    <p className="text-[#4F4F4F]">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social}
                      href={`#${social}`}
                      className="bg-[#F5F5F5] w-10 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      {/* Simple placeholder for social icons */}
                      <div className="w-5 h-5">{social[0].toUpperCase()}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-sm relative">
              <h3 className="text-2xl font-semibold mb-8 text-center">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#4F4F4F]">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-white border border-[#EEEEEE] focus-visible:ring-[#000000] h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#4F4F4F]">Your Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-white border border-[#EEEEEE] focus-visible:ring-[#000000] h-12"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-[#4F4F4F]">Your Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-white border border-[#EEEEEE] focus-visible:ring-[#000000] h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#4F4F4F]">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="bg-white border border-[#EEEEEE] focus-visible:ring-[#000000] min-h-[150px] resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#000000] hover:bg-[#333333] text-white py-3 text-base font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <SectionHeading 
            title="Visit Our Office" 
            subtitle="Find us at our centrally located office in Dhaka."
            align="center"
            className="mb-12"
          />
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
            {/* This would typically be a Google Maps embed */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600 text-lg">Map Placeholder - Google Maps would be embedded here</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <CTAButton href="https://maps.google.com" variant="secondary" className="mx-auto">
              Get Directions
            </CTAButton>
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
                question: 'What services does Modern Architecture offer?',
                answer: 'We offer a comprehensive range of architectural services including residential design, commercial architecture, interior design, landscape architecture, and project management.'
              },
              {
                question: 'How long does a typical architectural project take?',
                answer: 'Project timelines vary depending on scope and complexity. A residential project typically takes 3-6 months for design and documentation, while larger commercial projects may take 6-12 months or more.'
              },
              {
                question: 'What is your design process?',
                answer: 'Our design process includes initial consultation, concept development, schematic design, design development, construction documentation, and construction administration. We work closely with clients at each stage.'
              },
              {
                question: 'Do you work on projects outside of Dhaka?',
                answer: 'Yes, while we are based in Dhaka, we work on projects throughout Bangladesh and can also consider international projects depending on scope and requirements.'
              },
              {
                question: 'How do you charge for your services?',
                answer: 'Our fee structure is typically based on a percentage of the construction cost or a fixed fee depending on the project type and scope. We provide detailed fee proposals after the initial consultation.'
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
    </>
  );
}