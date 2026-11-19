import { Link } from 'react-router';
import type { LinkProps } from 'react-router';
import { cn } from '@/utils/cn';
export function ButtonLink({ className, ...props }: LinkProps) {
  return <Link className={cn('button', className)} {...props} />;
}
