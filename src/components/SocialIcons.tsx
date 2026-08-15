type IconProps = { size?: number; className?: string };

export function GithubIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.68-1.29-1.68-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.73.8 1.17 1.83 1.17 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.99 10.99 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM.24 8.25h4.5V23h-4.5V8.25ZM8.5 8.25h4.31v2.02h.06c.6-1.13 2.06-2.33 4.24-2.33 4.54 0 5.38 2.99 5.38 6.88V23h-4.5v-7.28c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V23H8.5V8.25Z" />
    </svg>
  );
}

export function XIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.24 2h3.4l-7.43 8.49L23 22h-6.84l-5.36-7.02L4.65 22H1.24l7.95-9.08L1 2h7.02l4.85 6.42L18.24 2Zm-1.2 18.17h1.88L7.05 3.73H5.03L17.04 20.17Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.87 9.87 0 0 0 4.62 1.16h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.06c-1.5 0-2.94-.4-4.19-1.16l-.3-.18-3.12.78.83-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.34c0-4.51 3.67-8.18 8.19-8.18s8.19 3.67 8.19 8.18-3.68 8.25-8.14 8.25Zm4.51-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function PinterestIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.17-.11-.95-.2-2.41.04-3.45.22-.94 1.42-6 1.42-6s-.36-.72-.36-1.79c0-1.68.97-2.93 2.19-2.93 1.03 0 1.53.77 1.53 1.7 0 1.04-.66 2.6-1 4.04-.29 1.21.6 2.19 1.79 2.19 2.15 0 3.8-2.27 3.8-5.53 0-2.89-2.08-4.92-5.04-4.92-3.44 0-5.45 2.58-5.45 5.24 0 1.04.4 2.15.9 2.76.1.12.11.22.08.35-.09.35-.28 1.13-.32 1.29-.05.2-.17.25-.38.15-1.44-.67-2.34-2.76-2.34-4.44 0-3.61 2.63-6.93 7.57-6.93 3.97 0 7.06 2.83 7.06 6.6 0 3.94-2.48 7.11-5.93 7.11-1.16 0-2.25-.6-2.62-1.31l-.71 2.72c-.26 1-.96 2.24-1.42 3 1.07.33 2.2.51 3.38.51 6.63 0 12-5.37 12-12S18.63 0 12 0Z" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.5 7.2s-.23-1.64-.94-2.36c-.9-.94-1.9-.95-2.36-1C17 3.5 12 3.5 12 3.5h-.01s-5 0-8.2.34c-.46.05-1.46.06-2.36 1C.72 5.56.5 7.2.5 7.2S.27 9.13.27 11.05v1.79c0 1.93.23 3.86.23 3.86s.23 1.64.93 2.36c.9.94 2.08.91 2.6 1.01 1.9.18 8.02.34 8.02.34s5.01-.01 8.21-.35c.46-.05 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.23-1.93.23-3.86v-1.79c0-1.93-.23-3.85-.23-3.85ZM9.75 14.98V8.24l6.27 3.38-6.27 3.36Z" />
    </svg>
  );
}

export function TelegramIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.9 3.6 2.7 11.1c-1.28.5-1.27 1.2-.23 1.53l4.93 1.54 11.4-7.2c.54-.33 1.03-.15.63.21L9.9 15.6l-.35 4.94c.5 0 .72-.23.99-.49l2.38-2.31 4.94 3.65c.91.5 1.56.24 1.79-.85l3.24-15.3c.32-1.33-.5-1.93-1.99-1.24Z" />
    </svg>
  );
}

export function MailIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.3 7.8-6.3H4.2ZM20 7.4l-7.4 6-.6.46-.6-.46L4 7.4v11.1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7.4Z" />
    </svg>
  );
}