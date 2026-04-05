import { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchApodRange, fetchRandomApod } from '../api/nasa.js'

export function useApod() {
  const [week, setWeek] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchApodRange(7)
      .then((entries) => {
        if (cancelled) return
        setWeek(entries)
        setSelectedDate(entries[0]?.date ?? null)
        setError(null)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err.message || 'Failed to contact mission control.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const selected = useMemo(() => {
    if (!week.length) return null
    return week.find((d) => d.date === selectedDate) ?? week[0]
  }, [week, selectedDate])

  const setSelected = useCallback((date) => {
    setSelectedDate(date)
  }, [])

  const randomize = useCallback(async () => {
    try {
      setLoading(true)
      const entry = await fetchRandomApod()
      setWeek((prev) => {
        const without = prev.filter((e) => e.date !== entry.date)
        return [entry, ...without].slice(0, 8)
      })
      setSelectedDate(entry.date)
      setError(null)
    } catch (err) {
      setError(err.message || 'Random transmission failed.')
    } finally {
      setLoading(false)
    }
  }, [])

  return { week, selected, selectedDate, setSelected, randomize, loading, error }
}
