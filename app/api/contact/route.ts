import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, role, subject, message } = body;

  if (!firstName || !lastName || !email || !role || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const s = {
    firstName: escapeHtml(firstName),
    lastName: escapeHtml(lastName),
    email: escapeHtml(email),
    role: escapeHtml(role),
    subject: escapeHtml(subject),
    message: escapeHtml(message),
  };

  try {
    await resend.emails.send({
      from: "YTA Website <onboarding@resend.dev>",
      to: ["hello@yngtlntagency.com"],
      subject: `[YTA Contact] ${s.subject} — ${s.role}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C41E3A;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name</td><td style="padding: 8px;">${s.firstName} ${s.lastName}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${s.email}">${s.email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">I am a</td><td style="padding: 8px;">${s.role}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold;">Subject</td><td style="padding: 8px;">${s.subject}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
            <p style="font-weight: bold; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap;">${s.message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
