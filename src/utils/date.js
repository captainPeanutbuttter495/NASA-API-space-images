// Format an ISO date string (YYYY-MM-DD) to a human-readable label.
export function formatDate(iso) {
  if (!iso) return ''
  // Parse as local date (avoid UTC drift from new Date(iso))
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
}

// Convert a Date to YYYY-MM-DD (in local time).
export function toIsoDate(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

// Date that is N days before today, as YYYY-MM-DD.
export function daysAgo(n) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return toIsoDate(d)
}

export function today() {
  return toIsoDate(new Date())
}
