const DEFAULT_SITE_URL = "https://portfolio-beta-one-33.vercel.app";

function normalizeUrl(value: string) {
  const url = value.startsWith("http") ? value : `https://${value}`;
  return url.replace(/\/$/, "");
}

export const siteUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    DEFAULT_SITE_URL
);

export const socialProfiles = [
  "https://www.linkedin.com/in/luisfelipemoreno",
  "https://github.com/felipeeco",
];

export function localizedUrl(locale: string, path = "") {
  const localePrefix = locale === "en" ? "/en" : "";
  return `${siteUrl}${localePrefix}${path}`;
}
