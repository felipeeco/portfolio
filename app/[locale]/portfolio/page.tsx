import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import localesJSON from "../../../messages/en.json";
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

export default function Home() {
  const t = useTranslations("App");
  const itemsLength: number = localesJSON.App.Portfolio.items.length;
  let items: Array<Item> = [];
  for (let i = 0; i < itemsLength; i++) {
    items.push({
      imageUrl: t(`Portfolio.items.${i}.imageUrl`),
      link: t(`Portfolio.items.${i}.link`),
      category: t(`Portfolio.items.${i}.category`),
      company: t(`Portfolio.items.${i}.company`),
    });
  }

  return (
    <>
      <section className="content__page content__portfolio">
        <header className="portfolio__header">
          <h1 className="portfolio__title">{t("Portfolio.title")}</h1>
        </header>

        <section className="portfolio__gallery">
          {items.map((item: Item, index: number) => {
            return (
              <>
                <figure className="gallery__item" key={index}>
                  <a href={item.link} className="gallery__link" target="_blank">
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
                    <i className="gallery__icon fa-solid fa-magnifying-glass"></i>
                  </a>
                </figure>
              </>
            );
          })}
        </section>
      </section>
    </>
  );
}
