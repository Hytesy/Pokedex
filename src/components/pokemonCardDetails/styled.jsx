import styled from "styled-components";
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const DetailsSection = styled.main`
    padding: 10px;
    color: ${({theme}) => theme.text};
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    height: 90vh;
    justify-content: space-evenly;
    gap: 5px;
    background-color: ${({theme}) => theme.backgroundDetails};
    border-radius: 15px;
    overflow-y: auto;
    & > div {
    background-color: ${({theme}) => theme.backgroundSections};
    }
`

const Buttons = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    & > a {
        height: 25px;
        width: 25px;
        background: url(../${({theme}) => theme.homeIcon}) no-repeat;
    }
    & > a:hover {
        background: url(../src/images/homeH.svg) no-repeat;
        transform: scale(1.1);
    }
`
const GeneralSection = styled.div`
    border-radius: 10px;
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px;
    flex-basis: 400px;
    & > img {
        width: 60%;
        border-radius: 15px;
    }
`

const MovesSection = styled.ul`
    height: 250px;
    padding: 10px;
    min-width: 100%;
    text-align: center;
    overflow-Y: auto;
`
const AbilitiesSection = styled.ul`
    height: 200px;
    padding: 10px;
    overflow-y: auto;
`
const TypesSection = styled.ul`
    display: flex;
    & > li {
        padding: 5px
    };
`

export { Div, DetailsSection, Buttons, GeneralSection, MovesSection, AbilitiesSection, TypesSection }