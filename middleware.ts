// middleware.ts
import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';

export default createMiddleware({
  locales,
  defaultLocale: 'es',
  localePrefix
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};