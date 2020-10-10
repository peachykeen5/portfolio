import styled from "styled-components";
import { space } from "styled-system";

export const CenteredImage = styled.img`
  margin: 0 auto;
  max-width: ${(props) => (props.mw ? props.mw : "100%")};
  ${space};
  filter: drop-shadow(2px 2px 4px #1f1f1f);
  border-radius: 50%;
`;
