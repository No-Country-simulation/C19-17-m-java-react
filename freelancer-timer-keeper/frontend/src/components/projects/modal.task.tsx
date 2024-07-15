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
      <Box sx={{ width: 400, padding: 4, bgcolor: 'white', margin: 'auto', mt: 10, borderRadius: 2 }}>
        <Typography variant="h6" component="h2" mb={2}>
          Add Task
        </Typography>
        <TextField
          label="Task"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Assigned To"
          fullWidth
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          margin="normal"
        />
        <TextField
          select
          label="Status"
          fullWidth
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          margin="normal"
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Complete">Complete</MenuItem>
        </TextField>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={onClose} sx={{ mr: 2 }}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;
