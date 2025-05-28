
function Select({ value, onChange, children, ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
      }}
      {...props}
    >
      {children}
    </select>
  );
}

export default Select;