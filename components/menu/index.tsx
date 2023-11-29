"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Menu({
  locale,
  aboutTitle,
  portfolioTitle,
}: {
  locale: any;
  aboutTitle: any;
  portfolioTitle: any;
}) {
  const pathName = usePathname();
  return (
    <>
      <nav className="layout__menu">
        <ul className="menu__list">
          <li className="menu__option">
            <Link href="/" className="menu__link">
              <i
                className={`fa-solid fa-house menu__icon ${
                  pathName === `/${locale}` ? "menu__icon--active" : ""
                }`}
              ></i>
              <span className="menu__overlay">{aboutTitle}</span>
            </Link>
          </li>
          <li className="menu__option">
            <Link href="/portfolio" className="menu__link">
              <i
                className={`fa-solid fa-briefcase menu__icon ${
                  pathName === `/${locale}/portfolio`
                    ? "menu__icon--active"
                    : ""
                }`}
              ></i>
              <span className="menu__overlay">{portfolioTitle}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
