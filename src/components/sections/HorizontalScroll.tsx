'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const getScrollAmount = () => -(inner.scrollWidth - window.innerWidth)

    const tween = gsap.to(inner, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: outer,
        pin: true,
        scrub: 1.4,
        start: 'top top',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Update panel indicator dots
          const dots = document.querySelectorAll('.panel-dot')
          const panels = inner.querySelectorAll('[data-panel]')
          if (dots.length && panels.length) {
            const idx = Math.min(
              Math.floor(self.progress * panels.length),
              panels.length - 1
            )
            dots.forEach((d, i) => d.classList.toggle('active', i === idx))
          }
        },
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <>
      {/* Panel navigation dots */}
      <div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-[150] flex flex-col gap-2.5"
        aria-hidden="true"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={`panel-dot ${i === 0 ? 'active' : ''}`} />
        ))}
      </div>

      {/* Outer wrapper — this gets pinned */}
      <div ref={outerRef} className="h-screen overflow-hidden">
        {/* Inner — slides horizontally */}
        <div
          ref={innerRef}
          className="flex h-screen will-change-transform"
          style={{ width: 'max-content' }}
        >
          {children}
        </div>
      </div>
    </>
  )
}
