SITE 4SOLVER - NEXT.JS FASE 1

Base atual:
- Next.js 16 com App Router
- React 19
- TypeScript
- lucide-react para ícones profissionais
- CSS próprio reaproveitado da versão visual atual
- Assets em public/assets/

Arquivos principais:
- app/page.tsx: página inicial
- app/layout.tsx: metadados, schema e fontes
- app/SiteInteractions.tsx: efeitos globais de scroll, reveal e seção ativa
- app/hooks/: hooks globais de gradiente, reveal, seção ativa e timeline
- app/components/: componentes visuais da página
- app/api/contact/route.ts: API interna para envio do formulário
- app/solucoes/page.tsx: rota de soluções
- app/contato/page.tsx: rota de contato e diagnóstico
- app/data/site.ts: textos, links e cards estruturados
- app/globals.css: estilos globais do site
- public/assets/logo-4solver.jpeg
- public/assets/humano_ai.png
- public/assets/ai_and_ce.png

Comandos:
1. Instalar dependências:
   npm install

2. Rodar em desenvolvimento:
   npm run dev

3. Gerar build de produção:
   npm run build

4. Rodar build de produção:
   npm run start

URL local:
http://localhost:3000

Status da migração:
- Site migrado para Next.js mantendo o visual atual
- Página principal componentizada em React
- Conteúdo principal separado em app/data/site.ts
- Menu, hero preview, filtro de soluções e formulário usando React state
- Dados principais tipados com TypeScript
- Imagens principais usando next/image
- Hero refinado com painel visual de produto
- Ícones profissionais adicionados em CTAs e soluções
- Seção Diagnóstico 4Solver adicionada
- Seção de entregáveis do diagnóstico adicionada
- Rotas /solucoes e /contato criadas
- API de contato criada para conectar Formspree via variável de ambiente
- Sitemap e robots adicionados
- Build de produção validado
- Audit de produção validado sem vulnerabilidades
- Página 404 criada
- Assets movidos para public/assets/

Antes de publicar:
1. Trocar https://wa.me/5599999999999 pelo número real.
2. Copiar .env.local.example para .env.local e preencher FORMSPREE_ENDPOINT.
3. Testar o envio real do formulário depois de configurar o provedor.
4. Confirmar as URLs reais de LinkedIn, GitHub e domínio 4solver.com.br.
5. Publicar na Vercel, Netlify ou outra hospedagem compatível com Next.js.

Próxima fase sugerida:
- Criar rotas reais como /solucoes, /cases, /blog, /cliente e /admin.
- Criar uma API de contato em app/api/contact/route.ts.
- Substituir o WhatsApp e redes sociais pelos links finais.
