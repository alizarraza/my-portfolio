'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Work',    href: '#projects'   },
  { label: 'About',   href: '#about'      },
  { label: 'Skills',  href: '#skills'     },
  { label: 'Contact', href: '#contact'    },
]

export function Navbar() {
  const navRef   = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0,   opacity: 1, duration: 1, ease: 'power3.out', delay: 1.2 }
    )

    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-8 md:px-12 py-5',
        'mix-blend-difference transition-all duration-500',
        scrolled && 'py-4'
      )}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a
        href="/"
        className="font-display text-2xl text-white tracking-wider hover:text-white"
        aria-label="Alizar Raza home"
      >
        AR
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-10" role="list">
        {links.map(({ label, href }) => (
          <li key={href}>
            <button
              onClick={() => scrollTo(href)}
              className={cn(
                'font-mono text-[0.65rem] tracking-[0.18em] uppercase text-white/60',
                'hover:text-white transition-colors duration-300 relative group'
              )}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </button>
          </li>
        ))}
        <li>
          <span className="w-2 h-2 rounded-full bg-accent block animate-pulse" />
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={cn('w-6 h-px bg-white transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
        <span className={cn('w-6 h-px bg-white transition-all duration-300', menuOpen && 'opacity-0')} />
        <span className={cn('w-6 h-px bg-white transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-ink border-t border-border py-8 px-8 flex flex-col gap-6 md:hidden">
          {links.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="font-display text-4xl text-cream text-left hover:text-accent transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
