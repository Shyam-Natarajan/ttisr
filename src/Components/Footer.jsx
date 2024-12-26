import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-0 sm:grid sm:grid-cols-1 gap-6 text-center">
          {/* Contact Details */}
          <div>
            <h4 className="text-3xl font-bold mb-2">Contact Us</h4>
            <p className="text-sm space-y-2">
              <span className="font-bold">Proprietor:</span> Kokila
            </p>
            <p className="text-sm space-y-2">
              <span className="font-bold">Phone:</span> +91 99522 06874
            </p>
            <p className="text-sm space-y-2">
              <span className="font-bold">Email:</span> <a href="mailto:recruitment@ttisr.com" className="underline">recruitment@ttisr.com</a>
            </p>
            <p className="text-sm space-y-2">
              <span className="font-bold">Address:</span> Madanambedu (V), Sathyavedu (M), Raja Street, Tirupati, Dist. Pin - 517588
            </p>
          </div>
  
          {/* Copyright */}
          <div className="text-sm">
            <p>© {new Date().getFullYear()} TTISR Manpower And Training Consultant Pvt Ltd.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer