import { createContext, useContext, useReducer } from "react";
import { init_state_theme, reducer_theme } from "../reducers";


const ThemeContext = createContext(init_state_theme);
export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer_theme, init_state_theme)

    const ThemeToDark = () => {
        dispatch({ type: "dark", payload: "dark" })
    }
    const ThemeToLight = () => {
        dispatch({ type: "light", payload: "light" })
    }
    const value = { theme: state, ThemeToDark, ThemeToLight }
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
}
export default useTheme;