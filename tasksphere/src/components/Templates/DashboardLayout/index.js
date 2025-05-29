import * as Atoms from '../../Atoms';

export default function DashboardLayout({ children }) {
  return (
    <Atoms.Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(90deg, rgba(216, 180, 254, 1) 0%, rgba(252, 165, 167, 1) 100%)' }}>
      <Atoms.Box style={{ padding: '30px', width: '100%', maxWidth: '1080' }}>
        {children}
      </Atoms.Box>
    </Atoms.Box>
  );
}
