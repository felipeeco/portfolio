"use client";

import React from "react";
import { Menu } from "../Menu/";
import { LanguagesMenu } from "../LanguagesMenu";

export function Aside({
  name,
  position,
  aboutTitle,
  portfolioTitle,
  languages,
}: {
  name: any;
  position: any;
  aboutTitle: any;
  portfolioTitle: any;
  languages: any;
}) {
  const [isVisibleResponsiveMenu, setIsVisibleResponsiveMenu] =
    React.useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`layout__aside ${
          isVisibleResponsiveMenu ? "layout__aside--visible" : ""
        }`}
      >
        <section className="aside__user-info">
          {/* Info user */}
          <div className="user-info__general-info">
            <div className="user-info__container-image">
              <img
                src="/img/profile.jpg"
                alt="profile photo"
                className="user-info__image"
              />
            </div>
            <h2 className="user-info__name">{name}</h2>
            <h1 className="user-info__job">{position}</h1>
          </div>

          {/* Nav */}
          <Menu aboutTitle={aboutTitle} portfolioTitle={portfolioTitle} />

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
          <LanguagesMenu language={languages} />
        </section>
      </aside>

      {/* Responsive menu */}
      <div
        className="layout__menu-toggle"
        onClick={() => {
          setIsVisibleResponsiveMenu(!isVisibleResponsiveMenu);
        }}
      >
        <i className="menu-toggle__icon fa-solid fa-bars"></i>
        <i className="menu-toggle__icon fa-solid fa-xmark"></i>
      </div>
    </>
  );
}
