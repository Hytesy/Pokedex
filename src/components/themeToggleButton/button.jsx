import { useContext } from "react";
import { ThemeToggleButton} from "./themeToggleButton";
import { ThemeContext, themes } from "../../themes/contextTheme";

const ToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <>
            <ThemeToggleButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}/>
        </>
    );
}

export { ToggleButton };
