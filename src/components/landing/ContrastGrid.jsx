import { Check, X } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const FAILURES = [
  'One sending domain carries every campaign — a single complaint and the inbox you spent years earning is burned.',
  'Unverified lead lists, so bounce rates spike and mailbox providers start quietly filtering you.',
  'Generic AI templates sent at volume: the same email your prospect already deleted from three competitors this morning.',
  'No inbox monitoring, so warm replies, objections and opt-outs sit unanswered for days.',
];

const ENGINE = [
  'Multi-domain architecture: 3–10 isolated secondary domains with SPF, DKIM, DMARC and BIMI hardened.',
  'Multi-layer verification — MillionVerifier plus BounceBan logic — holding bounce rate under 1%.',
  'Intent-driven enrichment: funding, hiring and tech-stack signals decide who hears from you, and when.',
  'Human-crafted copy, tested in disciplined A/B cycles and written to be read on a phone by a C-level buyer.',
  'Daily inbox triage, so a positive reply is answered while the intent is still warm.',
];

export default function ContrastGrid() {
  return (
    <section id="infrastructure" className="scroll-mt-24 border-b border-ink-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The difference"
          title="Most outbound burns the asset you spent years building."
          description="Cold email doesn't fail because the channel is dead. It fails because the infrastructure behind it was never engineered."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="h-full rounded-2xl border border-ink-line bg-ink-surface/40 p-7 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading text-lg font-semibold text-ink-strong">How traditional outreach fails</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">Legacy</span>
              </div>
              <ul className="mt-7 space-y-5">
                {FAILURES.map((item) => (
                  <li key={item} className="flex gap-3.5 text-[15px] leading-relaxed text-ink-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ink-line bg-ink">
                      <X className="h-3 w-3 text-[#DC2626]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <article className="relative h-full overflow-hidden rounded-2xl border border-brand/30 bg-[linear-gradient(180deg,rgba(4,120,87,0.07),#FFFFFF)] p-7 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading text-lg font-semibold text-ink-strong">The precision outbound engine</h3>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brand" />
                  Active
                </span>
              </div>
              <ul className="mt-7 space-y-5">
                {ENGINE.map((item) => (
                  <li key={item} className="flex gap-3.5 text-[15px] leading-relaxed text-ink-body">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10">
                      <Check className="h-3 w-3 text-brand" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}