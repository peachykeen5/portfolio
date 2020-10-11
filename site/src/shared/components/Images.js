import styled from "styled-components";
import { space, maxWidth } from "styled-system";

export const CenteredImage = styled.img`
  margin: 0 auto;
  ${maxWidth};
  ${space};
  filter: drop-shadow(2px 2px 4px #1f1f1f);
  border-radius: 50%;
`;
