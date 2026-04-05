import { motion } from 'framer-motion'
import { formatDate } from '../utils/date.js'

export default function ApodCard({ entry, isActive, onClick }) {
  const thumb =
    entry.media_type === 'video' ? entry.thumbnail_url || entry.url : entry.url

  // Active card pulses (scale + glow); idle cards have a gentle resting pulse.
  const pulseAnimation = isActive
    ? {
        scale: [1, 1.025, 1],
        boxShadow: [
          '0 0 0px rgba(34,255,153,0.0)',
          '0 0 28px rgba(34,255,153,0.55)',
          '0 0 0px rgba(34,255,153,0.0)',
        ],
      }
    : {
        scale: [1, 1.008, 1],
        boxShadow: [
          '0 0 0px rgba(34,255,153,0.0)',
          '0 0 10px rgba(34,255,153,0.12)',
          '0 0 0px rgba(34,255,153,0.0)',
        ],
      }

  const pulseTransition = {
    duration: isActive ? 1.8 : 3.2,
    repeat: Infinity,
    ease: 'easeInOut',
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={pulseAnimation}
      transition={pulseTransition}
      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex w-48 shrink-0 snap-start flex-col overflow-hidden rounded-sm border bg-terminal/[0.02] text-left backdrop-blur-sm md:w-56 ${
        isActive ? 'border-terminal' : 'border-slate-700/60 hover:border-terminal/50'
      }`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {thumb ? (
          <img
            src={thumb}
            alt={entry.title}
            loading="lazy"
            className="h-full w-full object-cover transition group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-[10px] uppercase text-slate-600">
            no preview
          </div>
        )}
        {entry.media_type === 'video' && (
          <span className="absolute left-2 top-2 rounded-sm border border-amber/60 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-amber">
            Video
          </span>
        )}
        {isActive && (
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-2 top-2 rounded-sm border border-terminal bg-black/70 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-terminal"
          >
            Live
          </motion.span>
        )}
      </div>
      <div className="flex flex-col gap-1 px-3 py-2">
        <span className="line-clamp-2 font-display text-xs font-medium leading-snug text-slate-200">
          {entry.title}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-terminal/70">
          {formatDate(entry.date)}
        </span>
      </div>
    </motion.button>
  )
}
