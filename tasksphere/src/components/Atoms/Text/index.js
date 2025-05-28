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
        mb: 3, 
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
        fontSize: 3, // Um tamanho para subtítulos
        fontWeight: 'medium', // Ou 'semibold' se definido no seu tema
        color: 'gray.700', // Exemplo: uma cor de cinza mais escura do tema
        mb: 2,
      },
      caption: {
        fontSize: 0, // Um tamanho bem pequeno para legendas/notas
        color: 'gray.500', // Um cinza mais claro
        lineHeight: 1.2,
      },
    },
  })}
  cursor: ${props => (props.cursor ? 'pointer' : 'auto')};
`;

TextStyle.defaultProps = {
  fontSize: 2,
  lineHeight: '1.5',
  color: 'text', // Assumindo 'text' é uma cor definida no seu tema
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