import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/cn';
export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('container', className)} {...props} />;
}
