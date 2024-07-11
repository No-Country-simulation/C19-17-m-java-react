import React from 'react';
import { Box, Typography } from '@mui/material';
import RegisterForm from './registro/register-form';

const Register: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Box textAlign="center" mb={3}>
        <Typography variant="h5" component="h2" mb={1}>
          Empieza con Time Keeper
        </Typography>
        <Typography variant="body1">
          Crea una cuenta gratuita para comenzar a registrar el tiempo y potenciar tu productividad.
        </Typography>
      </Box>
      <RegisterForm />
    </Box>
  );
};

export default Register;
