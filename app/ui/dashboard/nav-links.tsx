'use client';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import {
  UserGroupIcon,
  HomeIcon,
  ClipboardDocumentCheckIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Assessment',
    href: '/dashboard/assessment',
    icon: ClipboardDocumentCheckIcon,
  },
  { name: 'Book an Appointment', href: '/dashboard/appointment', icon: UserGroupIcon },
  {
    name: 'Journal',
    href: '/dashboard/Journal',
    icon:  FaceSmileIcon,
  }
];

export default function NavLinks() {

  const pathname = usePathname(); 

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-500 p-3 text-sm font-medium hover:bg-sky-100 hover:text-sky-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-sky-500' : pathname == link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
