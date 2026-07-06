import { projects } from '../data/site';

export default function ProjectsSection() {
  return (
    <section className="section projects-section screen-section" id="projetos" data-section="projetos">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">
            <i></i> Projetos e frentes
          </span>
          <h2>Tecnologia aplicada a negócios reais.</h2>
          <p>A 4Solver nasceu para criar soluções escaláveis, com inteligência, design e execução.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card reveal ${project.delay ?? ''}`.trim()} key={project.title}>
              <div className={`project-visual ${project.visualClass}`} aria-hidden="true">
                {Array.from({ length: project.visualItems }).map((_, index) => (
                  <span key={index}></span>
                ))}
              </div>
              <span>{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
