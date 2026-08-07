import Image from 'next/image';
import { organizationRelationships } from '../data/site';

export default function PartnersSection() {
  if (organizationRelationships.length === 0) return null;

  return (
    <section className="section partners-section" aria-labelledby="partners-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow"><i></i> Ecossistema e conexões</span>
          <h2 id="partners-title">Relações apresentadas com transparência.</h2>
        </div>
        <div className="partners-grid">
          {organizationRelationships.map((item) => (
            <article key={`${item.category}-${item.name}`}>
              <span>{item.category}</span>
              <Image src={item.logo} alt={`Marca de ${item.name}`} width={180} height={80} />
              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
