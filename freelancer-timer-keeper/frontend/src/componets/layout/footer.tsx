import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-[#F26A3F] font-bold">Freelance Time Keeper</p>
        <div className="flex items-center mt-2 md:mt-0">
          <a href="#"><FaFacebook className="text-white text-2xl hover:text-gray-300 mx-2" /></a>
          <a href="#"><FaTwitter className="text-white text-2xl hover:text-gray-300 mx-2" /></a>
          <a href="#"><FaInstagram className="text-white text-2xl hover:text-gray-300 mx-2" /></a>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;


