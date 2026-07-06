import { processItems } from '../data/site';

export default function ProcessSection() {
  return (
    <section className="section process-section screen-section" id="processo" data-section="processo">
      <div className="container process-grid">
        <div className="section-heading align-left reveal">
          <span className="eyebrow">
            <i></i> Como trabalhamos
          </span>
          <h2>Do problema ao produto funcionando.</h2>
          <p>Organizamos a ideia, desenhamos a solução e entregamos tecnologia com foco em uso real.</p>
        </div>

        <div className="timeline">
          {processItems.map((item) => (
            <article className={`timeline-item reveal ${item.delay ?? ''}`.trim()} key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
