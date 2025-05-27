import styled from 'styled-components';
import { space } from 'styled-system';

const InputStyle = styled.input`
  ${space}
  padding: 10px;
  min-width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
  padding-right: 24px;
  box-sizing: border-box;
`;

InputStyle.defaultProps = {
  padding: '10px',
  minWidth: '100%',
  maxWidth: '100%',
  marginBottom: '10px',
  paddingRight: '24px',
  boxSizing: 'border-box'
};

const Input = ({ type, value, onChange, placeholder, name }) => {
  return (
    <InputStyle
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
}  

export default Input;