import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section screen-section">
      <div className="container section-heading">
        <span className="eyebrow">
          <i></i> Página não encontrada
        </span>
        <h1>Essa rota ainda não existe.</h1>
        <p>Volte para a página principal da 4Solver e continue navegando pelas soluções.</p>
        <div className="hero-actions center">
          <Link className="btn btn-primary" href="/">
            Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}
