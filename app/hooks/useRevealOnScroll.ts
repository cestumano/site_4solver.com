import { useEffect } from 'react';

export default function useRevealOnScroll() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');

    reveals.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) element.classList.add('visible');
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.13 }
    );

    reveals.forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, []);
}
