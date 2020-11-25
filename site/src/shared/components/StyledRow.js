import styled from "styled-components";
import {
  space,
  justifyContent,
  display,
  maxWidth,
  width,
  alignItems,
  flexDirection,
  color,
} from "styled-system";
import * as ds from "../../uiLibrary";

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 16px;
`;

export const FixedWidthRow = styled(Row)`
  padding: ${ds.spacing.s4};
  ${space};
  ${display};
  ${alignItems};
  ${flexDirection};
  ${justifyContent};
  ${color};
  ${maxWidth};
  ${width};
  &: hover
    ${(props) =>
      props.hover
        ? `{
      transition: transform 0.333s;
      transform: scale(1.04);
    }`
        : null};
`;
