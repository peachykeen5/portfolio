import React, { useState } from "react";
import "./App.css";
import { ThemeContext, themeConfig } from "./shared/ThemeProvider";
import {
  FixedWidthRow,
  Column,
  Div,
  Background,
  FixedWidthContainer,
  CenteredImage,
  StyledToggle,
  NavBar,
} from "./shared/components";
import * as ds from "./uiLibrary";
import headerImage from "./images/headerPhoto3.jpg";
import { Headline, H3, H2, Body } from "./uiLibrary";

const App = () => {
  const [theme, setTheme] = useState(themeConfig.light);
  console.log(theme);

  const handleClick = () => {
    if (theme === themeConfig.dark) {
      return setTheme(themeConfig.light);
    }
    if (theme === themeConfig.light) {
      return setTheme(themeConfig.dark);
    }
  };

  const data = ["Lexi", "About Me", "Skills", "Experience", "Projects"];
  return (
    <ThemeContext.Provider value={themeConfig.dark}>
      <Background bg={theme.mainBackground}>
        <Div>
          <FixedWidthContainer bg={theme.contrastBackgroundDark}>
            <FixedWidthRow>
              <Column
                span={12}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                my={ds.spacing.s5}
              >
                <CenteredImage
                  maring={ds.spacing.s4}
                  src={headerImage}
                  mw="30%"
                />
                <Headline mb={0} color={theme.textLowContrast}>
                  lexi keen
                </Headline>
                <H3 my={0} color={theme.textLowContrast}>
                  front-end software developer
                </H3>
                <StyledToggle
                  theme={theme}
                  name="dark-mode-toggle"
                  onToggle={() => handleClick()}
                />
              </Column>
            </FixedWidthRow>
          </FixedWidthContainer>
          <FixedWidthContainer>
            <NavBar data={data} theme={theme} />
            <FixedWidthRow>
              <Column
                display="flex"
                flexDirection="column"
                span={12}
                alignItems="center"
              >
                <H2>About</H2>
                <Body width="50%" textAlign="center">
                  Migas iPhone narwhal literally iceland. Pickled readymade
                  iceland, selvage retro succulents freegan poutine tumeric
                  90's. Echo park migas artisan keffiyeh direct trade. Keffiyeh
                  subway tile af plaid vaporware tumblr, neutra copper mug. Lyft
                  gluten-free sartorial hoodie taiyaki offal brooklyn subway
                  tile asymmetrical bushwick ethical tbh 8-bit chillwave blog.
                </Body>
              </Column>
            </FixedWidthRow>
          </FixedWidthContainer>
        </Div>
      </Background>
    </ThemeContext.Provider>
  );
};

export default App;
