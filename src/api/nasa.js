import { daysAgo, today } from '../utils/date.js'

const API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY'
const BASE = 'https://api.nasa.gov/planetary/apod'

function normalize(entry) {
  return {
    date: entry.date,
    title: entry.title,
    explanation: entry.explanation,
    url: entry.url,
    hdurl: entry.hdurl || null,
    media_type: entry.media_type,
    thumbnail_url: entry.thumbnail_url || null,
    copyright: entry.copyright ? entry.copyright.trim() : null,
  }
}

async function request(params) {
  const qs = new URLSearchParams({ api_key: API_KEY, thumbs: 'true', ...params })
  const res = await fetch(`${BASE}?${qs.toString()}`)
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`NASA API ${res.status}: ${body || res.statusText}`)
  }
  return res.json()
}

export async function fetchApod(date) {
  const params = date ? { date } : {}
  const data = await request(params)
  return normalize(data)
}

export async function fetchApodRange(days = 7) {
  const end = today()
  const start = daysAgo(days - 1)
  const data = await request({ start_date: start, end_date: end })
  // API returns ascending by date; we want newest-first.
  return data.map(normalize).sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function fetchRandomApod() {
  const data = await request({ count: '1' })
  return normalize(data[0])
}
