import styled from 'styled-components';
import { space, layout, border, color, flexbox, margin, variant, borderRadius } from 'styled-system';


const Box = styled.div`
  ${space}
  ${layout}
  ${border}
  ${color}
  ${flexbox}
  ${variant({
  prop: 'variant',
  variants: {
    card: {
      border: '1px solid rgb(190, 190, 190)',
      borderRadius: '8px',
      margin: '10px 0px',
      padding: '1rem',
      boxShadow: '0 1px 8px rgba(0, 0, 0, 0.1)',
      hover:{
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}
    },
  },
})}
 marginBottom: 1rem;
`;

Box.defaultProps = {
  p: 3,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  bg: 'white',
  padding: "1rem",
  boxShadow: "sm",
  borderRadius: "md",
  border: "1px solid #eaeaea",
};
export default Box;
