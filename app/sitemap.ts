import type { MetadataRoute } from 'next';
import { servicePages } from './data/site';

export const dynamic = 'force-static';

const baseUrl = 'https://4solver.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries: MetadataRoute.Sitemap = servicePages.map(({ slug }) => ({
    url: `${baseUrl}/solucoes/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${baseUrl}/solucoes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/projetos/biosolver`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    { url: `${baseUrl}/empresa`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacidade`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...serviceEntries
  ];
}
