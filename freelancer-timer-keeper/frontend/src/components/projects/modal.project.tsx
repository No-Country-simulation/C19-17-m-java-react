import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid } from '@mui/material';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [projectName, setProjectName] = React.useState<string>('');
  const [clientEmail, setClientEmail] = React.useState<string>('');
  const [clientOrgName, setClientOrgName] = React.useState<string>('');
  const [deliveryDate, setDeliveryDate] = React.useState<string>('');

  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    // Handle saving the data here
    console.log('Project Name:', projectName);
    console.log('Client Email:', clientEmail);
    console.log('Client Org Name:', clientOrgName);
    console.log('Delivery Date:', deliveryDate);

    // Close the modal after saving
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add New Project</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="projectName"
              label="Project Name"
              type="text"
              fullWidth
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="clientEmail"
              label="Client Email"
              type="email"
              fullWidth
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="clientOrgName"
              label="Client Organization Name"
              type="text"
              fullWidth
              value={clientOrgName}
              onChange={(e) => setClientOrgName(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="deliveryDate"
              label="Delivery Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary" variant="contained">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModal;
