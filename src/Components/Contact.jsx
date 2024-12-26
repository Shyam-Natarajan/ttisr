import React from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const secretKey = import.meta.env.VITE_SECRET_KEY;

const Contact = () => {
  const [result, setResult] = React.useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    const email = formData.get("email");
    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      setResult("");
      return;
    }

    formData.append("access_key", secretKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        toast.error(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setResult("");
    }
  };

  return (
    <section id="Contact" className="bg-white py-16 px-6 sm:px-12 min-h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center container"
      >
        <h2 className="text-3xl font-bold text-gray-800">Let’s Work Together</h2>
        <p className="mt-4 text-gray-600">
          Whether you’re an organization looking to build a strong workforce or an individual seeking career advancement, we’re here to help.
        </p>
        <form onSubmit={onSubmit} className="mt-8 max-w-lg mx-auto space-y-4">
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <label htmlFor="phone" className="sr-only">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone"
            name="phone"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            className="w-full p-3 border border-gray-300 rounded"
            rows="4"
          ></textarea>
          <button
            type="submit"
            disabled={result}
            className={`w-full ${result ? "bg-gray-400" : "bg-blue-600"} text-white py-3 rounded-lg hover:bg-blue-700`}
          >
            {result ? result : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;