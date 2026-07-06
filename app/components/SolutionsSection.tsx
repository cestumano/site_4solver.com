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
            <i></i> Entregas possíveis
          </span>
          <h2>Peças de tecnologia que se encaixam na sua operação.</h2>
          <p>Cada entrega parte do problema: atendimento, documentos, gestão, integração ou produto digital.</p>
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
              className={`solution-card ${solution.featured ? 'featured' : ''} reveal ${solution.delay ?? ''}`.trim()}
              key={solution.title}
            >
              {solution.featured ? (
                <>
                  <span className="tag">Solução em destaque</span>
                  <div className="solution-mark">
                    <Icon name={solution.icon as IconName} size={24} />
                  </div>
                </>
              ) : (
                <div className="icon">
                  <Icon name={solution.icon as IconName} size={30} />
                </div>
              )}
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
              {solution.cta ? <a href="#contato">{solution.cta}</a> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
