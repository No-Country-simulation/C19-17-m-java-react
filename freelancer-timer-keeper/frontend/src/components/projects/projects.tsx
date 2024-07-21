import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import ProjectModal from './modal.project';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
interface Project {
  id: number;
  title: string;
  team: string;
  client: string;
  deliveryDate: string;
  status: string;
}

const projectsData: Project[] = [
  { id: 1, title: 'Create e-commerce MercaFresh', team: 'Yourself', client: 'Carlos', deliveryDate: '22-07-2024', status: 'Pending' },
  { id: 2, title: 'Landing Tesla', team: 'Omar, Damian, Lucas, Yourself', client: 'Tesla', deliveryDate: '03-08-2024', status: 'Pending' },
  { id: 3, title: 'Inventory System', team: 'Omar, David, Oscar, Francisco', client: 'Rick', deliveryDate: '10-06-2024', status: 'Pending' },
  { id: 4, title: 'Create telegram bot', team: 'Yourself', client: 'Maria', deliveryDate: '11-07-2024', status: 'Complete' },
  // Add more projects if needed
];

const Projects: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false); // State to control the visibility of the modal

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const navigate = useNavigate();
  return (
    <div style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Typography variant="h5" component="h2">
          PROJECTS
        </Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenModal}>
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
            {projectsData.map((project) => (
              <TableRow key={project.id} component={Link} to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
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

      {/* Render the modal */}
      <ProjectModal open={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Projects;
