import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { contact } from '../data/site';

export const metadata: Metadata = { title: 'Política de Privacidade | 4Solver', description: 'Como a 4Solver trata os dados enviados por meio deste site.' };

export default function PrivacyPage() {
  return <><Header /><main className="route-page legal-page"><section className="route-hero compact"><div className="container">
    <span className="eyebrow"><i></i> Privacidade</span><h1>Política de Privacidade</h1><p>Atualizada em 6 de agosto de 2026.</p>
  </div></section><section className="route-section"><div className="container legal-content">
    <h2>Dados coletados</h2><p>Quando você solicita um diagnóstico, podemos receber nome, WhatsApp, empresa ou projeto, email opcional e a descrição do problema informada por você.</p>
    <h2>Finalidade</h2><p>Usamos esses dados para responder ao contato, compreender a necessidade apresentada, organizar o atendimento e manter registros relacionados à conversa comercial.</p>
    <h2>Formulário e serviços externos</h2><p>O envio do formulário depende de um provedor configurado pela 4Solver. Os botões de WhatsApp e email abrem serviços externos, sujeitos às políticas desses fornecedores.</p>
    <h2>Cookies e analytics</h2><p>O site pode utilizar o Plausible Analytics quando a integração estiver configurada. A ferramenta é carregada somente quando o domínio de medição é definido e registra dados agregados de navegação e eventos de conversão, sem cookies publicitários.</p>
    <h2>Compartilhamento e conservação</h2><p>Os dados podem ser processados pelos fornecedores necessários ao atendimento. Eles são conservados pelo tempo necessário para responder à solicitação e cumprir obrigações aplicáveis.</p>
    <h2>Seus direitos e contato</h2><p>Você pode solicitar informações, correção ou exclusão dos seus dados pelo email <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
  </div></section></main><Footer /></>;
}
