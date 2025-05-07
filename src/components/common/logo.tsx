import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'default' | 'white';
}

export function Logo({ variant = 'default' }: LogoProps) {
  return (
    <div className="flex items-center">
      <img 
        src="/src/assets/logo.svg" 
        alt="Modern Architecture Logo"
        className={cn(
          "h-8 w-[15rem]", 
          variant === 'white' ? "filter invert" : ""
        )} 
      />
    </div>
  );
}