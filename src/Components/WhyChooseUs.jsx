import React from 'react'
import { motion } from 'framer-motion'
const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12 min-h-screen flex flex-col justify-center items-center" id='Choose'>
    <motion.div 
     initial ={{opacity:0, x:-200}}
     transition={{duration:1.5}}
     whileInView={{opacity:1, x:0}}
     viewport={{once:true}}
    className="max-w-7xl mx-auto text-center container">
      <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 2xl:grid-cols-4">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Proven Expertise</h3>
          <p className="mt-2 text-gray-600">
            With years of experience in the industry, we understand the nuances of recruitment and training.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Customized Solutions</h3>
          <p className="mt-2 text-gray-600">
            Our solutions are tailored to meet the specific needs of each organization or individual.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Industry Insights</h3>
          <p className="mt-2 text-gray-600">
            Our connections across industries allow us to stay updated with trends.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Comprehensive Support</h3>
          <p className="mt-2 text-gray-600">
            We provide complete support, from initial consultations to post-service follow-ups.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
  )
}

export default WhyChooseUs