import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.RECIPIENT_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, message, subject, phone } = await request.json(); // Ajouter subject et phone ici
    console.log("Received request data:", {
      name,
      email,
      message,
      subject,
      phone,
    });

    const { data, error } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: [`${emailTo}`],
      subject: `Demande de contact de ${name} et ${email} concernant "${subject}"`, // Inclure subject dans le sujet de l'email
      react: EmailTemplate({ firstName: name, email, message, subject, phone }), // Passer subject et phone à EmailTemplate
    });

    if (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
