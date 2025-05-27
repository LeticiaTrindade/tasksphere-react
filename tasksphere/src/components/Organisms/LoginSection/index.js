import { Link } from 'react-router-dom';
import * as Atoms from '../../Atoms';
import * as Molecules from '../../Molecules';

export default function LoginSection() {

    return (
        <>
            <Atoms.Text variant='titleLogin'>Bem-vindo devolta!</Atoms.Text>
            <Atoms.Text>Entre para continuar</Atoms.Text>
            <Molecules.LoginForm />
            <Atoms.Text>Não tem uma conta? <Link to="/register">Cadastre-se</Link></Atoms.Text>
        </>
    );
}
