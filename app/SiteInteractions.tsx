'use client';

import useActiveSection from './hooks/useActiveSection';
import useActiveTimeline from './hooks/useActiveTimeline';
import useRevealOnScroll from './hooks/useRevealOnScroll';
import useScrollGradient from './hooks/useScrollGradient';

export default function SiteInteractions() {
  useScrollGradient();
  useRevealOnScroll();
  useActiveSection();
  useActiveTimeline();

  return null;
}
