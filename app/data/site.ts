import type { IconName } from '../components/Icon';

export type NavLink = {
  href: string;
  label: string;
};

export type SolutionCategory = 'all' | 'atendimento' | 'gestao' | 'dados' | 'produto';

export type SolutionTab = {
  key: SolutionCategory;
  label: string;
};

export type Solution = {
  title: string;
  text: string;
  categories: Exclude<SolutionCategory, 'all'>[];
  icon: IconName;
  featured?: boolean;
  cta?: string;
  delay?: string;
};

export type DiagnosticItem = {
  number: string;
  title: string;
  text: string;
  icon: IconName;
};

export type DiagnosticDeliverable = {
  title: string;
  text: string;
  icon: IconName;
};

export type ProcessItem = {
  number: string;
  title: string;
  text: string;
  delay?: string;
};

export type Project = {
  label: string;
  title: string;
  text: string;
  visualClass: string;
  visualItems: number;
  delay?: string;
};

export type CaseItem = {
  label: string;
  title: string;
  before: string;
  after: string;
  delay?: string;
};

export const contact = {
  whatsappNumber: '5599999999999',
  whatsappUrl: 'https://wa.me/5599999999999',
  email: '4solver.al@gmail.com'
};

export type PreviewKey = 'atendimento' | 'condominio' | 'dados' | 'rag';

export type PreviewContent = {
  title: string;
  metricLabel: string;
  metricValue: string;
  sideLabel: string;
  sideValue: string;
  badgeLabel: string;
  badgeValue: string;
  user: string;
  bot: string;
  flowA: string;
  flowB: string;
  flowC: string;
  flowD: string;
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#entrada', label: 'Gargalos' },
  { href: '/#diagnostico', label: 'Diagnóstico' },
  { href: '/solucoes', label: 'Soluções' },
  { href: '/#processo', label: 'Processo' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#sobre', label: 'Sobre' }
] satisfies NavLink[];

export const railLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#entrada', label: 'Gargalos' },
  { href: '#diagnostico', label: 'Diagnóstico' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#processo', label: 'Processo' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#cases', label: 'Cases' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' }
] satisfies NavLink[];

export const previewTabs: Array<{ key: PreviewKey; label: string }> = [
  { key: 'atendimento', label: 'Atendimento' },
  { key: 'condominio', label: 'Condomínio' },
  { key: 'dados', label: 'Dados' },
  { key: 'rag', label: 'RAG' }
];

export const previewData: Record<PreviewKey, PreviewContent> = {
  atendimento: {
    title: 'central.4solver',
    metricLabel: 'Atendimentos organizados',
    metricValue: '482',
    sideLabel: 'Rotinas sem planilha',
    sideValue: '18',
    badgeLabel: 'Base consultável',
    badgeValue: 'RAG',
    user: 'O cliente quer status do pedido e segunda via.',
    bot: 'Status localizado. Resposta enviada, solicitação registrada e equipe notificada.',
    flowA: 'WhatsApp',
    flowB: 'IA',
    flowC: 'API',
    flowD: 'Dashboard'
  },
  condominio: {
    title: 'condominio.4solver',
    metricLabel: 'Chamados triados',
    metricValue: '126',
    sideLabel: 'Áreas integradas',
    sideValue: '06',
    badgeLabel: 'Tempo médio',
    badgeValue: '-42%',
    user: 'O morador precisa autorizar visitante e consultar uma pendência.',
    bot: 'Visitante validado, pendência localizada e chamado encaminhado para a portaria.',
    flowA: 'Morador',
    flowB: 'Portaria',
    flowC: 'Síndico',
    flowD: 'Painel'
  },
  dados: {
    title: 'dados.4solver',
    metricLabel: 'Indicadores monitorados',
    metricValue: '37',
    sideLabel: 'Alertas ativos',
    sideValue: '12',
    badgeLabel: 'Visão',
    badgeValue: 'BI',
    user: 'Quais tarefas estão atrasadas e quem é responsável?',
    bot: 'Relatório pronto com gargalos, responsáveis, prioridade e alertas automáticos.',
    flowA: 'Dados',
    flowB: 'Regras',
    flowC: 'BI',
    flowD: 'Decisão'
  },
  rag: {
    title: 'rag.4solver',
    metricLabel: 'Documentos indexados',
    metricValue: '1.8k',
    sideLabel: 'Consultas úteis',
    sideValue: '94%',
    badgeLabel: 'Resposta',
    badgeValue: 'Contexto',
    user: 'O que o contrato diz sobre prazo de atendimento?',
    bot: 'Trecho encontrado, resposta contextual gerada e fonte anexada para conferência.',
    flowA: 'PDFs',
    flowB: 'Busca',
    flowC: 'IA',
    flowD: 'Resposta'
  }
};

export const techStripItems = [
  'Atendimento com IA',
  'Portarias inteligentes',
  'Bases RAG',
  'Rotinas automáticas',
  'Dashboards operacionais',
  'APIs sob medida',
  'Produtos digitais',
  'Rastreabilidade',
  'Dados de gestão',
  'Projetos sustentáveis'
];

export const focusItems = [
  {
    number: '01',
    title: 'Atendimento que se perde no WhatsApp',
    text: 'Organizamos perguntas frequentes, solicitações, documentos e status em um fluxo rastreável.'
  },
  {
    number: '02',
    title: 'Gestão que depende de planilhas soltas',
    text: 'Criamos painéis e automações para acompanhar gargalos, responsáveis e indicadores.'
  },
  {
    number: '03',
    title: 'Ideia boa que precisa virar produto',
    text: 'Desenhamos MVP, banco de dados, interface, API e evolução técnica sem inflar o projeto.'
  }
];

export const diagnosticItems = [
  {
    number: '01',
    title: 'Mapeamos o gargalo',
    text: 'Entendemos onde a operação perde tempo, dados ou rastreabilidade antes de sugerir tecnologia.',
    icon: 'Search'
  },
  {
    number: '02',
    title: 'Desenhamos o fluxo ideal',
    text: 'Organizamos entradas, responsáveis, regras, integrações e pontos de decisão em uma jornada clara.',
    icon: 'Workflow'
  },
  {
    number: '03',
    title: 'Indicamos a solução certa',
    text: 'Definimos se o melhor caminho é IA, automação, dashboard, base RAG, sistema ou API.',
    icon: 'Sparkles'
  },
  {
    number: '04',
    title: 'Entregamos um plano técnico',
    text: 'Você sai com prioridades, escopo inicial e um caminho de execução para tirar a ideia do improviso.',
    icon: 'ClipboardCheck'
  }
] satisfies DiagnosticItem[];

export const diagnosticDeliverables = [
  {
    title: 'Mapa do processo atual',
    text: 'Uma visão clara de entradas, responsáveis, ferramentas, retrabalhos e pontos onde a operação perde tempo.',
    icon: 'Search'
  },
  {
    title: 'Fluxo ideal da solução',
    text: 'Desenho do caminho recomendado com automações, regras, integrações, dados e experiência do usuário.',
    icon: 'Workflow'
  },
  {
    title: 'Prioridades de execução',
    text: 'O que deve entrar primeiro, o que pode esperar e qual entrega gera impacto sem inflar o projeto.',
    icon: 'ClipboardCheck'
  },
  {
    title: 'Direção técnica',
    text: 'Indicação do tipo de sistema, IA, painel, API ou base RAG mais adequada para o cenário.',
    icon: 'BarChart3'
  }
] satisfies DiagnosticDeliverable[];

export const solutionTabs = [
  { key: 'all', label: 'Todas' },
  { key: 'atendimento', label: 'Atendimento' },
  { key: 'gestao', label: 'Gestão' },
  { key: 'dados', label: 'Dados' },
  { key: 'produto', label: 'Produto' }
] satisfies SolutionTab[];

export const solutions: Solution[] = [
  {
    title: 'Agentes de IA para atendimento',
    text: 'Assistentes para WhatsApp, site e operação interna, conectados a regras, documentos, status e dados do negócio.',
    categories: ['atendimento', 'dados'],
    featured: true,
    cta: 'Criar meu agente de IA',
    icon: 'Bot'
  },
  {
    title: 'Bases RAG',
    text: 'Documentos, PDFs, contratos, manuais e relatórios viram uma base consultável, com resposta contextual.',
    categories: ['dados', 'atendimento'],
    icon: 'Database',
    delay: 'delay-1'
  },
  {
    title: 'Dashboards inteligentes',
    text: 'Painéis para acompanhar atendimentos, responsáveis, prazos, vendas, processos e gargalos.',
    categories: ['gestao', 'dados'],
    icon: 'BarChart3',
    delay: 'delay-2'
  },
  {
    title: 'Automação de processos',
    text: 'Fluxos, integrações, notificações e rotinas para tirar da equipe o que a máquina pode executar.',
    categories: ['gestao', 'atendimento'],
    icon: 'Workflow'
  },
  {
    title: 'Sistemas sob medida',
    text: 'Plataformas web, APIs, aplicativos, CRMs internos e ferramentas específicas para a necessidade do negócio.',
    categories: ['produto', 'gestao'],
    icon: 'PanelsTopLeft',
    delay: 'delay-1'
  },
  {
    title: 'Tecnologia sustentável',
    text: 'Soluções digitais para economia circular, compostagem, logística reversa, rastreabilidade e impacto ambiental.',
    categories: ['dados', 'produto'],
    icon: 'Leaf',
    delay: 'delay-2'
  }
];

export const processItems = [
  {
    number: '01',
    title: 'Diagnóstico',
    text: 'Entendemos o desafio, os dados disponíveis, o público e o impacto esperado.'
  },
  {
    number: '02',
    title: 'Arquitetura',
    text: 'Definimos funcionalidades, integrações, fluxos de automação e tecnologias necessárias.',
    delay: 'delay-1'
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    text: 'Criamos a solução com IA, APIs, banco de dados, interface e segurança.',
    delay: 'delay-2'
  },
  {
    number: '04',
    title: 'Evolução',
    text: 'Monitoramos, melhoramos e escalamos a solução conforme a empresa cresce.',
    delay: 'delay-3'
  }
] satisfies ProcessItem[];

export const projects = [
  {
    label: 'Rota Verde',
    title: 'BioTech Solver',
    text: 'Projeto de economia sustentável para resíduos, compostagem, rastreabilidade, dados e impacto ambiental.',
    visualClass: 'route-visual',
    visualItems: 3
  },
  {
    label: 'Condomínios',
    title: 'Portarias inteligentes',
    text: 'Automação, atendimento, controle, comunicação e gestão para portarias e serviços condominiais.',
    visualClass: 'condo-visual',
    visualItems: 4,
    delay: 'delay-1'
  },
  {
    label: 'Negócios',
    title: 'Ideia para produto digital',
    text: 'Ajudamos pessoas e empresas que têm uma ideia, mas precisam de estratégia, tecnologia e desenvolvimento.',
    visualClass: 'product-visual',
    visualItems: 3,
    delay: 'delay-2'
  }
] satisfies Project[];

export const cases = [
  {
    label: 'Atendimento',
    title: 'Solicitações perdidas no WhatsApp',
    before: 'Mensagens soltas, retorno manual e histórico difícil de consultar.',
    after: 'Triagem por IA, status rastreável e painel para acompanhar pendências.'
  },
  {
    label: 'Gestão',
    title: 'Planilhas sem dono definido',
    before: 'Indicadores atualizados tarde e pouca visibilidade de gargalos.',
    after: 'Dashboard operacional com responsáveis, prazos e alertas automáticos.',
    delay: 'delay-1'
  },
  {
    label: 'Produto',
    title: 'Ideia sem arquitetura',
    before: 'Escopo aberto, telas soltas e dúvida sobre o primeiro MVP.',
    after: 'Fluxo, dados, API e interface definidos para uma primeira versão enxuta.',
    delay: 'delay-2'
  }
] satisfies CaseItem[];

export const aboutPills = ['IA Generativa', 'Automação', 'Software', 'Dados'];
