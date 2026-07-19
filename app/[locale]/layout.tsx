import {NextIntlClientProvider} from "next-intl";
import {getMessages, getLocale, getTranslations} from "next-intl/server";
import {notFound} from "next/navigation";
import Aside from "../../components/Aside";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export async function generateMetadata() {
  const t = await getTranslations({namespace: "App"});
  return {
    keywords: t("Global.keywords"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const locale = await getLocale();
  if (params.locale !== locale) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({namespace: "App"});

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="layout">
            <Aside
              name={t("Global.name")}
              position={t("Global.position")}
              profilePhotoAlt={t("Global.profilePhotoAlt")}
              linkedinLabel={t("Global.linkedinLabel")}
              githubLabel={t("Global.githubLabel")}
              aboutTitle={t("About.title")}
              portfolioTitle={t("Portfolio.title")}
              languages={t("Global.languages")}
            />
            <main className="layout__content">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
