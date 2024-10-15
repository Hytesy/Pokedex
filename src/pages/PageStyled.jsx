import styled from "styled-components"

const Page = styled.div`
display:flex;
flex-direction: column;
align-items:center;
transition: .4s;
& > main {
    border: solid 2px ${({theme}) => theme.panelBorder};
    border-radius:20px;
    display:inherit;
    width: 95vw;
    flex-wrap:wrap;
    justify-content:space-evenly;
    padding:20px 0;
    gap: 10px;
    background:${({theme}) => theme.background};
    backdrop-filter: blur(10px);
    transition: .4s;
}
`
const ButtonsMoreLess = styled.div`
display:flex;
width: 90vw;
justify-content: space-between;
margin-top: 10px;
height:40px;
transition: .4s;
`
export { Page, ButtonsMoreLess}

