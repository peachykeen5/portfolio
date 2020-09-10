import React from "react";
import { Toggle } from "react-toggle-component";
import { ToggleLabel } from "../../uiLibrary";

export const StyledToggle = ({ theme, name, onToggle }) => {
  return (
    <span style={{marginTop: "1rem", marginBottom: "1rem"}}>
      <ToggleLabel color={theme.textLowContrast}>Light Mode</ToggleLabel>
      <Toggle
        name={name}
        onToggle={onToggle}
        backgroundColor={theme.secondaryAccent}
        borderColor={theme.tertiaryAccent}
        knobColor={theme.primaryAccent}
        borderWidth="3px"
        height="2rem"
        width="4rem"
        knobHeight="1.5rem"
        knobWidth="1.5rem"
      />
      <ToggleLabel color={theme.textLowContrast}>Dark mode</ToggleLabel>
    </span>
  );
};
