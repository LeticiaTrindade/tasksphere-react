import React from 'react';
import styled from 'styled-components';
import { space, layout, flexbox, color } from 'styled-system';
import * as Atoms from '../../Atoms';

const AuthLayoutContainer = styled(Atoms.Box)`
  background: linear-gradient(90deg, rgba(216, 180, 254, 1) 0%, rgba(252, 165, 167, 1) 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${space}
  ${layout}
  ${flexbox}
  ${color}
`;

export default function AuthLayout({ children }) {
  return (
    <AuthLayoutContainer>
      <Atoms.Box
      
        boxShadow="md"
        borderRadius="20px"
        p={2}
        width="100%"
        maxWidth="400px"
        bg="white"
      >
        {children}
      </Atoms.Box>
    </AuthLayoutContainer>
  );
}