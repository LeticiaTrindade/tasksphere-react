import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Atoms from '../../Atoms';
import * as Molecules from '../../Molecules';
import AuthContext from '../../../auth/AuthContext';

export default function LoginSection() {
    const { erro } = useContext(AuthContext);

    return (
        <>
            <Atoms.Text variant='titleLogin'>Bem-vindo(a) de volta!</Atoms.Text>
            <Atoms.Text variant='subtitlelogin'>Entre para continuar</Atoms.Text>

            {erro && (
                <Atoms.Text variant='error'>
                    {erro}
                </Atoms.Text>
            )}

            <Molecules.LoginForm />

            <Atoms.Text variant='subtitlelogin'>
                Não tem uma conta?{' '}
                <Link
                    style={{
                        textDecorationLine: 'none',
                        color: '#9333EA',
                    }}
                    to="/register"
                >
                    Cadastre-se
                </Link>
            </Atoms.Text>
        </>
    );
}
