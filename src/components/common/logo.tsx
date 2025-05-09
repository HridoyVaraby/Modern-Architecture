interface LogoProps {
  variant?: 'default' | 'white';
}

export function Logo({ variant = 'default' }: LogoProps) {
  return (
    <div className="flex items-center">
      <img 
        src={variant === 'white' ? "/src/assets/logo_white.svg" : "/src/assets/logo.svg"}
        alt="Modern Architecture Logo"
        className="h-8 w-[15rem]"
      />
    </div>
  );
}