import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm'; // Ruta actualizada a la carpeta 'components'

function RegisterPage() {
  const [loading, setLoading] = useState(false);  // Estado para manejar la carga
  const [message, setMessage] = useState('');  // Estado para el mensaje de éxito o error
  const navigate = useNavigate();

  const handleRegisterSuccess = (token) => {
    setLoading(true); // Inicia el estado de carga
    setMessage('Registro completo');  // Establece el mensaje de éxito

    // Simulamos la redirección después de 3 segundos
    setTimeout(() => {
      // Guarda el token en el localStorage
      localStorage.setItem('token', token);

      // Redirige a la página de inicio de sesión
      navigate('/', { state: { message: 'Registro completado' } }); // Usamos `state` para pasar el mensaje
    }, 3000);  // 3 segundos de espera
  };

  return (
    <div className="register-page">
      <h1>Registrarse</h1>

      {/* Si está cargando, mostramos un símbolo de carga */}
      {loading && <div className="loading">Cargando...</div>}
      
      {/* Mostrar el mensaje de éxito si se ha completado el registro */}
      {message && <div className="success-message">{message}</div>}

      <AuthForm onLoginSuccess={handleRegisterSuccess} isRegister />
    </div>
  );
}

export default RegisterPage;
