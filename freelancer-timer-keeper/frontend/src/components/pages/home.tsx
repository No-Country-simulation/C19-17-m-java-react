import React from 'react';
import { FaTasks, FaBell, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 p-4">
      <div className="text-center max-w-4xl bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold text-[#F26A3F] mb-4">Freelance Time Keeper</h1>
        <p className="text-lg mb-6">¡Potencia tu éxito freelance y de desarrollo con nuestras herramientas!</p>
        
        <img src="https://plaky.com/assets/images/redesign/homepage/hero-asset.png" alt="Freelance Time Keeper" className="w-full mb-6" />
        
        <div className="bg-[#F26A3F] text-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-2">Presentación del Proyecto</h2>
          <p className="mb-4">FreelanceTimeKeeper es tu aliado para gestionar el tiempo en proyectos. Con seguimiento, registra tareas y optimiza la productividad. Factura el tiempo exacto, evalúa el rendimiento y mejora tu gestión del tiempo.</p>
        </div>
        
        <div className="flex flex-wrap justify-around mb-8">
          <div className="flex flex-col items-center w-1/3 p-4">
            <div className="bg-[#F26A3F] text-white rounded-lg shadow-md p-4 mb-4">
              <FaTasks className="text-5xl mb-2" />
              <h3 className="text-xl font-semibold">User Stories</h3>
              <ul className="list-disc list-inside text-left">
                <li>Organizar tareas por proyecto.</li>
                <li>Recibir notificaciones de recordatorio.</li>
                <li>Generar informes personalizados.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-4">
            <div className="bg-[#F26A3F] text-white rounded-lg shadow-md p-4 mb-4">
              <FaBell className="text-5xl mb-2" />
              <h3 className="text-xl font-semibold">Casos de Uso</h3>
              <ul className="list-disc list-inside text-left">
                <li>Agregar Nueva Tarea.</li>
                <li>Recibir Notificaciones.</li>
                <li>Personalizar el Panel.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3 p-4">
            <div className="bg-[#F26A3F] text-white rounded-lg shadow-md p-4 mb-4">
              <FaChartLine className="text-5xl mb-2" />
              <h3 className="text-xl font-semibold">Features Esenciales</h3>
              <ul className="list-disc list-inside text-left">
                <li>Sincronización de Datos.</li>
                <li>Interfaz Intuitiva.</li>
                <li>Integración con Herramientas.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Link to="/register" className="px-6 py-2 bg-[#F26A3F] text-white rounded hover:bg-[#f28a5c] transition-colors duration-300">
            Regístrate
          </Link>
          <Link to="/login" className="px-6 py-2 bg-[#F26A3F] text-white rounded hover:bg-[#f28a5c] transition-colors duration-300">
            Inicia Sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
