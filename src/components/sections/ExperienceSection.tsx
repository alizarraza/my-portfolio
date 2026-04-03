'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Experience } from '@/types'

const fallbackExperience: Experience[] = [
  {
    _id: '1', _type: 'experience', order: 1, current: true,
    role:    'Full Stack Engineer',
    company: 'Four Secure',
    period:  'Feb 2026 — Present',
    desc:    'Full-time, on-site role at Four Secure. Working across the full stack delivering secure and scalable web solutions.',
    tags:    [],
  },
  {
    _id: '2', _type: 'experience', order: 2, current: true,
    role:    'Software Developer',
    company: 'AppCraftr',
    period:  'Aug 2025 — Jan 2026',
    desc:    'Full-time, on-site role building cross-platform products using React Native, Next.js and more.',
    tags:    ['React Native', 'Next.js'],
  },
  {
    _id: '3', _type: 'experience', order: 3, current: false,
    role:    'Associate Software Engineer',
    company: 'Binate Digital Inc.',
    period:  'Feb 2025 — Jul 2025',
    desc:    'Full-time, on-site role at Binate Digital Inc. Contributed to frontend development across multiple client projects.',
    tags:    [],
  },
  {
    _id: '4', _type: 'experience', order: 4, current: false,
    role:    'React Developer / Frontend Developer',
    company: 'Devoppia Pvt. Ltd.',
    period:  'Jun 2022 — Jan 2025',
    desc:    '2 years 8 months of full-time, on-site frontend development. Built and maintained web applications with React, HTML5, and a broad range of frontend technologies.',
    tags:    ['React', 'HTML5', 'Testing'],
  },
]

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const ref     = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const display = experience.length > 0 ? experience : fallbackExperience

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0, transformOrigin: 'top', duration: 1.5, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })
      gsap.from('.exp-item', {
        opacity: 0, x: -40, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 65%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="experience"
      className="bg-ink py-40 px-8 md:px-20 xl:px-40"
    >
      <div className="max-w-4xl">
        <p className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-accent mb-4">
          My Journey
        </p>
        <h2 className="font-display text-[clamp(4rem,8vw,8rem)] leading-[0.88] text-cream mb-24">
          EXPERIENCE
        </h2>

        <div className="relative">
          <div ref={lineRef} className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col">
            {display.map((exp, i) => (
              <div
                key={exp._id}
                className={`exp-item relative pl-10 pb-16 group ${
                  i < display.length - 1 ? 'border-b border-border mb-16' : ''
                }`}
              >
                {/* Dot */}
                <div className={`
                  absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full border transition-all duration-300
                  ${exp.current
                    ? 'bg-accent border-accent'
                    : 'bg-border border-border group-hover:bg-accent group-hover:border-accent'}
                `} />

                <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-accent mb-2">
                  {exp.period}
                </p>

                <h3 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-none text-cream mb-2 group-hover:text-accent transition-colors duration-300">
                  {exp.role}
                </h3>

                <p className="font-mono text-[0.68rem] tracking-widest uppercase text-muted mb-4">
                  {exp.company}
                </p>

                <p className="font-sans text-[0.82rem] text-cream/50 leading-loose max-w-xl mb-5">
                  {exp.desc}
                </p>

                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.55rem] tracking-widest uppercase border border-border text-muted px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
