import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Layout } from '@/components/layout/layout';
import { Home } from '@/components/pages/home';
import { About } from '@/components/pages/about';
import { Services } from '@/components/pages/services';
import { Portfolio } from '@/components/pages/portfolio';
import { Process } from '@/components/sections/process';
// Note: Services is now imported from pages folder above
import { Blog } from '@/components/pages/blog';
import { Testimonials } from '@/components/pages/testimonials';
import { Careers } from '@/components/pages/careers';
import { Contact } from '@/components/pages/contact';

function App() {
  // Get current path
  const path = window.location.pathname;

  // Render component based on path
  const renderComponent = () => {
    switch (path) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/portfolio':
      case '/portfolio/residential':
      case '/portfolio/commercial':
      case '/portfolio/institutional':
      case '/portfolio/interior-design':
      case '/portfolio/landscape':
        return <Portfolio />;
      case '/process':
        return <Process />;
      case '/blog':
        return <Blog />;
      case '/testimonials':
        return <Testimonials />;
      case '/careers':
        return <Careers />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light">
      <Layout>
        {renderComponent()}
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;