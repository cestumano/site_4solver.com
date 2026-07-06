'use client';

import { useState } from 'react';
import { contact, previewData, previewTabs, type PreviewKey } from '../data/site';
import Icon from './Icon';

export default function Hero() {
  const [activePreview, setActivePreview] = useState<PreviewKey>('atendimento');
  const preview = previewData[activePreview];

  return (
    <section className="hero screen-section" id="inicio" data-section="inicio">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">
            <i></i> IA aplicada ao trabalho real
          </span>
          <h1>Automação, dados e IA para operações que ainda dependem do improviso.</h1>
          <p>
            A 4Solver identifica gargalos, desenha o fluxo ideal e constrói sistemas sob medida para atendimento,
            condomínios, processos internos e projetos sustentáveis. Menos planilha solta, mais operação rastreável.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contato">
              <Icon name="Sparkles" size={18} />
              Solicitar diagnóstico
            </a>
            <a className="btn btn-secondary" href="#solucoes">
              <Icon name="ArrowRight" size={18} />
              Ver soluções
            </a>
            <a className="btn btn-secondary" href={contact.whatsappUrl} target="_blank" rel="noopener">
              <Icon name="Send" size={18} />
              Falar no WhatsApp
            </a>
          </div>
          <div className="hero-metrics" aria-label="Destaques da 4Solver">
            <div>
              <strong>Atendimento</strong>
              <span>WhatsApp, site e operação</span>
            </div>
            <div>
              <strong>Rotinas</strong>
              <span>Processos sem retrabalho</span>
            </div>
            <div>
              <strong>Dados</strong>
              <span>Decisão com painel claro</span>
            </div>
          </div>
        </div>

        <div className="hero-panel reveal delay-1" aria-label="Painel tecnológico da 4Solver">
          <div className="preview-tabs" role="tablist" aria-label="Prévia de soluções">
            {previewTabs.map((tab, index) => (
              <button
                className={activePreview === tab.key ? 'active' : undefined}
                type="button"
                role="tab"
                aria-selected={activePreview === tab.key}
                onClick={() => setActivePreview(tab.key)}
                key={tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="product-window">
            <div className="window-bar">
              <span></span>
              <span></span>
              <span></span>
              <strong>{preview.title}</strong>
            </div>
            <div className="product-shell">
              <aside className="product-sidebar" aria-label="Módulos do painel">
                <span className="active">
                  <Icon name="Bot" size={15} />
                </span>
                <span>
                  <Icon name="Workflow" size={15} />
                </span>
                <span>
                  <Icon name="BarChart3" size={15} />
                </span>
                <span>
                  <Icon name="Database" size={15} />
                </span>
              </aside>
              <div className="product-main">
                <div className="status-row" aria-label="Status operacional">
                  <span>
                    <i></i> IA ativa
                  </span>
                  <span>Prioridade alta</span>
                  <span>Integração OK</span>
                </div>

                <div className="ops-grid">
                  <div className="ops-card wide">
                    <small>{preview.metricLabel}</small>
                    <strong>{preview.metricValue}</strong>
                    <div className="mini-chart" aria-hidden="true">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                  <div className="ops-card">
                    <small>{preview.sideLabel}</small>
                    <strong>{preview.sideValue}</strong>
                  </div>
                  <div className="ops-card">
                    <small>{preview.badgeLabel}</small>
                    <strong>{preview.badgeValue}</strong>
                  </div>
                </div>

                <div className="assistant-preview">
                  <div className="message user">{preview.user}</div>
                  <div className="message bot">{preview.bot}</div>
                </div>

                <div className="workflow-preview" aria-label="Fluxo de automação">
                  <span>{preview.flowA}</span>
                  <i></i>
                  <span>{preview.flowB}</span>
                  <i></i>
                  <span>{preview.flowC}</span>
                  <i></i>
                  <span>{preview.flowD}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
