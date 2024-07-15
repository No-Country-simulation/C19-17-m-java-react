import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddTaskModal from './modal.task';

const initialTasksData = [
  { projectId: 1, task: 'Create Items in DB', assignedTo: 'Yourself', status: 'Pending' },
  { projectId: 1, task: 'Create Component Car', assignedTo: 'Yourself', status: 'Pending' },
  { projectId: 1, task: 'Integrate PayPal', assignedTo: 'Yourself', status: 'Pending' },
  { projectId: 1, task: 'Create Home', assignedTo: 'Yourself', status: 'Complete' },
  // Add more tasks as needed
];

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [tasks, setTasks] = useState(initialTasksData.filter(task => task.projectId === parseInt(projectId)));
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);

  const handleAddTask = (task: { task: string; assignedTo: string; status: string }) => {
    setTasks([...tasks, { projectId: parseInt(projectId), ...task }]);
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant="h5" component="h2">
          Project Details
        </Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => setOpenAddTaskModal(true)}>
          Add Task
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Assigned to</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task.task}</TableCell>
                <TableCell>{task.assignedTo}</TableCell>
                <TableCell>
                  <Button variant="contained" color={task.status === 'Pending' ? 'warning' : 'success'}>
                    {task.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Render the AddTaskModal */}
      <AddTaskModal
        open={openAddTaskModal}
        onClose={() => setOpenAddTaskModal(false)}
        onSave={handleAddTask}
      />
    </div>
  );
};

export default ProjectDetails;
