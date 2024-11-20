import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: process.env.RECIPIENT_EMAIL,
    replyTo: `${name} <${email}>`, 
    subject: `Nouveau message de ${name} (${email})`,
    text: `Vous avez reçu un nouveau message :
    
  Nom : ${name}
  Message : 
  ${message}`,
  };
  
  

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email envoyé avec succès !" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return new Response(JSON.stringify({ message: "Erreur lors de l'envoi de l'email" }), {
      status: 500,
    });
  }
}
