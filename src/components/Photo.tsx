import type { ComponentPropsWithoutRef } from 'react';
import media from '@/data/media.json';
import { cn } from '@/utils/cn';

interface Media {
  width: number;
  height: number;
  src: string;
  variants: { src: string; width: number }[];
}
interface PhotoProps extends Omit<
  ComponentPropsWithoutRef<'img'>,
  'src' | 'srcSet' | 'width' | 'height'
> {
  image: string;
  alt: string;
  priority?: boolean;
}
export function Photo({
  image,
  alt,
  priority = false,
  className,
  sizes = '(max-width: 720px) 100vw, 50vw',
  ...props
}: PhotoProps) {
  const data = (media as Record<string, Media>)[image];
  if (!data) throw new Error('Imagen sin preparar: ' + image);
  return (
    <img
      {...props}
      className={cn('photo', className)}
      src={data.src}
      srcSet={data.variants.map((v) => `${v.src} ${v.width}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      width={data.width}
      height={data.height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
