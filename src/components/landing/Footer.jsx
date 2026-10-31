import { Link } from 'react-router-dom';
import Logo from './Logo';

const FOOTER_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[14px] leading-relaxed text-ink-muted">
              A boutique, founder-led outbound studio. We build isolated cold email infrastructure, verify every lead,
              and book qualified calls for B2B companies, SaaS teams and agencies.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3.5 sm:flex sm:gap-x-8">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex min-h-[24px] items-center text-[14px] text-ink-muted transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">Direct</p>
            <a
              href="mailto:samie@trylumenlyworks.com"
              className="mt-4 inline-block text-[15px] text-ink-strong transition-colors hover:text-brand"
            >
              samie@trylumenlyworks.com
            </a>
            <a href="#book" className="mt-4 block text-[14px] text-brand transition-opacity hover:opacity-80">
              Book a strategy call →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
            © {new Date().getFullYear()} LumenlyWorks. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-brand"
            >
              Privacy policy
            </Link>
            <a
              href="#top"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-brand"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}