import { variant } from 'styled-system';
import styled from 'styled-components';

const FormStyle = styled.form`
  ${variant({
    prop: 'variant',
    variants: {
      tasks: {
        marginTop: '2.5rem',
      },
    },
  })}
  
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
`;

const Form = ({ children, onSubmit, ...props }) => {
  return (
    <FormStyle onSubmit={onSubmit} {...props}>
      {children}
    </FormStyle>
  );
};

export default Form;
