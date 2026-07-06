import { cases } from '../data/site';

export default function CasesSection() {
  return (
    <section className="section cases-section screen-section" id="cases" data-section="cases">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">
            <i></i> Antes e depois
          </span>
          <h2>O premium está no processo ficando claro.</h2>
          <p>Alguns exemplos de como a 4Solver estrutura uma operação antes de escrever código.</p>
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
