import React from 'react';
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Manufacturing Sector",
      items: ["Efficient staffing for production lines", "Skilled labor for manufacturing processes"]
    },
    {
      title: "Software Sector",
      items: ["IT professionals for diverse technologies", "Customized software development teams"]
    },
    {
      title: "Technical Training",
      items: ["Hands-on technical workshops", "Industry-specific certification courses"]
    },
    {
      title: "Soft Skills Development",
      items: ["Leadership and team management", "Interpersonal communication workshops"]
    },
    {
      title: "Networking and Logistics",
      items: ["Streamlined supply chain solutions", "Expert support for logistics management"]
    },
    {
      title: "Hospitality Management",
      items: ["Trained staff for hospitality services", "Customized solutions for guest experience"]
    },
  ];

  return (
    <section id="Services" className="py-16 px-6 bg-white min-h-screen flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center container"
      >
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8" aria-label="Our Services">
          Our Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg"
            >
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <ul className="text-gray-700 list-disc list-inside">
                {service.items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
