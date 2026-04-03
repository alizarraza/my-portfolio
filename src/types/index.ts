// ─── Sanity Document Types ───────────────────────────────────────────────────

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  alt?: string
  caption?: string
}

export interface Project {
  _id:         string
  _type:       'project'
  title:       string
  slug:        { current: string }
  order:       number
  year:        string
  category:    string
  description: string
  longDesc?:   string
  tags:        string[]
  coverImage:  SanityImage
  images?:     SanityImage[]
  videoUrl?:   string
  liveUrl?:    string
  githubUrl?:  string
  featured:    boolean
  /**
   * Optional local/remote image URL for fallback (non-Sanity) projects.
   * Example: "/projects/eichain.jpg"
   */
  fallbackImageUrl?: string
  fallbackImageAlt?: string
}

export interface Experience {
  _id:       string
  _type:     'experience'
  role:      string
  company:   string
  period:    string
  current:   boolean
  desc:      string
  tags:      string[]
  order:     number
}

export interface Skill {
  _id:      string
  _type:    'skill'
  name:     string
  category: 'frontend' | 'mobile' | 'tools' | 'cms'
  order:    number
}

// ─── Utility ─────────────────────────────────────────────────────────────────

export type Direction = 'up' | 'down' | 'left' | 'right'
