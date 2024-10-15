    import { useContext } from "react"
import { Slider, Switch } from "./styled"
import { ThemeContext } from "../../themes/contextTheme"
    

    const ThemeToggleButton = (props) => {
        const { theme } = useContext(ThemeContext)
        return (
            <Switch theme={theme}>
                <input {...props} type="checkbox"/>
                <Slider theme={theme}/>
            </Switch>
        )
    }

    export { ThemeToggleButton }