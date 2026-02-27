import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function BrandLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M22.5 11c-5.8 0-10.5 4.7-10.5 10.5S16.7 32 22.5 32h8.2c5.8 0 10.5-4.7 10.5-10.5S36.5 11 30.7 11H22.5Z"
        fill="#2F80ED"
        opacity="0.16"
      />
      <path
        d="M26.9 12.4c-5.4 0-9.7 4.3-9.7 9.6 0 5.3 4.3 9.6 9.7 9.6h6.8c5.4 0 9.7-4.3 9.7-9.6 0-5.3-4.3-9.6-9.7-9.6h-6.8Z"
        fill="#2F80ED"
      />
      <path
        d="M24 26.6V17.2h5.2c2.4 0 3.8 1.2 3.8 3.1 0 1.2-.6 2.1-1.6 2.5 1.2.4 1.9 1.3 1.9 2.7 0 2.1-1.5 3.1-4 3.1H24Zm2.3-5.6h2.7c1.1 0 1.7-.4 1.7-1.2 0-.8-.6-1.2-1.7-1.2h-2.7V21Zm0 3.7h3c1.2 0 1.8-.4 1.8-1.3 0-.9-.6-1.3-1.8-1.3h-3v2.6Z"
        fill="white"
      />
      <path
        d="M54.3 29V15.4h6.3c4.1 0 6.8 2.7 6.8 6.8 0 4.1-2.7 6.8-6.8 6.8h-6.3Zm3-2.6h3.1c2.4 0 3.9-1.5 3.9-4.2s-1.5-4.2-3.9-4.2h-3.1v8.4Z"
        fill="#0F172A"
      />
      <path
        d="M69.7 29V15.4h9.8V18h-6.8v2.9h6.4v2.5h-6.4v3h6.9V29h-9.9Z"
        fill="#0F172A"
      />
      <path
        d="M82.1 29V15.4h6.3c3.1 0 5 1.6 5 4.2 0 1.7-.9 3-2.4 3.6L93.7 29h-3.4l-2.2-5.3h-3V29h-3Zm3-7.8h3.2c1.4 0 2.2-.6 2.2-1.7 0-1.1-.8-1.7-2.2-1.7h-3.2v3.4Z"
        fill="#0F172A"
      />
      <path
        d="M96.3 29V15.4h3V29h-3Z"
        fill="#0F172A"
      />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BadgeDotIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="10" cy="10" r="9" fill="#22C55E" fillOpacity="0.18" />
      <circle cx="10" cy="10" r="4" fill="#22C55E" />
    </svg>
  )
}

export function LocationPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

export function GooglePlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.5 3.7v16.6c0 .7.8 1.1 1.4.7l9-8.3-9-8.3c-.6-.4-1.4 0-1.4.6Z" fill="#34D399" />
      <path d="M15 12 6.1 20.3 18.9 13c.7-.4.7-1.5 0-1.9L15 12Z" fill="#60A5FA" />
      <path d="M15 12 18.9 11c.7-.4.7-1.5 0-1.9L6.1 3.7 15 12Z" fill="#FBBF24" />
    </svg>
  )
}

export function StoreAppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.8 12.5c0-2 1.7-2.9 1.8-3-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.6-.7 1.2 0 1.5.7 2.7.7 1.1 0 1.8-1 2.5-2.1.8-1.2 1.1-2.4 1.1-2.5-.1-.1-2.2-.9-2.2-3.6Z"
        fill="#fff"
      />
      <path
        d="M14.8 6.4c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.3-.6.7-1.1 1.7-.9 2.7 1 .1 2-.5 2.6-1.3Z"
        fill="#fff"
      />
    </svg>
  )
}

export function MiniSparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Z"
        fill="currentColor"
      />
      <path
        d="M18.5 13l.7 3 2.8 1-2.8 1-.7 3-.7-3-2.8-1 2.8-1 .7-3Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  )
}

export function CheckShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2 20 6v7c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.2 11 14.7l4.5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2l2.9 6 6.6.6-5 4.3 1.6 6.5L12 16l-6.1 3.4 1.6-6.5-5-4.3 6.6-.6L12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 6l12 12M6 18L18 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  )
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96C1 8.15 1 12 1 12s0 3.85.46 5.58a2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96C23 15.85 23 12 23 12s0-3.85-.46-5.58z"
        fill="currentColor"
      />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="black" />
    </svg>
  )
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
        fill="currentColor"
      />
      <path
        d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        fill="currentColor"
      />
    </svg>
  )
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6z"
        fill="currentColor"
      />
      <path
        d="M13 9H7v11h6z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M18 8V2.5L12.5 8H18z"
        fill="currentColor"
      />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        fill="currentColor"
      />
    </svg>
  )
}

export function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"
        fill="currentColor"
      />
      <path
        d="M15 10H9v6h6z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  )
}

export function EyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
        fill="currentColor"
      />
      <path
        d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 21c1.66 0 3-1.34 3-3v-8c0-1.66-1.34-3-3-3s-3 1.34-3 3v8c0 1.66 1.34 3 3 3z"
        fill="currentColor"
      />
      <path
        d="M18.7 8C19.8 9.7 20 11.8 20 14c0 4.41-3.59 8-8 8s-8-3.59-8-8c0-2.2 1.2-4.3 3.3-5.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function EmailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.004 2C6.465 2 1.96 6.505 1.96 12.044c0 1.867.49 3.682 1.42 5.278L2 22l4.794-1.256A10.03 10.03 0 0 0 12.004 22C17.543 22 22 17.495 22 11.956 22 6.417 17.543 2 12.004 2zm5.937 14.184c-.248.697-1.458 1.332-2.03 1.416-.517.076-1.165.108-1.88-.118-.431-.137-.985-.32-1.694-.626-2.981-1.287-4.927-4.29-5.077-4.487-.148-.198-1.213-1.616-1.213-3.08 0-1.463.767-2.181 1.04-2.478.272-.298.594-.372.792-.372l.57.01c.182.009.427-.07.669.51.247.594.841 2.057.916 2.206.099.198.149.323.05.52-.099.2-.149.323-.297.497-.149.174-.313.388-.447.521-.149.148-.303.309-.13.607.174.297.77 1.27 1.653 2.059 1.135 1.012 2.093 1.325 2.39 1.474.298.149.472.124.645-.074.173-.198.743-.868.94-1.165.2-.298.397-.248.67-.149.272.1 1.733.818 2.03.967.298.149.496.224.571.347.074.124.074.719-.173 1.415z" />
    </svg>
  )
}
