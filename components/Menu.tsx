import { Link, usePathname } from "../navigation";

export default function Menu({
  aboutTitle,
  portfolioTitle,
}: {
  aboutTitle: any;
  portfolioTitle: any;
}) {
  const pathName = usePathname();
  return (
    <>
      <nav className="layout__menu">
        <ul className="menu__list">
          <li className="menu__option">
            <Link
              href="/"
              className={`menu__link ${
                pathName === `/` ? "menu__icon--active" : ""
              }`}
            >
              <i className="fa-solid fa-house menu__icon"></i>
              <span className="menu__overlay">{aboutTitle}</span>
            </Link>
          </li>
          <li className="menu__option">
            <Link
              href="/portfolio"
              className={`menu__link ${
                pathName === `/portfolio` || pathName === `/portafolio`
                  ? "menu__icon--active"
                  : ""
              }`}
            >
              <i className="fa-solid fa-briefcase menu__icon"></i>
              <span className="menu__overlay">{portfolioTitle}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
