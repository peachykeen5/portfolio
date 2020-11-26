import React, { useEffect } from "react";
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

  useEffect(() => {
    props.data.forEach((item, index) => {
      // remove any white space from the strings
      item = item.replace(/\s/g, "");
      const element = document.getElementById(`nav-${index}`);
      // element.scrollIntoView({behavior: "smooth"});
      const interceptNavigate = (event) => {
        // Prevent HREF from navigating
        event.preventDefault();
        // Smooth Scroll to desired tag
        document.querySelector(`#${item}`).scrollIntoView({
          behavior: "smooth",
        });
      };
      element.addEventListener("click", interceptNavigate, false);
    });
  }, [props.data]);

  return (
    <StyledNavBar>
      <FixedWidthRow display={["none", "flex"]} justifyContent="space-around">
        {header.map((item, index) => {
          return (
            <a
              id={`nav-${index}`}
              key={`${item}${index}`}
              style={{ textDecoration: "none" }}
              href={`#${item}`}
            >
              <Label color={props.theme.textHighContrast}>{item}</Label>
            </a>
          );
        })}
      </FixedWidthRow>
    </StyledNavBar>
  );
};
