import { focusItems } from '../data/site';

export default function FocusSection() {
  return (
    <section className="section focus-section screen-section" id="entrada" data-section="entrada">
      <div className="container focus-grid">
        <div className="section-heading align-left reveal">
          <span className="eyebrow">
            <i></i> Onde a 4Solver entra
          </span>
          <h2>Quando o processo cresceu, mas a operação continua manual.</h2>
          <p>
            Primeiro entendemos o processo. Depois definimos se ele precisa de integração, automação, software ou
            apenas de uma forma mais clara de organizar o trabalho.
          </p>
        </div>

        <div className="focus-board reveal delay-1">
          {focusItems.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
