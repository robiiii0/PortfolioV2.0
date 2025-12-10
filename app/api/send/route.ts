import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";
import React from "react";

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable");
  }
  return new Resend(apiKey);
};

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

    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: [`${emailTo}`],
      subject: `Demande de contact de ${name} et ${email} concernant "${subject}"`, // Inclure subject dans le sujet de l'email
      react: EmailTemplate({ 
        firstName: name, 
        email, 
        message, 
        subject, 
        phone 
      }) as React.ReactElement, // Passer subject et phone à EmailTemplate
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
