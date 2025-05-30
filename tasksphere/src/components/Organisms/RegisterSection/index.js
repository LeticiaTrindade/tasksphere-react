import * as Molecules from '../../Molecules';
import * as Atoms from '../../Atoms';
import { Link } from 'react-router-dom';
import AuthContext from '../../../auth/AuthContext';
import { useContext } from 'react';

function RegisterSection() {

    const { erro } = useContext(AuthContext);

    return (
        <>
            <Atoms.Text variant="titleLogin">Registrar</Atoms.Text>

            {erro && (
                <Atoms.Text variant='error'>
                    {erro}
                </Atoms.Text>
            )}

            <Molecules.RegisterForm />

            <Atoms.Text variant="subtitlelogin">
                Já tem uma conta? {' '}
                <Link
                    style={{
                        textDecoration: 'none',
                        color: '#9333EA',
                    }}
                    to='/'
                >
                    Faça Login
                </Link>
            </Atoms.Text>

        </>
    );
}

export default RegisterSection;