import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section 
      className="bg-gray-50 py-16 px-6 sm:px-12 min-h-screen flex justify-center items-center" 
      id="About"
    >
       <motion.div 
         initial={{ opacity: 0, x: -200 }}
         transition={{ duration: 2.0 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center container bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 min-h-full md:min-h-full relative">
              <img 
                src="about_img.webp" 
                alt="TTISR Office Environment" 
                className="w-full h-full object-fill"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div 
              className="lg:w-1/2 p-8 lg:p-12"
            >
              <div className="space-y-8">
                <div>
                  <h2 
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                  >
                    Who We Are
                  </h2>
                  <p 
                    className="text-gray-600 leading-relaxed text-lg"
                  >
                    TTISR Manpower And Training Consultant Private Limited is a leading provider 
                    of recruitment and training services, committed to empowering businesses and 
                    individuals. Established with a vision to revolutionize talent management, 
                    we have successfully served various industries with our expertise and dedication.
                  </p>
                </div>

                <div className="space-y-8">
                  <div >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To foster growth by connecting skilled individuals with thriving organizations 
                      and by providing customized training solutions that drive success.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Our Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To be a trusted partner for organizations and individuals alike, ensuring 
                      professional excellence and mutual growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;