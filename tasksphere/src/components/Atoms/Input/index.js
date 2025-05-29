import styled from 'styled-components';
import { space } from 'styled-system';

const InputStyle = styled.input`
  ${space}
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 100%;
  max-width: 100%;
  transition: all 0.2s ease-in-out; 
  min-height: 40px;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: ##9333EA;
    box-shadow: 0 0 0 3px rgba(114, 29, 194, 0.25); 
  }
`;

InputStyle.defaultProps = {
  padding: '10px',
  mb: '10px',
  pr: '24px',
  margin: '100px',
};

const Input = ({ type, value, onChange, placeholder, name, ...props }) => {
  return (
    <InputStyle
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      {...props}
    />
  );
};

export default Input;