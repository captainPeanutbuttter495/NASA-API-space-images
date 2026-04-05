import Starfield from './components/Starfield.jsx'
import Scanline from './components/Scanline.jsx'
import Hero from './components/Hero.jsx'
import Spotlight from './components/Spotlight.jsx'
import WeekStrip from './components/WeekStrip.jsx'
import MissionLog from './components/MissionLog.jsx'
import Footer from './components/Footer.jsx'
import { useApod } from './hooks/useApod.js'

export default function App() {
  const { week, selected, selectedDate, setSelected, randomize, loading, error } =
    useApod()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Starfield />
      <Scanline />

      {error && (
        <div className="relative z-20 border-b border-amber/40 bg-amber/10 px-6 py-2 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-amber text-glow-amber">
          ⚠ Telemetry Lost: {error}
        </div>
      )}

      {loading && !selected ? (
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-terminal animate-flicker">
            <span className="mr-2 inline-block h-2 w-2 animate-pulseDot rounded-full bg-terminal align-middle" />
            Acquiring Signal…
          </div>
        </div>
      ) : (
        <>
          <Hero entry={selected} onRandom={randomize} loading={loading} />
          <Spotlight entry={selected} />
          <WeekStrip
            entries={week}
            selectedDate={selectedDate}
            onSelect={setSelected}
          />
          <MissionLog entry={selected} />
        </>
      )}

      <Footer />
    </div>
  )
}
