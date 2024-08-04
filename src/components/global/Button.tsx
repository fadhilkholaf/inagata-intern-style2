import { cn } from '@/utils/cn';
import Link from 'next/link';

export function Button({
  children,
  className,
  type
}: {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}) {
  return (
    <button
      type={type}
      className={cn(
        'h-fit w-fit rounded-full bg-accent px-6 py-3 text-white',
        className
      )}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  className
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'h-fit w-fit rounded-full bg-accent px-6 py-3 text-white',
        className
      )}
    >
      {children}
    </Link>
  );
}
