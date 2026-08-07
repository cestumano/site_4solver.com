import Image from 'next/image';
import { teamExpertisePills } from '../data/site';

export default function CompanyIntroSection() {
  return (
    <section className="section company-intro-section screen-section" id="empresa" data-section="empresa">
      <div className="container company-intro-grid">
        <div className="company-photo reveal">
          <Image
            src="/assets/team/equipe-4solver.jpeg"
            alt="Fábio Linhares, Cristiano Estumano e Luryan Delevati, equipe da 4Solver"
            width={1122}
            height={1402}
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
        <div className="company-intro-copy">
        <div className="section-heading align-left reveal">
          <span className="eyebrow">
            <i></i> Quem somos
          </span>
          <h2>Tecnologia com propósito e aplicação real.</h2>
          <p>
            A 4Solver nasceu da união de profissionais que compartilham uma visão: processos precisam ficar mais
            claros antes de receber novas ferramentas.
          </p>
          <p>Combinamos desenvolvimento de software, integração de sistemas e engenharia de dados para transformar rotinas manuais em fluxos claros, rastreáveis e preparados para evoluir.</p>
        </div>
        <div className="about-pills company-intro-pills reveal delay-1">
          {teamExpertisePills.map((pill) => (
            <span key={pill}>{pill}</span>
          ))}
        </div>
        <a className="company-team-link reveal delay-1" href="/empresa">Conhecer a equipe →</a>
        </div>
      </div>
    </section>
  );
}
