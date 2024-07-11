
import {  List, ListItem, ListItemIcon, ListItemText, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HistoryIcon from '@mui/icons-material/History';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white w-64 p-4 bg-fixed top-0 right-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccessTimeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Time Tracker" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HistoryIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="History" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BarChartIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Report" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem component={Link} to="/projects">
          <ListItemIcon>
            <AssignmentIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Projects" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Teams" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BusinessIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Clients" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
      </List>
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
