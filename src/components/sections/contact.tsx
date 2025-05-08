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
    <section id="contact" className="py-24 bg-gradient-to-b from-[#F5F5F5] to-[#E0E0E0] text-[#212121] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#212121]/5 rounded-full -translate-y-1/2 translate-x-1/2 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#212121]/5 rounded-full translate-y-1/2 -translate-x-1/2 hidden md:block" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#212121]/5 rounded-full hidden lg:block" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#212121]/5 rounded-full hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionHeading 
            title="Ready to Design Your Dream Space?" 
            subtitle="Let's collaborate to bring your architectural vision to life."
            align="center"
          />
          <div className="h-1 w-24 bg-[#212121] mx-auto mt-4 mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* CTA Buttons with improved styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <CTAButton href="#" variant="primary" className="w-full py-4 text-base shadow-lg">
              Get in Touch
            </CTAButton>
            <CTAButton href="#" variant="secondary" className="w-full py-4 text-base shadow-lg">
              Book a Free Consultation
            </CTAButton>
          </div>
          
          {/* Form with improved styling */}
          <div className="bg-white p-10 rounded-lg shadow-xl relative z-10 border border-[#EEEEEE]">
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
                    className="bg-[#F9F9F9] border border-[#EEEEEE] focus-visible:ring-[#000000] h-12"
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
                    className="bg-[#F9F9F9] border border-[#EEEEEE] focus-visible:ring-[#000000] h-12"
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
                  className="bg-[#F9F9F9] border border-[#EEEEEE] focus-visible:ring-[#000000] h-12"
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
                  className="bg-[#F9F9F9] border border-[#EEEEEE] focus-visible:ring-[#000000] min-h-[150px] resize-none"
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
          
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#000000] rounded-md hidden md:block -z-10" />
        </div>
      </div>
    </section>
  );
}