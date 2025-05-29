import styled from 'styled-components';
import { space, layout, border, shadow, color, background } from 'styled-system';

const Card = styled.div`
  ${space}
  ${layout}
  ${border}
  ${shadow}
  ${color}
  background: ${props => props.background || 'white'};  
  max-width: 500px;
  min-width: 300px;
  margin: 1rem ;
  hight: auto;
  border-radius: ${props => props.borderRadius || '20px'};
  padding: ${props => props.padding || '2rem'};
  
`;

Card.defaultProps = {           
    padding: "1rem",
    boxShadow: "sm",
    borderRadius: "md",
    border: "1px solid #eaeaea",
};

export default Card;
