import { techStripItems } from '../data/site';

export default function TechStrip() {
  return (
    <section className="tech-strip" aria-label="Tecnologias e serviços">
      <div className="strip-track">
        {techStripItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
