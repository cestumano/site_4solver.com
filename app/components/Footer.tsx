import { contact } from '../data/site';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <Brand className="footer-brand" subtitle="Software para operações reais" />

        <div>
          <strong>Navegação</strong>
          <a href="/solucoes">Soluções</a>
          <a href="/#diagnostico">Como trabalhamos</a>
          <a href="/#projetos">Projetos</a>
          <a href="/empresa">Empresa</a>
          <a href="/privacidade">Privacidade</a>
        </div>

        <div>
          <strong>Contato</strong>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="/contato">Solicitar diagnóstico</a>
        </div>
      </div>
      <p className="copyright">© 2026 4Solver. Software, automação e dados para operações reais.</p>
    </footer>
  );
}
