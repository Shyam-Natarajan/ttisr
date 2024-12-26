import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Proven Expertise",
      description: "With years of experience in the industry, we understand the nuances of recruitment and training."
    },
    {
      title: "Customized Solutions",
      description: "Our solutions are tailored to meet the specific needs of each organization or individual."
    },
    {
      title: "Industry Insights",
      description: "Our connections across industries allow us to stay updated with trends."
    },
    {
      title: "Comprehensive Support",
      description: "We provide complete support, from initial consultations to post-service follow-ups."
    }
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 min-h-screen flex flex-col justify-center items-center" id="Choose">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center container"
      >
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 2xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg"
              aria-labelledby={`feature-title-${index}`}
            >
              <h3 id={`feature-title-${index}`} className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
