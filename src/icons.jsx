import React from "react";

// Lucide-style Icon Wrapper
export function createIcon(name, paths, defaultSize = 24) {
  return function Icon({ size = defaultSize, className = "", color, style, ...props }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-${name} ${className}`}
        style={style}
        aria-hidden="true"
        {...props}
      >
        {paths}
      </svg>
    );
  };
}

// Navigation & Actions
export const ArrowRightIcon = createIcon("arrow-right", [
  <path key="1" d="M5 12h14" />,
  <path key="2" d="m12 5 7 7-7 7" />
]);

export const ExternalLinkIcon = createIcon("external-link", [
  <path key="1" d="M15 3h6v6" />,
  <path key="2" d="M10 14 21 3" />,
  <path key="3" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
]);

export const DownloadIcon = createIcon("download", [
  <path key="1" d="M12 15V3" />,
  <path key="2" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />,
  <path key="3" d="m7 10 5 5 5-5" />
]);

export const MenuIcon = createIcon("menu", [
  <path key="1" d="M4 5h16" />,
  <path key="2" d="M4 12h16" />,
  <path key="3" d="M4 19h16" />
]);

export const CloseIcon = createIcon("x", [
  <path key="1" d="M18 6 6 18" />,
  <path key="2" d="m6 6 12 12" />
]);

export const CheckIcon = createIcon("check", [
  <path key="1" d="M20 6 9 17l-5-5" />
]);

export const CheckCircleIcon = createIcon("check-circle-2", [
  <circle key="1" cx="12" cy="12" r="10" />,
  <path key="2" d="m16 9-5.5 5.5L8 12" />
]);

export const ChevronDownIcon = createIcon("chevron-down", [
  <path key="1" d="m6 9 6 6 6-6" />
]);

export const SearchIcon = createIcon("search", [
  <path key="1" d="m21 21-4.34-4.34" />,
  <circle key="2" cx="11" cy="11" r="8" />
]);

export const SendIcon = createIcon("send", [
  <path key="1" d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />,
  <path key="2" d="m21.854 2.147-10.94 10.939" />
]);

export const CopyIcon = createIcon("copy", [
  <rect key="1" width="14" height="14" x="8" y="8" rx="2" ry="2" />,
  <path key="2" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
]);

export const EyeIcon = createIcon("eye", [
  <path key="1" d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />,
  <circle key="2" cx="12" cy="12" r="3" />
]);

export const MaximizeIcon = createIcon("maximize-2", [
  <path key="1" d="M15 3h6v6" />,
  <path key="2" d="m21 3-7 7" />,
  <path key="3" d="m3 21 7-7" />,
  <path key="4" d="M9 21H3v-6" />
]);

export const SparklesIcon = createIcon("sparkles", [
  <path key="1" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />,
  <path key="2" d="M20 2v4" />,
  <path key="3" d="M22 4h-4" />,
  <circle key="4" cx="4" cy="20" r="2" />
]);

export const ZapIcon = createIcon("zap", [
  <path key="1" d="M15.914 4a1.5 1.5 0 0 0-2.474-1.561l-9 9A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 0 1 .471.666L8.086 20a1.5 1.5 0 0 0 2.475 1.56l9-9A1.5 1.5 0 0 0 18.5 10h-3.997a.5.5 0 0 1-.472-.667z" />
]);

// Sections & Domains
export const CodeIcon = createIcon("code", [
  <path key="1" d="m16 18 6-6-6-6" />,
  <path key="2" d="m8 6-6 6 6 6" />
]);

export const Code2Icon = createIcon("code-2", [
  <path key="1" d="m18 16 4-4-4-4" />,
  <path key="2" d="m6 8-4 4 4 4" />,
  <path key="3" d="m14.5 4-5 16" />
]);

export const LayersIcon = createIcon("layers", [
  <path key="1" d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />,
  <path key="2" d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />,
  <path key="3" d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
]);

export const PaletteIcon = createIcon("palette", [
  <path key="1" d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />,
  <circle key="2" cx="13.5" cy="6.5" r=".5" fill="currentColor" />,
  <circle key="3" cx="17.5" cy="10.5" r=".5" fill="currentColor" />,
  <circle key="4" cx="6.5" cy="12.5" r=".5" fill="currentColor" />,
  <circle key="5" cx="8.5" cy="7.5" r=".5" fill="currentColor" />
]);

export const CpuIcon = createIcon("cpu", [
  <path key="1" d="M12 20v2" />,
  <path key="2" d="M12 2v2" />,
  <path key="3" d="M17 20v2" />,
  <path key="4" d="M17 2v2" />,
  <path key="5" d="M2 12h2" />,
  <path key="6" d="M2 17h2" />,
  <path key="7" d="M2 7h2" />,
  <path key="8" d="M20 12h2" />,
  <path key="9" d="M20 17h2" />,
  <path key="10" d="M20 7h2" />,
  <path key="11" d="M7 20v2" />,
  <path key="12" d="M7 2v2" />,
  <rect key="13" x="4" y="4" width="16" height="16" rx="2" />,
  <rect key="14" x="8" y="8" width="8" height="8" rx="1" />
]);

export const BrainIcon = createIcon("brain", [
  <path key="1" d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />,
  <path key="2" d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />,
  <path key="3" d="M12 5v13" />,
  <path key="4" d="M9 10h6" />,
  <path key="5" d="M8 14h8" />
]);

export const HeartPulseIcon = createIcon("heart-pulse", [
  <path key="1" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />,
  <path key="2" d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
]);

export const CompassIcon = createIcon("compass", [
  <circle key="1" cx="12" cy="12" r="10" />,
  <path key="2" d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
]);

export const BookOpenIcon = createIcon("book-open", [
  <path key="1" d="M12 5v16" />,
  <path key="2" d="M20.001 19A2 2 0 0 0 22 17V5a2 2 0 0 0-1.999-2L16 3.002A5 5 0 0 0 12 5a5 5 0 0 0-4-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 1.999 2H8a5 5 0 0 1 4 2 5 5 0 0 1 4-2z" />
]);

export const BriefcaseIcon = createIcon("briefcase", [
  <path key="1" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />,
  <rect key="2" width="20" height="14" x="2" y="6" rx="2" />
]);

export const WrenchIcon = createIcon("wrench", [
  <path key="1" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
]);

export const GlobeIcon = createIcon("globe", [
  <circle key="1" cx="12" cy="12" r="10" />,
  <path key="2" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />,
  <path key="3" d="M2 12h20" />
]);

export const UtensilsIcon = createIcon("utensils", [
  <path key="1" d="M18 2 15.7 4.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L24 8" />,
  <path key="2" d="m15 15 7 7" />,
  <path key="3" d="m2.1 21.8 6.4-6.3" />,
  <path key="4" d="m19 5-7 7" />
]);

export const ShoppingBagIcon = createIcon("shopping-bag", [
  <path key="1" d="M16 10a4 4 0 0 1-8 0" />,
  <path key="2" d="M3.1 6h17.8" />,
  <path key="3" d="M3.4 5.5a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.7a2 2 0 0 0-.4-1.2l-2-2.7A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
]);

export const GraduationCapIcon = createIcon("graduation-cap", [
  <path key="1" d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />,
  <path key="2" d="M22 10v6" />,
  <path key="3" d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
]);

export const AwardIcon = createIcon("award", [
  <path key="1" d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />,
  <circle key="2" cx="12" cy="8" r="6" />
]);

export const ShieldCheckIcon = createIcon("shield-check", [
  <path key="1" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />,
  <path key="2" d="m9 12 2 2 4-4" />
]);

export const SmartphoneIcon = createIcon("smartphone", [
  <rect key="1" width="14" height="20" x="5" y="2" rx="2" ry="2" />,
  <path key="2" d="M12 18h.01" />
]);

export const ClockIcon = createIcon("clock", [
  <circle key="1" cx="12" cy="12" r="10" />,
  <path key="2" d="M12 6v6l4 2" />
]);

export const MessageCircleIcon = createIcon("message-circle", [
  <path key="1" d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
]);

export const MessageSquareIcon = createIcon("message-square", [
  <path key="1" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
]);

export const TagIcon = createIcon("tag", [
  <path key="1" d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />,
  <circle key="2" cx="7.5" cy="7.5" r=".5" fill="currentColor" />
]);

export const TrendingUpIcon = createIcon("trending-up", [
  <path key="1" d="M16 7h6v6" />,
  <path key="2" d="m22 7-8.5 8.5-5-5L2 17" />
]);

export const UserIcon = createIcon("user", [
  <path key="1" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />,
  <circle key="2" cx="12" cy="7" r="4" />
]);

export const HeadphonesIcon = createIcon("headphones", [
  <path key="1" d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
]);

export const LightbulbIcon = createIcon("lightbulb", [
  <path key="1" d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />,
  <path key="2" d="M9 18h6" />,
  <path key="3" d="M10 22h4" />
]);

export const RocketIcon = createIcon("rocket", [
  <path key="1" d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />,
  <path key="2" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />,
  <path key="3" d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />,
  <path key="4" d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
]);

export const Share2Icon = createIcon("share-2", [
  <circle key="1" cx="18" cy="5" r="3" />,
  <circle key="2" cx="6" cy="12" r="3" />,
  <circle key="3" cx="18" cy="19" r="3" />,
  <line key="4" x1="8.59" x2="15.42" y1="13.51" y2="17.49" />,
  <line key="5" x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
]);

export const CameraIcon = createIcon("camera", [
  <path key="1" d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />,
  <circle key="2" cx="12" cy="13" r="3" />
]);

export const TerminalIcon = createIcon("terminal", [
  <polyline key="1" points="4 17 10 11 4 5" />,
  <line key="2" x1="12" x2="20" y1="19" y2="19" />
]);

export const QuoteIcon = createIcon("quote", [
  <path key="1" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />,
  <path key="2" d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
]);

// Social Icons (Exact matching Brand SVG paths)
export function GithubIcon({ size = 20, className = "", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, className = "", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.065 2.065 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function TwitterIcon({ size = 20, className = "", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function TelegramIcon({ size = 20, className = "", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, className = "", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}


export function MailIcon({ size = 20, className = "", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

export function PhoneIcon({ size = 20, className = "", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

export function MapPinIcon({ size = 20, className = "", ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// Brand SVG Tech Icons
export function TechIcon({ name, className = "w-10 h-10 sm:w-11 sm:h-11", size }) {
  const style = size ? { width: size, height: size } : undefined;
  const key = name.toLowerCase().replace(/[\s.-]/g, "");

  switch (key) {
    case "html5":
    case "html":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M5.5 3L8 28.5L16 30.5L24 28.5L26.5 3H5.5Z" fill="#E44D26" />
          <path d="M16 5V28.3L22.4 26.6L24.5 5H16Z" fill="#F16529" />
          <path d="M16 11H9.8L10.3 15H16V11ZM16 19.5H12.8L12.5 16.5H10.5L11 22.5L16 23.9V19.5Z" fill="#EBEBEB" />
          <path d="M16 11V15H21.7L22.2 11H16ZM16 19.5V23.9L21 22.5L21.6 16.5H19.5L19.2 19.5H16Z" fill="#FFFFFF" />
        </svg>
      );
    case "css3":
    case "css":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M5.5 3L8 28.5L16 30.5L24 28.5L26.5 3H5.5Z" fill="#1572B6" />
          <path d="M16 5V28.3L22.4 26.6L24.5 5H16Z" fill="#33A9DC" />
          <path d="M16 11H9.8L10.3 15H16V11ZM16 19.5H12.8L12.5 16.5H10.5L11 22.5L16 23.9V19.5Z" fill="#EBEBEB" />
          <path d="M16 11V15H21.7L22.2 11H16ZM16 19.5V23.9L21 22.5L21.6 16.5H19.5L19.2 19.5H16Z" fill="#FFFFFF" />
        </svg>
      );
    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style}>
          <rect width="32" height="32" rx="4" fill="#F7DF1E" />
          <path d="M17.5 24.2C18.2 25.3 19.3 26 21 26C22.6 26 23.7 25.1 23.7 23.8C23.7 22.3 22.7 21.7 20.8 20.9C18.1 19.7 16.3 18.4 16.3 15.3C16.3 12.3 18.6 10 22.1 10C24.5 10 26.2 11 27.2 12.8L24.5 14.5C23.9 13.5 23.1 13 22 13C20.9 13 20 13.6 20 14.7C20 15.9 20.8 16.4 22.8 17.3C25.7 18.5 27.5 19.8 27.5 23.1C27.5 26.5 24.8 29 20.8 29C17.4 29 15.1 27.3 14.2 25.3L17.5 24.2ZM8 24.5L11.3 23.9C11.6 24.9 12.3 25.6 13.5 25.6C14.8 25.6 15.6 24.8 15.6 22.8V10.3H19.3V22.8C19.3 26.8 17.2 28.7 13.5 28.7C10.4 28.7 8.5 27 8 24.5Z" fill="#000000" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <ellipse cx="16" cy="16" rx="14" ry="5.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 16 16)" />
          <ellipse cx="16" cy="16" rx="14" ry="5.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 16 16)" />
          <ellipse cx="16" cy="16" rx="14" ry="5.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 16 16)" />
          <circle cx="16" cy="16" r="2.4" fill="#61DAFB" />
        </svg>
      );
    case "nextjs":
    case "next":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <circle cx="16" cy="16" r="15" fill="#000000" stroke="#333333" strokeWidth="1.5" />
          <path d="M21.5 23.2L12.8 11.5H10.5V20.5H12.5V14.1L20.2 24.4C20.65 24.05 21.08 23.65 21.5 23.2ZM19.5 11.5H21.5V18.5H19.5V11.5Z" fill="#FFFFFF" />
        </svg>
      );
    case "tailwindcss":
    case "tailwind":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M8.5 12C9.5 8 12.5 6 17.5 6C23.5 6 24.5 11 27.5 12C29.5 12.6 31 11.5 32 10C31 14 28 16 23 16C17 16 16 11 13 10C11 9.4 9.5 10.5 8.5 12ZM0.5 22C1.5 18 4.5 16 9.5 16C15.5 16 16.5 21 19.5 22C21.5 22.6 23 21.5 24 20C23 24 20 26 15 26C9 26 8 21 5 20C3 19.4 1.5 20.5 0.5 22Z" fill="#38BDF8" />
        </svg>
      );
    case "vite":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M29.5 4.5L16.8 28.5C16.4 29.2 15.6 29.2 15.2 28.5L2.5 4.5C2 3.6 2.8 2.5 3.8 2.7L16 5.5L28.2 2.7C29.2 2.5 30 3.6 29.5 4.5Z" fill="url(#vite-grad-1)" />
          <path d="M21.2 2.8L11.5 5L8.5 18L13 17L10.5 25L21.5 12.5L16.5 12L21.2 2.8Z" fill="url(#vite-grad-2)" />
          <defs>
            <linearGradient id="vite-grad-1" x1="2.5" y1="2.5" x2="29.5" y2="28.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="vite-grad-2" x1="8.5" y1="2.8" x2="21.5" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFEA83" />
              <stop offset="0.08" stopColor="#FFDD35" />
              <stop offset="1" stopColor="#FFA800" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "nodejs":
    case "node":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M16 2.5L28 9.4V23.2L16 30.1L4 23.2V9.4L16 2.5Z" fill="#339933" />
          <path d="M16 5.2L25.8 10.8V22L16 27.6L6.2 22V10.8L16 5.2Z" fill="#05080A" />
          <path d="M16 9.5C14.2 9.5 12.5 10.5 11.5 12L13.8 13.3C14.4 12.3 15.2 11.8 16 11.8C17.2 11.8 18 12.5 18 13.5V14.2L14.2 14.5C11.5 14.8 9.8 16.2 9.8 18.5C9.8 20.8 11.6 22.3 14 22.3C15.6 22.3 17 21.5 17.8 20.3L18 22H20.5V13.5C20.5 11 18.8 9.5 16 9.5ZM16 19.8C15.3 20.3 14.5 20.6 13.8 20.6C12.8 20.6 12.1 20 12.1 18.8C12.1 17.5 13 16.8 14.5 16.6L18 16.3V17.8C18 18.6 17 19.3 16 19.8Z" fill="#539E43" />
        </svg>
      );
    case "expressjs":
    case "express":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <circle cx="16" cy="16" r="15" fill="#111827" stroke="#374151" strokeWidth="1.5" />
          <text x="16" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="-0.5">ex</text>
        </svg>
      );
    case "mongodb":
    case "mongo":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M16 2C15.5 3.5 10.5 11 10.5 18C10.5 24 14.5 28.5 16 30C17.5 28.5 21.5 24 21.5 18C21.5 11 16.5 3.5 16 2Z" fill="#47A248" />
          <path d="M16 2V30C17.5 28.5 21.5 24 21.5 18C21.5 11 16.5 3.5 16 2Z" fill="#4DB33D" />
          <path d="M16 7V27C15.8 26.5 14.5 23.5 14.5 18C14.5 12.5 15.8 8.5 16 7Z" fill="#3FA037" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M15.9 3C10.4 3 10.8 5.4 10.8 5.4L10.8 7.9H16.1V8.7H8.8C6.6 8.7 5 10.4 5 13.5C5 17.3 6.9 17 6.9 17H8.5V14.7C8.5 12.1 10.6 12.1 10.6 12.1H15.9C18.2 12.1 18.2 9.9 18.2 9.9V5.4C18.2 5.4 18.5 3 15.9 3ZM13.8 4.7C14.4 4.7 14.9 5.2 14.9 5.8C14.9 6.4 14.4 6.9 13.8 6.9C13.2 6.9 12.7 6.4 12.7 5.8C12.7 5.2 13.2 4.7 13.8 4.7Z" fill="#387EB8" />
          <path d="M16.1 29C21.6 29 21.2 26.6 21.2 26.6L21.2 24.1H15.9V23.3H23.2C25.4 23.3 27 21.6 27 18.5C27 14.7 25.1 15 25.1 15H23.5V17.3C23.5 19.9 21.4 19.9 21.4 19.9H16.1C13.8 19.9 13.8 22.1 13.8 22.1V26.6C13.8 26.6 13.5 29 16.1 29ZM18.2 27.3C17.6 27.3 17.1 26.8 17.1 26.2C17.1 25.6 17.6 25.1 18.2 25.1C18.8 25.1 19.3 25.6 19.3 26.2C19.3 26.8 18.8 27.3 18.2 27.3Z" fill="#FFE873" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <rect x="16" y="2" width="19.5" height="19.5" rx="3.5" transform="rotate(45 16 2)" fill="#F05032" />
          <path d="M21.5 15.2C20.8 14.8 20 15 19.5 15.5L17.5 13.5V11.2C18.2 10.8 18.6 10 18.6 9.1C18.6 7.9 17.6 7 16.5 7C15.4 7 14.4 8 14.4 9.1C14.4 10 14.8 10.8 15.5 11.2V16.8C14.8 17.2 14.4 18 14.4 18.9C14.4 20.1 15.4 21 16.5 21C17.6 21 18.6 20 18.6 18.9C18.6 18.2 18.2 17.5 17.5 17.1V15.1L19.2 16.8C19 17.2 19 17.7 19.2 18.1C19.7 19 20.8 19.3 21.7 18.8C22.6 18.3 22.9 17.2 22.4 16.3C22.2 15.8 21.9 15.4 21.5 15.2Z" fill="#FFFFFF" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <circle cx="16" cy="16" r="15" fill="#FFFFFF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M16 4C9.37 4 4 9.37 4 16C4 21.3 7.44 25.8 12.21 27.39C12.81 27.5 13.03 27.13 13.03 26.81C13.03 26.52 13.02 25.56 13.01 24.53C9.67 25.26 8.97 23.09 8.97 23.09C8.42 21.7 7.64 21.33 7.64 21.33C6.55 20.59 7.72 20.6 7.72 20.6C8.93 20.69 9.56 21.84 9.56 21.84C10.63 23.68 12.37 23.15 13.06 22.84C13.17 22.06 13.48 21.53 13.82 21.23C11.16 20.93 8.36 19.9 8.36 15.31C8.36 14 8.83 12.93 9.6 12.09C9.48 11.79 9.07 10.57 9.71 8.92C9.71 8.92 10.73 8.59 13.05 10.16C14.02 9.89 15.05 9.76 16.08 9.75C17.11 9.76 18.14 9.89 19.11 10.16C21.43 8.59 22.45 8.92 22.45 8.92C23.09 10.57 22.68 11.79 22.56 12.09C23.33 12.93 23.8 14 23.8 15.31C23.8 19.91 20.99 20.92 18.32 21.22C18.75 21.59 19.13 22.32 19.13 23.44C19.13 25.04 19.12 26.33 19.12 26.72C19.12 27.04 19.33 27.42 19.95 27.3C24.71 25.7 28.14 21.21 28.14 15.91C28.14 9.37 22.77 4 16 4Z" fill="#181717" />
        </svg>
      );
    case "vscode":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M22.5 3.5L16.2 9.4L10.5 4.8L8.2 6.2L13.8 12.2L8.2 18.2L10.5 19.6L16.2 15L22.5 20.9L25.8 19.2V5.2L22.5 3.5Z" fill="#0065A9" />
          <path d="M22.5 3.5L13.8 12.2L16.2 15L25.8 5.2V3.8L22.5 3.5Z" fill="#007ACC" />
          <path d="M25.8 20.6L16.2 9.4L13.8 12.2L22.5 20.9L25.8 20.6Z" fill="#1F9CF0" />
          <path d="M8.2 6.2L2.5 10.2V14.2L7.2 12.2L8.2 6.2ZM8.2 18.2L7.2 12.2L2.5 10.2V14.2L8.2 18.2Z" fill="#0065A9" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M11 6C8.8 6 7 7.8 7 10C7 12.2 8.8 14 11 14H16V6H11Z" fill="#F24E1E" />
          <path d="M16 6H21C23.2 6 25 7.8 25 10C25 12.2 23.2 14 21 14C18.8 14 17 12.2 16 10V6Z" fill="#FF7262" />
          <path d="M16 14H21C23.2 14 25 15.8 25 18C25 20.2 23.2 22 21 22C18.8 22 17 20.2 16 18V14Z" fill="#1ABCFE" />
          <path d="M11 22C8.8 22 7 20.2 7 18C7 15.8 8.8 14 11 14H16V22H11Z" fill="#A259FF" />
          <path d="M11 22C8.8 22 7 23.8 7 26C7 28.2 8.8 30 11 30C13.2 30 15 28.2 15 26V22H11Z" fill="#0ACF83" />
        </svg>
      );
    case "postman":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <circle cx="16" cy="16" r="15" fill="#FF6C37" />
          <path d="M20.5 8.5C19.8 8.8 19.3 9.4 19 10.2L17.2 9.5C17.5 8.5 18.2 7.8 19.2 7.5L20.5 8.5ZM23 11.2L20.2 12.5C20.5 13.5 21.2 14.2 22.2 14.5L23.2 13.2C22.8 12.5 22.8 11.8 23 11.2ZM15.5 11.8C14.8 12.2 14.2 13 14 14L12.2 13.2C12.6 12 13.5 11 14.8 10.5L15.5 11.8ZM21 16.5L12 21.5L8.5 20L17.5 15L21 16.5Z" fill="#FFFFFF" />
          <circle cx="18.5" cy="11.5" r="1.5" fill="#FFFFFF" />
        </svg>
      );
    default:
      return (
        <div className={`flex items-center justify-center rounded-xl bg-white/5 text-xs font-bold text-primary ${className}`} style={style}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
