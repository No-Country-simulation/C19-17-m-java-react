import axios, { AxiosError, AxiosResponse } from 'axios';

const backendUrl = import.meta.env.VITE_URL_BACKEND || 'http://localhost:3000/api/v1';
const apiKey = import.meta.env.VITE_API_KEY;

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birthdate: string;
  role_id: string;
  phone: string;
}

export async function registerUser(userData: UserData): Promise<void> {
  try {
    await axios.post(`${backendUrl}/api/v1/auth/register`, userData, {
     });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error('Axios error:', axiosError.response?.status, axiosError.response?.data);
      throw axiosError;
    } else {
      console.error('Unexpected error:', error);
      throw error;
    }
  }
}
interface LoginResponse {
  token: string;
}

interface ErrorResponse {
  status: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any; // Puedes ajustar el tipo según la estructura esperada de los errores de tu backend
}

export async function loginUser(email: string, password: string): Promise<string> {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      `${backendUrl}/api/v1/auth/login`,
      { email, password },
      {
        headers: {
          'apiKey': apiKey,
        }
      }
    );
    return response.data.token;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

export async function logoutUser(): Promise<void> {
  try {
    await axios.post(
      `${backendUrl}/auth/logout`,
      {},
      {
        headers: {
          'apiKey': apiKey,
        }
      }
    );
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

function handleAxiosError(error: unknown): void {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ErrorResponse>;
    console.error('Axios error:', axiosError.response?.status, axiosError.response?.data);
    throw axiosError;
  } else {
    console.error('Unexpected error:', error);
    throw error;
  }
}