import React from 'react';
import styled from 'styled-components';
import { fontSize, space, color, typography, variant, padding, textAlign } from 'styled-system';

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
      textAlign: 'center'
    }
  },
})}
  cursor: ${props => (props.cursor ? 'pointer' : 'auto')};
`;

TextStyle.defaultProps = {
  fontSize: 2,
  lineHeight: '1.5',
  color: 'text',
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
