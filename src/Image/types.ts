import { ImageProps as NextImageProps } from 'next/image'
import { MediaObject } from '@starlightcms/react-sdk'

export type ImageProps = Omit<NextImageProps, 'src' | 'alt'> & {
  media: MediaObject
  variation?: string
  alt?: string
}
