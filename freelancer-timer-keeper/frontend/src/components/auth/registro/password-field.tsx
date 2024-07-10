import React from 'react';
import { TextField, Box, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface PasswordFieldProps {
  label: string;
  showPassword: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  error: boolean;
  helperText: string;
}

const PasswordFieldComponent: React.FC<PasswordFieldProps> = ({
  label,
  showPassword,
  value,
  onChange,
  onClick,
  error,
  helperText
}) => (
  <Box mb={2}>
    <TextField
      fullWidth
      label={label}
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      size="small"
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  </Box>
);

export default PasswordFieldComponent;
