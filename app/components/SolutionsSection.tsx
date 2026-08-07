'use client';

import { useState } from 'react';
import { solutions, solutionTabs } from '../data/site';
import type { SolutionCategory } from '../data/site';
import Icon, { type IconName } from './Icon';

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<SolutionCategory>('all');
  const visibleSolutions =
    activeTab === 'all' ? solutions : solutions.filter((solution) => solution.categories.includes(activeTab));

  return (
    <section className="section screen-section" id="solucoes" data-section="solucoes">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">
            <i></i> O que entregamos
          </span>
          <h2>Ferramentas construídas a partir do processo real.</h2>
          <p>O formato da entrega depende do gargalo: atendimento, documentos, gestão, integração ou produto digital.</p>
        </div>

        <div className="solution-tabs reveal" role="tablist" aria-label="Filtrar soluções">
          {solutionTabs.map((tab, index) => (
            <button
              className={activeTab === tab.key ? 'active' : undefined}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              key={tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="solutions-grid">
          {visibleSolutions.map((solution) => (
            <article
              id={solution.title === 'Sistemas sob medida' ? 'produto-digital' : undefined}
              className={`solution-card ${solution.featured ? 'featured' : ''} reveal ${solution.delay ?? ''}`.trim()}
              key={solution.title}
            >
              {solution.featured ? (
                <>
                  <span className="tag">Atendimento e operação</span>
                  <div className="solution-mark">
                    <Icon name={solution.icon as IconName} size={24} />
                  </div>
                </>
              ) : (
                <div className="icon">
                  <Icon name={solution.icon as IconName} size={30} />
                </div>
              )}
              <div className="solution-content">
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <a href={`/solucoes/${solution.slug}`}>Conhecer solução →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
