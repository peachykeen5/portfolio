import React from "react";
import { colors } from "../../uiLibrary/colors";

export const themeConfig = {
  light: {
    mainBackground: colors.offWhite,
    contrastBackgroundDark: colors.mediumBlue,
    constrastBackgroundLight: colors.yellow,
    contrastBackgroundOpposite: colors.pinkOne,
    textHighContrast: colors.darkestGray,
    textLowContrast: colors.white,
    textDark: colors.darkestGrey,
    textLight: colors.white,
    hover: colors.pinkTwo,
    primaryAccent: colors.pinkOne,
    primaryContrast: colors.mediumBlue,
    secondaryAccent: colors.pinkAccent,
    secondaryContrast: colors.pinkOne,
    tertiaryAccent: colors.lightPink,
  },
  dark: {
    mainBackground: colors.nearBlack,
    contrastBackgroundDark: colors.darkBlue,
    constrastBackgroundLight: colors.lightBlue,
    contrastBackgroundOpposite: colors.darkBlue,
    textHighContrast: colors.white,
    textLowContrast: colors.darkestGray,
    textDark: colors.nearBlack,
    textLight: colors.white,
    hover: colors.lightBlue,
    primaryAccent: colors.darkBlue,
    primaryContrast: colors.pinkTwo,
    secondaryAccent: colors.blueAccent,
    secondaryContrast: colors.darkPink,
    tertiaryAccent: colors.lightBlue,
  },
};

export const ThemeContext = React.createContext(themeConfig.light);
