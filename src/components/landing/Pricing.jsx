import { Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const PLANS = [
  {
    name: 'The Outbound Setup',
    kicker: 'One-time · Foundation',
    summary: 'Everything the engine needs before the first send — built once, correctly, and owned by you.',
    items: [
      'Domain architecture: 3–10 secondary domains, fully isolated from your primary',
      'DNS hardening: SPF, DKIM, DMARC and BIMI records configured and verified',
      'Google Workspace or Outlook mailbox provisioning',
      'Automated warm-up protocol across every mailbox',
      'Verified lead database built to your ICP, under 1% bounce',
      'Deliverability baseline report and full handover documentation',
    ],
    investment: 'Fixed one-time fee — quoted on your audit call.',
    featured: false,
  },
  {
    name: 'Monthly Growth Partner',
    kicker: 'Retainer + performance',
    summary: 'We run the whole machine — campaigns, copy, inbox and reporting. You take the meetings.',
    items: [
      'Full-service campaign build, management and monitoring',
      'New angles, subject lines and copy iterations every week',
      'Monthly list refresh with waterfall email verification',
      'Daily inbox triage: replies answered, objections filtered',
      'Qualified calls booked directly into your calendar',
      'Weekly report — deliverability, reply rate, meetings booked',
      'Performance component tied to booked calls',
    ],
    investment: 'Monthly retainer plus performance on booked calls. 30-day rolling, no long-term lock-in.',
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-ink-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Engagement model"
          title="Two ways to work with us. Both transparent."
          description="Start with the foundation, or hand us the whole function. We cap active clients deliberately — this is a partnership, not a queue."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08} className="h-full">
              <article
                className={`flex h-full flex-col rounded-2xl border bg-ink-surface/40 p-7 sm:p-9 ${
                  plan.featured ? 'border-brand/40 glow-brand' : 'border-ink-line'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">{plan.kicker}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-ink-strong">{plan.name}</h3>
                  </div>
                  {plan.featured && (
                    <span className="shrink-0 rounded-full bg-brand px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-on-brand">
                      Most popular
                    </span>
                  )}
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">{plan.summary}</p>

                <ul className="mt-8 space-y-4">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-ink-body">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-ink-line pt-6">
                  <p className="text-[14px] leading-relaxed text-ink-muted">{plan.investment}</p>
                  <a
                    href="#book"
                    className={`mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 ${
                      plan.featured
                        ? 'bg-brand text-on-brand hover:bg-brand-soft hover:shadow-lg'
                        : 'border border-ink-line bg-ink text-ink-strong hover:border-brand/60 hover:text-brand'
                    }`}
                  >
                    {plan.featured ? 'Book a Strategy Call' : 'Scope the Setup'}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted sm:text-[11px]">
          Two openings this month · No setup fee bundled into the retainer
        </p>
      </div>
    </section>
  );
}