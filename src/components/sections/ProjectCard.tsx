'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { SanityImage } from '@/components/ui/SanityImage'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index:   number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imgRef  = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width  - 0.5
    const yPct = (e.clientY - rect.top)  / rect.height - 0.5
    gsap.to(card, {
      rotateY:  xPct * 8,
      rotateX: -yPct * 8,
      transformPerspective: 900,
      duration: 0.5,
      ease: 'power2.out',
    })
    // Parallax image
    gsap.to(imgRef.current, {
      x: xPct * 18,
      y: yPct * 18,
      duration: 0.6,
      ease: 'power2.out',
    })
  }

  const onLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0, rotateX: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)',
    })
    gsap.to(imgRef.current, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' })
  }

  const num = String(index + 1).padStart(2, '0')

  return (
    <div
    ref={cardRef}
    className="relative flex-shrink-0 w-[65vw] h-screen p-12 xl:p-16 flex items-center justify-between overflow-hidden"
    style={{ transformStyle: 'preserve-3d' }}
    onMouseMove={onMove}
    onMouseLeave={onLeave}
    data-cursor-hover
  >
    <div className="absolute inset-0 -z-10 overflow-hidden">
  {/* Base gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />

  {/* Glow 1 */}
  <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full top-[-20%] left-[-10%] animate-float-slow" />

  {/* Glow 2 */}
  <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full bottom-[-20%] right-[-10%] animate-float-reverse" />

  {/* Accent glow */}
  <div className="absolute w-[300px] h-[300px] bg-accent/20 blur-[120px] rounded-full top-[40%] left-[40%] animate-pulse-slow" />

  {/* Subtle grid overlay */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />
</div>
    {/* Content on the left */}
    <div className="flex-1 z-10 max-w-lg">
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags?.map(tag => (
          <span key={tag} className="font-mono text-[0.55rem] tracking-[0.15em] uppercase border border-cream/20 text-cream/50 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
  
      <h3 className="font-display text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.88] text-cream mb-4">
        {project.title.toUpperCase().split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
      </h3>
  
      <p className="font-sans text-[0.8rem] text-cream/50 leading-loose max-w-lg mb-6">
        {project.description}
      </p>
    </div>
  
    {/* Image box on the right */}
    <div
      ref={imgRef}
      className="relative w-96 h-64 rounded-xl overflow-hidden shadow-lg "
    >
      {project.coverImage?.asset?._ref ? (
        <SanityImage image={project.coverImage} alt={project.title} fill className="object-cover" />
      ) : project.fallbackImageUrl ? (
        <Image src={project.fallbackImageUrl} alt={project.fallbackImageAlt ?? project.title} fill className="object-cover" />
      ) : (
        <Image
          src={`https://images.unsplash.com/photo-${index === 0 ? '1551288049-bebda4e38f71' : '1460925895917-afdab827c52f'}?w=1600&q=80`}
          alt={project.title}
          fill
          className="object-cover"
        />
      )}
    </div>
  </div>
  )
}
