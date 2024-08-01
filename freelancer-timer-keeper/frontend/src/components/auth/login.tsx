import React, { useState } from 'react';
import { Box, Button, Divider, IconButton, TextField, Typography, InputAdornment } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { loginUser } from "../../services/api.services";
import { useAuth } from '../../context/auth.context';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      console.log('Login successful', response);
      login(); // Actualiza el estado de autenticación
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      px={2}
    >
      <Box p={4} bgcolor="white" borderRadius={2} boxShadow={3} width="100%" maxWidth={400}>
        <Typography variant="h5" component="h2" textAlign="center" mb={3} color="#F26A3F">
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Correo Electrónico"
            type="email"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2, backgroundColor: "#F26A3F", '&:hover': { backgroundColor: "#f28a5c" } }}
          >
            Iniciar Sesión
          </Button>
        </form>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" align="center">
          O inicia sesión con
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          <IconButton color="inherit" sx={{ color: '#DB4437' }}>
            <FaGoogle />
          </IconButton>
          <IconButton color="inherit" sx={{ color: '#0A66C2' }}>
            <FaLinkedin />
          </IconButton>
          <IconButton color="inherit" sx={{ color: '#171515' }}>
            <FaGithub />
          </IconButton>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" align="center">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" style={{ color: "#F26A3F", textDecoration: "none" }}>
              Regístrate
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
