'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  strength?: number
  className?: string
  as?: 'button' | 'a'
  href?: string
}

export function MagneticButton({
  children,
  strength = 0.28,
  className,
  as: Tag = 'button',
  href,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width  / 2) * strength
    const y = (e.clientY - rect.top  - rect.height / 2) * strength
    gsap.to(el, { x, y, duration: 0.4, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
  }

  const commonProps = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className,
    ...props,
  }

  if (Tag === 'a') {
    return (
      <a href={href} {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return <button {...commonProps}>{children}</button>
}
