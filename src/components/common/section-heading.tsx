import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  align = 'center', 
  className 
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        'mb-10',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}