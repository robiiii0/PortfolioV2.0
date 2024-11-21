"use client";
import React, { useState } from "react";
import NavLink from "../NavLink/NavLink";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Message envoyé avec succès !");
        setIsError(false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessage("Échec de l'envoi du message. Veuillez réessayer plus tard.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-black">
        <div className="relative h-[50vh] bg-cover bg-top" style={{ backgroundImage: 'url("/bgcontact.jpg")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl lg:text-6xl font-bold">
              Contactez-moi &#58;&#41;
            </h1>
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <NavLink colorScheme="black" />
        </div>

        <div className="w-10/12 lg:w-8/12 mx-auto py-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-100 text-center">
            Entrer en contact
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-b from-gray-200 to-gray-500 shadow-xl rounded-lg px-8 py-6 space-y-4 "
          >
            <div>
              <label
                className="block text-gray-900 text-xl font-bold mb-2"
                htmlFor="name"
              >
                Nom&#58;
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-900 text-xl font-bold mb-2"
                htmlFor="email"
              >
                Email&#58;
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                placeholder="Votre email"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-900 text-xl font-bold mb-2"
                htmlFor="message"
              >
                Message&#58;
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                placeholder="Votre message"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-500 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600"
                } text-white font-bold py-2 px-6 rounded-lg transition duration-300`}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </div>
          </form>
          {message && (
            <p
              className={`text-center mt-4 text-lg ${
                isError ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}