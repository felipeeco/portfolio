"use client";
import Menu from "@/components/Menu";
import LanguagesMenu from "@/components/LanguagesMenu";
import Image from "next/image";
import React from "react";

export default function Aside({
  name,
  position,
  profilePhotoAlt,
  linkedinLabel,
  githubLabel,
  aboutTitle,
  portfolioTitle,
  languages,
}: {
  name: string;
  position: string;
  profilePhotoAlt: string;
  linkedinLabel: string;
  githubLabel: string;
  aboutTitle: string;
  portfolioTitle: string;
  languages: string;
}) {
  const [isVisibleResponsiveMenu, setIsVisibleResponsiveMenu] =
    React.useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        id="profile-navigation"
        className={`layout__aside ${
          isVisibleResponsiveMenu ? "layout__aside--visible" : ""
        }`}
      >
        <section className="aside__user-info">
          {/* Info user */}
          <div className="user-info__general-info">
            <div className="user-info__container-image">
              <Image
                src="/img/profile.jpg"
                alt={profilePhotoAlt}
                className="user-info__image"
                width={180}
                height={180}
                priority
              />
            </div>
            <h2 className="user-info__name">{name}</h2>
            <h1 className="user-info__job">{position}</h1>
          </div>

          <LanguagesMenu
            language={languages}
            onNavigate={() => setIsVisibleResponsiveMenu(false)}
          />

          <Menu
            aboutTitle={aboutTitle}
            portfolioTitle={portfolioTitle}
            onNavigate={() => setIsVisibleResponsiveMenu(false)}
          />

          {/* Social media links */}
          <div className="user-info__links">
            <ul className="links__social">
              <li className="social__option">
                <a
                  href="https://www.linkedin.com/in/luisfelipemoreno"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={linkedinLabel}
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social__option">
                <a
                  href="https://github.com/felipeeco"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={githubLabel}
                >
                  <i className="fa-brands fa-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </aside>

      {/* Responsive menu */}
      <button
        type="button"
        className="layout__menu-toggle"
        aria-controls="profile-navigation"
        aria-expanded={isVisibleResponsiveMenu}
        onClick={() => {
          setIsVisibleResponsiveMenu(!isVisibleResponsiveMenu);
        }}
      >
        <i
          className={`menu-toggle__icon fa-solid ${
            isVisibleResponsiveMenu ? "fa-xmark" : "fa-bars"
          }`}
          aria-hidden="true"
        ></i>
      </button>
    </>
  );
}
