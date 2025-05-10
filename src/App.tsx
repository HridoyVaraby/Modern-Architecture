import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Layout } from '@/components/layout/layout';
import { Home } from '@/components/pages/home';
import { About } from '@/components/pages/about';
import { Services } from '@/components/pages/services';
import { Portfolio } from '@/components/pages/portfolio';
import { DesignProcess } from '@/components/pages/design-process';
import { Blog } from '@/components/pages/blog';
import { Testimonials } from '@/components/pages/testimonials';
import { Careers } from '@/components/pages/careers';
import { Contact } from '@/components/pages/contact';

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/*" element={<Services />} />
            <Route path="/portfolio/*" element={<Portfolio />} />
            <Route path="/process" element={<DesignProcess />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <Toaster />
      </ThemeProvider>
    </Router>
  );
}

export default App;