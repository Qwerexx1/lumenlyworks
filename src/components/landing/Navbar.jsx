import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-ink-line bg-ink/85 shadow-sm backdrop-blur-xl' : 'border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex h-11 items-center rounded-md px-3 text-sm text-ink-muted transition-colors hover:text-ink-strong"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="hidden h-11 items-center rounded-lg bg-brand px-4 text-sm font-medium text-on-brand transition-all hover:bg-brand-soft hover:shadow-lg sm:inline-flex"
          >
            Book a Strategy Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-line text-ink-strong transition-colors hover:border-brand/50 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-line bg-ink/97 px-5 pb-7 pt-2 backdrop-blur-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex h-12 items-center border-b border-ink-line/60 text-[15px] text-ink-muted transition-colors hover:text-ink-strong"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-6 flex h-12 items-center justify-center rounded-lg bg-brand text-sm font-semibold text-on-brand"
          >
            Book a Strategy Call
          </a>
        </div>
      )}
    </header>
  );
}