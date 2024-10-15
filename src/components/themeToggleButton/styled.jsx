import styled from "styled-components"

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 45px;
    height: 25px;
    & > input { 
        opacity: 0;
        width: 0;
        height: 0;
    };
    & > input:checked + span {
        background-color: ${({theme}) => theme.backgroundButton};
    };
    & > input:focus + span {
        box-shadow: 0 0 1px ${({theme}) => theme.backgroundButton};
    };  
    & > input:checked + span:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(20px);
    }
  
`

const Slider = styled.span`
    border-radius: 17px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:  ${({theme}) => theme.backgroundButton};
    -webkit-transition: .4s;
    transition: .4s;
    &:before {
        border-radius: 50%;
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        left: 5px;
        bottom: 5px;
        background:url(../${({theme}) => theme.themeIcon}) no-repeat;
        -webkit-transition: .4s;
        transition: .4s;
}
    &:hover{
            border: solid 1px ${({theme}) => theme.borderButton};
        }
`

export { Switch, Slider}