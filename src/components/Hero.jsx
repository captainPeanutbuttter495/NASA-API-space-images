import TelemetryChip from './TelemetryChip.jsx'
import { formatDate } from '../utils/date.js'

export default function Hero({ entry, onRandom, loading }) {
  if (!entry) return null
  const hdTarget = entry.hdurl || entry.url
  const hasHd = Boolean(entry.hdurl)

  return (
    <header className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-16 pb-10 md:pt-24 md:pb-14">
      <div className="flex flex-col gap-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-terminal/80 text-glow-terminal">
          <span className="animate-flicker">// APOD :: TRANSMISSION</span>
          <span className="ml-2 opacity-50">OK — SIGNAL LOCKED</span>
        </div>

        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-100 md:text-5xl lg:text-6xl">
          {entry.title}
        </h1>

        <div className="flex flex-wrap items-center gap-2">
          <TelemetryChip label="Date" value={formatDate(entry.date)} tone="terminal" />
          <TelemetryChip label="Media" value={entry.media_type} tone="cyan" />
          {entry.copyright ? (
            <TelemetryChip label="©" value={entry.copyright} tone="amber" />
          ) : (
            <TelemetryChip label="©" value="Public Domain" tone="cyan" />
          )}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href={hdTarget}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-amber/70 bg-amber/10 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.22em] text-amber text-glow-amber transition hover:bg-amber/20 hover:shadow-[0_0_24px_-4px_rgba(251,191,36,0.5)]"
          >
            <span>Open in New Tab</span>
            <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
          </a>

          <a
            href={hasHd ? entry.hdurl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasHd}
            className={`inline-flex items-center gap-2 border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.22em] transition ${
              hasHd
                ? 'border-terminal/60 bg-terminal/10 text-terminal hover:bg-terminal/20 hover:shadow-[0_0_24px_-4px_rgba(34,255,153,0.5)]'
                : 'pointer-events-none cursor-not-allowed border-slate-700 text-slate-600'
            }`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            <span>View HD</span>
          </a>

          <button
            type="button"
            onClick={onRandom}
            disabled={loading}
            className="inline-flex items-center gap-2 border border-cyan/60 bg-cyan/5 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.22em] text-cyan transition hover:bg-cyan/15 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)] disabled:cursor-wait disabled:opacity-50"
          >
            <span>Random Day</span>
            <span aria-hidden>⚡</span>
          </button>
        </div>
      </div>
    </header>
  )
}
