'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import type { Skill } from '@/types'

// Fallback skills if CMS is empty
const fallbackSkills: Omit<Skill, '_id' | '_type'>[] = [
  { name: 'React',          category: 'frontend', order: 1 },
  { name: 'Next.js',        category: 'frontend', order: 2 },
  { name: 'TypeScript',     category: 'frontend', order: 3 },
  { name: 'JavaScript',     category: 'frontend', order: 4 },
  { name: 'Tailwind CSS',   category: 'frontend', order: 5 },
  { name: 'GSAP',           category: 'frontend', order: 6 },
  { name: 'HTML / CSS',     category: 'frontend', order: 7 },
  { name: 'Bootstrap',      category: 'frontend', order: 8 },
  { name: 'React Native',   category: 'mobile',   order: 9 },
  { name: 'Expo',           category: 'mobile',   order: 10 },
  { name: 'WordPress',      category: 'cms',      order: 11 },
  { name: 'Shopify',        category: 'cms',      order: 12 },
  { name: 'Sanity CMS',     category: 'tools',    order: 13 },
  { name: 'Git / GitHub',   category: 'tools',    order: 14 },
  { name: 'Vercel',         category: 'tools',    order: 15 },
  { name: 'REST APIs',      category: 'tools',    order: 16 },
]

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const displaySkills = skills.length > 0 ? skills : fallbackSkills

  const onSkillEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { color: '#080809', duration: 0.15 })
    gsap.to(e.currentTarget.querySelector('.sk-bg'), { scaleY: 1, duration: 0.3, ease: 'power2.out' })
  }
  const onSkillLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { color: '#555', duration: 0.25 })
    gsap.to(e.currentTarget.querySelector('.sk-bg'), { scaleY: 0, duration: 0.3, ease: 'power2.in' })
  }

  return (
    <section
      ref={ref}
      id="skills"
      data-panel
      className="flex-shrink-0 w-screen h-screen bg-surface flex flex-col justify-center px-16 xl:px-24 relative overflow-hidden"
    >
      {/* Bg image dim */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=60)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Huge bg number */}
      <span className="absolute right-12 bottom-0 font-display text-[22rem] leading-none text-white/[0.03] select-none pointer-events-none">
        02
      </span>

      <div className="relative z-10">
        <p className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-accent mb-3">
          What I Work With
        </p>

        <h2 className="font-display text-[clamp(4rem,8vw,8.5rem)] leading-[0.88] text-cream mb-10">
          TECH<br />STACK.
        </h2>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-px border border-border bg-border max-w-4xl">
          {displaySkills.map((sk) => (
            <div
              key={sk.name}
              className="relative bg-surface px-6 py-4 overflow-hidden cursor-none group"
              onMouseEnter={onSkillEnter}
              onMouseLeave={onSkillLeave}
              data-cursor-hover
            >
              {/* Fill bg on hover */}
              <div
                className="sk-bg absolute inset-0 bg-accent origin-bottom"
                style={{ transform: 'scaleY(0)' }}
              />
              <span className="relative z-10 font-mono text-[0.62rem] tracking-[0.12em] uppercase text-muted transition-colors duration-0 whitespace-nowrap">
                {sk.name}
              </span>
            </div>
          ))}
        </div>

        {/* Exp strip */}
        <div className="flex gap-12 mt-10 pt-10 border-t border-border">
          {[
            { n: '4',   label: 'Years of professional\nfrontend development' },
            { n: '12',  label: 'Technologies mastered\nacross web & mobile'  },
            { n: '20+', label: 'Projects delivered\nfor clients worldwide'   },
          ].map(({ n, label }) => (
            <div key={n}>
              <div className="font-display text-5xl text-accent leading-none">{n}</div>
              <div className="font-mono text-[0.6rem] tracking-widest uppercase text-muted mt-2 leading-relaxed whitespace-pre-line">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
