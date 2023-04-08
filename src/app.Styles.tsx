import styled from 'styled-components'


export const Container = styled.div`
    min-height:100vh;
    background-color: #282828;
`

export const Area = styled.div`
    max-width:1280px;
    margin:auto;
    color:white;
    
`
export const Title = styled.h1`
    text-align: center;
`

export const PhotoListGrid = styled.div`
     
    display: grid;
    grid-template-columns: repeat(4,1fr);
    background-color: red;
    gap: 10px;
`
export const UploadImage = styled.form`
    margin: 50px 0px;
    background-color: #d5d5d5;
    padding: 20px 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 1px black;
`