import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  const t = await getTranslations({ namespace: "Index" });

  return {
    title: `${t("aboutMeTitle")} | ${t("name")} ${t("position")}`,
    description: t("aboutMeDescription"),
  };
}

export default function Home() {
  const t = useTranslations("Index");

  return (
    <article className="content__page content__about">
      <header className="about__header">
        <h2 className="about__title">
          Sobre <span className="title__color">Mi</span>
        </h2>
      </header>
      <section className="about__personal-info">
        <article className="personal-info__bio">
          <p className="personal-info__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatum minus, ratione, commodi animi omnis et unde quis sunt
            laboriosam reiciendis saepe! Eius minima alias porro sint harum.
            Consequatur, minima?
          </p>
        </article>
      </section>
      <section className="experience__knowledges">
        <header className="knowledges__subheader">
          <h2 className="experience__subtitle">Technical Skilss</h2>
        </header>
        <section className="knowledges__container">
          <ul className="knowledges__list">
            <li className="knowledges__option">JavaScript</li>
            <li className="knowledges__option">JavaScript</li>
            <li className="knowledges__option">JavaScript</li>
            <li className="knowledges__option">JavaScript</li>
            <li className="knowledges__option">JavaScript</li>
            <li className="knowledges__option">JavaScript</li>
            <li className="knowledges__option">JavaScript</li>
          </ul>
        </section>
      </section>
      <section className="experience__container">
        <section className="experience__left">
          <header className="experience__subheader">
            <h2 className="experience__subtitle">Experiencia</h2>
          </header>
          <div className="experience__timelines">
            <article className="timelines__timeline">
              <header className="timeline__header">
                <h3 className="timeline__year">2010</h3>
                <span className="timelinecompany">Indra</span>
              </header>

              <div className="timeline__divider"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">Desarrollador Frontend</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  odit repellendus non debitis architecto, at voluptatum magnam
                  adipisci? Quia rerum omnis veniam eius culpa unde, error
                  dolores vel obcaecati quod.
                </p>
              </div>
            </article>
            <article className="timelines__timeline">
              <header className="timeline__header">
                <h3 className="timeline__year">2010</h3>
                <span className="timelinecompany">Indra</span>
              </header>

              <div className="timeline__divider"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">Desarrollador Frontend</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  odit repellendus non debitis architecto, at voluptatum magnam
                  adipisci? Quia rerum omnis veniam eius culpa unde, error
                  dolores vel obcaecati quod.
                </p>
              </div>
            </article>
            <article className="timelines__timeline">
              <header className="timeline__header">
                <h3 className="timeline__year">2010</h3>
                <span className="timelinecompany">Indra</span>
              </header>

              <div className="timeline__divider timeline__divider--last"></div>

              <div className="timeline__description">
                <h3 className="timeline__title">Desarrollador Frontend</h3>
                <p className="timeline__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  odit repellendus non debitis architecto, at voluptatum magnam
                  adipisci? Quia rerum omnis veniam eius culpa unde, error
                  dolores vel obcaecati quod.
                </p>
              </div>
            </article>
          </div>
        </section>
      </section>
      <section className="experience__certificates">
        <header className="experience__subheader">
          <h2 className="experience__subtitle">Certificados</h2>
        </header>
        <section className="certificates__container">
          <article className="certificate__item">
            <div className="certificate__logo">
              <img
                className="certificate__image"
                src="/img/certificado-1.png"
                alt="imagen"
              />
            </div>
            <div className="certificate__content">
              <h4 className="certificate__title">Node.js certificado</h4>
              <span className="certificate__id">545345</span>
              <span className="certificate__date">23 de agosto de 2023</span>
            </div>
          </article>
          <article className="certificate__item">
            <div className="certificate__logo">
              <img
                className="certificate__image"
                src="/img/certificado-1.png"
                alt="imagen"
              />
            </div>
            <div className="certificate__content">
              <h4 className="certificate__title">Node.js certificado</h4>
              <span className="certificate__id">545345</span>
              <span className="certificate__date">23 de agosto de 2023</span>
            </div>
          </article>
          <article className="certificate__item">
            <div className="certificate__logo">
              <img
                className="certificate__image"
                src="/img/certificado-1.png"
                alt="imagen"
              />
            </div>
            <div className="certificate__content">
              <h4 className="certificate__title">Node.js certificado</h4>
              <span className="certificate__id">545345</span>
              <span className="certificate__date">23 de agosto de 2023</span>
            </div>
          </article>
        </section>
      </section>
    </article>
  );
}
