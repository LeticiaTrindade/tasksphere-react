import styled from 'styled-components';
import { space, layout, border } from 'styled-system';

const Image = styled.img`
  ${space}
  ${layout}
  ${border}
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: ${(props) => props.borderRadius || '8px'};
`;

Image.defaultProps = {
  borderRadius: '8px',
};

export default Image;
