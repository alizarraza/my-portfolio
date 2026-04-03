'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { site } from '@/content/site'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        opacity: 0, x: 50, stagger: 0.1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'left 80%', containerAnimation: undefined },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="about"
      data-panel
      className="flex-shrink-0 w-screen h-screen flex"
    >
      {/* Left — full image */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <Image
          src={site.about.imageUrl}
          alt={site.about.imageAlt}
          fill
          className="object-cover"
          sizes="50vw"
        />
        {/* Gradient blend to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cream" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      {/* Right — content on cream bg */}
      <div className="relative w-1/2 h-full bg-cream flex flex-col justify-center px-16 xl:px-24 overflow-hidden">
        {/* Big background text */}
        <span className="absolute -right-4 top-1/2 -translate-y-1/2 font-display text-[14rem] text-ink/5 leading-none select-none pointer-events-none">
          DEV
        </span>

        <p className="about-reveal font-mono text-[0.62rem] tracking-[0.22em] uppercase text-muted mb-4">
          {site.about.titleEyebrow}
        </p>

        <h2 className="about-reveal font-display text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.88] text-ink mb-8">
          {site.about.headingLines[0]}<br />
          {site.about.headingLines[1]}<br />
          <span className="text-accent" style={{ WebkitTextStroke: '2px #c8f03c', color: 'transparent' }}>
            {site.about.headingLines[2]}
          </span>
        </h2>

        <p className="about-reveal font-sans text-[0.85rem] text-ink/60 leading-loose mb-4 max-w-md">
          {site.about.intro}
        </p>

        <p className="about-reveal font-sans text-[0.85rem] text-ink/50 leading-loose mb-10 max-w-md">
          {site.about.body}
        </p>

        {/* Stats */}
        <div className="about-reveal grid grid-cols-4 gap-px border border-ink/10 bg-ink/10">
          {site.about.stats.map(({ n, label }) => (
            <div key={label} className="bg-cream flex flex-col items-center py-5 px-2">
              <span className="font-display text-3xl text-ink leading-none mb-1">{n}</span>
              <span className="font-mono text-[0.55rem] tracking-[0.12em] uppercase text-muted text-center">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
