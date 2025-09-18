import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Me", asButton: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState<string>(""); // пустое изначально

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash); // первый раз берём из браузера
      const onHashChange = () => setHash(window.location.hash);
      window.addEventListener("hashchange", onHashChange);
      return () => window.removeEventListener("hashchange", onHashChange);
    }
  }, []);

  const handleNav = () => setOpen((o) => !o);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.brand}>
          <span className={styles.brandBox}>RV</span>
        </a>

        <button
          className={styles.burger}
          onClick={handleNav}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.menu} ${open ? styles.open : ""}`}>
          {links.map((l) => (
            <li key={l.href} className={styles.item}>
              <a
                href={l.href}
                onClick={closeMenu}
                className={`${styles.link} ${hash === l.href ? styles.active : ""} ${l.asButton ? styles.cta : ""}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
