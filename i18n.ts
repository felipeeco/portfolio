import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async (ctx) => {
  const rl = (ctx as any).requestLocale;
  const locale =
    (typeof rl === 'function' ? await rl() : await rl) ??
    (ctx as any).locale ??
    'es';

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});