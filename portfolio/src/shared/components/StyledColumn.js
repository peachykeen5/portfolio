import styled from "styled-components";
import {
  space,
  color,
  order,
  justifyContent,
  alignItems,
  textAlign,
  position,
  display,
  justifySelf,
  flexDirection,
} from "styled-system";

export const Column = styled.aside`
  grid-column: span 12;
  ${textAlign};
  ${order};
  ${position};
  ${display};
  ${space};
  ${alignItems};
  ${justifyContent};
  ${justifySelf};
  ${flexDirection};
  ${color};
  ${(props) =>
    props.vc
      ? `
        display: flex;
        flex-direction: column;
        justify-content: center;
        `
      : null}
`;
