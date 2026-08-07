import type { Metadata } from 'next';
import Image from 'next/image';
import SiteInteractions from '../../SiteInteractions';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Icon from '../../components/Icon';

export const metadata: Metadata = {
  title: 'BioSolver | Rastreabilidade de resíduos orgânicos da 4Solver',
  description: 'Conheça a BioSolver, iniciativa da 4Solver para rastreabilidade de resíduos orgânicos, compostagem monitorada e dados de impacto ambiental.'
};

const flow = ['Pesagem e descarte', 'Coleta roteirizada', 'Compostagem monitorada', 'Composto ao produtor', 'Dados de gestão'];

export default function BioSolverPage() {
  return <><Header /><main className="route-page">
    <section className="route-hero"><div className="container route-hero-grid"><div>
      <span className="eyebrow"><i></i> Projeto BioSolver</span><span className="project-status">Em validação</span>
      <h1>Rastreabilidade de resíduos orgânicos como serviço.</h1>
      <p>Uma iniciativa da 4Solver para medir, monitorar e rastrear a fração orgânica de escolas e estabelecimentos de alimentação — da coleta até a compostagem monitorada, com o composto destinado a agricultores familiares cooperados.</p>
      <div className="hero-actions"><a className="btn btn-primary" href="/contato"><Icon name="Leaf" size={18} /> Falar sobre o projeto</a><a className="btn btn-secondary" href="/#projetos">Voltar aos projetos</a></div>
    </div><div className="biosolver-brand-visual"><Image src="/assets/biosolver/biosolver-identidade.jpg" alt="BioSolver — tecnologia que transforma sustentabilidade em impacto" width={1024} height={1536} priority sizes="(max-width: 980px) 100vw, 42vw" /></div></div></section>

    <section className="route-section"><div className="container"><div className="section-heading">
      <span className="eyebrow"><i></i> O desafio</span><h2>Um resíduo gerado todos os dias — e raramente medido.</h2>
      <p>Escolas e estabelecimentos de alimentação geram resíduo orgânico diariamente, mas sem dados confiáveis sobre volume por unidade e turno, qualidade da separação ou destino final. Sem medição, não é possível reduzir o desperdício, planejar a coleta nem comprovar a destinação adequada exigida pela Política Nacional de Resíduos Sólidos.</p>
    </div></div></section>

    <section className="route-section biosolver-ceasa"><div className="container"><div className="section-heading">
      <span className="eyebrow"><i></i> Contexto de aplicação</span><h2>Uma proposta de piloto para centrais de abastecimento.</h2>
      <p>A apresentação propõe validar a BioSolver na CEASA Alagoas. O escopo abaixo descreve a proposta de piloto e não representa contrato celebrado ou resultado já alcançado.</p>
    </div><div className="ceasa-context-grid">
      <article><span>01</span><h3>Medir as perdas por origem</h3><p>Registrar o resíduo orgânico por box, setor ou pavilhão para dar visibilidade ao volume e à origem do descarte.</p></article>
      <article><span>02</span><h3>Organizar coleta e destino</h3><p>Identificar pontos de descarte, registrar pesagem via QR code e planejar rotas até a unidade de compostagem.</p></article>
      <article><span>03</span><h3>Fechar o ciclo localmente</h3><p>Conectar o composto gerado a produtores rurais que participam da mesma cadeia de abastecimento.</p></article>
    </div></div></section>

    <section className="route-section pilot-scope"><div className="container"><div className="section-heading">
      <span className="eyebrow"><i></i> Piloto proposto</span><h2>Começar pequeno para validar a operação.</h2>
      <p>O material sugere uma implantação controlada, em áreas selecionadas da central de abastecimento, com acompanhamento dos indicadores antes de uma eventual expansão.</p>
    </div><div className="pilot-scope-grid">
      <div className="pilot-scope-lead"><strong>Até 12 meses</strong><span>Prazo inicial previsto para contratação experimental via CPSI, conforme a legislação aplicável.</span></div>
      <ul>
        <li><span>01</span>Boxes ou pavilhões selecionados</li>
        <li><span>02</span>Pontos de descarte identificados</li>
        <li><span>03</span>Registro por aplicativo e QR code</li>
        <li><span>04</span>Painel de gestão e indicadores</li>
      </ul>
    </div></div></section>

    <section className="route-section"><div className="container"><div className="section-heading">
      <span className="eyebrow"><i></i> Fluxo conceitual</span><h2>Do resíduo ao dado de impacto.</h2>
      <p>A BioSolver registra cada etapa do resíduo orgânico e devolve o material ao solo como composto, com dados de gestão em cada ponto do caminho.</p>
    </div><ol className="project-flow">{flow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol></div></section>

    <section className="route-section"><div className="container"><div className="section-heading">
      <span className="eyebrow"><i></i> Modelo de operação</span><h2>Uma infraestrutura, dois canais de geração.</h2>
      <p>O mesmo motor de rastreabilidade atende dois perfis de unidade geradora, com a fração orgânica de ambos seguindo para a mesma rede de compostagem.</p>
    </div><div className="service-detail-grid">
      <article><span className="eyebrow"><i></i> Redes de ensino</span><h2>Escolas públicas</h2><p>Indicadores de volume e desperdício por turma e turno para a gestão escolar, com camada pedagógica de educação ambiental alinhada à BNCC.</p></article>
      <article><span className="eyebrow"><i></i> Estabelecimentos</span><h2>Alimentação e abastecimento</h2><p>Comprovação de destinação adequada e dados operacionais para restaurantes, mercados e centrais de abastecimento.</p></article>
    </div></div></section>

    <section className="route-section"><div className="container"><div className="section-heading"><span className="eyebrow"><i></i> Diferenciais</span><h2>O que sustenta a proposta.</h2></div>
      <div className="about-pillars">
        <article><h3>Granularidade inédita</h3><p>Dados por unidade, turno e refeição — nível de detalhe que sistemas de manifesto de resíduos voltados a grandes geradores industriais não oferecem.</p></article>
        <article><h3>Ciclo completo</h3><p>Da pesagem identificada por QR code à compostagem monitorada, com o composto retornando à cadeia produtiva local.</p></article>
        <article><h3>Base de pesquisa aplicada</h3><p>Camada de dados e, no canal escolar, pontuação pedagógica interpretável, apoiadas em pesquisa da equipe em otimização e ciência de dados.</p></article>
      </div>
    </div></section>

    <section className="route-section biosolver-references"><div className="container"><div className="section-heading"><span className="eyebrow"><i></i> Referências públicas</span><h2>Contexto regulatório e educacional.</h2><p>Fontes oficiais que orientam o contexto do projeto. A BioSolver não possui vínculo institucional implícito com esses órgãos.</p></div>
      <div className="reference-links">
        <a href="https://www.gov.br/ibama/pt-br/assuntos/emissoes-e-residuos/residuos/politica-nacional-de-residuos-solidos-pnrs" target="_blank" rel="noopener noreferrer"><strong>Política Nacional de Resíduos Sólidos</strong><span>IBAMA · Lei nº 12.305/2010</span></a>
        <a href="https://www.planalto.gov.br/ccivil_03/leis/l9795.htm" target="_blank" rel="noopener noreferrer"><strong>Política Nacional de Educação Ambiental</strong><span>Presidência da República · Lei nº 9.795/1999</span></a>
        <a href="https://basenacionalcomum.mec.gov.br/images/implementacao/cadernos_tematicos/caderno_meio_ambiente_consolidado_v_final_27092022.pdf" target="_blank" rel="noopener noreferrer"><strong>Meio ambiente na educação básica</strong><span>MEC · Temas Contemporâneos Transversais</span></a>
        <a href="https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp182.htm" target="_blank" rel="noopener noreferrer"><strong>Contrato Público para Solução Inovadora</strong><span>Presidência da República · LC nº 182/2021</span></a>
      </div>
    </div></section>

    <section className="route-section"><div className="container cta-card"><h2>Um projeto em estruturação.</h2><p>A BioSolver está em fase de validação, com proposta submetida a programas públicos de inovação. Esta página descreve o modelo do projeto e não publica parceiros, contratos ou resultados ainda não confirmados.</p><a className="btn btn-primary" href="/contato">Conversar sobre o projeto</a></div></section>
  </main><Footer /><SiteInteractions /></>;
}
