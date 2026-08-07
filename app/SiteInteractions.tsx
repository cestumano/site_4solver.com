'use client';

import useActiveSection from './hooks/useActiveSection';
import useActiveTimeline from './hooks/useActiveTimeline';
import useRevealOnScroll from './hooks/useRevealOnScroll';

export default function SiteInteractions() {
  useRevealOnScroll();
  useActiveSection();
  useActiveTimeline();

  return null;
}
