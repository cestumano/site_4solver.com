'use client';

import { railLinks } from '../data/site';
import { scrollToSection } from '../lib/scrollToSection';

export default function SectionRail() {
  return (
    <nav className="section-rail" aria-label="Navegação por seções">
      {railLinks.map((link, index) => (
        <a
          className={index === 0 ? 'active' : undefined}
          href={link.href}
          aria-label={link.label}
          key={link.href}
          onClick={(event) => {
            event.preventDefault();
            scrollToSection(link.href.slice(1));
          }}
        >
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  );
}
