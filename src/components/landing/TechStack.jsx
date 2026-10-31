const TOOLS = [
  'Instantly',
  'Smartlead',
  'Apollo',
  'Sales Navigator',
  'Google Workspace',
  'Microsoft 365',
  'MillionVerifier',
  'BounceBan',
  'Clay',
  'Cal.com',
];

export default function TechStack() {
  return (
    <section className="border-b border-ink-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted sm:text-[11px]">
          Tech stack &amp; standards we rely on
        </p>
      </div>

      <div className="mask-fade-x mt-9 flex overflow-hidden">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1 ? 'true' : undefined}
              className="flex items-center gap-3 pr-3"
            >
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="flex h-10 items-center gap-2 whitespace-nowrap rounded-lg border border-ink-line bg-ink-surface/50 px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted sm:text-[11px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}