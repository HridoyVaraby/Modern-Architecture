import { Logo } from '@/components/common/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#212121] text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 hidden md:block" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full hidden lg:block" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-sm text-[#BDBDBD]">
              Modern architecture firm dedicated to creating thoughtful, functional, and timeless designs.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-[#BDBDBD] hover:text-[#000000]" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-[#BDBDBD] hover:text-[#000000]" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-[#BDBDBD] hover:text-[#000000]" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-[#BDBDBD] hover:text-[#000000]" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[#BDBDBD] hover:text-[#000000]">Home</a></li>
              <li><a href="#about" className="text-sm text-[#BDBDBD] hover:text-[#000000]">About Us</a></li>
              <li><a href="#services" className="text-sm text-[#BDBDBD] hover:text-[#000000]">Services</a></li>
              <li><a href="#projects" className="text-sm text-[#BDBDBD] hover:text-[#000000]">Projects</a></li>
              <li><a href="#blog" className="text-sm text-[#BDBDBD] hover:text-[#000000]">Blog</a></li>
              <li><a href="#contact" className="text-sm text-[#BDBDBD] hover:text-[#000000]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <address className="not-italic text-sm text-[#BDBDBD]">
              <p>6/8 Sir Syed Road, Mohammadpur</p>
              <p>Dhaka, Bangladesh</p>
              <p className="mt-2">Phone: +880 1XXXXXXXXX</p>
              <p>Email: info@modernarchitecturebd.com</p>
            </address>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-sm text-[#BDBDBD] mb-4">Stay updated with our latest projects and insights.</p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#4F4F4F] border-0 focus-visible:ring-[#000000]" 
              />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#4F4F4F] pt-8 mt-12 text-center text-sm text-[#BDBDBD]">
          <p>© {currentYear} Modern Architecture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}