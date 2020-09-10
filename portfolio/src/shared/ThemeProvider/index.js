import React from "react";
import { colors } from "../../uiLibrary/colors";

export const themeConfig = {
  light: {
    mainBackground: colors.offWhite,
    contrastBackgroundDark: colors.mediumBlue,
    constrastBackgroundLight: colors.yellow,
    textHighContrast: colors.darkestGray,
    textLowContrast: colors.white,
    hover: colors.pinkTwo,
    primaryAccent: colors.pinkOne,
    secondaryAccent: colors.pinkAccent,
    tertiaryAccent: colors.lightPink,
  },
  dark: {
    mainBackground: colors.nearBlack,
    contrastBackgroundDark: colors.darkBlue,
    constrastBackgroundLight: colors.lightBlue,
    textHighContrast: colors.white,
    textLowContrast: colors.darkestGray,
    hover: colors.lightBlue,
    primaryAccent: colors.darkBlue,
    secondaryAccent: colors.blueAccent,
    tertiaryAccent: colors.lightBlue,
  },
};

export const ThemeContext = React.createContext(themeConfig.light);
