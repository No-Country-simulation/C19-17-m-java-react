import { FaTasks, FaUsers, FaChartBar } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white w-64 p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <FaTasks className="text-xl mr-2" />
              Tareas
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <FaUsers className="text-xl mr-2" />
              Usuarios
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <FaChartBar className="text-xl mr-2" />
              Estadísticas
            </a>
          </li>
          {/* Agregar más enlaces para otras secciones del dashboard si es necesario */}
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Resumen de Tareas</h1>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Lista de Tareas</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarea</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asignado a</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Creación</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Ejemplo de datos de tareas */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Desarrollo de Frontend</td>
                  <td className="px-6 py-4 whitespace-nowrap">En progreso</td>
                  <td className="px-6 py-4 whitespace-nowrap">Juan Pérez</td>
                  <td className="px-6 py-4 whitespace-nowrap">2024-07-10</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Revisión de Diseño</td>
                  <td className="px-6 py-4 whitespace-nowrap">Completada</td>
                  <td className="px-6 py-4 whitespace-nowrap">María Gómez</td>
                  <td className="px-6 py-4 whitespace-nowrap">2024-07-09</td>
                </tr>
                {/* Más filas según sea necesario */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
