import * as Atoms from '../../Atoms';

export default function AuthLayout({ children }) {
  return (
    <Atoms.Box style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Atoms.Box style={{ padding: '200px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        {children}
      </Atoms.Box>
    </Atoms.Box>
  );
}
