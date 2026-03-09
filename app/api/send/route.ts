import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Simple in-memory rate limiting per IP
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS = 3; // max 3 per hour per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  submissions.set(ip, recent);
  return recent.length >= MAX_SUBMISSIONS;
}

function recordSubmission(ip: string) {
  const timestamps = submissions.get(ip) ?? [];
  timestamps.push(Date.now());
  submissions.set(ip, timestamps);
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    // Rate limiting
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Trop de messages envoyés. Réessayez plus tard." }),
        { status: 429 }
      );
    }

    const { name, email, phone, service, message, website, _loadedAt } =
      await request.json();

    // Honeypot check — bots fill this hidden field
    if (website) {
      // Silently accept to not tip off the bot
      return new Response(JSON.stringify({ success: true }));
    }

    // Time-based check — reject if submitted in under 3 seconds
    if (_loadedAt && Date.now() - _loadedAt < 3000) {
      return new Response(JSON.stringify({ success: true }));
    }

    // Basic validation
    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim() ||
      name.length > 200 ||
      email.length > 200 ||
      message.length > 5000
    ) {
      return new Response(
        JSON.stringify({ error: "Données invalides." }),
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Email invalide." }),
        { status: 400 }
      );
    }

    recordSubmission(ip);

    await transporter.sendMail({
      from: `"Portfolio — ${name}" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande de ${name} — ${service || "Contact général"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #e85d3a; font-size: 24px;">Nouvelle demande de contact</h1>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
          ${service ? `<p><strong>Service intéressé :</strong> ${service}</p>` : ""}
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: "Erreur d'envoi" }), {
      status: 500,
    });
  }
}
