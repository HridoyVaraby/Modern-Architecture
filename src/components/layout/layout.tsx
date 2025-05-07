import { Footer } from './footer';
import { Header } from './header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden w-full">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}