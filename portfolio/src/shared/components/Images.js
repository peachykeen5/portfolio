import styled from "styled-components";
import { space } from "styled-system";

export const CenteredImage = styled.img`
  margin: 0 auto;
  max-width: ${(props) => (props.mw ? props.mw : "100%")};
  ${space};
  border-radius: 50%;
`;
