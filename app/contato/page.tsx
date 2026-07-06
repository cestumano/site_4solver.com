import type { Metadata } from 'next';
import SiteInteractions from '../SiteInteractions';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'Contato | 4Solver',
  description: 'Solicite um diagnóstico da 4Solver para automação, IA, dashboards, sistemas e produtos digitais.'
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="route-page contact-route">
        <section className="route-hero compact">
          <div className="container">
            <span className="eyebrow">
              <i></i> Diagnóstico 4Solver
            </span>
            <h1>Conte onde a operação trava.</h1>
            <p>
              Envie o contexto principal e a 4Solver retorna com um caminho inicial para organizar, automatizar ou
              transformar a ideia em sistema.
            </p>
          </div>
        </section>
        <ContactSection plain />
      </main>
      <Footer />
      <SiteInteractions />
    </>
  );
}
