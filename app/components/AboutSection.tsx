import Image from 'next/image';
import { aboutPills } from '../data/site';

export default function AboutSection() {
  return (
    <section className="section about-section screen-section" id="sobre" data-section="sobre">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <Image src="/assets/logo-4solver.jpeg" alt="Logo oficial 4Solver" width={520} height={520} />
        </div>
        <div className="about-copy reveal delay-1">
          <span className="eyebrow">
            <i></i> Sobre a 4Solver
          </span>
          <h2>Tecnologia desenhada perto da operação.</h2>
          <p>
            A 4Solver combina IA, automação, software, dados e estratégia para resolver gargalos que aparecem no
            atendimento, na gestão e na rotina de equipes.
          </p>
          <p>
            Nossa missão é tirar processos do improviso e transformar ideias em ferramentas usáveis, com começo simples
            e evolução clara.
          </p>
          <div className="about-pills">
            {aboutPills.map((pill) => (
              <span key={pill}>{pill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
