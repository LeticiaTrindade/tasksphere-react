import React from 'react';
import styled from 'styled-components';
import { fontSize, space, color, typography, variant } from 'styled-system';

const TextStyle = styled.p`
  ${space}
  ${fontSize}
  ${color}
  ${typography}
  ${variant({
    prop: 'variant',
    variants: {
      titleLogin: {
        fontSize: 4,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '0.5rem',
      },
      error: {
        color: 'red',
        fontSize: 1, 
        fontWeight: 'normal',
        mt: 2,
        mb: 2,
      },
      success: {
        color: 'green',
        fontSize: 1,
        fontWeight: 'normal',
        mt: 2,
        mb: 2,
      },
      subtitle: {
        fontSize: 3,
        fontWeight: 'medium', 
        color: 'gray.700',
        mb: 0,
        textAlign: 'center',
        marginBottom: '1rem',
        
      },
      subtitlelogin: {
        fontSize: 2,
        fontWeight: 'normal',
        color: '#374151',
        textAlign: 'center',
        marginBottom: '1rem',
        marginTop: '0'
      },
      caption: {
        fontSize: 0,
        color: 'gray.500', 
        lineHeight: 1.2,
      },
    },
  })}
  cursor: ${props => (props.cursor ? 'pointer' : 'auto')};
`;

TextStyle.defaultProps = {
  fontSize: 2,
  lineHeight: '1.5',
  color: '#374151',
  cursor: false,
};

const Text = ({ variant, children, cursor, ...props }) => {
  return (
    <TextStyle variant={variant} cursor={cursor} {...props}>
      {children}
    </TextStyle>
  );
};

export default Text;