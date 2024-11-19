import React from "react";

export default function page() {
  return (
        <div className="min-h-screen">
          {/* Background Section */}
          <div className="relative h-[50vh] bg-cover bg-center" 
               style={{ backgroundImage: 'url("/your-image.jpg")' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-4xl lg:text-6xl font-bold">
                Contact Us
              </h1>
            </div>
          </div>
    
          {/* Form Section */}
          <div className="w-10/12 lg:w-8/12 mx-auto py-12">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-800 text-center">
              Get in Touch
            </h2>
            <form className="bg-white shadow-md rounded-lg px-8 py-6 space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }    

