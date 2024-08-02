import { cn } from '@/utils/cn';

export default function Badge({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        'h-fit w-fit rounded-full bg-accent px-4 py-2 text-center',
        className
      )}
    >
      {children}
    </p>
  );
}
