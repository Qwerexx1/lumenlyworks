export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
      )}
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.15] text-ink-strong sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-balance text-[15px] leading-relaxed text-ink-muted sm:text-base">{description}</p>
      )}
    </div>
  );
}