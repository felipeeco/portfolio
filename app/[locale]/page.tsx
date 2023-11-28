import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import localesJSON from "../../messages/en.json";
import Image from "next/image";

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
  achievedObjective: string;
  objectiveResult: string;
}

interface Certificate {
  title: string;
  id: string;
  link: string;
  logo: string;
  certificateDate: string;
}

export default function Home() {
  const t = useTranslations("App");
  const experiencesLength: number = localesJSON.App.About.experience.length;
  const certificatesLength: number = localesJSON.App.About.certificates.length;
  let experiences: Array<Experience> = [];
  let certificates: Array<Certificate> = [];
  for (let i = 0; i < experiencesLength; i++) {
    experiences.push({
      title: t(`About.experience.${i}.title`),
      startDate: t(`About.experience.${i}.startDate`),
      endDate: t(`About.experience.${i}.endDate`),
      position: t(`About.experience.${i}.position`),
      achievedObjective: t(`About.experience.${i}.achievedObjective`),
      objectiveResult: t(`About.experience.${i}.objectiveResult`),
    });
  }
  for (let i = 0; i < certificatesLength; i++) {
    certificates.push({
      title: t(`About.certificates.${i}.title`),
      id: t(`About.certificates.${i}.id`),
      link: t(`About.certificates.${i}.link`),
      logo: t(`About.certificates.${i}.logo`),
      certificateDate: t(`About.certificates.${i}.certificateDate`),
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
                    <p className="timeline__text">
                      {experience.achievedObjective}
                    </p>
                    {experience.objectiveResult && (
                      <p className="timeline__text">
                        {experience.objectiveResult}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </section>
      <section className="experience__certificates">
        <header className="experience__subheader">
          <h2 className="experience__subtitle">
            {t("About.titleCertificate")}
          </h2>
        </header>
        <section className="certificates__container">
          {certificates.map((certificate: Certificate, index: number) => {
            //if exist link create link for certificate
            if (certificate.link) {
              return (
                <a
                  href={certificate.link}
                  target="_blank"
                  title={certificate.title}
                  key={index}
                  className="certificate__link"
                >
                  <article className="certificate__item certificate__item--max-width">
                    <div className="certificate__logo">
                      <Image
                        className="certificate__image"
                        src={certificate.logo}
                        alt={certificate.title}
                        width={100}
                        height={40}
                      />
                    </div>
                    <div className="certificate__content">
                      <h4 className="certificate__title">
                        {certificate.title}
                      </h4>
                      <span className="certificate__id">{certificate.id}</span>
                      <span className="certificate__date">
                        {certificate.certificateDate}
                      </span>
                    </div>
                  </article>
                </a>
              );
            }

            //return default value
            return (
              <article className="certificate__item" key={index}>
                <div className="certificate__logo">
                  <Image
                    className="certificate__image"
                    src={certificate.logo}
                    alt={certificate.title}
                    width={100}
                    height={40}
                  />
                </div>
                <div className="certificate__content">
                  <h4 className="certificate__title">{certificate.title}</h4>
                  <span className="certificate__id">{certificate.id}</span>
                  <span className="certificate__date">
                    {certificate.certificateDate}
                  </span>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </article>
  );
}
