import {NextIntlClientProvider} from "next-intl";
import {getMessages, getLocale, getTranslations} from "next-intl/server";
import {notFound} from "next/navigation";
import type {Metadata, Viewport} from "next";
import Aside from "../../components/Aside";
import {localizedUrl, siteUrl, socialProfiles} from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: {locale: string};
}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: "App"});
  const isEnglish = params.locale === "en";

  return {
    metadataBase: new URL(siteUrl),
    applicationName: `${t("Global.name")} — ${t("Global.shortPosition")}`,
    authors: [{name: t("Global.name"), url: socialProfiles[1]}],
    creator: t("Global.name"),
    publisher: t("Global.name"),
    category: "technology",
    keywords: t("Global.keywords").split(", "),
    alternates: {
      canonical: localizedUrl(params.locale),
      languages: {
        "es-CO": localizedUrl("es"),
        "en-US": localizedUrl("en"),
        "x-default": localizedUrl("es"),
      },
    },
    openGraph: {
      type: "profile",
      locale: isEnglish ? "en_US" : "es_CO",
      alternateLocale: isEnglish ? ["es_CO"] : ["en_US"],
      siteName: t("Global.name"),
      title: `${t("Global.name")} — ${t("Global.shortPosition")}`,
      description: t("Global.seoDescription"),
      url: localizedUrl(params.locale),
      images: [{url: "/img/profile.jpg", alt: t("Global.profilePhotoAlt")}],
    },
    twitter: {
      card: "summary",
      title: `${t("Global.name")} — ${t("Global.shortPosition")}`,
      description: t("Global.seoDescription"),
      images: ["/img/profile.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {index: true, follow: true},
    },
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
  const profileUrl = localizedUrl(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${profileUrl}#person`,
        name: t("Global.name"),
        url: profileUrl,
        image: `${siteUrl}/img/profile.jpg`,
        jobTitle: t("Global.shortPosition"),
        description: t("Global.seoDescription"),
        email: `mailto:${t("About.contact.email")}`,
        sameAs: socialProfiles,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bogotá",
          addressCountry: "CO",
        },
        knowsLanguage: ["es", "en"],
        knowsAbout: t("Global.expertise").split(", "),
      },
      {
        "@type": "ProfilePage",
        "@id": `${profileUrl}#profile-page`,
        url: profileUrl,
        name: `${t("Global.name")} — ${t("Global.shortPosition")}`,
        description: t("Global.seoDescription"),
        inLanguage: locale === "en" ? "en-US" : "es-CO",
        mainEntity: {"@id": `${profileUrl}#person`},
      },
    ],
  };

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
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
