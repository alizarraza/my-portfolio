'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function Cursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const pos      = useRef({ x: 0, y: 0 })
  const trail    = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot   = dotRef.current
    const ring  = trailRef.current
    if (!dot || !ring) return

    let rafId: number

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.06, ease: 'none' })
    }

    const loop = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.1
      trail.current.y += (pos.current.y - trail.current.y) * 0.1
      gsap.set(ring, { x: trail.current.x, y: trail.current.y })
      rafId = requestAnimationFrame(loop)
    }

    rafId = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMove)

    // Hover expand
    const onEnter = () => {
      gsap.to(dot,  { scale: 0, duration: 0.25 })
      gsap.to(ring, { scale: 3, opacity: 0.12, duration: 0.35, ease: 'power2.out' })
    }
    const onLeave = () => {
      gsap.to(dot,  { scale: 1, duration: 0.25 })
      gsap.to(ring, { scale: 1, opacity: 1,    duration: 0.35, ease: 'power2.out' })
    }

    const attachListeners = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    attachListeners()
    // Re-attach after any dynamic content loads
    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}   className="cursor-dot"   aria-hidden="true" />
      <div ref={trailRef} className="cursor-trail"  aria-hidden="true" />
    </>
  )
}
