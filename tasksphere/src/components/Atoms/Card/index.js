import styled from 'styled-components';
import { space, layout, border, shadow, color, background } from 'styled-system';

const Card = styled.div`
  ${space}
  ${layout}
  ${border}
  ${shadow}
  ${color}
  background: ${props => props.background || 'white'};  
  margin-top: 2.5rem;
  border-radius: ${props => props.borderRadius || '20px'};
  padding: ${props => props.padding || '2rem'};
`;

Card.defaultProps = {

};

export default Card;
