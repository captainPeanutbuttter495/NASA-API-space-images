export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-terminal/15 px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 animate-pulseDot rounded-full bg-terminal" />
          <span>Data by NASA Open APIs · apod.nasa.gov</span>
        </div>
        <span className="opacity-60">
          Mission Control Noir · Build {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
