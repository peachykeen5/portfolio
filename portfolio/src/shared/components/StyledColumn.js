import styled from "styled-components";
import { space, color, order, justifyContent, alignItems } from "styled-system";

export const Column = styled.aside`
  ${space};
  display: flex;
  flex-direction: column;
  ${order};
  ${color};
  ${justifyContent};
  ${alignItems};
  ${(props) =>
    props.vc
      ? `
        display: flex;
        flex-direction: column;
        justify-content: center;
        `
      : null}
`;
