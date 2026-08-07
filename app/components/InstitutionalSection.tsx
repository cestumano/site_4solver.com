import { institutionalPillars } from '../data/site';

export default function InstitutionalSection() {
  return (
    <section className="section institutional-section screen-section" id="diretrizes" data-section="diretrizes">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">
            <i></i> Diretrizes Institucionais
          </span>
          <h2>O que orienta cada decisão da 4Solver.</h2>
        </div>
        <div className="about-pillars">
          {institutionalPillars.map((pillar, index) => (
            <article className={`reveal ${index === 1 ? 'delay-1' : index === 2 ? 'delay-2' : ''}`.trim()} key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
