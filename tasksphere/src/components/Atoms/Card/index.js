import styled from 'styled-components';
import { space, layout, border, shadow, color } from 'styled-system';

const Card = styled.div`
  ${space}
  ${layout}
  ${border}
  ${shadow}
  ${color}
  max-width: 500px;
  min-width: 300px; 
`;

Card.defaultProps = {
    p: 3,                
    bg: 'white',
    padding: "1rem",
    boxShadow: "sm",
    borderRadius: "md",
    border: "1px solid #eaeaea",
};

export default Card;
