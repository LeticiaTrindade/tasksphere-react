import { useContext } from 'react';
import AuthContext from '../../../auth/AuthContext';
import * as Atoms from '../../Atoms';

export default function Header() {
    const { user, handleLogout } = useContext(AuthContext);

    return (
        <Atoms.Box 
            style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                background: 'white', 
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
                borderRadius: '12px', 
                padding: '10px 30px',
                marginBottom: '30px'
            }}
        >
            <Atoms.Heading as="h1" fontSize="1.5rem" style={{ color: '#4B5563', fontWeight: 'bold' }}>
                Olá, {user?.email}!
            </Atoms.Heading>

            <Atoms.Box>
                <Atoms.Button 
                    onClick={handleLogout} 
                    aria-label="Sair da conta"
                    style={{
                        padding: '10px 20px'
                    }}
                >
                    Sair
                </Atoms.Button>
            </Atoms.Box>
        </Atoms.Box>
    );
}
