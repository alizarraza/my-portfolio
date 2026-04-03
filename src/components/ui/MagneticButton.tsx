'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'

type BaseProps = {
  children: React.ReactNode
  strength?: number
  className?: string
}

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
  }

type AnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
  }

type MagneticButtonProps = ButtonProps | AnchorProps

export function MagneticButton(props: MagneticButtonProps) {
  const { children, strength = 0.28, className } = props
  const buttonRef = useRef<HTMLButtonElement>(null)
  const anchorRef = useRef<HTMLAnchorElement>(null)

  const activeEl = () =>
    props.as === 'a' ? anchorRef.current : buttonRef.current

  const onMove = (e: React.MouseEvent) => {
    const el = activeEl()
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    gsap.to(el, { x, y, duration: 0.4, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(activeEl(), { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
  }

  const common = {
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className: cn(className),
  }

  if (props.as === 'a') {
    const { href, target, rel, ...rest } = props
    return (
      <a
        ref={anchorRef}
        href={href}
        target={target}
        rel={rel}
        {...common}
        {...rest}
      >
        {children}
      </a>
    )
  }

  const { ...rest } = props
  return (
    <button ref={buttonRef} {...common} {...rest}>
      {children}
    </button>
  )
}