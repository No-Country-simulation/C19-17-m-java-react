import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, Typography, SelectChangeEvent } from '@mui/material';

interface RoleSelectProps {
  isRole: string;
  onChange: (e: SelectChangeEvent<string>) => void;
  error: boolean;
  helperText: string;
}

const RoleSelectComponent: React.FC<RoleSelectProps> = ({
  isRole,
  onChange,
  error,
  helperText
}) => (
  <Box mb={2}>
    <FormControl fullWidth variant="outlined" size="small" error={error}>
      <InputLabel id="role-label">Role</InputLabel>
      <Select
        labelId="role-label"
        id="role"
        value={isRole}
        onChange={onChange}
        label="Role"
      >
        <MenuItem value="Freelancer">Freelancer</MenuItem>
        <MenuItem value="Client">Client</MenuItem>
      </Select>
      {error && (
        <Typography variant="body2" color="error">
          {helperText}
        </Typography>
      )}
    </FormControl>
  </Box>
);

export default RoleSelectComponent;
