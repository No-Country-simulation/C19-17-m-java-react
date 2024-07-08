import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register submitted', { email, password, confirmPassword });
    // Aquí iría la lógica de registro
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <form onSubmit={handleSubmit} className="bg-white p-8 bg-gray-100 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-[#F26A3F] mb-6">Registrarse</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar Contraseña"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 bg-[#F26A3F] text-white rounded hover:bg-[#f28a5c] transition-colors duration-300">
          Registrarse
        </button>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-[#F26A3F] hover:underline">
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
