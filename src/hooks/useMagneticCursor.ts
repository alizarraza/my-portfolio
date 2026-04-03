'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useMagneticCursor() {
  const cursorRef  = useRef<HTMLDivElement>(null)
  const trailerRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const trailer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cur = cursorRef.current
    const trail = trailerRef.current
    if (!cur || !trail) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      gsap.to(cur, { x: e.clientX, y: e.clientY, duration: 0.06, ease: 'none' })
    }

    const loop = () => {
      trailer.current.x += (mouse.current.x - trailer.current.x) * 0.11
      trailer.current.y += (mouse.current.y - trailer.current.y) * 0.11
      gsap.set(trail, { x: trailer.current.x, y: trailer.current.y })
      requestAnimationFrame(loop)
    }

    const raf = requestAnimationFrame(loop)
    document.addEventListener('mousemove', onMove)

    // Hover states
    const targets = document.querySelectorAll('a, button, [data-cursor]')
    const onEnter = () => {
      gsap.to(cur,   { scale: 0.4, duration: 0.3 })
      gsap.to(trail, { scale: 2.2, opacity: 0.15, duration: 0.3 })
    }
    const onLeave = () => {
      gsap.to(cur,   { scale: 1, duration: 0.3 })
      gsap.to(trail, { scale: 1, opacity: 1,    duration: 0.3 })
    }

    targets.forEach(t => {
      t.addEventListener('mouseenter', onEnter)
      t.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach(t => {
        t.removeEventListener('mouseenter', onEnter)
        t.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return { cursorRef, trailerRef }
}
