import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import { contact } from './data/site';
import WhatsAppButton from './components/WhatsAppButton';
import Analytics from './components/Analytics';
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
  title: '4Solver | Software e automação de processos para empresas',
  description:
    'Organize processos, integre dados e transforme ideias em produtos digitais com a 4Solver. Software, automação, APIs e painéis de gestão.',
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
    title: '4Solver | Software e automação para empresas',
    description:
      'Software, automação e integrações para atendimento, operações internas e projetos sustentáveis.',
    images: ['/assets/logo-4solver-full.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '4Solver | Software para operações reais',
    description: 'Processos organizados, sistemas integrados e operações rastreáveis.',
    images: ['/assets/logo-4solver-full.png']
  },
  icons: {
    icon: '/assets/logo-4solver-icon-160.png'
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '4Solver',
  url: 'https://4solver.com.br',
  logo: 'https://4solver.com.br/assets/logo-4solver-full.png',
  description: 'Desenvolvimento de software, automação, integrações, painéis e sistemas para empresas',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: contact.email,
    telephone: '+55 82 98785-1090',
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
        <WhatsAppButton />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
