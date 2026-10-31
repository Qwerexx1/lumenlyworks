export default function Logo({ className = '' }) {
  return (
    <a
      href="#top"
      aria-label="LumenlyWorks home"
      className={`group flex items-center gap-2.5 rounded-md ${className}`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-ink-line bg-ink-surface transition-colors duration-300 group-hover:border-brand/50">
        <svg viewBox="0 0 32 32" className="h-4 w-4" aria-hidden="true">
          <path d="M16 6.5 27 26h-6.2L16 16.4 11.2 26H5z" fill="#059669" />
        </svg>
      </span>
      <span className="font-heading text-[15px] font-semibold tracking-tight text-ink-strong">LumenlyWorks</span>
    </a>
  );
}