import { useContext, useState } from 'react';
import AuthContext from '../../../auth/AuthContext';
import * as Atoms from '../../Atoms';


export default function LoginForm() {
  const { erro, handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <form onSubmit={onSubmit}>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <Atoms.Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <Atoms.Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
      <Atoms.Button type="submit">Entrar</Atoms.Button>
    </form>
  );
}
