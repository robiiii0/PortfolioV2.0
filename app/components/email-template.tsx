import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>Bonjour, {firstName}!</h1>
    <p>Mail provenant de : {email}</p>
    <p>Nom : {firstName}</p>
    <p>Message : {message}</p>
  </div>
);
