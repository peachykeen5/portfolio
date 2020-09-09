import React from "react";
import { colors } from "../../uiLibrary/colors";

export const themeConfig = {
  light: {
    mainBackground: colors.white,
    contrastBackgroundDark: colors.mediumPink,
    constrastBackgroundLight: colors.lightPink,
    textHighContrast: colors.darkGrey,
    textLowContrast: colors.white,
    hover: colors.darkPink,
  },
  dark: {
    mainBackground: colors.nearBlack,
    contrastBackgroundDark: colors.darkBlue,
    constrastBackgroundLight: colors.mediumBlue,
    textHighContrast: colors.white,
    textLowContrast: colors.darkGrey,
    hover: colors.lightBlue,
  },
};

export const ThemeContext = React.createContext(themeConfig.light);
