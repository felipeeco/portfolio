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
    <>
      <section className="content__page content__portfolio">
        <header className="portfolio__header">
          <h1 className="portfolio__title">{t("Portfolio.title")}</h1>
        </header>

        <section className="portfolio__gallery">
          {items.map((item) => (
                <figure className="gallery__item" key={item.company}>
                  <a
                    href={item.link}
                    className="gallery__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="gallery__container-image">
                      <Image
                        className="gallery__image"
                        src={item.imageUrl}
                        alt={item.category}
                        width={281}
                        height={188}
                      />
                    </div>
                    <figcaption className="gallery__title">
                      {item.company} | {item.category}
                    </figcaption>
                    <i
                      className="gallery__icon fa-solid fa-magnifying-glass"
                      aria-hidden="true"
                    ></i>
                  </a>
                </figure>
          ))}
        </section>
      </section>
    </>
  );
}
