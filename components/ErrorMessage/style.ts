import styled from "styled-components";
type Props = {
    showError: boolean
}
export const Container = styled.span<Props>`
    display: ${props => props.showError ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    border-radius: 5px;
    color: red;
    padding: 10px 25px;
    flex:1;   
    @media (min-width: 700px) {
         justify-content: flex-start;
    }
`