import { useRef, useState, useEffect, useCallback } from 'react'

const delays = [0, 100, 200]

export function useCursorTrail() {
  const trailRef = useRef<{ x: number; y: number; t: number }[]>([])
  const [positions, setPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ])
  const [visible, setVisible] = useState(false)
  const [moving, setMoving] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const idleRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const rafRef = useRef<number>(undefined)

  const update = useCallback(() => {
    const now = performance.now()
    const history = trailRef.current
    if (history.length < 2) {
      rafRef.current = requestAnimationFrame(update)
      return
    }
    const next = delays.map(delay => {
      const t = now - delay
      let lo = 0
      let hi = history.length - 1
      while (lo < hi) {
        const mid = Math.ceil((lo + hi) / 2)
        if (history[mid].t <= t) lo = mid
        else hi = mid - 1
      }
      const before = history[lo]
      const after = history[Math.min(lo + 1, history.length - 1)]
      const span = after.t - before.t
      const frac = span > 0 ? (t - before.t) / span : 0
      return {
        x: before.x + (after.x - before.x) * frac,
        y: before.y + (after.y - before.y) * frac,
      }
    })
    setPositions(next)
    rafRef.current = requestAnimationFrame(update)
  }, [])

  useEffect(() => {
    if (visible) {
      rafRef.current = requestAnimationFrame(update)
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [visible, update])

  const pushPos = useCallback((x: number, y: number) => {
    trailRef.current.push({ x, y, t: performance.now() })
    if (trailRef.current.length > 200) trailRef.current.splice(0, 50)
  }, [])

  const move = useCallback(
    (e: React.MouseEvent) => {
      pushPos(e.clientX, e.clientY)
      setMoving(true)
      clearTimeout(idleRef.current)
      idleRef.current = setTimeout(() => setMoving(false), 500)
    },
    [pushPos],
  )

  const enter = useCallback(
    (e: React.MouseEvent) => {
      trailRef.current = []
      pushPos(e.clientX, e.clientY)
      setVisible(true)
      clearTimeout(timerRef.current)
    },
    [pushPos],
  )

  const hide = useCallback(() => {
    timerRef.current = setTimeout(() => setVisible(false), 150)
  }, [])

  return { positions, visible, moving, enter, move, hide }
}
