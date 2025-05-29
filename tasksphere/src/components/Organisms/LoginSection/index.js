import { Link } from 'react-router-dom';
import * as Atoms from '../../Atoms';
import * as Molecules from '../../Molecules';

export default function LoginSection() {

    return (
        <>
            <Atoms.Text variant='titleLogin'>Bem-vindo(a) de volta!</Atoms.Text>
            <Atoms.Text variant='subtitlelogin'>Entre para continuar</Atoms.Text>
            <Molecules.LoginForm />
            <Atoms.Text  variant='subtitlelogin'>Não tem uma conta? <Link style={{textDecorationLine: 'none', color:'#9333EA', hover:{color: 'rgb(114, 29, 194'}}}to="/register">Cadastre-se</Link></Atoms.Text>
        </>
    );
}
