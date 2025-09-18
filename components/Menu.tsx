"use client";
import { Link, usePathname, getPathname } from "../navigation";
import { useParams } from "next/navigation";

export default function Menu({
  aboutTitle,
  portfolioTitle,
}: {
  aboutTitle: string;
  portfolioTitle: string;
}) {
  const pathName = usePathname();
  const { locale } = useParams<{ locale: string }>();

  const homeHref = getPathname({ href: "/", locale });
  const portfolioHref = getPathname({ href: "/portfolio", locale });

  return (
    <nav className="layout__menu">
      <ul className="menu__list">
        <li className="menu__option">
          <Link
            href="/"
            className={`menu__link ${pathName === homeHref ? "menu__icon--active" : ""}`}
          >
            <i className="fa-solid fa-house menu__icon"></i>
            <span className="menu__overlay">{aboutTitle}</span>
          </Link>
        </li>
        <li className="menu__option">
          <Link
            href="/portfolio"
            className={`menu__link ${pathName === portfolioHref ? "menu__icon--active" : ""}`}
          >
            <i className="fa-solid fa-briefcase menu__icon"></i>
            <span className="menu__overlay">{portfolioTitle}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}