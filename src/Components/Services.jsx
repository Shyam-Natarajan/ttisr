import React from 'react'
import { motion } from "framer-motion"
const Services = () => {
  return (
    <section id="Services" className="py-16 px-6 bg-white min-h-screen">
      <motion.div 
       initial ={{opacity:0, x:200}}
       transition={{duration:1.5}}
       whileInView={{opacity:1, x:0}}
       viewport={{once:true}}
      className="max-w-5xl mx-auto text-center container">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Manufacturing Sector</h4>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Efficient staffing for production lines</li>
              <li>Skilled labor for manufacturing processes</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Software Sector</h4>
            <ul className="text-gray-700 list-disc list-inside">
              <li>IT professionals for diverse technologies</li>
              <li>Customized software development teams</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Technical Training</h4>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Hands-on technical workshops</li>
              <li>Industry-specific certification courses</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Soft Skills Development</h4>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Leadership and team management</li>
              <li>Interpersonal communication workshops</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Networking and Logistics</h4>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Streamlined supply chain solutions</li>
              <li>Expert support for logistics management</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Hospitality Management</h4>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Trained staff for hospitality services</li>
              <li>Customized solutions for guest experience</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Services