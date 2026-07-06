import { useEffect } from 'react';

function mixColor(start: number[], end: number[], progress: number) {
  return start.map((value, index) => value + (end[index] - value) * progress);
}

function rgba(color: number[], alpha: number) {
  return `rgba(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(color[2])}, ${alpha})`;
}

export default function useScrollGradient() {
  useEffect(() => {
    const root = document.documentElement;

    function updateScrollGradient() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      const cyanToBlue = mixColor([125, 211, 252], [191, 219, 254], progress);
      const skyToCyan = mixColor([219, 234, 254], [186, 230, 253], progress);
      const softBlue = mixColor([239, 246, 255], [224, 242, 254], progress);

      root.style.setProperty('--gradient-a', rgba(cyanToBlue, 0.36));
      root.style.setProperty('--gradient-b', rgba(skyToCyan, 0.42));
      root.style.setProperty('--gradient-c', rgba(softBlue, 0.86));
      root.style.setProperty('--gradient-y', `${12 + progress * 58}%`);
      root.style.setProperty('--bg-drift-x', `${Math.round((progress - 0.5) * 160)}px`);
      root.style.setProperty('--bg-drift-y', `${Math.round(progress * 140)}px`);
    }

    let gradientFrame: number | null = null;

    function requestGradientUpdate() {
      if (gradientFrame) return;
      gradientFrame = requestAnimationFrame(() => {
        gradientFrame = null;
        updateScrollGradient();
      });
    }

    updateScrollGradient();
    window.addEventListener('scroll', requestGradientUpdate, { passive: true });
    window.addEventListener('resize', requestGradientUpdate);

    return () => {
      window.removeEventListener('scroll', requestGradientUpdate);
      window.removeEventListener('resize', requestGradientUpdate);
      if (gradientFrame) cancelAnimationFrame(gradientFrame);
    };
  }, []);
}
