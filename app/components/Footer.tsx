import { contact } from '../data/site';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <Brand className="footer-brand" subtitle="Soluções inteligentes para a vida real" />

        <div>
          <strong>Navegação</strong>
          <a href="/solucoes">Soluções</a>
          <a href="/#processo">Processo</a>
          <a href="/#projetos">Projetos</a>
          <a href="/contato">Contato</a>
        </div>

        <div>
          <strong>Contato</strong>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.whatsappUrl} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>

        <div>
          <strong>Redes Sociais</strong>
          <a href="https://linkedin.com/company/4solver" target="_blank" rel="noopener" aria-label="LinkedIn 4Solver">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/4solver" target="_blank" rel="noopener" aria-label="Instagram 4Solver">
            Instagram
          </a>
          <a href="https://github.com/4solver" target="_blank" rel="noopener" aria-label="GitHub 4Solver">
            GitHub
          </a>
        </div>
      </div>
      <p className="copyright">© 2026 4Solver. Tecnologia, IA e automação para negócios reais.</p>
    </footer>
  );
}
