export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  // .stack-frame is sticky, so its rendered position depends on how far the
  // page is already scrolled. Measuring rect/offsetTop while a frame is
  // "stuck" gives its current on-screen position instead of its true place
  // in the document, which makes jumps to earlier sections fall short.
  // Temporarily switching sticky off for the measurement (synchronously, so
  // nothing repaints in between) gives the real, scroll-independent offset.
  const stackFrames = document.querySelectorAll<HTMLElement>('.stack-frame');
  const previousPositions = Array.from(stackFrames, (frame) => frame.style.position);

  stackFrames.forEach((frame) => {
    frame.style.position = 'static';
  });

  const rect = element.getBoundingClientRect();
  const scrollMarginTop = parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
  const target = rect.top + window.scrollY - scrollMarginTop;

  stackFrames.forEach((frame, index) => {
    frame.style.position = previousPositions[index];
  });

  window.scrollTo({ top: target, behavior: 'smooth' });
}
