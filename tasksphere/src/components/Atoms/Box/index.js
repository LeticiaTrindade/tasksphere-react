import styled from 'styled-components';
import { space, layout, border, color, flexbox } from 'styled-system';

const Box = styled.div`
  ${space}
  ${layout}
  ${border}
  ${color}
  ${flexbox}
  marginBottom: 1rem;
`;

Box.defaultProps = {
    p: 3,                   // padding: theme.space[3]
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    bg: 'white',
    padding: "1rem",
    boxShadow: "sm",
    borderRadius: "md",
    border: "1px solid #eaeaea",
    };
export default Box;
