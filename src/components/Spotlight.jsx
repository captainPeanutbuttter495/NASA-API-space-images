function Corners() {
  return (
    <>
      <span className="crosshair-corner left-2 top-2 border-b-0 border-r-0" />
      <span className="crosshair-corner right-2 top-2 border-b-0 border-l-0" />
      <span className="crosshair-corner left-2 bottom-2 border-t-0 border-r-0" />
      <span className="crosshair-corner right-2 bottom-2 border-t-0 border-l-0" />
    </>
  )
}

export default function Spotlight({ entry }) {
  if (!entry) return null

  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12">
      <div className="holo-card overflow-hidden p-2 md:p-3">
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          {entry.media_type === 'image' ? (
            <img
              src={entry.hdurl || entry.url}
              alt={entry.title}
              loading="eager"
              className="h-full w-full object-cover"
            />
          ) : entry.media_type === 'video' ? (
            <div
              className="h-full w-full"
              style={{
                backgroundImage: entry.thumbnail_url
                  ? `url(${entry.thumbnail_url})`
                  : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <iframe
                src={entry.url}
                title={entry.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
              Unsupported media type: {entry.media_type}
            </div>
          )}

          {/* Cinematic letterbox fade */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(5,7,13,0.35) 0%, transparent 18%, transparent 82%, rgba(5,7,13,0.55) 100%)',
            }}
          />
        </div>
        <Corners />
        {/* Telemetry line beneath image */}
        <div className="mt-2 flex items-center justify-between px-2 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-terminal/60">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulseDot rounded-full bg-terminal" />
            Feed: NASA APOD
          </span>
          <span>CH-01 · {entry.date}</span>
        </div>
      </div>
    </section>
  )
}
