"use client";

import { Link, usePathname } from "../../navigation";

export function LanguagesMenu({ language }: { language: any }) {
  const pathName = usePathname();
  return (
    <>
      {
        <div className="user-info__buttons">
          {language}
          <div className="user-info__languages">
            <Link locale="es" href={pathName}>
              Español
            </Link>{" "}
            |
            <Link locale="en" href={pathName}>
              English
            </Link>
          </div>
        </div>
      }
    </>
  );
}
