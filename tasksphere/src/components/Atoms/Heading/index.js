import React from 'react';
import styled from 'styled-components';
import { space, color, typography, variant } from 'styled-system';

const HeadingStyle = styled.h1`
  ${space}
  ${color}
  ${typography}
  
  ${variant({
    prop: 'variant',
    variants: {
      h1: { fontSize: '32px', fontWeight: 'bold' },
      h2: { fontSize: '24px', fontWeight: 'bold' },
      h3: { fontSize: '18px', fontWeight: 'bold' },
    },
  })}
`;

const Heading = ({ variant = 'h1', children, ...props }) => {
  return (
    <HeadingStyle as={variant} variant={variant} {...props}>
      {children}
    </HeadingStyle>
  );
};

export default Heading;
