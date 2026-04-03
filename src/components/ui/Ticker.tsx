export function Ticker() {
  const items = [
    'Frontend Developer',
    '·',
    'React · Next.js · TypeScript',
    '·',
    'React Native',
    '·',
    'Available for Hire',
    '·',
    '4 Years Experience',
    '·',
    'Shopify · WordPress',
    '·',
    'GSAP · Tailwind',
    '·',
  ]

  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] bg-accent overflow-hidden py-2"
      aria-hidden="true"
    >
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[0.58rem] tracking-[0.18em] uppercase text-ink font-bold px-6 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
