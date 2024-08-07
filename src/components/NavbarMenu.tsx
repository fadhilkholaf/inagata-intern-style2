import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarMenu({
  title,
  href
}: {
  title: string;
  href: string;
}) {
  const pathname = usePathname();

  const path = pathname.split('/')[1];

  return (
    <Link
      href={href}
      className={cn('text-4xl text-white hover:font-semibold md:text-base', {
        'font-semibold': path === href.slice(1)
      })}
    >
      {title}
    </Link>
  );
}
