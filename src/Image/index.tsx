import React, { useMemo } from 'react'
import { default as NextImage } from 'next/image'
import { getMediaFile } from '@starlightcms/react-sdk'
import { ImageProps } from './types'

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (hex: string) => {
  const aRgbHex = hex.match(/.{1,2}/g) as RegExpMatchArray
  const r = parseInt(aRgbHex[0], 16),
    g = parseInt(aRgbHex[1], 16),
    b = parseInt(aRgbHex[2], 16)

  return `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
}

export const Image = ({
  media,
  variation,
  alt,
  placeholder,
  ...props
}: ImageProps): JSX.Element => {
  const file = useMemo(() => getMediaFile(media, variation), [media, variation])
  const blurDataURL = useMemo(() => {
    return placeholder === 'blur' && file.background_color
      ? rgbDataURL(file.background_color)
      : undefined
  }, [file, placeholder])

  if (file.variation !== variation) {
    console.warn(
      `Starlight media file ${media.name}.${media.extension} has no "${variation}" variation. The "${file.variation}" variation was used instead.`
    )
  }

  return (
    <NextImage
      src={file.path}
      width={file.meta?.width as number}
      height={file.meta?.height as number}
      alt={alt ?? media.alt ?? ''}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      {...props}
    />
  )
}
