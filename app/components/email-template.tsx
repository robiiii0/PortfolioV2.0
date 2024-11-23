import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
  subject: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
  subject,
  phone,
}) => (
  <div>
    <h1>Bonjour, {firstName}!</h1>
    <p>Mail provenant de : {email}</p>
    <p>Nom : {firstName}</p>
    <p>Message : {message}</p>
    <p>Sujet : {subject}</p> {/* Afficher le sujet */}
    <p>Téléphone : {phone}</p> {/* Afficher le téléphone */}
  </div>
);
