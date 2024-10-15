import styled from "styled-components";

const Filter = styled.select`
        text-transform: capitalize;
        background-color: ${({ theme }) => theme.backgroundButton};
        color: ${({ theme }) => theme.text};
        border-radius: 5px;
        transition: .4s;
`

export { Filter}