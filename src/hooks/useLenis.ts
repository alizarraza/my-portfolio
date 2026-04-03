'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenis: Lenis | null = null

export function useLenis() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    // Connect Lenis to GSAP ticker so ScrollTrigger stays in sync
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis?.destroy()
      lenis = null
    }
  }, [])

  return lenis
}

export function getLenis() {
  return lenis
}
