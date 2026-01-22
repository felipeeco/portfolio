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
  let experiences: Array<Experience> = [];
  for (let i = 0; i < experiencesLength; i++) {
    experiences.push({
      title: t(`About.experience.${i}.title`),
      startDate: t(`About.experience.${i}.startDate`),
      endDate: t(`About.experience.${i}.endDate`),
      position: t(`About.experience.${i}.position`),
      achievedObjective: t(`About.experience.${i}.achievedObjective`),
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
            <li className="knowledges__item">
              <strong className="knowledges__label">Frontend:</strong>
              HTML5, CSS3, JavaScript, TypeScript, Next.js, React
            </li>
            <li className="knowledges__item">
              <strong className="knowledges__label">Backend:</strong>
              Node.js, Prisma ORM, PostgreSQL, API REST
            </li>
            <li className="knowledges__item">
              <strong className="knowledges__label">Testing:</strong>
              Jest, Jasmine, Chai, Cucumber
            </li>
            <li className="knowledges__item">
              <strong className="knowledges__label">CI/CD &amp; Tools:</strong>
              Jenkins, Docker, GitHub, Gitflow
            </li>
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
                    <ul>
                      {experience.achievedObjective.split("\n").map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </article>
  );
}
