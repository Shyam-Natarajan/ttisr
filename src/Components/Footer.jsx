import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-0 sm:grid sm:grid-cols-1 gap-6 text-center">
        {/* Contact Details */}
        <div>
          <h4 className="text-3xl font-bold mb-4">Contact Us</h4>
          <p className="text-sm leading-relaxed">
            <span className="font-bold">Proprietor:</span> Kokila
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-bold">Phone:</span>{' '}
            <a href="tel:+919952206874" className="underline hover:text-blue-400">+91 99522 06874</a>
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-bold">Email:</span>{' '}
            <a href="mailto:recruitment@ttisr.com" className="underline hover:text-blue-400">
              recruitment@ttisr.com
            </a>
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-bold">Address:</span> Madanambedu (V), Sathyavedu (M), Raja Street, Tirupati, Dist. Pin - 517588
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed">
          <p>© {new Date().getFullYear()} TTISR Manpower And Training Consultant Pvt Ltd.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
