import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SystemGlyph from './SystemGlyph';

const PILLARS = [
  {
    glyph: 0,
    title: 'Cold Infrastructure Architecture',
    body: 'Three to ten secondary domains, provisioned in Google Workspace or Outlook, hardened with SPF, DKIM, DMARC and BIMI, then warmed on an automated protocol before a single email leaves the building.',
    specs: ['3–10 secondary domains', 'SPF · DKIM · DMARC · BIMI', 'Automated warm-up'],
  },
  {
    glyph: 1,
    title: 'Deep Lead Sourcing & Enrichment',
    body: 'Laser-focused ICP targeting through Apollo and Sales Navigator, custom scraping for the accounts nobody lists, and waterfall verification before anything is loaded into a campaign.',
    specs: ['Apollo · Sales Navigator', 'Custom scraping', 'Under 1% bounce'],
  },
  {
    glyph: 2,
    title: 'Offer & Copy Engineering',
    body: 'Short, conversational copy built around one painful and specific problem — written for a C-level buyer reading on a phone, then tested in disciplined A/B cycles against real reply data.',
    specs: ['3 tested angles', 'C-level brevity', 'Structured A/B cycles'],
  },
  {
    glyph: 3,
    title: 'Inbox Management & Lead Triage',
    body: 'We live in the inbox. Replies are answered the same day, objections and out-of-office noise are filtered out, and warm conversations land in your CRM or on your calendar.',
    specs: ['Same-day reply handling', 'Objection & OOD filtering', 'CRM / calendar handoff'],
  },
];

export default function ServicePillars() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-ink-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Four disciplines, run as one system."
          description="We don't hand you a tool and a template. We operate the entire outbound function — from DNS records to booked meetings."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-ink-line bg-ink-surface/40 p-6 transition-all duration-300 hover:border-brand/60 hover:shadow-lg">
                <SystemGlyph variant={pillar.glyph} />
                <h3 className="mt-6 text-base font-semibold leading-snug text-ink-strong">{pillar.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">{pillar.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-ink-line pt-5">
                  {pillar.specs.map((spec) => (
                    <li key={spec} className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                      <span className="mr-2 text-brand">/</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}