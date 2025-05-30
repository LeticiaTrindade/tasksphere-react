import styled from 'styled-components';
import { flexbox, space, layout, color } from 'styled-system';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'space-around'};
  flex-wrap: wrap;
  
  ${flexbox}
  ${space}
  ${layout}
  ${color}
`;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
