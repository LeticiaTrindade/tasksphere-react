import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [erro, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const userData = { uid: res.user.uid, email: res.user.email };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      setError(''); // Limpa erro ao logar com sucesso
      navigate('dashboard');
    } catch (err) {
      console.error(err);
      
      // Mensagens mais específicas de erro
      if (err.code === 'auth/invalid-email') {
        setError('Formato de e-mail inválido.');
      } else if (err.code === 'auth/user-not-found') {
        setError('Usuário não encontrado.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Senha incorreta.');
      } else {
        setError('Erro ao fazer login. Tente novamente.');
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('user');
    setUser(null);
    setError('');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, erro, setError, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
