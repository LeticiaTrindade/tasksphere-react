import * as Atoms from '../../Atoms';

function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px',
        borderRadius: '8px',
        background: '#fafafa',
      }}
    >
      {children}
    </form>
  );
}

export default Form;
