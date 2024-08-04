'use client';

import { cn } from '@/utils/cn';

export function H1({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn('sf-pro-rounded text-7xl font-bold', className)}
      data-aos="fade-up"
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn('sf-pro-rounded text-6xl font-bold', className)}
      data-aos="fade-up"
    >
      {children}
    </h2>
  );
}

export function P({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn('text-xl', className)}>{children}</p>;
}
