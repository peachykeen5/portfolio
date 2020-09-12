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
  Skills,
} from "./shared/components";
import { skills } from "./shared/SkillsSet";
import * as ds from "./uiLibrary";
import headerImage from "./images/headerPhoto3.jpg";
import { Headline, H3, H2, H4, Body, Label } from "./uiLibrary";
import strings from "./shared/strings";

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
                <Headline
                  fontSize={[ds.typeScale.t7, ds.typeScale.t8]}
                  mb={0}
                  color={theme.textLowContrast}
                >
                  {strings.header.title}
                </Headline>
                <H3 my={0} color={theme.textLowContrast}>
                  {strings.header.substitle}
                </H3>
                <StyledToggle
                  theme={theme}
                  name="dark-mode-toggle"
                  onToggle={() => handleClick()}
                />
              </Column>
            </FixedWidthRow>
          </FixedWidthContainer>
          <FixedWidthContainer pb={ds.spacing.s7}>
            <NavBar data={strings.navBar} theme={theme} />
            <FixedWidthRow pt={ds.spacing.s6}>
              <Column
                display="flex"
                flexDirection="column"
                span={12}
                alignItems="center"
              >
                <H2
                  color={theme.textHighContrast}
                  fontSize={[ds.typeScale.t6, ds.typeScale.t7]}
                >
                  {strings.secondarySection.title}
                </H2>
                <Body
                  color={theme.textHighContrast}
                  width={["100%", "50%"]}
                  textAlign="center"
                >
                  {strings.secondarySection.body}
                </Body>
              </Column>
            </FixedWidthRow>
          </FixedWidthContainer>
          <FixedWidthContainer
            bg={theme.constrastBackgroundLight}
            pb={ds.spacing.s7}
          >
            <FixedWidthRow pt={ds.spacing.s6}>
              <Column
                display="flex"
                flexDirection="column"
                span={12}
                alignItems="center"
              >
                <H2
                  color={theme.textDark}
                  fontSize={[ds.typeScale.t6, ds.typeScale.t7]}
                >
                  {strings.thirdSection.title}
                </H2>
              </Column>
            </FixedWidthRow>
            {skills.map((skill, i) => {
              return <Skills skills={skill} theme={theme} idx={i} />;
            })}
          </FixedWidthContainer>
          <FixedWidthContainer>
            <FixedWidthRow py={ds.spacing.s6}>
              <Column
                display="flex"
                flexDirection="column"
                span={12}
                alignItems="center"
              >
                <H2
                  color={theme.textHighContrast}
                  fontSize={[ds.typeScale.t6, ds.typeScale.t7]}
                >
                  {strings.fourthSection.title}
                </H2>
                {strings.fourthSection.experience.map((e, i) => {
                  return (
                    <>
                      <Label
                        color={theme.textHighContrast}
                        fontSize={[ds.typeScale.t5, ds.typeScale.t6]}
                        my={0}
                      >
                        {e.companyName}
                      </Label>
                      <H4 color={theme.textHighContrast} my={ds.spacing.s1}>
                        {e.jobTitle}
                      </H4>
                      <H4 color={theme.textHighContrast} my={ds.spacing.s1}>
                        {e.date}
                      </H4>
                      <Body
                        color={theme.textHighContrast}
                        textAlign="center"
                        width={["100%", "50%"]}
                      >
                        {e.description}
                      </Body>
                    </>
                  );
                })}
              </Column>
            </FixedWidthRow>
          </FixedWidthContainer>
        </Div>
      </Background>
    </ThemeContext.Provider>
  );
};

export default App;
