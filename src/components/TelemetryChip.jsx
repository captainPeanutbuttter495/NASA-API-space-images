const toneMap = {
  terminal: 'border-terminal/40 text-terminal bg-terminal/5',
  cyan: 'border-cyan/40 text-cyan bg-cyan/5',
  amber: 'border-amber/50 text-amber bg-amber/5',
}

export default function TelemetryChip({ label, value, tone = 'terminal' }) {
  const classes = toneMap[tone] ?? toneMap.terminal
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur-sm ${classes}`}
    >
      {label ? <span className="opacity-60">{label}</span> : null}
      <span className="font-semibold">{value}</span>
    </span>
  )
}
