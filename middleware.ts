import createMiddleware from "next-intl/middleware";
import {locales, localePrefix, pathnames} from './navigation';

export default createMiddleware({
  defaultLocale: "es",
  localePrefix,
  locales,
  pathnames
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};