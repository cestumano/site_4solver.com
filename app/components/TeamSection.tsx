import Image from 'next/image';
import { teamMembers } from '../data/site';

export default function TeamSection() {
  if (teamMembers.length === 0) return null;

  return (
    <section className="section team-section" aria-labelledby="team-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow"><i></i> Quem está por trás da 4Solver</span>
          <h2 id="team-title">Pessoas que conectam tecnologia e operação.</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name}>
              <Image src={member.image} alt={`Retrato profissional de ${member.name}`} width={360} height={450} sizes="(max-width: 720px) 100vw, 33vw" />
              <div className="team-card-copy">
                <h3>{member.name}</h3>
                {member.role ? <strong>{member.role}</strong> : null}
                {member.bio ? <p>{member.bio}</p> : null}
                {member.linkedin ? <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
