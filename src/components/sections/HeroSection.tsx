'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { site } from '@/content/site'

export function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const eyebrowRef  = useRef<HTMLParagraphElement>(null)
  const subRef      = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const hintRef     = useRef<HTMLDivElement>(null)
  const overlayRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Cinematic reveal — overlay wipes up first
      tl.to(overlayRef.current, { scaleY: 0, duration: 1.2, ease: 'expo.inOut', transformOrigin: 'top' }, 0)
        .from(eyebrowRef.current,  { opacity: 0, y: 24, duration: 0.8 }, 0.8)
        .from('.hero-word',        { y: '115%', duration: 1.1, stagger: 0.1 }, 0.9)
        .from(subRef.current,      { opacity: 0, y: 20, duration: 0.8 }, 1.3)
        .from(ctaRef.current,      { opacity: 0, y: 16, duration: 0.6 }, 1.5)
        .from(hintRef.current,     { opacity: 0, duration: 0.6 }, 1.8)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* Cinematic wipe overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-ink z-30 origin-top"
      />

      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src={site.hero.backgroundImageUrl}
          alt={site.hero.backgroundImageAlt}
          fill
          priority
          className="object-cover opacity-20 scale-110"
          sizes="100vw"
        />
        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/40" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <p
          ref={eyebrowRef}
          className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-accent mb-6"
        >
          {site.hero.eyebrow}
        </p>

        <h1
          ref={headingRef}
          className="font-display text-[clamp(5rem,14vw,14rem)] leading-[0.85] tracking-wide mb-8 overflow-hidden"
        >
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">{site.person.firstName.toUpperCase()}</span>
          </span>
          <span className="block overflow-hidden text-accent">
            <span className="hero-word inline-block">{site.person.lastName.toUpperCase()}</span>
          </span>
        </h1>

        <p
          ref={subRef}
          className="font-sans text-cream/50 text-sm leading-loose max-w-md mx-auto mb-10 tracking-wide"
        >
          {site.person.summaryLines[0]}—<br />
          {site.person.summaryLines[1]}
        </p>

        <div ref={ctaRef} className="flex items-center justify-center gap-4 flex-wrap">
          <MagneticButton
            className="font-mono text-[0.65rem] tracking-[0.18em] uppercase bg-accent text-ink px-8 py-4 hover:bg-cream transition-colors duration-300"
            onClick={() => document.getElementById(site.hero.primaryCta.targetId)?.scrollIntoView({ behavior: 'smooth' })}
          >
            {site.hero.primaryCta.label}
          </MagneticButton>
          <MagneticButton
            className="font-mono text-[0.65rem] tracking-[0.18em] uppercase border border-cream/20 text-cream/70 px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300"
            onClick={() => document.getElementById(site.hero.secondaryCta.targetId)?.scrollIntoView({ behavior: 'smooth' })}
          >
            {site.hero.secondaryCta.label}
          </MagneticButton>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={hintRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-muted">
          Scroll to explore
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>

      {/* Corner labels — Lusion style */}
      <div className="absolute bottom-10 left-8 hidden md:block">
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-muted/50">
          {site.hero.bottomLeftLabel}
        </span>
      </div>
      <div className="absolute bottom-10 right-8 hidden md:block">
        <span className="font-mono text-[0.58rem] tracking-widest uppercase text-muted/50">
          {site.hero.bottomRightLabel}
        </span>
      </div>
    </section>
  )
}
