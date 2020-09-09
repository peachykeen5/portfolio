import React, { useState } from "react";
import "./App.css";
import { ThemeContext, themeConfig } from "../src/shared/ThemeProvider";
import {
  FixedWidthRow,
  Column,
  Div,
  Background,
  FixedWidthContainer,
} from "../src/shared/components";
import {Headline, Body, H2, Label} from "../src/uiLibrary";

const App = () => {
  const [theme, setTheme] = useState(themeConfig.dark);
  console.log(theme);

  const handleClick = () => {
    if (theme === themeConfig.dark) {
      return setTheme(themeConfig.light);
    }
    if (theme === themeConfig.light) {
      return setTheme(themeConfig.dark);
    }
  };

  return (
    <ThemeContext.Provider value={themeConfig.dark}>
      <Background bg={theme.mainBackground}>
        <Div>
          <FixedWidthContainer bg={theme.contrastBackgroundDark}>
            <FixedWidthRow justifyContent="center" alignItems="center">
              <Column
                bg={theme.constrastBackgroundLight}
                span={12}
                alignItems="center"
              >
                <Headline color={theme.textHighContrast}>Headline</Headline>
                <H2 color={theme.textHighContrast}>HHH222</H2>
                <Label color={theme.textLowContrast}>Label</Label>
                <Body color={theme.textLowContrast}>this is som ebody text</Body>
                <p style={{ color: theme.textHighContrast }}>HELO</p>
                <button onClick={() => handleClick()}>Press Me</button>
              </Column>
            </FixedWidthRow>
          </FixedWidthContainer>
        </Div>
      </Background>
    </ThemeContext.Provider>
  );
};

export default App;
