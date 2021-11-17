import ThemeContext from "./themeContext"
import SecondLayer from "./secondLayer"
import { useState } from "react";


export default function FirstLayer() {
    const themes = {
        light: {
            background: '#eeeeee',
        },
        dark: {
            background: '#222222',
        },
    };
    const [theme, setTheme] = useState(themes.light.background);

    const changeTheme = (theme) => {
        console.log(theme);
        if (theme === themes.light.background) setTheme(themes.dark.background);
        else if (theme === themes.dark.background) setTheme(themes.light.background);
    }

    return (
        <div>
            <ThemeContext.Provider value={{theme:theme,changeTheme: changeTheme}}> 
                <SecondLayer /> 
             </ThemeContext.Provider> 

        </div>
    )
}