import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const ButtonStyle = styled.button`
  ${space}
  padding: 0;
  background-color: #9333EA;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  &:hover {
  background-color:rgb(114, 29, 194);

  }
}
&:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
 `;

ButtonStyle.defaultProps = {
  padding: '10px 20px'
}

const Button = ({ children, onClick, type = 'button', ...props }) => {
  return (
    <ButtonStyle onClick={onClick} type={type} {...props}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
