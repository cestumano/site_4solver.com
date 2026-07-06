import { useEffect } from 'react';

export default function useActiveSection() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.screen-section[data-section]');
    const railLinks = document.querySelectorAll<HTMLAnchorElement>('.section-rail a');

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = (entry.target as HTMLElement).id;
          railLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        });
      },
      { rootMargin: '-38% 0px -48% 0px', threshold: 0.01 }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => sectionObserver.disconnect();
  }, []);
}
