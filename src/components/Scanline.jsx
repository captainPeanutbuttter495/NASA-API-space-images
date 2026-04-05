export default function Scanline() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 40, mixBlendMode: 'overlay' }}
    >
      <div
        className="animate-scan"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '3px',
          background:
            'linear-gradient(90deg, transparent, rgba(34,255,153,0.35) 20%, rgba(34,211,238,0.45) 50%, rgba(34,255,153,0.35) 80%, transparent)',
          opacity: 0.35,
          filter: 'blur(1px)',
        }}
      />
      {/* Static noise grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #22ff99 0, #22ff99 1px, transparent 1px, transparent 3px)',
        }}
      />
    </div>
  )
}
