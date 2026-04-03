'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { site } from '@/content/site'

export function ContactSection() {
  const ref    = useRef<HTMLElement>(null)
  const bgRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal', {
        opacity: 0, y: 60, stagger: 0.1, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })
      // Slow parallax on bg
      gsap.to(bgRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen bg-cream flex flex-col items-center justify-center text-center px-8 overflow-hidden pb-20"
    >
      {/* Parallax background */}
      <div ref={bgRef} className="absolute inset-[-20%] z-0">
        <Image
          src={site.contact.backgroundImageUrl}
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Noise grain */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" aria-hidden="true"
        style={{ backgroundImage: 'url(data:image/svg+xml,...)', backgroundSize: '200px' }}
      />

      <div className="relative z-10 max-w-4xl w-full">
        <p className="contact-reveal font-mono text-[0.62rem] tracking-[0.25em] uppercase text-muted mb-6">
          {site.contact.availabilityLabel}
        </p>

        <h2 className="contact-reveal font-display text-[clamp(5rem,13vw,13rem)] leading-[0.85] text-ink mb-8">
          {site.contact.headingLines[0]}<br />
          {site.contact.headingLines[1]}<br />
          <span
            className="text-accent"
            style={{ WebkitTextStroke: '3px #c8f03c', color: 'transparent' }}
          >
            {site.contact.headingLines[2]}
          </span>
        </h2>

        <p className="contact-reveal font-sans text-[0.88rem] text-ink/50 leading-loose mb-12 max-w-md mx-auto">
          {site.contact.blurbLines[0]}<br />
          {site.contact.blurbLines[1]}
        </p>

        <div className="contact-reveal flex items-center justify-center gap-4 flex-wrap mb-16">
          <MagneticButton
            as="a"
            href={`mailto:${site.person.email}`}
            className="font-mono text-[0.65rem] tracking-[0.18em] uppercase bg-ink text-cream px-10 py-4 hover:bg-ink/80 transition-colors duration-300 inline-flex items-center gap-3"
          >
            {site.person.email}
          </MagneticButton>
          <MagneticButton
            as="a"
            href={site.contact.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] tracking-[0.18em] uppercase border border-ink/20 text-ink/70 px-10 py-4 hover:border-ink hover:text-ink transition-all duration-300 inline-flex items-center gap-3"
          >
            {site.contact.secondaryCta.label}
          </MagneticButton>
        </div>

        {/* Socials */}
        <div className="contact-reveal flex justify-center gap-10 pt-8 border-t border-ink/10">
          {site.contact.socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-ink/40 hover:text-ink transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-10">
        <p className="font-mono text-[0.58rem] tracking-widest uppercase text-ink/30">
          {site.contact.footerLeft}
        </p>
        <p className="font-mono text-[0.58rem] tracking-widest uppercase text-ink/30">
          {site.contact.footerRight}
        </p>
      </footer>
    </section>
  )
}
