import * as Atoms from '../../Atoms';

export default function DashboardLayout({ children }) {
  return (
    <Atoms.Box style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
      <Atoms.Box style={{ padding: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '1080px' }}>
        {children}
      </Atoms.Box>
    </Atoms.Box>
  );
}
