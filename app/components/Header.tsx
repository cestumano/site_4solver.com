'use client';

import { usePathname } from 'next/navigation';
import { useState, type MouseEvent } from 'react';
import { navLinks } from '../data/site';
import { scrollToSection } from '../lib/scrollToSection';
import Brand from './Brand';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    closeMenu();

    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;

    const targetPath = href.slice(0, hashIndex) || '/';
    if (pathname !== targetPath) return;

    event.preventDefault();
    scrollToSection(href.slice(hashIndex + 1));
  }

  return (
    <header className="site-header" id="topo">
      <nav className="navbar container">
        <Brand priority />

        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`.trim()}>
          {navLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={(event) => handleNavClick(event, link.href)}>
              {link.label}
            </a>
          ))}
          <a href="/contato" className="nav-cta" onClick={closeMenu}>
            Fale conosco
          </a>
        </div>
      </nav>
    </header>
  );
}
