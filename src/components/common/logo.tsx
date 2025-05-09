interface LogoProps {
  variant?: 'default' | 'white';
}

export function Logo({ variant = 'default' }: LogoProps) {
  return (
    <div className="flex items-center">
      {variant === 'white' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398.48 56.17" className="h-8 w-[15rem]">
          <defs>
            <style>{`.cls-1{fill:#ffffff;}`}</style>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <polygon className="cls-1" points="60.2 0 30.53 29.67 30.53 53.87 60.2 24.2 60.2 0"/>
              <polygon className="cls-1" points="60.2 34.64 49.39 45.45 60.2 55.07 60.2 34.64"/>
              <path className="cls-1" d="M25.59,25.59L1.48,1.48L0,0V54.45L27.22,27.22ZM9.46,42.91l-8,8V41.2H5.06V40.13H1.48V36.82H3.4V35.75H1.48v-3.3H5.06V31.38H1.48V28.07H3.4V27H1.48V23.7H5.06V22.63H1.48V19.32H3.4V18.25H1.48V15H5.06V13.88H1.48V3.56L24.55,26.63l.59.59Z"/>
            </g>
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398.48 56.17" className="h-8 w-[15rem]">
          <defs>
            <style>{`.cls-1{fill:#282827;}`}</style>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <polygon className="cls-1" points="60.2 0 30.53 29.67 30.53 53.87 60.2 24.2 60.2 0"/>
              <polygon className="cls-1" points="60.2 34.64 49.39 45.45 60.2 55.07 60.2 34.64"/>
              <path className="cls-1" d="M25.59,25.59L1.48,1.48L0,0V54.45L27.22,27.22ZM9.46,42.91l-8,8V41.2H5.06V40.13H1.48V36.82H3.4V35.75H1.48v-3.3H5.06V31.38H1.48V28.07H3.4V27H1.48V23.7H5.06V22.63H1.48V19.32H3.4V18.25H1.48V15H5.06V13.88H1.48V3.56L24.55,26.63l.59.59Z"/>
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}