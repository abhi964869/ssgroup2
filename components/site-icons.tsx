type IconProps = {
  className?: string;
};

export function ArrowOutIcon({ className = "ml-2 h-4 w-4" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M4 12L12 4M6 4h6v6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M4.25 2.75h1.7c.25 0 .47.17.53.41l.46 1.84a.58.58 0 0 1-.15.56l-.89.89a10.76 10.76 0 0 0 3.65 3.65l.9-.89a.58.58 0 0 1 .55-.15l1.84.46c.24.06.41.28.41.53v1.7c0 .32-.26.58-.58.58h-.67C6.96 13.33 2.67 9.04 2.67 3.33v-.66c0-.32.26-.58.58-.58Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.5 4.25A1.75 1.75 0 0 1 4.25 2.5h7.5A1.75 1.75 0 0 1 13.5 4.25v7.5a1.75 1.75 0 0 1-1.75 1.75h-7.5A1.75 1.75 0 0 1 2.5 11.75v-7.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="m3.25 4.25 4.12 3.2a1.05 1.05 0 0 0 1.26 0l4.12-3.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function MapPinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 13.33c2.17-2.28 3.25-4.17 3.25-5.66A3.25 3.25 0 0 0 4.75 7.67c0 1.5 1.08 3.38 3.25 5.66Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="8" cy="7.5" r="1.25" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export function DocumentIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M4 2.75h5l3 3v7.5c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-9.5c0-.55.45-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M9 2.75v3h3" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M5.25 9h5.5M5.25 11.25h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}
