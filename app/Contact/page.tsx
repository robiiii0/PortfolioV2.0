"use client";
import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaCommentDots, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import NavLink from "../NavLink/NavLink";
import { motion, useAnimation } from "framer-motion";
import Footer from "../components/Footer";

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
      <div className="bg-[#1f2020] w-full rounded-lg p-10 h-full flex flex-col">
        <h2 className="text-2xl text-white">Contact Information</h2>
        <p className="text-lg text-gray-300 mt-6">
          Have some big idea or brand to develop and need help?
        </p>
  
        <ul className="mt-16 space-y-8 flex-grow">
          <li className="flex items-center">
            <FaEnvelope className="text-white mr-2" />
            <a
              href="mailto:robindevpro1@gmail.com"
              className="text-white text-lg ml-4"
            >
              robindevpro1@gmail.com
            </a>
          </li>
          <li className="flex items-center">
            <FaPhone className="text-white mr-2" />
            <a
              href="tel:+158996888"
              className="text-white text-lg ml-4"
            >
              +158 996 888
            </a>
          </li>
          <li className="flex items-center">
            <FaMapMarkerAlt className="text-white mr-2" />
            <a
              href="javascript:void(0)"
              className="text-white text-lg ml-4"
            >
              123 Street 256 House
            </a>
          </li>
        </ul>
  
        <ul className="flex flex-wrap gap-4 mt-16">
          <li className="bg-gray-800 hover:bg-gray-900 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
            <a href="javascript:void(0)">
              <FaFacebookF className="text-white" />
            </a>
          </li>
          <li className="bg-gray-800 hover:bg-gray-900 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
            <a href="javascript:void(0)">
              <FaLinkedinIn className="text-white" />
            </a>
          </li>
          <li className="bg-gray-800 hover:bg-gray-900 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
            <a href="javascript:void(0)">
              <FaInstagram className="text-white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  
    <div className="w-full md:w-2/3 bg-white p-6 md:p-10 rounded-2xl mt-12 md:mt-0">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-md p-4 w-full focus:outline-none focus:border-blue-500 pr-12 text-lg"
              required
            />
            <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-md p-4 w-full focus:outline-none focus:border-blue-500 pr-12 text-lg"
              required
            />
            <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No."
              className="border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-md p-4 w-full focus:outline-none focus:border-blue-500 pr-12 text-lg"
              required
            />
            <FaPhone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-md p-4 w-full focus:outline-none focus:border-blue-500 pr-12 text-lg"
              required
            />
            <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Message"
            rows={4}
            className="border border-t-0 border-r-0 border-l-0 border-gray-300 rounded-md p-4 w-full focus:outline-none focus:border-blue-500 pr-12 text-lg"
            required
          ></textarea>
          <FaCommentDots className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {["General Inquiry", "Technical Support", "Website Feedback"].map(
            (option) => (
              <label className="flex items-center text-lg" key={option}>
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
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          } text-lg`}
        >
          {isSubmitting ? "Envoi en cours..." : "Send Message"}
        </button>
      </form>
      {statusMessage && (
        <p
          className={`mt-6 text-lg ${
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
          className="relative h-[50vh] bg-cover bg-top	 rounded-b-3xl" 
          style={{ backgroundImage: 'url("/bgcontact.jpg")' }}
        >
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
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
      <Footer color="white" />
    </div>

    </>
  )
}
