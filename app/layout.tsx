import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import { contact } from './data/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://4solver.com.br'),
  title: '4Solver | Tecnologia, IA e automação para negócios reais',
  description:
    '4Solver: soluções inteligentes com IA, automação, dashboards, sistemas, APIs, chatbots e tecnologia para empresas.',
  keywords: [
    'IA',
    'automação',
    'dashboards',
    'APIs',
    'desenvolvimento web',
    'chatbots',
    'RAG',
    'tecnologia sustentável'
  ],
  authors: [{ name: '4Solver' }],
  openGraph: {
    title: '4Solver | Tecnologia, IA e automação para negócios reais',
    description:
      'IA, automação e sistemas sob medida para atendimento, condomínios, operações internas e projetos sustentáveis.',
    images: ['/assets/logo-4solver.jpeg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '4Solver | Tecnologia e IA',
    description: 'Soluções digitais inteligentes para empresas',
    images: ['/assets/logo-4solver.jpeg']
  },
  icons: {
    icon: '/assets/logo-4solver.jpeg'
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '4Solver',
  url: 'https://4solver.com.br',
  logo: 'https://4solver.com.br/assets/logo-4solver.jpeg',
  description: 'Soluções inteligentes com IA, automação, dashboards, sistemas e tecnologia para empresas',
  sameAs: ['https://linkedin.com/company/4solver', 'https://www.instagram.com/4solver'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: contact.email,
    url: contact.whatsappUrl
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR'
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
