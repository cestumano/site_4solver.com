import { useEffect } from 'react';

const MAX_SCALE_DOWN = 0.06;
const MAX_LIFT = 24;

export default function useStackDepth() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const frames = Array.from(document.querySelectorAll<HTMLElement>('.stack-frame'));
    if (frames.length < 2) return;

    function resetFrame(frame: HTMLElement) {
      frame.style.transform = '';
      frame.style.opacity = '';
    }

    function update() {
      for (let i = 0; i < frames.length - 1; i++) {
        const current = frames[i];
        const next = frames[i + 1];

        if (getComputedStyle(current).position !== 'sticky') {
          resetFrame(current);
          continue;
        }

        const currentRect = current.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();
        const overlap = currentRect.bottom - nextRect.top;
        const progress = Math.min(Math.max(overlap / currentRect.height, 0), 1);

        if (progress <= 0) {
          resetFrame(current);
          continue;
        }

        const scale = 1 - progress * MAX_SCALE_DOWN;
        const lift = -progress * MAX_LIFT;
        current.style.transform = `translateY(${lift}px) scale(${scale})`;
        // Fades all the way to 0 so a fully-covered card never shows through the next one.
        current.style.opacity = `${1 - progress}`;
      }
    }

    let frame: number | null = null;
    function requestUpdate() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        update();
      });
    }

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) cancelAnimationFrame(frame);
      frames.forEach(resetFrame);
    };
  }, []);
}
