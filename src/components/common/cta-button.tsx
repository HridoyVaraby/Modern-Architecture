import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function CTAButton({ 
  children, 
  href, 
  variant = 'primary', 
  className 
}: CTAButtonProps) {
  return (
    <Button 
      asChild
      className={cn(
        variant === 'primary' 
          ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
          : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
        className
      )}
    >
      <a href={href}>{children}</a>
    </Button>
  );
}