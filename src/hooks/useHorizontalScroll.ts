'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useHorizontalScroll(containerRef: React.RefObject<HTMLElement>) {
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const el = containerRef.current
    if (!el) return

    const getScrollAmount = () => -(el.scrollWidth - window.innerWidth)

    tweenRef.current = gsap.to(el, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        pin: true,
        scrub: 1.4,
        start: 'top top',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    })

    return () => {
      tweenRef.current?.scrollTrigger?.kill()
      tweenRef.current?.kill()
    }
  }, [containerRef])

  return tweenRef
}
