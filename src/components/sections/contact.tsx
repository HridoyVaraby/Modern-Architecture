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
    <section id="contact" className="py-20 bg-[#212121] text-white">
      <div className="container">
        <SectionHeading 
          title="Ready to Design Your Dream Space?" 
          subtitle="Let's collaborate to bring your architectural vision to life."
          className="text-white"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <CTAButton href="#" variant="primary" className="w-full">
              Get in Touch
            </CTAButton>
            <CTAButton href="#" variant="secondary" className="w-full">
              Book a Free Consultation
            </CTAButton>
          </div>
          
          <div className="bg-[#2A2A2A] p-8 rounded-md">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-[#333333] border-0 focus-visible:ring-[#000000]"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="bg-[#333333] border-0 focus-visible:ring-[#000000]"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="bg-[#333333] border-0 focus-visible:ring-[#000000]"
                />
              </div>
              <div className="mb-6">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="bg-[#333333] border-0 focus-visible:ring-[#D35400] min-h-32"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#000000] hover:bg-[#000000]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}