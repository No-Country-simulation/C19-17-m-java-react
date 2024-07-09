import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt } from 'react-icons/fa';

const Menu: React.FC = () => {
  return (
    <nav className="bg-[#F26A3F] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <p className="text-white font-semibold text-lg">Freelance Time Keeper</p>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/" className="flex items-center space-x-1 hover:text-gray-300 transition-colors duration-300">
              <FaHome />
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center space-x-1 hover:text-gray-300 transition-colors duration-300">
              <FaSignInAlt />
              <span>Login</span>
            </Link>
          </li>
          <li><Link to="/Dashboard" className="flex items-center space-x-1 hover:text-gray-300"><span>Dashboard</span></Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Menu;


