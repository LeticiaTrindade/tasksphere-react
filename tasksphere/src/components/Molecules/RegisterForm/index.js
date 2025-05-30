import { useState } from 'react';
import * as Molecules from '../../Molecules';
import * as Atoms from '../../Atoms';
import { useNavigate, Link } from 'react-router-dom';
import PasswordValidation from '../../../utils/PasswordValidation.js';
import { auth, db } from '../../../config/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            return setError('Todos os campos são obrigatórios');
        }

        const errorsPassword = PasswordValidation(password, confirmPassword);
        if (errorsPassword.length > 0) {
            return setError(errorsPassword.join('\n'));
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return setError('Email inválido');
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                name,
                email,
                createdAt: new Date()
            });

            alert('Cadastro realizado com sucesso!');
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Erro ao registrar usuário: ' + err.message);
        }
    };

    return (
        <Molecules.Form onSubmit={handleRegister}>
            {error && <Atoms.Text variant="error">{error}</Atoms.Text>}
            <Atoms.Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome completo" />
            <Atoms.Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <Atoms.Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
            <Atoms.Input type="password" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)} placeholder="Confirmar senha" />
            <Atoms.Button type="submit" aria-label="Cadastrar conta de usuário">Cadastrar</Atoms.Button>
        </Molecules.Form>
    );
}

export default RegisterForm;