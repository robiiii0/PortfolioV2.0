"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Button from "../components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string; // honeypot
}

const serviceOptions = [
  { value: "", label: "Sélectionnez un service" },
  { value: "Site Vitrine", label: "Site Vitrine" },
  { value: "E-Commerce", label: "E-Commerce" },
  { value: "Logiciel / SaaS", label: "Logiciel / SaaS" },
  { value: "Autre", label: "Autre" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [formLoadedAt] = useState(() => Date.now());

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _loadedAt: formLoadedAt,
        }),
      });

      if (response.ok) {
        setStatusMessage("Message envoyé avec succès !");
        setIsError(false);
        setFormData({ name: "", email: "", phone: "", service: "", message: "", website: "" });
      } else {
        setStatusMessage("Échec de l'envoi. Veuillez réessayer.");
        setIsError(true);
      }
    } catch {
      setStatusMessage("Une erreur est survenue. Veuillez réessayer.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full bg-bg-surface border border-border rounded-xl px-5 py-3.5 text-text-primary text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300";

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-accent font-body text-sm font-medium tracking-widest uppercase"
              >
                Contact
              </motion.span>
              <div className="overflow-hidden mt-4">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="font-display text-4xl md:text-6xl font-semibold text-text-primary"
                >
                  Parlons de votre projet
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-text-secondary text-base leading-relaxed max-w-md"
              >
                Vous avez un projet en tête ? Décrivez-le moi et je vous
                recontacterai sous 24h pour en discuter.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 space-y-6"
              >
                <Link
                  href="mailto:robin.chabert@pm.me"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-surface border border-border group-hover:border-accent/30 transition-colors duration-300">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <span className="text-sm">robin.chabert@pm.me</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/robin-chabert-863105232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-surface border border-border group-hover:border-accent/30 transition-colors duration-300">
                    <FaLinkedinIn className="w-4 h-4" />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </Link>

                <Link
                  href="https://www.instagram.com/robin_chabb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-surface border border-border group-hover:border-accent/30 transition-colors duration-300">
                    <FaInstagram className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Instagram</span>
                </Link>

                <Link
                  href="https://github.com/robiiii0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-surface border border-border group-hover:border-accent/30 transition-colors duration-300">
                    <FaGithub className="w-4 h-4" />
                  </div>
                  <span className="text-sm">GitHub</span>
                </Link>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — invisible to users, bots fill it */}
                <div className="absolute opacity-0 -z-10" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-text-secondary text-xs font-medium uppercase tracking-widest mb-2"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text-secondary text-xs font-medium uppercase tracking-widest mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-text-secondary text-xs font-medium uppercase tracking-widest mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-text-secondary text-xs font-medium uppercase tracking-widest mb-2"
                  >
                    Service intéressé
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-secondary text-xs font-medium uppercase tracking-widest mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={inputClasses}
                    placeholder="Décrivez votre projet..."
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </Button>
                </div>
              </form>

              {statusMessage && (
                <p
                  className={`mt-6 text-sm ${
                    isError ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
