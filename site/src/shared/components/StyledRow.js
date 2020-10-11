import styled from "styled-components";
import {
  space,
  justifyContent,
  display,
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
  ${width};
`;
