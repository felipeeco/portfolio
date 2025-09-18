import {createNavigation} from 'next-intl/navigation';

export const locales = ['es', 'en'] as const;
export const localePrefix = 'as-needed' as const;

export const pathnames = {
  '/': '/',
  '/portfolio': {
    en: '/portfolio',
    es: '/portafolio'
  }
} as const;

const routing = {
  locales,
  defaultLocale: 'es',
  localePrefix,
  pathnames
} as const;

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
