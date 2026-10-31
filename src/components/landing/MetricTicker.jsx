import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const METRICS = [
  { to: 99.2, decimals: 1, suffix: '%', label: 'Deliverability rate' },
  { to: 100, decimals: 0, suffix: '%', label: 'Domain isolation' },
  { to: 30, decimals: 0, prefix: '15–', suffix: '+', label: 'Qualified calls / mo' },
];

function CountUp({ to, decimals, prefix = '', suffix = '' }) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? to : 0);

  useEffect(() => {
    if (reduceMotion) {
      setValue(to);
      return undefined;
    }

    let frame;
    const started = performance.now();
    const duration = 1500;

    const step = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      setValue(to * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [to, reduceMotion]);

  return (
    <span>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function MetricTicker() {
  return (
    <div className="relative mt-20 border-t border-ink-line bg-ink/70 backdrop-blur-xl sm:mt-24">
      <dl className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-ink-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
        {METRICS.map((metric) => (
          <div
            key={metric.label}
            className="flex items-center justify-between gap-4 py-5 sm:flex-col sm:items-start sm:gap-0 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:pr-0"
          >
            <dd className="order-1 font-mono text-2xl font-medium text-ink-strong sm:order-2 sm:mt-2 sm:text-3xl">
              <CountUp {...metric} />
            </dd>
            <dt className="order-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted sm:order-1 sm:text-[11px]">
              {metric.label}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}