import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-[#F26A3F] font-bold mb-2 md:mb-0 md:mr-8">Freelance Time Keeper</p>
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl hover:text-gray-300 mx-2">
            <FaFacebook />
          </a>
          <a href="#" className="text-white text-2xl hover:text-gray-300 mx-2">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-2xl hover:text-gray-300 mx-2">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
