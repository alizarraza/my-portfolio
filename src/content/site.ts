export const site = {
    person: {
      fullName: 'Alizar Raza',
      firstName: 'Alizar',
      lastName: 'Raza',
      role: 'Frontend Developer',
      email: 'alizarraza110@gmail.com',
      headline: 'I build fast, beautiful digital products.',
      summaryLines: [
        'I am a frontend developer with a passion for building fast, beautiful digital products.',
        'React, Next.js, TypeScript, and mobile apps.',
      ],
    },
    seo: {
      title: 'Alizar Raza — Frontend Developer',
      description: 'Alizar Raza is a frontend developer with a passion for building fast, beautiful digital products.',
      keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript'],
      author: 'Alizar Raza',
    },
    hero: {
      eyebrow: 'Frontend Developer · Worldwide',
      primaryCta: { label: 'View My Work', targetId: 'projects' },
      secondaryCta: { label: 'Get in Touch', targetId: 'contact' },
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80',
      backgroundImageAlt: 'Code background',
      bottomLeftLabel: `© ${new Date().getFullYear()}`,
      bottomRightLabel: 'Based worldwide',
    },
    about: {
      titleEyebrow: 'About Me',
      headingLines: ['CRAFTING', 'DIGITAL', 'EXPERIENCES'],
      intro: `I'm Alizar Raza, a Frontend Developer based worldwide.`,
      body:
        'I am a frontend developer with a passion for building fast, beautiful digital products.',
      imageUrl:
        'https://images.unsplash.com/photo-1603468620905-8de7d86b781e?w=900&q=80',
      imageAlt: 'Developer working',
      stats: [
        { n: '4+', label: 'Years Experience' },
        { n: '20+', label: 'Projects Shipped' },
        { n: '18+', label: 'Happy Clients' },
        { n: '10+', label: 'Tech Mastered' },
      ],
    },
    contact: {
      availabilityLabel: 'Available for Work',
      headingLines: ['LET’S', 'BUILD', 'TOGETHER'],
      blurbLines: [
        'Open to freelance, remote, and full-time opportunities.',
          'Based worldwide — working with clients worldwide.',
      ],
      primaryEmailCtaLabel: 'Email me',
      secondaryCta: { label: 'LinkedIn Profile', href: 'https://pk.linkedin.com/in/alizar-raza-39067625a' },
      socials: [
        { label: 'LinkedIn', href: 'https://pk.linkedin.com/in/alizar-raza-39067625a' },
        { label: 'GitHub', href: 'https://github.com/alizarraza' },
        { label: 'WhatsApp', href: 'https://wa.me/923102427314' }
      ],
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1800&q=70',
      footerLeft: `© ${new Date().getFullYear()} Alizar Raza`,
      footerRight: 'Built with Next.js + GSAP + Sanity',
    },
  } as const
