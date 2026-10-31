import { Link } from 'react-router-dom';
import Logo from '@/components/landing/Logo';

const SECTIONS = [
  {
    title: 'Information you give us',
    body: 'When you book a strategy call or email us, we collect your name, work email, company and whatever you choose to share about your pipeline. We use it to reply, prepare for the call and keep in touch about your engagement. We do not add you to mailing lists you did not ask for.',
  },
  {
    title: 'Business contact data we process on your behalf',
    body: 'To run an outbound campaign we process limited business contact details of your prospects — name, role, company and work email address — drawn from verified business data sources. We act as a processor on your instructions, never for our own campaigns, and we honour opt-out or deletion requests immediately.',
  },
  {
    title: 'What we never do',
    body: 'We do not sell, rent or trade your data or your prospects. We do not reuse one client\u2019s campaign data for another, and we do not contact your prospects on behalf of anyone else.',
  },
  {
    title: 'Cookies and analytics',
    body: 'This website sets no advertising or tracking cookies. If we add privacy-friendly analytics later, this page will say so before it goes live.',
  },
  {
    title: 'Retention',
    body: 'Campaign, reply and reporting data is kept for the duration of the engagement. On request, or within 30 days of the engagement ending, we delete the campaign data we hold for you.',
  },
  {
    title: 'Your rights',
    body: 'You can ask us for a copy of the data we hold about you, ask us to correct it, or ask us to delete it. Email samie@trylumenlyworks.com and we will respond within 30 days.',
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-ink text-ink-strong">
      <header className="border-b border-ink-line">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <Link to="/" className="text-sm text-ink-muted transition-colors hover:text-brand">
            Back to site
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">Legal</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold sm:text-5xl">Privacy policy</h1>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
          Last updated 4 October 2026. This policy explains what LumenlyWorks collects when you visit this site, get in
          touch, or work with us on an outbound engagement.
        </p>
        <div className="mt-14 space-y-10 border-t border-ink-line pt-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-lg font-semibold text-ink-strong">{section.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{section.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-14 rounded-2xl border border-ink-line bg-ink-surface/40 p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">Contact</p>
          <a href="mailto:samie@trylumenlyworks.com" className="mt-3 block text-[15px] text-ink-strong transition-colors hover:text-brand">
            samie@trylumenlyworks.com
          </a>
        </div>
      </main>
    </div>
  );
}