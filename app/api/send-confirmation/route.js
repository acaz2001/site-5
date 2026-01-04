import { Resend } from "resend";
import { NextResponse } from "next/server";
import VercelInviteUserEmail from "../../../components/email-template";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
  console.error('RESEND_API_KEY nije postavljen u okruženju.');
}

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('send-confirmation body:', body);
    const { toEmail, ime, proizvodi, cena,nacinIsporuke,nacinPlacanja  } = body;


    if (!toEmail) {
      return NextResponse.json({ error: 'toEmail missing' }, { status: 400 });
    }

    if (!resend) {
      console.error('Resend client not initialized (missing API key)');
      return NextResponse.json(
        { error: 'RESEND_API_KEY not configured on server' },
        { status: 500 }
      );
    }

    const result = await resend.emails.send({
      from: 'Verde Staklorezac <v@kontakt.verdestaklorezac.com>',
      to: [toEmail],
      subject: 'Potvrda o porudžbini',
      
      react: VercelInviteUserEmail({ime,cena,proizvodi,nacinIsporuke,nacinPlacanja})
    });

    {/*
      html: `
        <p>Zdravo ${ime},</p>
        <p>Hvala na vašoj porudžbini.</p>
        <p><strong>Proizvod:</strong> ${proizvod}<br/>
           <strong>Dimenzije:</strong> ${dimenzija}<br/>
           <strong>Cena:</strong> ${cena} RSD</p>
        <p>Kontaktiraćemo vas u najkraćem roku.</p>
        <p>Srdačno,<br/>Verde Staklo</p>
      `,
      */}

    console.log('Resend send result:', result);

    // If Resend returns an error object (validation, suppressed address, etc.), surface it
    if (result && result.error) {
      console.error('Resend returned error:', result.error);
      const statusCode = result.error?.statusCode || 400;
      return NextResponse.json(
        { error: 'Resend rejected', details: result.error },
        { status: statusCode }
      );
    }

    // result typically contains an `id` you can use to check the message in Resend dashboard
    return NextResponse.json(
      { message: 'Email poslat', resendId: result?.id || null },
      { status: 200 }
    );
  } catch (error) {
    console.error('send-confirmation error:', error);
    return NextResponse.json(
      { error: 'Greška prilikom slanja emaila', details: error?.message || null },
      { status: 500 }
    );
  }
}
