import NextImage from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { SanityImage as SanityImageType } from '@/types'
import { cn } from '@/lib/utils'

interface SanityImageProps {
  image:     SanityImageType
  alt?:      string
  width?:    number
  height?:   number
  fill?:     boolean
  priority?: boolean
  className?: string
  sizes?:    string
  quality?:  number
}

export function SanityImage({
  image,
  alt,
  width  = 1200,
  height = 800,
  fill   = false,
  priority = false,
  className,
  sizes  = '(max-width: 768px) 100vw, 50vw',
  quality = 85,
}: SanityImageProps) {
  if (!image?.asset?._ref) return null

  const src = urlFor(image).width(width * 2).quality(quality).url()

  if (fill) {
    return (
      <NextImage
        src={src}
        alt={alt ?? image.alt ?? ''}
        fill
        priority={priority}
        sizes={sizes}
        className={cn('object-cover', className)}
      />
    )
  }

  return (
    <NextImage
      src={src}
      alt={alt ?? image.alt ?? ''}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={cn('object-cover', className)}
    />
  )
}
