// middleware.ts
import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './navigation';

export default createMiddleware({
  locales,
  defaultLocale: 'es',
  localePrefix,
  pathnames
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
