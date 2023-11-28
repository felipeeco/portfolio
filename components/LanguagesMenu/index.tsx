"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export function LanguagesMenu() {
  const pathName = usePathname();
  const locale = useLocale();
  return (
    <>
      {
        <div className="user-info__buttons">
          Idiomas <br />
          <span className={``}>Español</span> |<span>English</span>
        </div>
      }
    </>
  );
}
