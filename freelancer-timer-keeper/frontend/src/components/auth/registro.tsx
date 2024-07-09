import React, { useState, FormEvent } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePhone,
  validateBirthDate,
} from "./validations";
import { registerUser } from "../../services/api.services";

interface Errors {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: number;
  isRole: string;
  birthDate: string;
  phone: string;
}

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [role, setRole] = useState<number>(0);
  const [isRole, setIsRole] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: 0,
    isRole: "",
    birthDate: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setValid(true);
    const newErrors: Errors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: 0,
      isRole: "",
      birthDate: "",
      phone: "",
    };

    if (!validateName(firstName)) {
      newErrors.firstName = "Please enter a valid first name.";
      setValid(false);
    }

    if (!validateName(lastName)) {
      newErrors.lastName = "Please enter a valid last name.";
      setValid(false);
    }

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
      setValid(false);
    }

    if (!validatePassword(password)) {
      newErrors.password =
        "Password must be 8-30 characters long and include a number, a symbol, an uppercase and a lowercase letter.";
      setValid(false);
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      setValid(false);
    }

    if (!role) {
      newErrors.isRole = "Please select your role.";
      setValid(false);
    }

    if (!birthDate || !validateBirthDate(birthDate)) {
      newErrors.birthDate = "Please enter a valid birth date.";
      setValid(false);
    }

    if (!phone || !validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      setValid(false);
    }

    setErrors(newErrors);

    if (valid) {
      try {
        await registerUser({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          birthdate: birthDate,
          role_id: role,
          phone,
        });
        navigate('/login');
      } catch (error) {
        console.error("Registration failed:", error);
        // Manejar el error de registro (por ejemplo, mostrar mensaje de error al usuario)
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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

      <Box p={4} bgcolor="white" borderRadius={2} boxShadow={3} width={300}>
        <Typography variant="h5" component="h2" textAlign="center" mb={3}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              size="small"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              size="small"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
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
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box mb={2}>
            <FormControl
              fullWidth
              variant="outlined"
              size="small"
              error={!!errors.role}
            >
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                value={isRole}
                onChange={(e) => {
                  setIsRole(e.target.value as string);
                  setRole(e.target.value === "Freelancer" ? 1 : 2);
                }}
                label="Role"
              >
                <MenuItem value="Freelancer">Freelancer</MenuItem>
                <MenuItem value="Client">Client</MenuItem>
              </Select>
              {errors.isRole && (
                <Typography variant="body2" color="error">
                  {errors.isRole}
                </Typography>
              )}
            </FormControl>
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Birth Date"
              type="date"
              variant="outlined"
              size="small"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              error={!!errors.birthDate}
              helperText={errors.birthDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              size="small"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Box>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#F26A3F', '&:hover': { backgroundColor: '#D55C2E' } }}
          >
            Sign Up
          </Button>
        </form>
        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" color="textSecondary">
            Or Continue With
          </Typography>
        </Divider>
        <Box display="flex" justifyContent="center" gap={2}>
          <IconButton aria-label="google" color="error">
            <FaGoogle />
          </IconButton>
          <IconButton aria-label="linkedin" color="primary">
            <FaLinkedin />
          </IconButton>
          <IconButton aria-label="github" color="inherit">
            <FaGithub />
          </IconButton>
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
          textAlign="center"
          mt={3}
        >
          Already have an account?{" "}
          <a href="/login" style={{ color: "#1976d2" }}>
            Login
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
