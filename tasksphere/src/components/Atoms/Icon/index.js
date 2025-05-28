import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

const Icon = styled.div`
  ${space}
  ${layout}
  ${color}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.cursor ? 'pointer' : 'default')};
  font-size: ${(props) => props.size || '24px'};
`;

export default Icon;
