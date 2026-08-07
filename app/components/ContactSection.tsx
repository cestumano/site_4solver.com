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

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();
    const challenge = String(formData.get('challenge') ?? '').trim();
    const website = String(formData.get('website') ?? '').trim();
    const consent = formData.get('consent') === 'on';

    if (website) return;

    if (!name || !phone || !company || !challenge || !consent) {
      setStatus({ message: 'Preencha os quatro campos obrigatórios para solicitar o diagnóstico.', type: 'error' });
      return;
    }

    if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus({ message: 'Revise o email informado antes de enviar.', type: 'error' });
      return;
    }

    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      setStatus({
        message: `Formulário ainda não conectado ao provedor de email. Por enquanto, use ${contact.email} ou o WhatsApp.`,
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
          challenge,
          subject: `Nova solicitação de diagnóstico 4Solver: ${company}`
        })
      });

      if (response.ok) {
        setStatus({
          message: 'Mensagem enviada com sucesso. Logo entraremos em contato com um caminho inicial para o diagnóstico.',
          type: 'success'
        });
        window.dispatchEvent(new Event('4solver:lead'));
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
          <h2>Existe um processo na sua empresa que ainda depende demais de trabalho manual?</h2>
          <p>
            Conte o problema para a 4Solver. Ajudamos a mapear o gargalo e identificar um caminho viável de automação,
            integração ou desenvolvimento.
          </p>
        </div>

        <div className="contact-form-wrapper reveal delay-1">
          <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome completo *</label>
              <input type="text" id="name" name="name" required autoComplete="name" placeholder="Seu nome completo" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email <span>(opcional)</span></label>
              <input type="email" id="email" name="email" autoComplete="email" placeholder="seu@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone/WhatsApp *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                autoComplete="tel"
                inputMode="tel"
                maxLength={15}
                onInput={(event) => { event.currentTarget.value = formatPhone(event.currentTarget.value); }}
                placeholder="+55 (99) 99999-9999"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Empresa ou projeto *</label>
              <input
                type="text"
                id="company"
                name="company"
                required
                autoComplete="organization"
                placeholder="Nome da empresa, condomínio ou ideia"
              />
            </div>
            <div className="form-group">
              <label htmlFor="challenge">Qual problema você quer resolver? *</label>
              <textarea
                id="challenge"
                name="challenge"
                rows={4}
                required
                placeholder="O que hoje está manual, lento, perdido ou difícil de acompanhar?"
              ></textarea>
            </div>
            <div className="form-honeypot" aria-hidden="true">
              <label htmlFor="website">Não preencha este campo</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <label className="consent-field">
              <input type="checkbox" name="consent" required />
              <span>Autorizo o uso destes dados para que a 4Solver responda ao meu contato. Consulte a <a href="/privacidade">Política de Privacidade</a>.</span>
            </label>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              <Icon name="Send" size={18} />
              {isSubmitting ? 'Enviando...' : 'Solicitar diagnóstico'}
            </button>
            <small className="response-time">Normalmente respondemos em até um dia útil.</small>
            <p className={`form-status ${status ? `show ${status.type}` : ''}`.trim()} role="status" aria-live="polite">
              {status?.message}
            </p>
          </form>

          <div className="contact-quick">
            <p>
              <strong>Ou conecte conosco rapidamente:</strong>
            </p>
            <div className="hero-actions">
              <a className="btn btn-secondary" href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
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
