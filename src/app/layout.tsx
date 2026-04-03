import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Providers } from '@/components/ui/Providers'
import { Cursor }    from '@/components/ui/Cursor'
import { Navbar }    from '@/components/ui/Navbar'
import { Ticker }    from '@/components/ui/Ticker'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title:       site.seo.title,
  description: site.seo.description,
  keywords:    [...site.seo.keywords],
  authors:     [{ name: site.seo.author }],
  openGraph: {
    title:       site.seo.title,
    description: site.person.headline,
    type:        'website',
    locale:      'en_US',
    url:         process.env.NEXT_PUBLIC_SITE_URL,
  },
  twitter: {
    card:  'summary_large_image',
    title: site.seo.title,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise">
      <body>
        <Providers>
          <Cursor />
          <Navbar />
          <div id="scroll-progress" aria-hidden="true" />
          <main>{children}</main>
          <Ticker />
        </Providers>
      </body>
    </html>
  )
}
