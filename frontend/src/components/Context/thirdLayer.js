import { useContext } from "react"
import ButtonLayer from "./buttonLayer";
import ThemeContext from "./themeContext"

export default function ThirdLayer() {
    const context = useContext(ThemeContext);
    const {theme,changeTheme} = context;

    return (
        <div>
            <h1>This is 3rd layer </h1>
            <ButtonLayer 
            theme = {theme}
            changeTheme = {changeTheme}
            />
        </div>
    )
}