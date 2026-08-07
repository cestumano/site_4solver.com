import type { Metadata } from 'next';
import SiteInteractions from '../SiteInteractions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PartnersSection from '../components/PartnersSection';
import TeamSection from '../components/TeamSection';
import { institutionalPillars, teamExpertisePills } from '../data/site';

export const metadata: Metadata = {
  title: 'Empresa | 4Solver',
  description: 'Conheça o propósito, as competências e as diretrizes que orientam o trabalho da 4Solver.'
};

export default function EmpresaPage() {
  return <><Header /><main className="route-page">
    <section className="route-hero compact"><div className="container"><span className="eyebrow"><i></i> Empresa</span>
      <h1>Tecnologia com propósito e aplicação real.</h1>
      <p>A 4Solver reúne profissionais de tecnologia para transformar processos manuais, dados dispersos e ideias de negócio em soluções digitais claras e preparadas para evoluir.</p>
      <div className="about-pills">{teamExpertisePills.map((item) => <span key={item}>{item}</span>)}</div>
    </div></section>
    <section className="route-section"><div className="container"><div className="section-heading"><span className="eyebrow"><i></i> Diretrizes</span><h2>O que orienta cada decisão.</h2></div>
      <div className="about-pillars">{institutionalPillars.map((pillar) => <article key={pillar.title}><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div>
    </div></section>
    <TeamSection /><PartnersSection />
    <section className="route-section"><div className="container cta-card"><h2>Quer entender como trabalhamos?</h2><p>Comece contando o processo ou a ideia que precisa ganhar clareza.</p><a className="btn btn-primary" href="/contato">Solicitar diagnóstico</a></div></section>
  </main><Footer /><SiteInteractions /></>;
}
