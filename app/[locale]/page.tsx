import {getTranslations} from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations({namespace: "App"});

  return {
    title: `${t("About.title")} | ${t("Global.name")} — ${t("Global.position")}`,
    description: t("About.description"),
  };
}

interface TechnicalSkill {
  label: string;
  value: string;
}

interface Experience {
  title: string;
  startDate: string;
  endDate: string;
  position: string;
  achievements: string[];
}

interface Language {
  name: string;
  level: string;
}

interface Contact {
  location: string;
  phone: string;
  email: string;
  linkedin: string;
}

export default async function Home() {
  const t = await getTranslations({namespace: "App"});
  const technicalSkills = t.raw("About.technicalSkills") as TechnicalSkill[];
  const experiences = t.raw("About.experience") as Experience[];
  const languages = t.raw("About.languages") as Language[];
  const contact = t.raw("About.contact") as Contact;

  return (
    <article className="content__page content__about">
      <header className="about__header">
        <h2 className="about__title">
          {t("About.titleOne")} {" "}
          <span className="title__color">{t("About.titleTwo")}</span>
        </h2>
      </header>

      <section className="about__personal-info">
        <p className="personal-info__description">{t("About.description")}</p>
      </section>

      <section className="experience__knowledges">
        <header className="knowledges__subheader">
          <h2 className="experience__subtitle">
            {t("About.technicalSkillsTitle")}
          </h2>
        </header>
        <div className="knowledges__container">
          <ul className="knowledges__list">
            {technicalSkills.map((skill) => (
              <li className="knowledges__item" key={skill.label}>
                <strong className="knowledges__label">{skill.label}:</strong>
                {skill.value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="experience__container">
        <header className="experience__subheader">
          <h2 className="experience__subtitle">
            {t("About.experienceTitle")}
          </h2>
        </header>
        <div className="experience__timelines">
          {experiences.map((experience, index) => (
            <article className="timelines__timeline" key={experience.title}>
              <header className="timeline__header">
                <span className="timelinecompany">{experience.title}</span>
                <span className="timeline__year">{experience.startDate}</span>
                <span className="timeline__year">{experience.endDate}</span>
              </header>
              <div
                className={`timeline__divider ${
                  index === experiences.length - 1 ? "timeline__divider--last" : ""
                }`}
              />
              <div className="timeline__description">
                <h3 className="timeline__title">{experience.position}</h3>
                <ul>
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-details">
        <article className="profile-details__card">
          <h2 className="experience__subtitle">{t("About.languagesTitle")}</h2>
          <ul className="profile-details__list">
            {languages.map((language) => (
              <li key={language.name}>
                <strong>{language.name}:</strong> {language.level}
              </li>
            ))}
          </ul>
        </article>

        <article className="profile-details__card">
          <h2 className="experience__subtitle">{t("About.contactTitle")}</h2>
          <address className="contact-list">
            <span>
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
              {contact.location}
            </span>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              {contact.email}
            </a>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true" />
              {contact.linkedin}
            </a>
          </address>
        </article>
      </section>
    </article>
  );
}
