import { createContext, useState } from "react";

const themes = {
    light: {
        colorScheme: "light",
        backgroundImage: 'src/images/BgDay.jpg',
        arrowFilter: 'src/images/downArrowL.svg',
        background: 'rgba(240, 240, 240, 0.5)',
        panelBorder: 'rgba(240, 240, 240, 0.5)',
        panelShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        backgroundButton:'#EEEEEE',
        backgroundDetails: '#d7dbfde2',
        backgroundSections:'#cadaf8',
        boxShadows: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
        borderButton:'#313131',
        homeIcon:'src/images/homeD.svg',
        text: '#212121',
        themeIcon:'src/images/sun.svg',
        scrollBar: "#bdbdbdc0",
        scrollTrack: "#E0E0E0",

    },
    dark: {
        colorScheme: "dark",
        backgroundImage: 'src/images/BgNight.jpg',
        arrowFilter: 'src/images/downArrowD.svg',
        background: 'rgba(66, 66, 66, 0.6)',
        panelBorder: '#383837',
        panelShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        backgroundButton:'#303030e1',
        backgroundDetails:"#1d1d33e9",
        backgroundSections:'#222248',
        boxShadow: 'rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(255, 255, 255, 0.23) 0px 6px 6px',
        borderButton:'#E2E2E2',
        homeIcon:'src/images/homeN.svg',
        text: '#F5F5F5',
        themeIcon:'src/images/moon.svg',
        scrollBar: "#757575ae",
        scrollTrack: "#424242", 
    }
}

const ThemeContext = createContext({})

const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, themes, ThemeProvider }