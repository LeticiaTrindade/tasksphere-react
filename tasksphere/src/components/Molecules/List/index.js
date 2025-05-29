import * as Atoms from '../../Atoms';

function List({ title, children }) {
  return (
    <Atoms.Card style={{ padding: '0', margin: 'none'}}>
      {title && <Atoms.Text variant='titleLogin'>{title}</Atoms.Text>}
      <Atoms.Box style={{ display: 'flex', flexDirection: 'column'}}>
        {children}
      </Atoms.Box >
    </Atoms.Card>
  );
}

export default List;
