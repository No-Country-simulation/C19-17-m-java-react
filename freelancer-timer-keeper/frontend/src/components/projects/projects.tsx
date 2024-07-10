
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const projectsData = [
  { title: 'Create e-commerce MercaFresh', team: 'Yourself', client: 'Carlos', deliveryDate: '22-05-2024', status: 'Pending' },
  { title: 'Landing Tesla', team: 'Omar, Damian, Lucas, Yourself', client: 'Tesla', deliveryDate: '03-08-2024', status: 'Pending' },
  { title: 'Inventory System', team: 'Omar, David, Oscar, Francisco', client: 'Rick', deliveryDate: '10-06-2024', status: 'Pending' },
  { title: 'Create telegram bot', team: 'Yourself', client: 'Maria', deliveryDate: '22-05-2024', status: 'Complete' },
  // Añade más proyectos si es necesario
];

const Projects = () => {
  return (
    <div style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant="h5" component="h2">
          PROJECTS
        </Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Add Project
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Delivery Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectsData.map((project, index) => (
              <TableRow key={index}>
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.team}</TableCell>
                <TableCell>{project.client}</TableCell>
                <TableCell>{project.deliveryDate}</TableCell>
                <TableCell>{project.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Projects;
