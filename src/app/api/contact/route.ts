import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(request: Request) {
  try {
    const { name, email, businessType, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Angel Design Studio <onboarding@resend.dev>', // Change this to your verified domain later
      to: ['your-email@example.com'], // The email where you want to receive notifications
      subject: `Nuevo contacto: ${name} - ${businessType}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo de negocio:</strong> ${businessType}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
