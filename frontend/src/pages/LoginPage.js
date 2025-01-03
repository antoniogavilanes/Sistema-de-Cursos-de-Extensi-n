import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm'; // Asegúrate de importar el componente AuthForm

function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginSuccess = (token) => {
    // Guarda el token en el localStorage
    localStorage.setItem('token', token);

    // Redirige al usuario a la página de los cursos
    navigate('/courses');
  };

  return (
    <div className="login-page">
      <h1>Iniciar sesión</h1>
      <AuthForm onLoginSuccess={handleLoginSuccess} errorMessage={error} />
    </div>
  );
}

export default LoginPage;
