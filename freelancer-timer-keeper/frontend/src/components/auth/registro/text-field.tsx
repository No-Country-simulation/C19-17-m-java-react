import React from 'react';
import { TextField } from '@mui/material';

interface TextFieldComponentProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string;
  InputLabelProps?: object;
  InputProps?: object;
}

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  helperText,
  InputLabelProps,
  InputProps,
}) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth
      variant="outlined"
      margin="normal"
      InputLabelProps={InputLabelProps}
      InputProps={InputProps}
    />
  );
};

export default TextFieldComponent;
