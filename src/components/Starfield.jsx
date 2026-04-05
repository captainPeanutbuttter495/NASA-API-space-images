import { useMemo } from 'react'

// Generate an N-star box-shadow string within an area.
function buildShadow(count, width, height, color) {
  const parts = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * width)
    const y = Math.floor(Math.random() * height)
    parts.push(`${x}px ${y}px ${color}`)
  }
  return parts.join(',')
}

export default function Starfield() {
  const layers = useMemo(
    () => ({
      far: buildShadow(220, 2000, 2000, '#9ca3af'),
      mid: buildShadow(120, 2000, 2000, '#e5e7eb'),
      near: buildShadow(40, 2000, 2000, '#ffffff'),
    }),
    []
  )

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <div
        className="stars-layer animate-driftSlow opacity-40"
        style={{ boxShadow: layers.far, top: '-500px' }}
      />
      <div
        className="stars-layer animate-drift opacity-70"
        style={{ boxShadow: layers.mid, top: '-500px' }}
      />
      <div
        className="stars-layer animate-driftFast opacity-90"
        style={{
          boxShadow: layers.near,
          top: '-500px',
          width: '2px',
          height: '2px',
        }}
      />
      {/* Soft nebula tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 500px at 80% 10%, rgba(34,211,238,0.08), transparent 60%), radial-gradient(900px 400px at 10% 80%, rgba(34,255,153,0.06), transparent 60%)',
        }}
      />
    </div>
  )
}
