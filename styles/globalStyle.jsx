import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../src/themes/contextTheme";

const Style = createGlobalStyle`
    * {
        scrollbar-color: ${({theme}) => theme.scrollBar} ${({theme}) => theme.scrollTrack};
        color-scheme: ${({theme}) => theme.colorScheme};
        transition: .3s;
    }

    #root {
        background: url(../${({theme}) => theme.backgroundImage}) no-repeat; 
        background-size: cover;
        background-attachment: fixed;
        min-height: 100vh;
    }

    h1, h2, h3, li{
        text-transform: capitalize;
        transition: .1s;
    }

    .gitHub {
        color: ${({theme}) => theme.text};
        text-decoration: underline;
        &:hover{
            color: #7E57C2 !important;
        }
    }
`

const GlobalStyle = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <Style theme={theme} />
    )
}

export { GlobalStyle }