import { Check } from 'lucide-react';
import { Image } from '@/components/ui/image';
import CalendlyEmbed from './CalendlyEmbed';

const ASSURANCES = [
  'Secondary domains only — your brand stays untouched',
  'Audit first: you see the plan before you commit to anything',
  '30-day rolling partnership, no long-term lock-in',
];

export default function ConversionTerminal({ imageUrl }) {
  return (
    <section id="book" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-ink-line lg:grid-cols-2">
          <div className="relative isolate overflow-hidden p-7 sm:p-10">
            <Image src={imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 scrim-panel" />
            <div className="relative">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">Start here</p>
              <h2 className="mt-4 max-w-md text-balance text-3xl font-semibold leading-[1.15] text-ink-strong sm:text-4xl">
                Ready to stop relying on referrals and build a reliable outbound machine?
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-muted">
                Book a 30-minute strategy call. We review your ICP, your market and your current pipeline, then tell you
                honestly whether outbound is the right lever — and exactly what it would take.
              </p>
              <ul className="mt-8 space-y-3">
                {ASSURANCES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-ink-body">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-ink-line bg-ink-surface/30 p-5 sm:p-8 lg:border-l lg:border-t-0">
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}