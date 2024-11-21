import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.RECIPIENT_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    console.log("Received request data:", { name, email, message });

    const { data, error } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: [`${emailTo}`],
      subject: `demande de contact de ${name} et ${email}`,
      react: EmailTemplate({ firstName: name, email, message }),
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
