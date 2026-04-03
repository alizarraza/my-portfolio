import { ProjectCard } from './ProjectCard'
import type { Project } from '@/types'

// Fallback projects if Sanity is empty
const fallbackProjects: Project[] = [
  {
    _id: 'eichain', _type: 'project', order: 1, featured: true,
    title: 'EICHAIN',
    slug: { current: 'eichain' },
    year: '',
    category: 'React + GSAP',
    description: 'Highlighted work project.',
    tags: ['React', 'GSAP'],
    coverImage: null as any,
    fallbackImageUrl: '/projects/eichain.png',    fallbackImageAlt: 'EICHAIN project cover',
    liveUrl: '', githubUrl: '',
  },
  {
    _id: 'kitaab-app', _type: 'project', order: 2, featured: true,
    title: 'KITAAB APP',
    slug: { current: 'kitaab-app' },
    year: '',
    category: 'React Native App',
    description: 'Highlighted work project.',
    tags: ['React Native'],
    coverImage: null as any,
    fallbackImageUrl: '/projects/kiitaab-app.png',
    fallbackImageAlt: 'Kitaab App project cover',
    liveUrl: '', githubUrl: '',
  },
  {
    _id: 'skilled-trades', _type: 'project', order: 3, featured: true,
    title: 'SKILLED TRADES',
    slug: { current: 'skilled-trades' },
    year: '',
    category: 'React + Bootstrap',
    description: 'Highlighted work project.',
    tags: ['React', 'Bootstrap'],
    coverImage: null as any,
    fallbackImageUrl: '/projects/skilledtrades.png',
    fallbackImageAlt: 'Skilled Trades project cover',
    liveUrl: '', githubUrl: '',
  },
  {
    _id: '247-payments', _type: 'project', order: 4, featured: false,
    title: '247 PAYMENTS',
    slug: { current: '247-payments' },
    year: '',
    category: 'React + Bootstrap',
    description: 'Highlighted work project.',
    tags: ['React', 'Bootstrap'],
    coverImage: null as any,
    fallbackImageUrl: '/projects/247payments.png',
    fallbackImageAlt: '247 Payments project cover',
    liveUrl: '', githubUrl: '',
  },
  {
    _id: 'qready-web-and-app', _type: 'project', order: 6, featured: false,
    title: 'QREADY WEB AND APP',
    slug: { current: 'qready-web-and-app' },
    year: '',
    category: 'React + React Native + Bootstrap',
    description: 'Highlighted work project.',
    tags: ['React', 'React Native', 'Bootstrap'],
    coverImage: null as any,
    fallbackImageUrl: '/projects/qready.png',
    fallbackImageAlt: 'Qready Web and App project cover',
    liveUrl: '', githubUrl: '',
  },
  {
    _id: 'medask', _type: 'project', order: 7, featured: false,
    title: 'MEDASK',
    slug: { current: 'medask' },
    year: '',
    category: 'React + Bootstrap',
    description: 'Highlighted work project.',
    tags: ['React', 'Bootstrap'],
    coverImage: null as any,
    fallbackImageUrl: '/projects/medask.png',
    fallbackImageAlt: 'Medask project cover',
    liveUrl: '', githubUrl: '',
  },
  {
    _id: 'elegance-inspection', _type: 'project', order: 9, featured: false,
    title: 'ELEGANCE INSPECTION',
    slug: { current: 'elegance-inspection' },
    year: '',
    category: 'React + Bootstrap',
    description: 'Highlighted work project.',
    tags: ['React', 'Bootstrap'],
    coverImage: null as any,
    fallbackImageUrl: '/projects/elegance.png',
    fallbackImageAlt: 'Elegance Inspection project cover',
    liveUrl: '', githubUrl: '',
  },
]

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const displayProjects = projects.length > 0 ? projects : fallbackProjects

  return (
    <>
      {/* Work intro panel */}
      <section
        data-panel
        className="flex-shrink-0 w-[55vw] h-screen bg-ink flex items-end pb-24 px-16 xl:px-24 relative overflow-hidden"
        id="projects"
      >
        {/* Vertical rule */}
        <div className="absolute top-0 right-0 w-px h-full bg-border" />

        {/* Huge bg text */}
        <span className="absolute right-8 bottom-0 font-display text-[20rem] leading-none text-white/[0.03] select-none pointer-events-none">
          03
        </span>

        <div className="relative z-10">
          <p className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-muted mb-4">
            Selected Projects
          </p>
          <h2 className="font-display text-[clamp(5rem,10vw,10rem)] leading-[0.85] text-cream">
            WORK<br />
            THAT<br />
            <span className="text-accent">SHIPS.</span>
          </h2>
        </div>

        {/* Scroll arrow hint */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <span
            className="font-mono text-[0.55rem] tracking-widest uppercase text-muted/50"
            style={{ writingMode: 'vertical-rl' }}
          >
            Keep scrolling
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-muted/30 to-transparent" />
        </div>
      </section>

      {/* Project cards */}
      {displayProjects.map((project, i) => (
        <ProjectCard key={project._id} project={project} index={i} />
      ))}
    </>
  )
}
