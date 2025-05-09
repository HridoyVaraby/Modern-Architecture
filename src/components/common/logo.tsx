import logoDefault from '../../assets/logo.svg';
import logoWhite from '../../assets/logo_white.svg';

interface LogoProps {
  variant?: 'default' | 'white';
}

export function Logo({ variant = 'default' }: LogoProps) {
  return (
    <div className="flex items-center">
      <img 
        src={variant === 'white' ? logoWhite : logoDefault}
        alt="Modern Architecture Logo"
        className="h-8 w-[15rem]"
      />
    </div>
  );
}