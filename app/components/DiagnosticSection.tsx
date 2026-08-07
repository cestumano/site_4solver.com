import { diagnosticItems, processItems } from '../data/site';
import Icon, { type IconName } from './Icon';

export default function DiagnosticSection() {
  return (
    <section className="section diagnostic-section screen-section" id="diagnostico" data-section="diagnostico">
      <div className="container diagnostic-grid">
        <div className="section-heading align-left reveal">
          <span className="eyebrow">
            <i></i> Diagnóstico 4Solver
          </span>
          <h2>Antes de construir, entendemos onde o processo realmente trava.</h2>
          <p>
            Transformamos conversas, planilhas e rotinas dispersas em um mapa de prioridades, responsabilidades e
            entregas possíveis.
          </p>
          <div className="diagnostic-cta">
            <a className="btn btn-primary" href="#contato">
              <Icon name="ClipboardCheck" size={18} />
              Solicitar diagnóstico
            </a>
          </div>
        </div>

        <div className="diagnostic-board reveal delay-1">
          {diagnosticItems.map((item) => (
            <article key={item.number}>
              <div className="diagnostic-icon">
                <Icon name={item.icon as IconName} size={22} />
              </div>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="container diagnostic-process reveal">
        <div><span className="eyebrow"><i></i> Da conversa à entrega</span><h3>Um caminho curto, com decisões visíveis.</h3></div>
        <ol>{processItems.map((item) => <li key={item.number}><span>{item.number}</span><div><strong>{item.title}</strong><p>{item.text}</p></div></li>)}</ol>
      </div>
    </section>
  );
}
