import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { Process } from '@/components/sections/process';
import { Stats } from '@/components/sections/stats';
import { Testimonials } from '@/components/sections/testimonials';
import { Blog } from '@/components/sections/blog';
import { Contact } from '@/components/sections/contact';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}