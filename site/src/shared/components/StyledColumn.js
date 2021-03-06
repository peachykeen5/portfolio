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
import * as ds from "../../uiLibrary/theme";

export const Column = styled.aside`
  grid-column: span 12;
  @media screen and (min-width: ${ds.mq.small}) {
    grid-column: span ${(props) => props.span};
    order: ${(props) => props.order};
  }
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
