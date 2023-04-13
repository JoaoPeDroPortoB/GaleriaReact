import styled from 'styled-components'


export const Container = styled.div`
    min-height:100vh;
    background-color: #035AA6;
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
    display: flex;
    flex-direction: column;
    margin: 50px 0px;
    background-color: #034AA6;
    padding: 30px 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 1px black;

    @media (min-width:700px) {
       
        flex-direction: row;
       justify-content: center;
       align-items: center;
    }

`

export const SpanMessage = styled.span`    
    padding: 10px 25px;
    display: flex;
    justify-content: center;
    flex: 1;
    @media (min-width: 700px) {
    
   
    justify-content: flex-start;
    }
     
    `
export const InputFile = styled.input.attrs({
    type: 'file',
})`
    display: none;
  `;
export const InputLabel = styled.label`
  
  margin: 10px 10px;
  padding: 10px 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #666;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const InputSubmit = styled.input`
    margin: 10px 20px;
    padding: 10px 50px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #666;
    cursor: pointer;

    &:hover {
        background-color: #f5f5f5;
    }
`

export const ContainerData = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #00000036;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .btnClose{
        position: absolute;
        top: 20px;
        right: 40px;
        background-color: #F23D5E;
        padding: 10px 20px;
        outline: none;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        color: white;
        :hover{
            background-color: #f23d5ecf;
        }
    }
   .btn{
    margin: 10px 20px;
    background-color: #F23D5E;
    padding: 10px 20px;
    outline: none;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    color: white;
    :hover{
        background-color: #f23d5ecf;
    }
    
   }
    img{
        width: auto;
        max-width: 90%;
        max-height: 90%;
    }
`

export const Uploading = styled.div`
    padding: 10px 0px;
   
`