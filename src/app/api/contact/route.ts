import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const INQUIRY_LABELS: Record<string, string> = {
  media:       'Research Inquiry',
  pitch:       'Pitch / Analysis Submission',
  institutional: 'Institutional / Licensing',
  press:       'Press / Editorial',
  concierge:   'Advisory Inquiry',
};

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { type, name, email, org, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const label = INQUIRY_LABELS[type] ?? type;
    const orgLine = org ? `<tr><td style="padding:4px 0;color:#6E6B65;font-size:13px;">Organization</td><td style="padding:4px 0 4px 16px;font-size:13px;">${org}</td></tr>` : '';

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Georgia,serif;background:#FAFAF8;margin:0;padding:0;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <div style="border-top:3px solid #C17D3C;padding-top:20px;margin-bottom:28px;">
      <p style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6E6B65;margin:0 0 6px;">Borderless Media — New Inquiry</p>
      <h1 style="font-size:22px;font-weight:400;color:#1A2535;margin:0;font-style:italic;">${label}</h1>
    </div>

    <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
      <tr><td style="padding:4px 0;color:#6E6B65;font-family:Helvetica,Arial,sans-serif;font-size:13px;width:120px;">From</td><td style="padding:4px 0 4px 16px;font-size:13px;">${name}</td></tr>
      <tr><td style="padding:4px 0;color:#6E6B65;font-family:Helvetica,Arial,sans-serif;font-size:13px;">Email</td><td style="padding:4px 0 4px 16px;font-size:13px;"><a href="mailto:${email}" style="color:#1A2535;">${email}</a></td></tr>
      ${orgLine}
      <tr><td style="padding:4px 0;color:#6E6B65;font-family:Helvetica,Arial,sans-serif;font-size:13px;">Type</td><td style="padding:4px 0 4px 16px;font-size:13px;">${label}</td></tr>
    </table>

    <div style="border-top:1px solid #DDD9D1;padding-top:20px;margin-bottom:32px;">
      <p style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#6E6B65;margin:0 0 12px;">Message</p>
      <div style="font-size:15px;line-height:1.75;color:#2A2A28;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
    </div>

    <div style="border-top:1px solid #DDD9D1;padding-top:16px;">
      <p style="font-family:Helvetica,Arial,sans-serif;font-size:11px;color:#9E9B96;margin:0;">Sent via borderless-media.vercel.app · Reply directly to ${email}</p>
    </div>

  </div>
</body>
</html>`;

    const { error } = await resend.emails.send({
      from:     'Borderless Media <noreply@borderlessmediallc.com>',
      to:       ['bryan@sorvantis.com'],
      replyTo:  email,
      subject:  `[${label}] ${name}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
