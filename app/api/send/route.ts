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

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

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
