import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Services from './Components/Services'
import WhyChooseUs from './Components/WhyChooseUs'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App