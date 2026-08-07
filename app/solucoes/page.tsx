import type { Metadata } from 'next';
import SiteInteractions from '../SiteInteractions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Icon from '../components/Icon';
import { solutions } from '../data/site';

export const metadata: Metadata = {
  title: 'Soluções | 4Solver',
  description: 'Soluções da 4Solver para automação, integração, painéis, bases documentais, sistemas sob medida e produtos digitais.'
};

export default function SolucoesPage() {
  return (
    <>
      <Header />
      <main className="route-page">
        <section className="route-hero">
          <div className="container route-hero-grid">
            <div>
              <span className="eyebrow">
                <i></i> Soluções 4Solver
              </span>
              <h1>Ferramentas para tirar processos do controle manual.</h1>
              <p>
                Automação, integração, dados e sistemas sob medida entram onde existe atraso, retrabalho,
                informação perdida ou uma ideia pronta para virar produto.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/contato">
                  <Icon name="Sparkles" size={18} />
                  Solicitar diagnóstico
                </a>
                <a className="btn btn-secondary" href="/#diagnostico">
                  <Icon name="ArrowRight" size={18} />
                  Ver processo
                </a>
              </div>
            </div>
            <div className="route-signal" aria-hidden="true">
              <span>APP</span>
              <span>API</span>
              <span>RAG</span>
              <span>BI</span>
            </div>
          </div>
        </section>

        <section className="route-section">
          <div className="container route-grid">
            {solutions.map((solution) => (
              <article className={`route-card ${solution.featured ? 'featured' : ''}`.trim()} key={solution.title}>
                <div className="icon">
                  <Icon name={solution.icon} size={28} />
                </div>
                <h2>{solution.title}</h2>
                <p>{solution.text}</p>
                <a href={`/solucoes/${solution.slug}`}>
                  Conhecer solução <Icon name="ArrowRight" size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <SiteInteractions />
    </>
  );
}
