import Icon from './Icon';

export default function Hero() {
  return (
    <section className="hero screen-section" id="inicio" data-section="inicio">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow"><i></i> Software aplicado à operação</span>
          <h1>Software, automação e dados para operações que ainda dependem do improviso.</h1>
          <p>Entendemos onde o trabalho trava, organizamos o fluxo e desenvolvemos a ferramenta necessária para conectar atendimento, documentos, dados e responsáveis.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contato"><Icon name="Sparkles" size={18} />Solicitar diagnóstico</a>
            <a className="btn btn-secondary" href="#solucoes"><Icon name="ArrowRight" size={18} />Ver soluções</a>
          </div>
        </div>

        <div className="hero-panel hero-process-panel reveal delay-1" aria-label="Demonstração fictícia de um fluxo operacional">
          <div className="product-window process-window">
            <div className="window-bar"><span></span><span></span><span></span><strong>fluxo.operacional</strong><em className="preview-tag">DEMO — ambiente demonstrativo</em></div>
            <div className="demo-request"><small>Solicitação recebida</small><strong>Cliente pediu o status e a segunda via do pedido.</strong><span>WhatsApp · agora</span></div>
            <ol className="demo-flow">
              <li><Icon name="Search" size={18} /><span><small>01</small><strong>Consulta os dados</strong><em>Pedido localizado no sistema</em></span></li>
              <li><Icon name="Workflow" size={18} /><span><small>02</small><strong>Executa a regra</strong><em>Segunda via preparada</em></span></li>
              <li><Icon name="Send" size={18} /><span><small>03</small><strong>Responde e registra</strong><em>Cliente e equipe atualizados</em></span></li>
            </ol>
            <div className="demo-result"><i></i><span><strong>Processo concluído</strong><small>Histórico disponível para acompanhamento</small></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
