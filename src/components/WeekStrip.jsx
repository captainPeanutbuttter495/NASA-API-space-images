import ApodCard from './ApodCard.jsx'

export default function WeekStrip({ entries, selectedDate, onSelect }) {
  if (!entries?.length) return null

  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12">
      <div className="mb-3 flex items-end justify-between">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-terminal/80 text-glow-terminal">
          // Last 7 Transmissions
        </h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
          {entries.length} entries
        </span>
      </div>
      <div className="scrollbar-noir -mx-2 flex snap-x gap-3 overflow-x-auto px-2 pb-3">
        {entries.map((entry) => (
          <ApodCard
            key={entry.date}
            entry={entry}
            isActive={entry.date === selectedDate}
            onClick={() => onSelect(entry.date)}
          />
        ))}
      </div>
    </section>
  )
}
