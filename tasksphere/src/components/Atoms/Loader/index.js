import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #2e86de;
  border-radius: 50%;
  width: ${(props) => props.size || '40px'};
  height: ${(props) => props.size || '40px'};
  animation: ${spin} 1s linear infinite;
  margin: ${(props) => props.margin || 'auto'};
`;

export default Loader;
