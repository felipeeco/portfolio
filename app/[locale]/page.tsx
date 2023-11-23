import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import localesJSON from "../../messages/en.json";

export async function generateMetadata() {
  const t = await getTranslations({ namespace: "App" });

  return {
    title: `${t("About.title")} | ${t("Global.name")} ${t("Global.position")}`,
    description: t("About.description"),
  };
}

interface Experience {
  title: string;
  startDate: string;
  endDate: string;
  position: string;
  experience: string;
}

export default function Home() {
  const t = useTranslations("App");
  const experiencesLength: number = localesJSON.App.About.experience.length;
  let experiences: Array<Experience> = [];
  for (let i = 0; i < experiencesLength; i++) {
    experiences.push({
      title: t(`About.experience.${i}.title`),
      startDate: t(`About.experience.${i}.startDate`),
      endDate: t(`About.experience.${i}.endDate`),
      position: t(`About.experience.${i}.position`),
      experience: t(`About.experience.${i}.experience`),
    });
  }

  return (
    <article className="content__page content__about">
      <header className="about__header">
        <h2 className="about__title">
          {t("About.titleOne")}{" "}
          <span className="title__color">{t("About.titleTwo")}</span>
        </h2>
      </header>
      <section className="about__personal-info">
        <article className="personal-info__bio">
          <p className="personal-info__description">{t("About.description")}</p>
        </article>
      </section>
      <section className="experience__knowledges">
        <header className="knowledges__subheader">
          <h2 className="experience__subtitle">
            {t("About.technicalSkillsTitle")}
          </h2>
        </header>
        <section className="knowledges__container">
          <ul className="knowledges__list">
            <li className="knowledges__option">JavaScript</li>
            <li className="knowledges__option">TypeScript</li>
            <li className="knowledges__option">React</li>
            <li className="knowledges__option">Angular</li>
            <li className="knowledges__option">LitElement</li>
            <li className="knowledges__option">Web Components</li>
            <li className="knowledges__option">Node.js</li>
            <li className="knowledges__option">Next.js</li>
            <li className="knowledges__option">Redux</li>
            <li className="knowledges__option">
              Unit testing (Jest, React testing, Jasmine, angular testing)
            </li>
            <li className="knowledges__option">Git</li>
            <li className="knowledges__option">SCRUM</li>
            <li className="knowledges__option">BEM</li>
            <li className="knowledges__option">CSS</li>
            <li className="knowledges__option">HTML5</li>
            <li className="knowledges__option">SASS</li>
            <li className="knowledges__option">Material</li>
            <li className="knowledges__option">Bootstrap</li>
            <li className="knowledges__option">MongoDB</li>
            <li className="knowledges__option">Mongoose</li>
            <li className="knowledges__option">Express.js</li>
            <li className="knowledges__option">Firebase</li>
            <li className="knowledges__option">Figma</li>
            <li className="knowledges__option">Jira</li>
          </ul>
        </section>
      </section>
      <section className="experience__container">
        <section className="experience__left">
          <header className="experience__subheader">
            <h2 className="experience__subtitle">
              {t("About.experienceTitle")}
            </h2>
          </header>
          <div className="experience__timelines">
            {experiences.map((experience: Experience, index: number) => {
              return (
                <article className="timelines__timeline" key={index}>
                  <header className="timeline__header">
                    <span className="timelinecompany">{experience.title}</span>
                    <h3 className="timeline__year">{experience.endDate}</h3>
                    <h3 className="timeline__year">{experience.startDate}</h3>
                  </header>
                  <div className="timeline__divider"></div>
                  <div className="timeline__description">
                    <h3 className="timeline__title">{experience.position}</h3>
                    <p className="timeline__text">{experience.experience}</p>
                  </div>
                </article>
              );
            })}
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
