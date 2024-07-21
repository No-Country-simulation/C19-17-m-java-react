import React, { useState, FormEvent } from 'react';
import { Box, Button, IconButton, Divider, Typography } from '@mui/material';
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import TextFieldComponent from './text-field';
import PasswordFieldComponent from './password-field';
import RoleSelectComponent from './role-selection';
import { validateName, validateEmail, validatePassword, validatePhone, validateBirthDate } from '../validations';
import { registerUser } from '../../../services/api.services';
import { useNavigate } from 'react-router-dom';

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

const RegisterForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [role, setRole] = useState<number>(0);
  const [isRole, setIsRole] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 0,
    isRole: '',
    birthDate: '',
    phone: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setValid(true);
    const newErrors: Errors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 0,
      isRole: '',
      birthDate: '',
      phone: '',
    };

    if (!validateName(firstName)) {
      newErrors.firstName = 'Please enter a valid first name.';
      setValid(false);
    }

    if (!validateName(lastName)) {
      newErrors.lastName = 'Please enter a valid last name.';
      setValid(false);
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
      setValid(false);
    }

    if (!validatePassword(password)) {
      newErrors.password =
        'Password must be 8-30 characters long and include a number, a symbol, an uppercase and a lowercase letter.';
      setValid(false);
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      setValid(false);
    }

    if (!role) {
      newErrors.isRole = 'Please select your role.';
      setValid(false);
    }

    if (!birthDate || !validateBirthDate(birthDate)) {
      newErrors.birthDate = 'Please enter a valid birth date.';
      setValid(false);
    }

    if (!phone || !validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
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
        console.error('Registration failed:', error);
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
    <Box p={4} bgcolor="white" borderRadius={2} boxShadow={3} width={300}>
      <Typography variant="h5" component="h2" textAlign="center" mb={3}>
        Registrate
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextFieldComponent
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
        <TextFieldComponent
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
        <TextFieldComponent
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <PasswordFieldComponent
          label="Password"
          showPassword={showPassword}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onClick={handleClickShowPassword}
          error={!!errors.password}
          helperText={errors.password}
        />
        <PasswordFieldComponent
          label="Confirm Password"
          showPassword={showConfirmPassword}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onClick={handleClickShowConfirmPassword}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
        <RoleSelectComponent
          isRole={isRole}
          onChange={(e) => {
            setIsRole(e.target.value as string);
            setRole(e.target.value === 'Freelancer' ? 1 : 2);
          }}
          error={!!errors.isRole}
          helperText={errors.isRole}
        />
        <TextFieldComponent
          label="Birth Date"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          error={!!errors.birthDate}
          helperText={errors.birthDate}
          InputLabelProps={{ shrink: true }}
        />
        <TextFieldComponent
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ backgroundColor: '#F26A3F', '&:hover': { backgroundColor: '#D55C2E' } }}
        >
          Registrar
        </Button>
      </form>
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="textSecondary">
          O continuar con
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
      <Typography variant="body2" color="textSecondary" textAlign="center" mt={3}>
        ¿Ya tienes una cuenta?{' '}
        <a href="/login" style={{ color: '#1976d2' }}>
          Inicia sesión
        </a>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
