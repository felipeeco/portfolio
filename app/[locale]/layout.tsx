import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
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
          {/* Sidebar */}
          <aside className="layout__aside">
            <section className="aside__user-info">
              {/* Info user */}
              <div className="user-info__general-info">
                <div className="user-info__container-image">
                  <Image
                    className="user-info__image"
                    src="/img/profile.jpg"
                    alt="profile photo"
                    width={180}
                    height={180}
                  />
                </div>
                <h2 className="user-info__name">{t("Global.name")}</h2>
                <h1 className="user-info__job">{t("Global.position")}</h1>
              </div>

              {/* Nav */}
              <nav className="layout__menu">
                <ul className="menu__list">
                  <li className="menu__option">
                    <a
                      href="index.html"
                      className="menu__link menu__icon--active"
                    >
                      <i className="fa-solid fa-house menu__icon"></i>
                      <span className="menu__overlay">Home</span>
                    </a>
                  </li>
                  <li className="menu__option">
                    <a href="portfolio.html" className="menu__link">
                      <i className="fa-solid fa-briefcase menu__icon"></i>
                      <span className="menu__overlay">Portafolio</span>
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Social media links */}
              <div className="user-info__links">
                <ul className="links__social">
                  <li className="social__option">
                    <a href="https://www.linkedin.com/in/luisfelipemoreno">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="social__option">
                    <a href="https://github.com/felipeeco">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/*  Buton */}
              {/* <div className="user-info__buttons">
                    <a href="#" className="user-info__btn">
                        Descargar CV
                    </a>
                </div> */}
            </section>
          </aside>

          {/* Responsive menu */}
          <div className="layout__menu-toggle">
            <i className="menu-toggle__icon fa-solid fa-bars"></i>
            <i className="menu-toggle__icon fa-solid fa-xmark"></i>
          </div>
          {/* Main Content */}
          <main className="layout__content">{children}</main>
        </div>
      </body>
    </html>
  );
}
