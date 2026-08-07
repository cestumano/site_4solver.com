import { cases } from '../data/site';

export default function CasesSection() {
  return (
    <section className="section cases-section screen-section" id="cenarios" data-section="cenarios">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">
            <i></i> Cenários de transformação
          </span>
          <h2>Tecnologia funciona melhor quando o processo vem primeiro.</h2>
          <p>Exemplos ilustrativos de como operações manuais podem ser estruturadas antes da implementação tecnológica.</p>
          <span className="scenario-note">Cenários ilustrativos — não representam resultados de clientes.</span>
        </div>

        <div className="case-grid">
          {cases.map((item) => (
            <article className={`case-card reveal ${item.delay ?? ''}`.trim()} key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <div className="case-columns">
                <div>
                  <strong>Antes</strong>
                  <p>{item.before}</p>
                </div>
                <span className="case-direction" aria-hidden="true">→</span>
                <div>
                  <strong>Depois</strong>
                  <p>{item.after}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
