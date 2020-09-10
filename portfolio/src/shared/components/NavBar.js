import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { Label } from "../../uiLibrary";
import { FixedWidthRow } from "../components";

const StyledNavBar = styled.div`
  width: 100%;
  ${space};
`;

export const NavBar = (props) => {
  const header = props.data;

  return (
    <StyledNavBar>
      <FixedWidthRow display="flex" justifyContent="space-between">
        {header.map((item) => {
          return <Label color={props.theme.textHighContrast}>{item}</Label>;
        })}
      </FixedWidthRow>
    </StyledNavBar>
  );
};
