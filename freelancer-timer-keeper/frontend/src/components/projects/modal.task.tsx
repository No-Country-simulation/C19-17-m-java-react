import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, MenuItem } from '@mui/material';


interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: { task: string; assignedTo: string; status: string }) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ open, onClose, onSave }) => {
  const [task, setTask] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSave = () => {
    onSave({ task, assignedTo, status });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          bgcolor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="bg-orange-500 p-8 rounded-lg max-w-lg w-full">
          <Typography variant="h6" component="h2" className="text-orange-500 mb-4">
            Add Task
          </Typography>
          <TextField
            label="Task"
            fullWidth
            value={task}
            onChange={(e) => setTask(e.target.value)}
            margin="normal"
            className="mb-4 bg-orange-500 bg-opacity-20 text-white border-2 border-orange-500 rounded-lg"
            InputLabelProps={{ className: 'text-orange-500' }}
            InputProps={{ className: 'text-white' }}
          />
          <TextField
            label="Assigned To"
            fullWidth
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            margin="normal"
            className="mb-4 bg-orange-500 bg-opacity-20 text-white border-2 border-orange-500 rounded-lg"
            InputLabelProps={{ className: 'text-orange-500' }}
            InputProps={{ className: 'text-white' }}
          />
          <TextField
            select
            label="Status"
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            margin="normal"
            className="mb-4 bg-orange-500 bg-opacity-20 text-white border-2 border-orange-500 rounded-lg"
            InputLabelProps={{ className: 'text-orange-500' }}
            InputProps={{ className: 'text-white' }}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Complete">Complete</MenuItem>
          </TextField>
          <div className="flex justify-end mt-4">
            <Button onClick={onClose} className="text-orange-500 mr-2">Cancel</Button>
            <Button variant="contained" onClick={handleSave} className="bg-orange-500 hover:bg-orange-600 text-white">Save</Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;
