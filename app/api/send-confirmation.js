// pages/api/send-confirmation.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Only POST allowed');

  const { toEmail, ime, proizvod, dimenzija, cena } = req.body;

  try {
    await resend.emails.send({
      from: 'Verde Staklo <verdestaklo011@gmail.com>', // koristi verified sender
      to: toEmail,
      subject: 'Potvrda o porudžbini',
      html: `
        <p>Zdravo ${ime},</p>
        <p>Hvala na vašoj porudžbini.</p>
        <p><strong>Proizvod:</strong> ${proizvod}<br/>
           <strong>Dimenzije:</strong> ${dimenzija}<br/>
           <strong>Cena:</strong> ${cena} RSD</p>
        <p>Kontaktiraćemo vas u najkraćem roku.</p>
        <p>Srdačno,<br/>Verde Staklo</p>
      `,
    });

    return res.status(200).json({ message: 'Email poslat' });
  } catch (error) {
    console.error('Resend greška:', error);
    return res.status(500).json({ error: 'Greška prilikom slanja emaila' });
  }
}
