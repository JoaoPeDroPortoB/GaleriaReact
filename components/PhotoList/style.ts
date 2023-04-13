import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #3D4052;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    div{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    img{
        max-width: 100%;
        border-radius:10px;
        margin-bottom:10px;
    }
    span{
        font-weight: bold;
    }
    button{
        margin-top: 10px;
        color: white;
        outline: none;
        border: none;
        border-radius: 20px;
        padding: 10px 20px;
        background-color: #E5160C;
        max-width: max-content;
        cursor: pointer;
    :hover{
        background-color: #FC3100;
    }
    }
`