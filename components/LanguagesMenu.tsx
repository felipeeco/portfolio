import { Link, usePathname } from "../navigation";

export default function LanguagesMenu({
  language,
  onNavigate,
}: {
  language: string;
  onNavigate: () => void;
}) {
  const pathName = usePathname();
  return (
    <>
      {
        <div className="user-info__buttons">
          {language}
          <div className="user-info__languages">
            <Link locale="es" href={pathName} onClick={onNavigate}>
              Español
            </Link>{" "}
            |
            <Link locale="en" href={pathName} onClick={onNavigate}>
              English
            </Link>
          </div>
        </div>
      }
    </>
  );
}
