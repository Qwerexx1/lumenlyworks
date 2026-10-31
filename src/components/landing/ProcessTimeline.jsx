import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const PHASES = [
  {
    week: 'Week 01',
    title: 'Infrastructure & ICP mapping',
    body: 'Secondary domains registered and provisioned, DNS hardened, warm-up protocols running from day one — while we build the verified lead database against your ICP.',
    points: ['Domain provisioning', 'Warm-up begins', 'ICP definition'],
  },
  {
    week: 'Week 02',
    title: 'Copywriting & offer testing',
    body: 'Three distinct angles, subject lines and value propositions written for your buyer, then pressure-tested against each other before a single campaign launches.',
    points: ['3 angles drafted', 'Offer reframed', 'Sequences assembled'],
  },
  {
    week: 'Week 03',
    title: 'Campaign launch',
    body: 'Phased ramp-up — 20 to 50 to 100+ emails per domain per day — with deliverability monitored on every mailbox, every morning.',
    points: ['Phased ramp', 'Daily deliverability monitoring', 'First replies'],
  },
  {
    week: 'Week 04+',
    title: 'Optimisation & scale',
    body: 'Real-time inbox triage, copy iterated on reply data, qualified calls booked into your calendar, and a weekly report you can read in two minutes.',
    points: ['Inbox triage', 'Copy iteration', 'Weekly reporting'],
    featured: true,
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="scroll-mt-24 border-b border-ink-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The process"
          title="From bare domain to booked calls in four weeks."
          description="No mystery, no black box. Here is exactly what happens after you sign, week by week."
        />

        <ol className="mt-14 space-y-5">
          {PHASES.map((phase, index) => (
            <li key={phase.week} className="relative pl-9 sm:pl-14">
              {index < PHASES.length - 1 && (
                <span aria-hidden="true" className="absolute bottom-0 left-[3px] top-3 w-px bg-ink-line" />
              )}
              <span
                aria-hidden="true"
                className="absolute left-0 top-8 h-[7px] w-[7px] rounded-full bg-brand ring-4 ring-brand/10"
              />
              <Reveal delay={index * 0.05}>
                <article
                  className={`rounded-2xl border bg-ink-surface/40 p-6 transition-colors duration-300 sm:p-8 ${
                    phase.featured ? 'border-brand/40 glow-brand' : 'border-ink-line hover:border-brand/40'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{phase.week}</span>
                    {phase.featured && (
                      <span className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                        Scale phase
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ink-strong sm:text-2xl">{phase.title}</h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-muted">{phase.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {phase.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-lg border border-ink-line bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}