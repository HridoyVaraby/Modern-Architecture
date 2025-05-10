import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Layout } from '@/components/layout/layout';

// Use lazy loading for route components
const Home = lazy(() => import('@/components/pages/home'));
const About = lazy(() => import('@/components/pages/about'));
const Services = lazy(() => import('@/components/pages/services'));
const Portfolio = lazy(() => import('@/components/pages/portfolio'));
const DesignProcess = lazy(() => import('@/components/pages/design-process'));
const Blog = lazy(() => import('@/components/pages/blog'));
const Testimonials = lazy(() => import('@/components/pages/testimonials'));
const Careers = lazy(() => import('@/components/pages/careers'));
const Contact = lazy(() => import('@/components/pages/contact'));

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light">
        <Layout>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
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
          </Suspense>
        </Layout>
        <Toaster />
      </ThemeProvider>
    </Router>
  );
}

export default App;