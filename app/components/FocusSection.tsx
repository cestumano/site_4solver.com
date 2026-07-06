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
            Não é sobre colocar IA em tudo. É sobre encontrar o ponto exato onde tecnologia reduz atraso, perda de
            informação e trabalho repetido.
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
