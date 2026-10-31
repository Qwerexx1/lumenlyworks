export default function SystemGlyph({ variant = 0 }) {
  const nodes = [14, 40, 66, 92];

  return (
    <svg viewBox="0 0 106 32" className="h-8 w-[106px] shrink-0" aria-hidden="true">
      <line x1="14" y1="16" x2="92" y2="16" stroke="#CBD5E1" strokeWidth="1" />
      {nodes.map((x, index) => (
        <g key={x}>
          {index === variant && <circle cx={x} cy="16" r="9" fill="#059669" opacity="0.12" />}
          <circle cx={x} cy="16" r={index === variant ? 4 : 2.5} fill={index === variant ? '#059669' : '#94A3B8'} />
          <line x1={x} y1="24" x2={x} y2="29" stroke="#CBD5E1" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}