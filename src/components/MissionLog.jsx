import { useState } from 'react'

const PREVIEW_LEN = 260

export default function MissionLog({ entry }) {
  const [expanded, setExpanded] = useState(false)
  if (!entry?.explanation) return null

  const text = entry.explanation
  const isLong = text.length > PREVIEW_LEN
  const visible = !isLong || expanded ? text : text.slice(0, PREVIEW_LEN).trimEnd() + '…'

  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">
      <div className="holo-card p-5 md:p-6">
        <header className="mb-3 flex items-center justify-between">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-terminal/80 text-glow-terminal">
            // Mission Log
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
            {text.length} chars
          </span>
        </header>

        <p className="font-mono text-[13px] leading-relaxed text-slate-300/90">
          {visible}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 inline-flex items-center gap-2 border border-terminal/50 bg-terminal/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-terminal transition hover:bg-terminal/15"
          >
            <span>{expanded ? 'Read Less' : 'Read More'}</span>
            <span
              aria-hidden
              className={`inline-block transition-transform ${expanded ? 'rotate-180' : ''}`}
            >
              ▾
            </span>
          </button>
        )}
      </div>
    </section>
  )
}
