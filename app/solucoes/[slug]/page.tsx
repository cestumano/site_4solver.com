import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteInteractions from '../../SiteInteractions';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import { servicePages } from '../../data/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return servicePages.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  return service ? { title: `${service.title} | 4Solver`, description: service.description } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) notFound();

  return <><Header /><main className="route-page">
    <section className="route-hero"><div className="container route-hero-grid"><div>
      <span className="eyebrow"><i></i> Solução 4Solver</span><h1>{service.title}</h1><p>{service.description}</p>
      <div className="hero-actions"><a className="btn btn-primary" href="/contato"><Icon name="Sparkles" size={18} />Solicitar diagnóstico</a><a className="btn btn-secondary" href="/solucoes">Ver todas as soluções</a></div>
    </div><div className="route-signal" aria-hidden="true"><span>01</span><span>API</span><span>APP</span><span>BI</span></div></div></section>
    <section className="route-section"><div className="container service-detail-grid">
      <article><span className="eyebrow"><i></i> Problema</span><h2>Onde essa solução entra</h2><p>{service.problem}</p></article>
      <article><h2>Quando faz sentido</h2><ul>{service.fit.map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article><h2>O que podemos entregar</h2><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article><h2>Integrações possíveis</h2><ul>{service.integrations.map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article className="service-outcome"><h2>Resultado esperado</h2><p>{service.expectedOutcome}</p><small>O escopo e os resultados dependem do diagnóstico e das condições de cada operação.</small></article>
    </div></section>
  </main><Footer /><SiteInteractions /></>;
}
