import styled from "styled-components";
import {
  space,
  justifyContent,
  display,
  alignItems,
  flexDirection,
  color,
} from "styled-system";

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 16px;
`;

export const FixedWidthRow = styled(Row)`
  padding: 2rem;
  ${space};
  ${display};
  ${alignItems};
  ${flexDirection};
  ${justifyContent};
  ${color};
`;
