"use client";
import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaCommentDots, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaPaperPlane } from "react-icons/fa";
import NavLink from "../NavLink/NavLink";
import { motion, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setStatusMessage("Message envoyé avec succès !");
        setIsError(false);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
          subject: "",
        });
      } else {
        setStatusMessage(
          "Échec de l'envoi du message. Veuillez réessayer plus tard."
        );
        setIsError(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setStatusMessage(
        "Une erreur est survenue. Veuillez réessayer plus tard."
      );
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<div className="flex flex-col md:flex-row w-full md:w-9/12 mx-auto rounded-2xl shadow-lg">
<div className="w-full md:w-1/3">
  <div className="bg-[#1f2020] w-full rounded-lg p-6 md:p-8 lg:p-10 h-full flex flex-col">
  <h2 className="text-xl md:text-2xl lg:text-3xl text-white">Informations de contact</h2>
<p className="text-sm md:text-base lg:text-lg text-gray-300 mt-4 md:mt-5 lg:mt-6">
  Vous avez une grande idée ou une marque à développer et avez besoin d'aide ?
</p>

    <ul className="mt-8 md:mt-12 lg:mt-16 space-y-4 md:space-y-6 lg:space-y-8 flex-grow">
      <li className="flex items-center">
        <FaEnvelope className="text-white mr-2" />
        <Link
          href="mailto:robindevpro1@gmail.com"
          className="text-white text-sm md:text-base lg:text-lg ml-4"
        >
          robindevpro1@gmail.com
        </Link>
      </li>
      <li className="flex items-center">
        <FaInstagram className="text-white mr-2" />
        <Link
          href="https://www.instagram.com/robin_chabb/"
          className="text-white text-sm md:text-base lg:text-lg ml-4"
        >
          Instagram
        </Link>
      </li>
      <li className="flex items-center">
        <FaLinkedinIn className="text-white mr-2" />
        <Link
          href="https://www.linkedin.com/in/robin-chabert-863105232/"
          className="text-white text-sm md:text-base lg:text-lg ml-4"
        >
          Linkedin
        </Link>
      </li>
    </ul>
  </div>
</div>

  <div className="w-full md:w-2/3 bg-white p-4  md:p-10 rounded-2xl mt-6 md:mt-0">
    <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="relative">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Prenom"
            className="border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-md p-2 md:p-4 w-full focus:outline-none focus:border-blue-500 pr-10 md:pr-12 text-sm md:text-lg"
            required
          />
          <FaUser className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="relative">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Nom"
            className="border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-md p-2 md:p-4 w-full focus:outline-none focus:border-blue-500 pr-10 md:pr-12 text-sm md:text-lg"
            required
          />
          <FaUser className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="relative">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Téléphone"
            className="border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-md p-2 md:p-4 w-full focus:outline-none focus:border-blue-500 pr-10 md:pr-12 text-sm md:text-lg"
            required
          />
          <FaPhone className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-md p-2 md:p-4 w-full focus:outline-none focus:border-blue-500 pr-10 md:pr-12 text-sm md:text-lg"
            required
          />
          <FaEnvelope className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          rows={4}
          className="border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-md p-2 md:p-4 w-full focus:outline-none focus:border-blue-500 pr-10 md:pr-12 text-sm md:text-lg"
          required
        ></textarea>
        <FaCommentDots className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        {["Demande générale", "Support technique", "Retour sur le site web"].map(
          (option) => (
            <label className="flex items-center text-sm md:text-lg" key={option}>
              <input
                type="radio"
                name="subject"
                value={option}
                checked={formData.subject === option}
                onChange={handleChange}
                className="mr-2"
              />
              {option}
            </label>
          )
        )}
      </div>
      <div className="flex justify-end">
  <button
    type="submit"
    disabled={isSubmitting}
    className={`bg-[#1f2020] text-white px-6 py-2 md:px-8 md:py-4 rounded-md hover:bg-[#363838] focus:outline-none focus:ring-2 focus:ring-gray-500 ${
      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
    } text-sm md:text-lg flex items-center space-x-2`}
  >
    {isSubmitting ? "Envoi en cours..." : "Send Message"}
    <FaPaperPlane className="ml-2" />
  </button>
</div>
    </form>
    {statusMessage && (
      <p
        className={`mt-4 md:mt-6 text-sm md:text-lg ${
          isError ? "text-red-500" : "text-green-500"
        }`}
      >
        {statusMessage}
      </p>
    )}
  </div>
</div>
  );
};






export default function page() {
  return (
    <>
<div className="min-h-screen bg-stone-100">
  <div className="relative min-h-screen bg-stone-100">
    <div
      className="relative h-[50vh] bg-cover bg-top rounded-b-3xl"
      style={{ backgroundImage: 'url("/bgcontact.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center px-4"
        >
          Contactez-moi &#58;&#41;
        </motion.h1>
      </div>
    </div>

    <div className="absolute top-[35vh] md:top-[40vh] left-1/2 transform -translate-x-1/2 w-11/12 md:w-10/12">
      <ContactForm />
    </div>
    <div className="w-11/12 md:w-10/12 mx-auto mt-[25vh] md:mt-[20vh]">
      <NavLink colorScheme="black" />
    </div>
  </div>
  <div
    className="md:mt-[-15%] mt-[15%] w-full bg-stone-100"
    style={{ zIndex: 1, transform: "translateY(100%)" }} 
  >
  <Footer color="white" />

  </div>
</div>
    </>
  )
}
