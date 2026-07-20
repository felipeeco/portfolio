import {getTranslations} from "next-intl/server";
import Image from "next/image";

export async function generateMetadata() {
  const t = await getTranslations({ namespace: "App" });

  return {
    title: `${t("Portfolio.title")} | ${t("Global.name")} ${t(
      "Global.position"
    )}`,
    description: t("Portfolio.description"),
  };
}

interface Item {
  imageUrl: string;
  link: string;
  category: string;
  company: string;
}

export default async function PortfolioPage() {
  const t = await getTranslations({namespace: "App"});
  const items = t.raw("Portfolio.items") as Item[];

  return (
    <article className="content__page content__portfolio">
      <header className="portfolio__header">
        <h2 className="portfolio__title">{t("Portfolio.title")}</h2>
        <p className="portfolio__subtitle">{t("Portfolio.subtitle")}</p>
      </header>

      <section
        className="portfolio__gallery"
        aria-label={t("Portfolio.title")}
      >
        {items.map((item) => (
          <figure className="gallery__item" key={item.company}>
            <a
              href={item.link}
              className="gallery__link"
              target="_blank"
              rel="noreferrer"
              aria-label={`${t("Portfolio.viewProject")}: ${item.company}`}
            >
              <div className="gallery__container-image">
                <Image
                  className="gallery__image"
                  src={item.imageUrl}
                  alt=""
                  fill
                  sizes="(max-width: 585px) 100vw, (max-width: 1060px) 50vw, 30vw"
                />
              </div>

              <figcaption className="gallery__caption">
                <div className="gallery__project">
                  <h3 className="gallery__title">{item.company}</h3>
                  <span className="gallery__category">{item.category}</span>
                </div>
                <span className="gallery__icon" aria-hidden="true">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </span>
              </figcaption>
            </a>
          </figure>
        ))}
      </section>
    </article>
  );
}
