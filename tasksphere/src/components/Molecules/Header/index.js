import { useContext} from 'react';
import AuthContext from '../../../auth/AuthContext';
import * as Atoms from '../../Atoms';


export default function Header() {
    const { user, handleLogout } = useContext(AuthContext);

    return (
            <Atoms.Button onClick={handleLogout} aria-label="Sair da conta">Sair</Atoms.Button>
    );
}
