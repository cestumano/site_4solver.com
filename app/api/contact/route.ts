import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  urgency?: string;
  challenge?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ error: 'Dados inválidos.' }, { status: 400 });
  }

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const phone = payload.phone?.trim() ?? '';
  const projectType = payload.projectType?.trim() ?? '';
  const urgency = payload.urgency?.trim() ?? '';
  const challenge = payload.challenge?.trim() ?? '';

  if (!name || !email || !phone || !projectType || !urgency || !challenge) {
    return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Email inválido.' }, { status: 400 });
  }

  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

  if (!formspreeEndpoint) {
    return NextResponse.json({ ok: true, configured: false }, { status: 202 });
  }

  const response = await fetch(formspreeEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...payload,
      subject: `Novo diagnóstico 4Solver: ${projectType}`
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Falha ao enviar mensagem.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true, configured: true });
}
