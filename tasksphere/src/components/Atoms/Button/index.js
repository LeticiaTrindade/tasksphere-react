import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const ButtonStyle = styled.button`
  ${space}
  padding: 0;
  background-color: #2e86de;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 50px;
  marginBottom: 1rem;
 `;

ButtonStyle.defaultProps = {
  padding: '10px 20px',
}

const Button = ({ children, onClick, type = 'button', ...props }) => {
  return (
    <ButtonStyle onClick={onClick} type={type} {...props}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
