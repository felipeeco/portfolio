import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import { Aside } from "../../components/Aside";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export async function generateMetadata() {
  const t = await getTranslations({ namespace: "App" });

  return {
    keywords: t("Global.keywords"),
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const t = useTranslations("App");
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <div className="layout">
          <Aside
            name={t("Global.name")}
            position={t("Global.position")}
            aboutTitle={t("About.title")}
            portfolioTitle={t("Portfolio.title")}
            languages={t("Global.languages")}
          />
          {/* Main Content */}
          <main className="layout__content">{children}</main>
        </div>
      </body>
    </html>
  );
}
