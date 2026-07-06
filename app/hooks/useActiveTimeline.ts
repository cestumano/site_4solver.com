import { useEffect } from 'react';

export default function useActiveTimeline() {
  useEffect(() => {
    const timelineItems = document.querySelectorAll<HTMLElement>('.timeline-item');

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('active', entry.isIntersecting);
        });
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0.2 }
    );

    timelineItems.forEach((item) => timelineObserver.observe(item));

    return () => timelineObserver.disconnect();
  }, []);
}
