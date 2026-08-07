import Image from 'next/image';
import { projects } from '../data/site';

export default function ProjectsSection() {
  return (
    <section className="section projects-section screen-section" id="projetos" data-section="projetos">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">
            <i></i> Projetos e frentes
          </span>
          <h2>Projetos que conectam pesquisa, operação e produto.</h2>
          <p>Iniciativas próprias e frentes de trabalho que mostram como estruturamos problemas antes de desenvolver.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${index === 0 ? 'editorial-project' : ''} reveal ${project.delay ?? ''}`.trim()} key={project.title}>
              <div className={`project-visual ${project.visualClass}`} aria-hidden="true">
                {index === 0 ? (
                  <Image src="/assets/biosolver/biosolver-identidade.jpg" alt="" width={1024} height={1536} sizes="(max-width: 980px) 100vw, 55vw" />
                ) : Array.from({ length: project.visualItems }).map((_, visualIndex) => <span key={visualIndex}></span>)}
              </div>
              <div className="project-content">
                <span>{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                {index === 0 ? <small>Projeto próprio · Economia circular e rastreabilidade</small> : null}
                <a className="project-link" href={project.href}>{project.cta} <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
