export function WebCareLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-label="WebCare logo">
      <circle cx="18" cy="18" r="17" stroke="#F97316" strokeWidth="2" />
      <ellipse cx="18" cy="18" rx="8" ry="17" stroke="#F97316" strokeWidth="1.5" fill="none" opacity="0.45" />
      <line x1="1" y1="18" x2="35" y2="18" stroke="#F97316" strokeWidth="1.4" opacity="0.45" />
      <path d="M4 11h28M4 25h28" stroke="#F97316" strokeWidth="1.1" opacity="0.3" />
      <path d="M18 8l6 2.5v5c0 3.5-2.5 6.5-6 7.5-3.5-1-6-4-6-7.5v-5L18 8z" fill="white" stroke="#F97316" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15.5 17l2 2 3-3.5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
