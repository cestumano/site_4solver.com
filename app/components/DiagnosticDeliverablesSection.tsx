import { diagnosticDeliverables } from '../data/site';
import Icon from './Icon';

export default function DiagnosticDeliverablesSection() {
  return (
    <section className="section deliverables-section screen-section" id="entregaveis" data-section="entregaveis">
      <div className="container deliverables-layout">
        <div className="section-heading align-left reveal">
          <span className="eyebrow">
            <i></i> O que você recebe
          </span>
          <h2>Diagnóstico com saída prática, não só conversa.</h2>
          <p>
            A primeira entrega organiza o problema e mostra o caminho técnico antes de investir em desenvolvimento.
          </p>
          <div className="diagnostic-summary">
            <strong>Resultado esperado</strong>
            <span>clareza de escopo, prioridade e próximos passos para automatizar com segurança.</span>
          </div>
        </div>

        <div className="deliverables-grid">
          {diagnosticDeliverables.map((item, index) => (
            <article className={`deliverable-card reveal delay-${Math.min(index, 3)}`} key={item.title}>
              <div className="deliverable-icon">
                <Icon name={item.icon} size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
