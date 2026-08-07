'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    plausible?: ((event: string, options?: { props?: Record<string, string> }) => void) & { q?: unknown[] };
  }
}

export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();

  useEffect(() => {
    if (!domain) return;
    window.plausible = window.plausible || ((event, options) => {
      const queue = window.plausible?.q || [];
      queue.push([event, options]);
      if (window.plausible) window.plausible.q = queue;
    });
    function click(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest('a');
      const href = link?.getAttribute('href') || '';
      let name = '';
      if (href.includes('wa.me')) name = 'WhatsApp Click';
      else if (href.startsWith('/solucoes/')) name = 'Solution Click';
      else if (href.startsWith('/projetos/')) name = 'Project Click';
      else if (href.includes('contato') || link?.textContent?.toLowerCase().includes('diagnóstico')) name = 'Diagnostic Click';
      if (name) window.plausible?.(name, { props: { href } });
    }
    function lead() { window.plausible?.('Form Submission'); }
    document.addEventListener('click', click);
    window.addEventListener('4solver:lead', lead);
    return () => { document.removeEventListener('click', click); window.removeEventListener('4solver:lead', lead); };
  }, [domain]);

  return domain ? <Script defer data-domain={domain} src="https://plausible.io/js/script.js" strategy="afterInteractive" /> : null;
}
