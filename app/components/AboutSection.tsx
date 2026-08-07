import Image from 'next/image';
import { aboutPills } from '../data/site';

export default function AboutSection() {
  return (
    <section className="section about-section screen-section" id="sobre" data-section="sobre">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <Image src="/assets/logo-4solver-full.png" alt="Logo oficial 4Solver" width={520} height={520} />
        </div>
        <div className="about-copy reveal delay-1">
          <span className="eyebrow">
            <i></i> Como construímos
          </span>
          <h2>Soluções preparadas para evoluir com a operação.</h2>
          <p>
            Partimos do entendimento do processo, das pessoas e dos dados envolvidos para definir uma solução viável,
            sem adicionar complexidade desnecessária.
          </p>
          <p>
            Projetamos sistemas resilientes, monitoráveis e preparados para evoluir conforme a operação cresce.
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
