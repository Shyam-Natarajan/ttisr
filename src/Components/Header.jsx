import React, {useState} from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className='min-h-screen mb-4 flex items-center w-full overflow-hidden relative' id='Header'>
      <Navbar />
  
      {/* Skeleton Loader */}
      {!imageLoaded && (
        <div className='absolute inset-0 bg-gray-200'></div>
      )}

      {/* Preloading the Image */}
      <img
        src="/hero_image_1.png"
        alt="Background"
        className="hidden"
        onLoad={() => setImageLoaded(true)}
      />

      {/* Background Image */}
      {imageLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero_image_1.png')"}}
        ></div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
          Empowering Growth, Delivering Talent
        </h1>
        <h1 className='text-2xl sm:text-3xl md:text-4xl inline-block max-w-3xl font-medium pt-5'>
          TTISR your trusted partner for manpower solutions and professional training.
        </h1>
        <div className='mt-8'>
          <a href="#Contact" className='bg-blue-600 px-8 py-3 rounded'>Reach Out to Us Today</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header