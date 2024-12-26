import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [showMobileMenu])

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6  md:px-20 lg:px-32 bg-transparent'>
                    <img src="/thulasi-TTISR.webp" alt='TTISR Manpower And Training Consultant Pvt Ltd' height={70} width={70}  className='rounded-lg' />
                <ul className='hidden sm:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-black'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-black'>About</a>
                    <a href="#Services" className='cursor-pointer hover:text-black'>Services</a>
                    <a href="#Choose" className='cursor-pointer hover:text-black'>Why Choose Us</a>
                    <a href="#Contact" className='cursor-pointer hover:text-black'>Contact</a>
                </ul>
                <img src={assets.menu_icon} alt="" className='sm:hidden w-7 cursor-pointer' onClick={() => setShowMobileMenu(true)} />
            </div>
            {/* mobile menu */}
            <div className={`sm:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img src={assets.cross_icon} alt="" className='w-6' onClick={() => setShowMobileMenu(false)} />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium'>
                    <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Services" className='px-4 py-2 rounded-full inline-block'>Services</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Choose" className='px-4 py-2 rounded-full inline-block'>Why Choose Us</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Contact" className='px-4 py-2 rounded-full inline-block'>Contact</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar