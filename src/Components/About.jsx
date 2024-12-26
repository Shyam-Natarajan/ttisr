import React from 'react'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12 min-h-screen flex justify-center items-center" id='About'>
      <motion.div 
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center container bg-white rounded-lg shadow-lg overflow-hidden">
        
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img 
              src="about_img.jpg" 
              alt="TTISR Logo - Empowering Growth, Delivering Talent" 
              className="w-full h-full object-fill"
              loading="lazy"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              TTISR Manpower And Training Consultant Private Limited is a leading provider of recruitment and training services, committed to empowering businesses and individuals. Established with a vision to revolutionize talent management, we have successfully served various industries with our expertise and dedication.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
                <p className="mt-2 text-gray-600">
                  To foster growth by connecting skilled individuals with thriving organizations and by providing customized training solutions that drive success.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
                <p className="mt-2 text-gray-600">
                  To be a trusted partner for organizations and individuals alike, ensuring professional excellence and mutual growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About