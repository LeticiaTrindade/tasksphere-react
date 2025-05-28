import * as Atoms from '../../Atoms';

function List({ title, children }) {
  return (
    <Atoms.Card>
      {title && <Atoms.Text variant='titleLogin'>{title}</Atoms.Text>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {children}
      </div>
    </Atoms.Card>
  );
}

export default List;
