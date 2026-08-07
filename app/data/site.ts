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
  slug: string;
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
  href: string;
  cta: string;
  status?: string;
};

export type CaseItem = {
  label: string;
  title: string;
  before: string;
  after: string;
  delay?: string;
};

export const contact = {
  email: 'contato@4solver.com.br',
  whatsappNumber: '5582987851090',
  whatsappUrl:
    'https://wa.me/5582987851090?text=Ol%C3%A1%21%20Conheci%20a%204Solver%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20processo%20que%20podemos%20automatizar.'
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
  { href: '/solucoes', label: 'Soluções' },
  { href: '/#diagnostico', label: 'Como trabalhamos' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/empresa', label: 'Empresa' },
  { href: '/contato', label: 'Contato' }
] satisfies NavLink[];

export const railLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#entrada', label: 'Problemas' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#empresa', label: 'Empresa' },
  { href: '#contato', label: 'Contato' }
] satisfies NavLink[];

export const previewTabs: Array<{ key: PreviewKey; label: string }> = [
  { key: 'atendimento', label: 'Atendimento' },
  { key: 'condominio', label: 'Condomínio' },
  { key: 'dados', label: 'Dados' },
  { key: 'rag', label: 'Documentos' }
];

export const previewData: Record<PreviewKey, PreviewContent> = {
  atendimento: {
    title: 'central.4solver',
    metricLabel: 'Atendimento centralizado',
    metricValue: 'Ativo',
    sideLabel: 'Fluxo rastreável',
    sideValue: 'Ativo',
    badgeLabel: 'Base consultável',
    badgeValue: 'RAG',
    user: 'O cliente quer status do pedido e segunda via.',
    bot: 'Status localizado. Resposta enviada, solicitação registrada e equipe notificada.',
    flowA: 'WhatsApp',
    flowB: 'Triagem',
    flowC: 'API',
    flowD: 'Dashboard'
  },
  condominio: {
    title: 'condominio.4solver',
    metricLabel: 'Triagem de chamados',
    metricValue: 'Ativa',
    sideLabel: 'Áreas conectadas',
    sideValue: 'Integradas',
    badgeLabel: 'Acompanhamento',
    badgeValue: 'Contínuo',
    user: 'O morador precisa autorizar visitante e consultar uma pendência.',
    bot: 'Visitante validado, pendência localizada e chamado encaminhado para a portaria.',
    flowA: 'Morador',
    flowB: 'Portaria',
    flowC: 'Síndico',
    flowD: 'Painel'
  },
  dados: {
    title: 'dados.4solver',
    metricLabel: 'Indicadores operacionais',
    metricValue: 'Visíveis',
    sideLabel: 'Alertas de gestão',
    sideValue: 'Ativos',
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
    metricLabel: 'Base documental',
    metricValue: 'Indexada',
    sideLabel: 'Consulta contextual',
    sideValue: 'Ativa',
    badgeLabel: 'Resposta',
    badgeValue: 'Contexto',
    user: 'O que o contrato diz sobre prazo de atendimento?',
    bot: 'Trecho encontrado, resposta contextual gerada e fonte anexada para conferência.',
    flowA: 'PDFs',
    flowB: 'Busca',
    flowC: 'Regras',
    flowD: 'Resposta'
  }
};

export const techStripItems = [
  'Atendimento organizado',
  'Operação condominial',
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
    text: 'Definimos se o melhor caminho é integrar ferramentas, automatizar uma rotina, criar um painel, uma base de consulta, um sistema ou uma API.',
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
    text: 'Indicação do tipo de sistema, integração, painel, API ou base de consulta mais adequada para o cenário.',
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
    title: 'Atendimento automatizado',
    text: 'WhatsApp, site e operação interna conectados a regras, documentos, status e responsáveis.',
    categories: ['atendimento', 'dados'],
    featured: true,
    cta: 'Organizar meu atendimento',
    icon: 'Bot'
    ,slug: 'agentes-de-ia'
  },
  {
    title: 'Bases RAG',
    text: 'Documentos, PDFs, contratos, manuais e relatórios viram uma base consultável, com resposta contextual.',
    categories: ['dados', 'atendimento'],
    icon: 'Database',
    delay: 'delay-1'
    ,slug: 'rag'
  },
  {
    title: 'Painéis de gestão',
    text: 'Painéis para acompanhar atendimentos, responsáveis, prazos, vendas, processos e gargalos.',
    categories: ['gestao', 'dados'],
    icon: 'BarChart3',
    delay: 'delay-2'
    ,slug: 'dashboards'
  },
  {
    title: 'Automação de processos',
    text: 'Fluxos, integrações, notificações e rotinas para tirar da equipe o que a máquina pode executar.',
    categories: ['gestao', 'atendimento'],
    icon: 'Workflow'
    ,slug: 'automacao-de-processos'
  },
  {
    title: 'Sistemas sob medida',
    text: 'Plataformas web, APIs, aplicativos, CRMs internos e ferramentas específicas para a necessidade do negócio.',
    categories: ['produto', 'gestao'],
    icon: 'PanelsTopLeft',
    delay: 'delay-1'
    ,slug: 'sistemas-sob-medida'
  },
  {
    title: 'Tecnologia sustentável',
    text: 'Soluções digitais para economia circular, compostagem, logística reversa, rastreabilidade e impacto ambiental.',
    categories: ['dados', 'produto'],
    icon: 'Leaf',
    delay: 'delay-2'
    ,slug: 'tecnologia-sustentavel'
  }
];

export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  fit: string[];
  deliverables: string[];
  integrations: string[];
  expectedOutcome: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'agentes-de-ia', title: 'Atendimento automatizado com IA',
    description: 'Assistentes conectados ao contexto, aos documentos e às regras da sua operação.',
    problem: 'Perguntas repetitivas, informações espalhadas e solicitações sem histórico consomem a equipe e dificultam o acompanhamento.',
    fit: ['Alto volume de perguntas recorrentes', 'Atendimento em mais de um canal', 'Necessidade de consultar documentos ou status'],
    deliverables: ['Mapeamento das intenções', 'Base de conhecimento', 'Fluxos de atendimento e escalonamento', 'Painel de acompanhamento'],
    integrations: ['WhatsApp', 'Sites', 'APIs', 'CRMs e sistemas internos'],
    expectedOutcome: 'Um atendimento mais organizado, contextual e rastreável, com encaminhamento humano quando necessário.'
  },
  {
    slug: 'automacao-de-processos', title: 'Automação de processos',
    description: 'Fluxos digitais para reduzir tarefas repetitivas e conectar pessoas, regras e sistemas.',
    problem: 'Atividades manuais, repetição de cadastros e dependência de lembretes individuais aumentam o retrabalho.',
    fit: ['Tarefas recorrentes e previsíveis', 'Muitas transferências entre equipes', 'Dados copiados entre ferramentas'],
    deliverables: ['Mapa do processo', 'Regras e exceções', 'Automações e notificações', 'Monitoramento do fluxo'],
    integrations: ['APIs', 'Email', 'Planilhas', 'Sistemas internos'],
    expectedOutcome: 'Uma operação com menos etapas manuais e mais visibilidade sobre prazos e responsabilidades.'
  },
  {
    slug: 'dashboards', title: 'Painéis de gestão',
    description: 'Indicadores operacionais reunidos em uma visão clara para apoiar decisões.',
    problem: 'Dados dispersos e relatórios atualizados tarde impedem que gargalos sejam percebidos no momento certo.',
    fit: ['Indicadores em várias planilhas', 'Dificuldade de acompanhar prazos', 'Relatórios manuais frequentes'],
    deliverables: ['Definição de indicadores', 'Integração das fontes', 'Painel responsivo', 'Alertas quando aplicáveis'],
    integrations: ['Bancos de dados', 'Planilhas', 'APIs', 'Ferramentas operacionais'],
    expectedOutcome: 'Informação operacional acessível e atualizada conforme a disponibilidade das fontes conectadas.'
  },
  {
    slug: 'rag', title: 'Bases RAG',
    description: 'Documentos e conhecimento interno transformados em uma fonte consultável com referências.',
    problem: 'Contratos, manuais e procedimentos são difíceis de localizar e dependem da memória de poucas pessoas.',
    fit: ['Grande acervo documental', 'Consultas recorrentes', 'Necessidade de apresentar a fonte da resposta'],
    deliverables: ['Organização do acervo', 'Indexação e busca', 'Interface de consulta', 'Critérios de segurança e acesso'],
    integrations: ['PDFs', 'Google Drive', 'Bancos de dados', 'Sistemas internos'],
    expectedOutcome: 'Consulta mais ágil ao conhecimento autorizado, com respostas contextuais e fontes para conferência.'
  },
  {
    slug: 'sistemas-sob-medida', title: 'Sistemas sob medida',
    description: 'Software desenhado a partir do processo real, das regras e das pessoas que o utilizam.',
    problem: 'Ferramentas genéricas não acompanham regras específicas ou obrigam a operação a manter controles paralelos.',
    fit: ['Processo específico do negócio', 'Controles paralelos em planilhas', 'Necessidade de integrar ferramentas existentes'],
    deliverables: ['Descoberta e escopo', 'Experiência e interface', 'Aplicação, API e dados', 'Implantação por etapas'],
    integrations: ['APIs', 'Bancos de dados', 'Serviços de autenticação', 'Sistemas legados'],
    expectedOutcome: 'Uma ferramenta alinhada ao fluxo priorizado, preparada para receber melhorias conforme a operação evolui.'
  },
  {
    slug: 'tecnologia-sustentavel', title: 'Tecnologia sustentável',
    description: 'Soluções digitais para economia circular, rastreabilidade de resíduos, compostagem e dados de impacto ambiental.',
    problem: 'Resíduos orgânicos gerados por escolas, estabelecimentos de alimentação e centrais de abastecimento raramente são medidos por unidade ou turno, o que dificulta reduzir o desperdício, planejar a coleta e comprovar a destinação adequada.',
    fit: ['Geração recorrente de resíduo orgânico (escolas, restaurantes, centrais de abastecimento)', 'Necessidade de comprovar destinação adequada do resíduo', 'Interesse em compostagem monitorada e economia circular'],
    deliverables: ['Registro de descarte via QR code e aplicativo', 'Rastreabilidade da coleta até o destino final', 'Painel de indicadores por unidade geradora', 'Base de dados para gestão pública ou privada'],
    integrations: ['Aplicativos móveis', 'Painéis de gestão', 'Parceiros de coleta e compostagem', 'Relatórios de destinação e compliance ambiental'],
    expectedOutcome: 'Dado confiável sobre o resíduo orgânico gerado, apoio à redução do desperdício e comprovação estruturada da destinação — a mesma base tecnológica que sustenta o projeto BioSolver.'
  },
  {
    slug: 'mvp-produto-digital', title: 'MVP e produto digital',
    description: 'Estruturação da primeira versão de uma ideia com escopo, tecnologia e prioridades claras.',
    problem: 'Ideias promissoras podem ficar paradas por excesso de funcionalidades, escopo indefinido ou falta de direção técnica.',
    fit: ['Nova ideia de produto', 'Validação de um serviço digital', 'Modernização de um protótipo existente'],
    deliverables: ['Definição do problema e público', 'Escopo da primeira versão', 'Protótipo e arquitetura', 'Plano de evolução'],
    integrations: ['APIs de terceiros', 'Pagamentos quando necessário', 'Analytics escolhido pelo projeto', 'Infraestrutura em nuvem'],
    expectedOutcome: 'Uma primeira versão enxuta e utilizável para aprender com o uso real antes de ampliar o investimento.'
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
    text: 'Construímos interface, APIs, banco de dados, integrações e controles de acesso necessários.',
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
    label: 'BioSolver',
    title: 'BioSolver',
    text: 'Projeto de economia sustentável para resíduos, compostagem, rastreabilidade, dados e impacto ambiental.',
    visualClass: 'route-visual',
    visualItems: 3,
    href: '/projetos/biosolver',
    cta: 'Conhecer projeto'
  },
  {
    label: 'Condomínios',
    title: 'Operação de portarias',
    text: 'Automação, atendimento, controle, comunicação e gestão para portarias e serviços condominiais.',
    visualClass: 'condo-visual',
    visualItems: 4,
    href: '/contato',
    cta: 'Conversar sobre a solução',
    delay: 'delay-1'
  },
  {
    label: 'Negócios',
    title: 'Ideia para produto digital',
    text: 'Ajudamos pessoas e empresas que têm uma ideia, mas precisam de estratégia, tecnologia e desenvolvimento.',
    visualClass: 'product-visual',
    visualItems: 3,
    href: '/solucoes/mvp-produto-digital',
    cta: 'Conhecer o serviço',
    delay: 'delay-2'
  }
] satisfies Project[];

export const cases = [
  {
    label: 'Atendimento',
    title: 'Solicitações perdidas no WhatsApp',
    before: 'Mensagens soltas, retorno manual e histórico difícil de consultar.',
    after: 'Triagem automática, status rastreável e painel para acompanhar pendências.'
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

export const aboutPills = ['Processos', 'Automação', 'Software', 'Dados'];

export const teamExpertisePills = [
  'Processamento de Linguagem Natural',
  'Bancos de Dados Vetoriais',
  'Segurança e Redes',
  'Arquitetura de Nuvem'
];

export type TeamMember = {
  name: string;
  role?: string;
  bio?: string;
  image: string;
  linkedin?: string;
  github?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Cristiano Estumano', role: 'Cofundador',
    bio: 'Mestrando em Informática (PPGI/UFAL), com pesquisa em sistemas de recomendação educacional, otimização e pontuação pedagógica interpretável. Atua em desenvolvimento de software, ciência de dados e arquitetura de produtos digitais.',
    image: '/assets/team/cristiano-estumano.jpeg'
  },
  {
    name: 'Fábio Linhares', role: 'Cofundador',
    bio: 'Fábio Linhares é Mestrando em Informática, Cientista de Dados, Especialista em Inteligência Artificial e Aprendizado de Máquina e pesquisador em Ciência da Computação. Atua no desenvolvimento de soluções em IA, ciência de dados, visão computacional e automação inteligente, integrando pesquisa científica e engenharia de software para transformar dados em soluções inovadoras. Na 4Solver, atua em projetos voltados à criação de tecnologias que aumentam a eficiência operacional, apoiam a tomada de decisão e geram valor para empresas e instituições.',
    image: '/assets/team/fabio-linhares.jpeg'
  },
  {
    name: 'Luryan Delevati', role: 'Cofundador',
    bio: 'Pesquisador (PPGI/UFAL) em otimização e processamento de dados geoespaciais, com pesquisa em sensoriamento remoto e mosaicos multitemporais. Atua na estruturação de negócios e na articulação institucional da 4Solver.',
    image: '/assets/team/luryan-delevati.jpeg'
  }
];

export type OrganizationRelationship = {
  name: string;
  category: 'Cliente' | 'Parceiro' | 'Instituição' | 'Apoio institucional';
  logo: string;
  url?: string;
};

// TODO: publicar somente relações e marcas cujo uso tenha sido confirmado.
export const organizationRelationships: OrganizationRelationship[] = [];

export type Pillar = {
  title: string;
  text: string;
};

export const institutionalPillars: Pillar[] = [
  {
    title: 'Missão',
    text: 'Traduzir complexidade em clareza: transformar dados e tecnologias emergentes em conhecimento acessível, ético e impactante — promovendo a autonomia das pessoas e das organizações por meio da inovação constante.'
  },
  {
    title: 'Visão',
    text: 'Ser um catalisador entre o humanismo e a tecnologia de ponta, reconhecido por integrar pensamento crítico, excelência técnica e ética social em soluções digitais que geram impacto real e inspiram confiança.'
  },
  {
    title: 'Valores',
    text: 'Nossos pilares fundamentais são a ética inegociável, o pensamento crítico e a transparência em cada linha de código, estimulando a inovação contínua, o compromisso social e o compartilhamento generoso de conhecimento.'
  }
];
