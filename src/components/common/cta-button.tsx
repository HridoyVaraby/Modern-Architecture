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
          ? 'bg-[#D35400] hover:bg-[#B24400] text-white' 
          : 'bg-transparent border border-[#D35400] text-[#D35400] hover:bg-[#D35400] hover:text-white',
        className
      )}
    >
      <a href={href}>{children}</a>
    </Button>
  );
}