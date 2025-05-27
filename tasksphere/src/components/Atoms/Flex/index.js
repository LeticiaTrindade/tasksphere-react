import styled from 'styled-components';
import { flexbox, space, layout, color } from 'styled-system';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  ${flexbox}
  ${space}
  ${layout}
  ${color}
`;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
