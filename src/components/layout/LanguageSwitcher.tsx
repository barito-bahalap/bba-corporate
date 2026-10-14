import { Link } from "react-router-dom";
// Style
import "./LanguageSwitcher.css";

interface LanguageSwitcherItem {
  code: string;
  short: string;
  label: string;
  lang: string;
  href: string;
  active: boolean;
}

interface LanguageSwitcherProps {
  items: LanguageSwitcherItem[];
  label: string;
}

export function LanguageSwitcher({ items, label }: LanguageSwitcherProps) {
  if (items.length < 2) return null;

  return (
    <nav className="lang-switch" aria-label={label}>
      {items.map((item) => (
        <Link
          key={item.code}
          to={item.href}
          lang={item.lang}
          hrefLang={item.lang}
          title={item.label}
          aria-current={item.active ? "true" : undefined}
          className={`lang-switch__item${item.active ? " lang-switch__item--active" : ""}`}
        >
          {item.short}
        </Link>
      ))}
    </nav>
  );
}
