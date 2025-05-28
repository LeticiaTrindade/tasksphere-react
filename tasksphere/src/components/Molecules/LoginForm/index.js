import { useContext, useState } from 'react';
import AuthContext from '../../../auth/AuthContext';
import * as Atoms from '../../Atoms';
import Form from '../../Molecules/Form';

export default function LoginForm() {
  const {error, handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <Form onSubmit={onSubmit}>
      {error && <Atoms.Text variant="error">{error}</Atoms.Text>}
      <Atoms.Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <Atoms.Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
      <Atoms.Button type="submit" aria-label="Entrar na conta" onSubmit={onSubmit}>Entrar</Atoms.Button>
    </Form>
  );
}
