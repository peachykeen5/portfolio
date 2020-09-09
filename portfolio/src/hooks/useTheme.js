import { useContext } from "react";
import { ThemeContext } from "../shared/ThemeProvider";

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    return themeContext;
}