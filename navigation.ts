import {createSharedPathnamesNavigation, Pathnames} from 'next-intl/navigation';
 
interface NavigationOptions {
  locales: readonly ["es", "en"];
  localePrefix?: string;
}

export const locales = ['es', 'en'] as const;
export const localePrefix = 'always'; // Default
 
export const pathnames = {   
    // If locales use different paths, you can
    // specify each external path per locale.
    '/portfolio': {
      en: '/portfolio',
      es: '/portafolio'
    },
  } satisfies Pathnames<typeof locales>;

  export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames,
  } as NavigationOptions);