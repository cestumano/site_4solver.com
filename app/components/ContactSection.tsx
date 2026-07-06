'use client';

import { type FormEvent, useState } from 'react';
import { contact } from '../data/site';
import Icon from './Icon';

type FormStatus = {
  message: string;
  type: 'success' | 'error';
};

type ContactSectionProps = {
  plain?: boolean;
};

export default function ContactSection({ plain = false }: ContactSectionProps) {
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();
    const projectType = String(formData.get('projectType') ?? '').trim();
    const urgency = String(formData.get('urgency') ?? '').trim();
    const challenge = String(formData.get('challenge') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !phone || !projectType || !urgency || !challenge) {
      setStatus({ message: 'Preencha todos os campos para enviar sua mensagem.', type: 'error' });
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus({ message: 'Revise o email informado antes de enviar.', type: 'error' });
      return;
    }

    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      setStatus({
        message: `Formulário ainda não conectado ao provedor de email. Por enquanto, use ${contact.email} ou WhatsApp.`,
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ message: 'Enviando sua mensagem...', type: 'success' });

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          projectType,
          urgency,
          challenge,
          message,
          subject: `Novo diagnóstico 4Solver: ${projectType}`
        })
      });

      if (response.ok) {
        setStatus({
          message: 'Mensagem enviada com sucesso. Logo entraremos em contato com um caminho inicial para o diagnóstico.',
          type: 'success'
        });
        form.reset();
      } else {
        setStatus({
          message: `Não foi possível enviar agora. Use o email ${contact.email} ou o WhatsApp.`,
          type: 'error'
        });
      }
    } catch {
      setStatus({ message: `Erro de conexão. Use o email ${contact.email} ou o WhatsApp.`, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={`section cta-section ${plain ? 'plain-section' : 'screen-section'}`.trim()} id="contato" data-section="contato">
      <div className="container">
        <div className="cta-card reveal">
          <span className="eyebrow">
            <i></i> Fale com a 4Solver
          </span>
          <h2>Tem um problema, uma operação travada ou uma ideia para lançar?</h2>
          <p>
            Você traz o desafio. A 4Solver estrutura, desenha e desenvolve a solução com IA, automação, dados e
            tecnologia.
          </p>
        </div>

        <div className="contact-form-wrapper reveal delay-1">
          <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome completo *</label>
              <input type="text" id="name" name="name" required aria-label="Seu nome" placeholder="Seu nome completo" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required aria-label="Seu email" placeholder="seu@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone/WhatsApp *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                aria-label="Seu telefone"
                placeholder="+55 (99) 99999-9999"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Empresa ou projeto</label>
              <input
                type="text"
                id="company"
                name="company"
                aria-label="Empresa ou projeto"
                placeholder="Nome da empresa, condomínio ou ideia"
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectType">Tipo de necessidade *</label>
              <select id="projectType" name="projectType" required aria-label="Tipo de necessidade" defaultValue="">
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="Atendimento com IA">Atendimento com IA</option>
                <option value="Automação de processo">Automação de processo</option>
                <option value="Dashboard e dados">Dashboard e dados</option>
                <option value="Sistema sob medida">Sistema sob medida</option>
                <option value="MVP ou produto digital">MVP ou produto digital</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="urgency">Momento do projeto *</label>
              <select id="urgency" name="urgency" required aria-label="Momento do projeto" defaultValue="">
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="Quero iniciar agora">Quero iniciar agora</option>
                <option value="Estou pesquisando caminhos">Estou pesquisando caminhos</option>
                <option value="Tenho uma operação travada">Tenho uma operação travada</option>
                <option value="Preciso validar uma ideia">Preciso validar uma ideia</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="challenge">Principal gargalo *</label>
              <textarea
                id="challenge"
                name="challenge"
                rows={4}
                required
                aria-label="Principal gargalo"
                placeholder="O que hoje está manual, lento, perdido ou difícil de acompanhar?"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="message">Contexto adicional</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                aria-label="Sua mensagem"
                placeholder="Se quiser, conte mais sobre ferramentas usadas, volume de atendimento ou prazo desejado."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              <Icon name="Send" size={18} />
              {isSubmitting ? 'Enviando...' : 'Quero automatizar minha operação'}
            </button>
            <p className={`form-status ${status ? `show ${status.type}` : ''}`.trim()} role="status" aria-live="polite">
              {status?.message}
            </p>
          </form>

          <div className="contact-quick">
            <p>
              <strong>Ou conecte conosco rapidamente:</strong>
            </p>
            <div className="hero-actions">
              <a className="btn btn-secondary" href={contact.whatsappUrl} target="_blank" rel="noopener">
                <Icon name="Send" size={18} />
                WhatsApp
              </a>
              <a className="btn btn-secondary" href={`mailto:${contact.email}`}>
                <Icon name="Mail" size={18} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
