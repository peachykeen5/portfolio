import React, { useState } from "react";
import { ThemeContext, themeConfig } from "./shared/ThemeProvider";
import {
  FixedWidthRow,
  Column,
  Background,
  FixedWidthContainer,
  CenteredImage,
  StyledToggle,
  NavBar,
  Skills,
} from "./shared/components";
import { skills } from "./shared/SkillsSet";
import * as ds from "./uiLibrary";
import darkHeaderImage from "./images/headerPhoto3.jpg";
import lightHeaderImage from "./images/headerPhoto2.jpeg";
import { Headline, H3, H2, H4, Body, Label } from "./uiLibrary";
import strings from "./shared/strings";
import { ProjectCard } from "./shared/components/ProjectCard";

const App = () => {
  const [theme, setTheme] = useState(themeConfig.light);

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
                src={
                  theme === themeConfig.dark
                    ? darkHeaderImage
                    : lightHeaderImage
                }
                maxWidth={["90%", "50%", "30%"]}
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
        <FixedWidthContainer>
          <NavBar data={strings.navBar} theme={theme} />
          <FixedWidthRow
            id={strings.navBar[0]}
            pb={[ds.spacing.s6, ds.spacing.s7]}
            pt={[ds.spacing.s5, ds.spacing.s6]}
          >
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
          id={strings.navBar[1]}
          bg={theme.constrastBackgroundLight}
          pt={[ds.spacing.s5, ds.spacing.s6]}
          pb={[ds.spacing.s6, ds.spacing.s7]}
        >
          <FixedWidthRow>
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
            return <Skills key={i} skills={skill} theme={theme} idx={i} />;
          })}
        </FixedWidthContainer>
        <FixedWidthContainer id={strings.navBar[2]}>
          <FixedWidthRow py={[ds.spacing.s6, ds.spacing.s7]}>
            <Column
              display="flex"
              flexDirection="column"
              span={12}
              textAlign="center"
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
                      <i>{e.jobTitle}</i>
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
        <FixedWidthContainer
          id={strings.navBar[3]}
          bg={theme.contrastBackgroundOpposite}
          py={[ds.spacing.s5, ds.spacing.s6]}
        >
          <FixedWidthRow>
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
                {strings.fifthSection.title}
              </H2>
              {strings.fifthSection.projects.map((p, i) => {
                return <ProjectCard {...p} idx={i} theme={theme} />;
              })}
            </Column>
          </FixedWidthRow>
        </FixedWidthContainer>
      </Background>
    </ThemeContext.Provider>
  );
};

export default App;
