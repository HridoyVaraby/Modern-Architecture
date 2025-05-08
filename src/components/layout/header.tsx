import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/common/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const servicesItems = [
    { title: 'Residential', href: '/services/residential' },
    { title: 'Commercial', href: '/services/commercial' },
    { title: 'Institutional', href: '/services/institutional' },
    { title: 'Interior Design', href: '/services/interior-design' },
    { title: 'Landscape Architecture', href: '/services/landscape' },
  ];

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    {
      title: 'Services',
      href: '/services',
      items: servicesItems,
    },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Design Process', href: '/process' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact Us', href: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
        <Logo variant={isScrolled ? 'default' : 'white'} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.items ? (
                  <div className="relative group">
                    <button className="flex items-center space-x-1">
                      <span className={cn(
                        'text-sm font-medium transition-colors hover:text-[#000000]',
                        isScrolled ? 'text-foreground font-semibold' : 'text-white'
                      )}>
                        {item.title}
                      </span>
                      <ChevronDown className={cn(
                        'h-4 w-4 transition-transform group-hover:rotate-180',
                        isScrolled ? 'text-foreground' : 'text-white'
                      )} />
                    </button>
                    <div className="absolute left-0 top-full mt-2 w-48 bg-background shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.items.map((subItem, subIndex) => (
                        <a 
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-[#000000]"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a 
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-[#000000]',
                      isScrolled ? 'text-foreground font-semibold' : 'text-white'
                    )}
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
            <li>
              <Button variant="default" className="bg-[#000000] hover:bg-[#000000] text-white">
                Book Consultation
              </Button>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md animate-in slide-in-from-top">
          <nav className="container mx-auto px-4 md:px-6 max-w-7xl py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.items ? (
                    <div className="space-y-2">
                      <span className="text-sm font-medium text-foreground block py-2">
                        {item.title}
                      </span>
                      <ul className="pl-4 space-y-2">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a 
                              href={subItem.href}
                              className="text-sm text-muted-foreground hover:text-[#000000] block py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <a 
                      href={item.href}
                      className="text-sm font-medium text-foreground hover:text-[#000000] block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Button 
                  variant="default" 
                  className="w-full bg-[#000000] hover:bg-[#000000] text-white"
                >
                  Book Consultation
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}