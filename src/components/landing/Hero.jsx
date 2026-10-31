import Reveal from './Reveal';
import HeroBackdrop from './HeroBackdrop';
import MetricTicker from './MetricTicker';

export default function Hero({ imageUrl }) {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-ink-line pt-32 sm:pt-40">
      <HeroBackdrop imageUrl={imageUrl} />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-ink-line bg-ink-surface/70 py-1.5 pl-3 pr-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted backdrop-blur sm:text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Accepting 2 new clients this month
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mx-auto mt-8 max-w-4xl text-center text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink-strong sm:text-6xl lg:text-[5rem]">
            Predictable B2B Pipeline. <span className="text-brand">Zero Domain Burn.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
            We build, warm, and scale dedicated cold outreach engines that put qualified decision-makers directly on your
            calendar — without touching your primary domain.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#book"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-brand px-7 text-sm font-semibold text-on-brand transition-all duration-300 hover:bg-brand-soft hover:shadow-lg sm:w-auto"
          >
            Get a Free Outbound Audit
          </a>
          <a
            href="#services"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-ink-line bg-ink-surface/60 px-7 text-sm font-semibold text-ink-strong backdrop-blur transition-all duration-300 hover:border-brand/60 hover:text-brand sm:w-auto"
          >
            View System Architecture
          </a>
        </Reveal>
      </div>

      <MetricTicker />
    </section>
  );
}