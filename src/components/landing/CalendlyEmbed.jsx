import { useEffect, useRef } from 'react';

const CALENDLY_URL =
  'https://calendly.com/adayevsamie/30min?hide_gdpr_banner=1&hide_landing_page_details=1&background_color=FFFFFF&text_color=0F172A&primary_color=047857';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

export default function CalendlyEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: containerRef.current });
      return;
    }

    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-line bg-white shadow-sm">
      <div
        ref={containerRef}
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: '320px', height: '720px' }}
      />
    </div>
  );
}